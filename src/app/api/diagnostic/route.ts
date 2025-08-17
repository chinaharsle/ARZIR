import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    console.log('API DIAGNOSTIC: Starting permission and data check...');

    // Test with both clients
    const supabase = await createClient();
    const supabaseAdmin = await createAdminClient();
    
    // Check current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    console.log('API DIAGNOSTIC: Current user:', user ? { id: user.id, email: user.email } : 'No user');

    // Test 1: Basic read access to leads table with regular client
    const { data: leadsData1, error: leadsError1 } = await supabase
      .from('leads')
      .select('id, name, email, status, created_at')
      .limit(3);
    
    console.log('API DIAGNOSTIC: Test 1 - Regular client leads:', {
      success: !leadsError1,
      count: leadsData1?.length || 0,
      error: leadsError1?.message,
      sample: leadsData1?.[0]
    });

    // Test 2: Basic read access to leads table with admin client  
    const { data: leadsData2, error: leadsError2 } = await supabaseAdmin
      .from('leads')
      .select('id, name, email, status, created_at')
      .limit(3);
    
    console.log('API DIAGNOSTIC: Test 2 - Admin client leads:', {
      success: !leadsError2,
      count: leadsData2?.length || 0,
      error: leadsError2?.message,
      sample: leadsData2?.[0]
    });

    // Test 3: Count total leads without filters
    const { count: leadsCount, error: countError } = await supabaseAdmin
      .from('leads')
      .select('*', { count: 'exact', head: true });
    
    console.log('API DIAGNOSTIC: Test 3 - Total leads count:', {
      success: !countError,
      totalCount: leadsCount,
      error: countError?.message
    });

    // Test 4: Check table schema by trying to get all columns
    const { data: schemaData, error: schemaError } = await supabaseAdmin
      .from('leads')
      .select('*')
      .limit(1);
    
    console.log('API DIAGNOSTIC: Test 4 - Schema check:', {
      success: !schemaError,
      availableColumns: schemaData?.[0] ? Object.keys(schemaData[0]) : [],
      error: schemaError?.message
    });

    // Test 5: Posts comparison
    const { data: postsData, error: postsError } = await supabase
      .from('posts')
      .select('id, title, created_at')
      .limit(3);
    
    console.log('API DIAGNOSTIC: Test 5 - Posts read test:', {
      success: !postsError,
      count: postsData?.length || 0,
      error: postsError?.message
    });

    return NextResponse.json({
      ok: true,
      diagnostic: {
        timestamp: new Date().toISOString(),
        authentication: {
          hasUser: !!user,
          userId: user?.id,
          userEmail: user?.email,
          authError: userError?.message
        },
        tests: {
          leadsRegularClient: {
            success: !leadsError1,
            count: leadsData1?.length || 0,
            error: leadsError1?.message,
            sampleRecord: leadsData1?.[0]
          },
          leadsAdminClient: {
            success: !leadsError2,
            count: leadsData2?.length || 0,
            error: leadsError2?.message,
            sampleRecord: leadsData2?.[0]
          },
          leadsCount: {
            success: !countError,
            totalCount: leadsCount || 0,
            error: countError?.message
          },
          leadsSchema: {
            success: !schemaError,
            availableColumns: schemaData?.[0] ? Object.keys(schemaData[0]) : [],
            error: schemaError?.message
          },
          posts: {
            success: !postsError,
            count: postsData?.length || 0,
            error: postsError?.message
          }
        }
      }
    });

  } catch (error) {
    console.error('API DIAGNOSTIC: Unexpected error:', error);
    return NextResponse.json(
      { ok: false, error: "Diagnostic check failed", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}