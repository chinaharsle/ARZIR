import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('API GET: Checking lead with ID:', id);

    const supabase = await createClient();
    
    const { data: lead, error } = await supabase
      .from('leads')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('API GET: Error fetching lead:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 404 });
    }
    
    console.log('API GET: Found lead:', lead);
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    console.error('API GET: Unexpected error:', error);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { ok: false, error: "Missing lead ID" },
        { status: 400 }
      );
    }

    console.log('API DELETE: Attempting to delete lead with ID:', id);

    // Try admin client first for elevated permissions
    let supabase = await createAdminClient();
    
    // First, check if the lead exists and get its current data
    const { data: existingLead, error: fetchError } = await supabase
      .from('leads')
      .select('*')
      .eq('id', id)
      .single();
    
    if (fetchError) {
      console.error('API DELETE: Error fetching lead before deletion:', fetchError);
      return NextResponse.json(
        { ok: false, error: "Lead not found", details: fetchError.message },
        { status: 404 }
      );
    }
    
    console.log('API DELETE: Found lead to delete:', { id: existingLead.id, name: existingLead.name, email: existingLead.email });

    // Method 1: Try direct deletion with admin client
    console.log('API DELETE: Trying Method 1 - Admin client direct delete');
    const { error: deleteError1, data: deleteData1 } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)
      .select();

    if (!deleteError1 && deleteData1 && deleteData1.length > 0) {
      console.log('API DELETE: Success with Method 1 - Admin client');
      return NextResponse.json({
        ok: true,
        message: "Lead deleted successfully",
        deletedId: id,
        deletedCount: deleteData1.length,
        method: "admin_direct"
      });
    }

    console.log('API DELETE: Method 1 failed, trying Method 2 - Regular client');
    
    // Method 2: Try with regular client
    supabase = await createClient();
    const { error: deleteError2, data: deleteData2 } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)
      .select();

    if (!deleteError2 && deleteData2 && deleteData2.length > 0) {
      console.log('API DELETE: Success with Method 2 - Regular client');
      return NextResponse.json({
        ok: true,
        message: "Lead deleted successfully",
        deletedId: id,
        deletedCount: deleteData2.length,
        method: "regular_client"
      });
    }

    console.log('API DELETE: Method 2 failed, trying Method 3 - RPC function');
    
    // Method 3: Try using RPC function (stored procedure)
    try {
      const { data: rpcData, error: rpcError } = await supabase
        .rpc('delete_lead_by_id', { lead_id: id });
      
      if (!rpcError) {
        console.log('API DELETE: Success with Method 3 - RPC function');
        return NextResponse.json({
          ok: true,
          message: "Lead deleted successfully",
          deletedId: id,
          method: "rpc_function",
          result: rpcData
        });
      }
      
      console.log('API DELETE: RPC function failed:', rpcError);
    } catch (rpcErr) {
      console.log('API DELETE: RPC function not available:', rpcErr);
    }

    console.log('API DELETE: All methods failed, trying Method 4 - Update to mark as deleted');
    
    // Method 4: If deletion is blocked, try updating to mark as deleted
    // Don't use 'deleted' status since it's not a valid enum value
    // Instead, modify the name and email to indicate deletion
    const { error: updateError, data: updateData } = await supabase
      .from('leads')
      .update({ 
        name: `[DELETED] ${existingLead.name}`,
        email: `deleted-${Date.now()}@deleted.com`,
        // Keep original status, just mark in name/email
        message: '[DELETED] This lead has been removed from the system.'
      })
      .eq('id', id)
      .select();

    if (!updateError && updateData && updateData.length > 0) {
      console.log('API DELETE: Success with Method 4 - Soft delete');
      return NextResponse.json({
        ok: true,
        message: "Lead marked as deleted successfully",
        deletedId: id,
        method: "soft_delete",
        note: "Lead was marked as deleted instead of hard deleted due to permission constraints"
      });
    }

    // If everything fails, return detailed error
    console.error('API DELETE: All deletion methods failed');
    console.error('Delete Error 1 (Admin):', deleteError1);
    console.error('Delete Error 2 (Regular):', deleteError2);
    console.error('Update Error (Soft Delete):', updateError);

    return NextResponse.json({
      ok: false,
      error: "Unable to delete lead with any available method",
      details: {
        adminError: deleteError1?.message,
        regularError: deleteError2?.message,
        updateError: updateError?.message
      }
    }, { status: 500 });

  } catch (error) {
    console.error('API DELETE: Unexpected error during lead deletion:', error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}