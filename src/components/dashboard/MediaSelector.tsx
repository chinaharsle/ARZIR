"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Image as ImageIcon, 
  File, 
  Upload,
  Check
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface MediaFile {
  id: string;
  filename: string;
  original_filename: string;
  file_size: number;
  mime_type: string;
  file_path: string;
  alt_text?: string;
  caption?: string;
  width?: number;
  height?: number;
  created_at: string;
  uploaded_by: string;
  usage_count: number;
  tags: string[];
}

interface MediaSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (file: MediaFile) => void;
  selectedFile?: MediaFile | null;
}

export function MediaSelector({ isOpen, onClose, onSelect, selectedFile }: MediaSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Fetch media files from Supabase
  const fetchMediaFiles = async () => {
    const supabase = createClient();
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching media files:', error);
        return;
      }
      
      // Map database fields to component expected format
      const mappedFiles = data.map(file => ({
        id: file.id,
        filename: file.filename,
        original_filename: file.original_filename,
        file_size: file.file_size,
        mime_type: file.mime_type,
        file_path: file.file_path,
        alt_text: file.alt_text,
        caption: file.caption,
        width: file.width,
        height: file.height,
        created_at: file.created_at,
        uploaded_by: file.uploaded_by,
        usage_count: file.usage_count,
        tags: file.tags || []
      }));
      
      setMediaFiles(mappedFiles);
    } catch (error) {
      console.error('Error fetching media files:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch files when dialog opens
  useEffect(() => {
    if (isOpen) {
      fetchMediaFiles();
    }
  }, [isOpen]); // Added fetchMediaFiles to dependencies would cause infinite loop, so we'll use callback pattern

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileTypeFromMime = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.includes('pdf')) return 'pdf';
    return 'document';
  };

  const filteredFiles = mediaFiles.filter(file => {
    return file.original_filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.alt_text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const supabase = createClient();
    setUploading(true);

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert('Please login to upload files');
        return;
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        // Upload file to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('media')
          .upload(filePath, file);

        if (uploadError) {
          console.error('Error uploading file:', uploadError);
          continue;
        }

        // Get image dimensions if it's an image
        let width, height;
        if (file.type.startsWith('image/')) {
          try {
            const dimensions = await getImageDimensions(file);
            width = dimensions.width;
            height = dimensions.height;
          } catch (error) {
            console.error('Error getting image dimensions:', error);
          }
        }

        // Save file metadata to database
        const { error: mediaError } = await supabase
          .from('media')
          .insert({
            filename: fileName,
            original_filename: file.name,
            file_size: file.size,
            mime_type: file.type,
            file_path: filePath,
            storage_bucket: 'media',
            uploaded_by: user.id,
            width: width,
            height: height,
            is_public: true,
            usage_count: 0,
            tags: []
          })
          .select()
          .single();

        if (mediaError) {
          console.error('Error saving media metadata:', mediaError);
        }
      }

      // Refresh media files list
      await fetchMediaFiles();
      
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
      // Reset file input
      event.target.value = '';
    }
  };

  // Helper function to get image dimensions
  const getImageDimensions = (file: File): Promise<{width: number, height: number}> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Select Media</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search and Upload */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-arzir-gray-400" />
              <Input
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm" disabled={uploading}>
              <input
                type="file"
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploading}
              />
              <Upload className="h-4 w-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload New'}
            </Button>
          </div>

          {/* Media Grid */}
          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-arzir-primary"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredFiles.map((file) => (
                <Card 
                  key={file.id} 
                  className={`group cursor-pointer transition-all hover:shadow-lg ${
                    selectedFile?.id === file.id ? 'ring-2 ring-arzir-primary' : ''
                  }`}
                  onClick={() => onSelect(file)}
                >
                  <CardContent className="p-3">
                    <div className="aspect-square bg-arzir-gray-100 rounded-lg mb-3 relative overflow-hidden">
                      {getFileTypeFromMime(file.mime_type) === 'image' ? (
                        <div className="w-full h-full bg-gradient-to-br from-arzir-primary/20 to-arzir-primary/10 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-arzir-primary" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-arzir-gray-200 flex items-center justify-center">
                          <File className="h-8 w-8 text-arzir-gray-500" />
                        </div>
                      )}
                      {selectedFile?.id === file.id && (
                        <div className="absolute top-2 right-2 bg-arzir-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-black truncate" title={file.original_filename}>
                        {file.original_filename}
                      </p>
                      <div className="flex items-center justify-between text-xs text-arzir-gray-500">
                        <span>{formatFileSize(file.file_size)}</span>
                        {file.width && file.height && (
                          <span>{file.width}×{file.height}</span>
                        )}
                      </div>
                      {file.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {file.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs px-1 py-0">
                              {tag}
                            </Badge>
                          ))}
                          {file.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs px-1 py-0">
                              +{file.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            )}

            {!loading && filteredFiles.length === 0 && (
              <div className="text-center py-8">
                <ImageIcon className="h-12 w-12 text-arzir-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-black mb-2">No media files found</h3>
                <p className="text-arzir-gray-600 mb-4">
                  {searchTerm ? 'Try a different search term.' : 'Upload some files to get started.'}
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="text-sm text-arzir-gray-600">
              {selectedFile && (
                <span>Selected: {selectedFile.original_filename}</span>
              )}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  if (selectedFile) {
                    onSelect(selectedFile);
                    onClose();
                  }
                }}
                disabled={!selectedFile}
                className="bg-arzir-primary"
              >
                Select File
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}