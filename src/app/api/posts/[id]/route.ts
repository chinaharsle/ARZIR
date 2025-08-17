import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { ok: false, error: "Missing post ID" },
        { status: 400 }
      );
    }

    console.log('API DELETE: Attempting to delete post with ID:', id);

    // Create server-side Supabase client with proper permissions
    const supabase = await createClient();
    
    // First, check if the post exists
    const { data: existingPost, error: fetchError } = await supabase
      .from('posts')
      .select('id, title, slug')
      .eq('id', id)
      .single();
    
    if (fetchError) {
      console.error('API DELETE: Error fetching post before deletion:', fetchError);
      return NextResponse.json(
        { ok: false, error: "Post not found", details: fetchError.message },
        { status: 404 }
      );
    }
    
    console.log('API DELETE: Found post to delete:', existingPost);

    // Delete the post
    const { error: deleteError, data: deleteData } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)
      .select(); // Add select to get details about what was deleted

    if (deleteError) {
      console.error('API DELETE: Error deleting post:', deleteError);
      return NextResponse.json(
        { ok: false, error: deleteError.message, code: deleteError.code },
        { status: 500 }
      );
    }

    console.log('API DELETE: Delete operation completed, deleted data:', deleteData);

    // Check if anything was actually deleted
    if (!deleteData || deleteData.length === 0) {
      console.warn('API DELETE: No rows were deleted');
      return NextResponse.json(
        { ok: false, error: "No rows were deleted - item may not exist or permission denied" },
        { status: 404 }
      );
    }

    console.log('API DELETE: Successfully deleted post:', id);

    return NextResponse.json({
      ok: true,
      message: "Post deleted successfully",
      deletedId: id,
      deletedCount: deleteData.length
    });

  } catch (error) {
    console.error('API DELETE: Unexpected error during post deletion:', error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}