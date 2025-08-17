"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Upload, 
  Search, 
  Grid3X3, 
  List, 
  Filter,
  Image as ImageIcon,
  File,
  Trash2,
  Copy,
  Download,
  Eye,
  Edit
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

// Mock data for development
const mockMediaFiles: MediaFile[] = [
  {
    id: "1",
    filename: "recycling-baler-hero.jpg",
    original_filename: "Y82-160-Recycling-Baler-Hero.jpg",
    file_size: 245678,
    mime_type: "image/jpeg",
    file_path: "images/products/recycling-baler-hero.jpg",
    alt_text: "Y82-160 Recycling Baler in Industrial Setting",
    caption: "High-performance vertical baler for optimal material compression",
    width: 1920,
    height: 1080,
    created_at: "2025-08-15T10:30:00Z",
    uploaded_by: "admin@arzir.com",
    usage_count: 5,
    tags: ["product", "baler", "recycling"]
  },
  {
    id: "2", 
    filename: "scrap-metal-shear-action.jpg",
    original_filename: "Q43-2000-Alligator-Shear-Action.jpg",
    file_size: 198432,
    mime_type: "image/jpeg",
    file_path: "images/products/scrap-metal-shear-action.jpg",
    alt_text: "Q43-2000 Alligator Shear cutting metal bars",
    caption: "Heavy-duty alligator shear demonstrating cutting capability",
    width: 1600,
    height: 900,
    created_at: "2025-08-14T14:20:00Z",
    uploaded_by: "admin@arzir.com",
    usage_count: 3,
    tags: ["product", "shear", "metal"]
  },
  {
    id: "3",
    filename: "automotive-recycling-facility.jpg", 
    original_filename: "Automotive-Recycling-Facility-Overview.jpg",
    file_size: 312456,
    mime_type: "image/jpeg",
    file_path: "images/applications/automotive-recycling-facility.jpg",
    alt_text: "Modern automotive recycling facility with ARZIR equipment",
    caption: "Complete automotive dismantling solution",
    width: 2048,
    height: 1152,
    created_at: "2025-08-13T09:15:00Z",
    uploaded_by: "admin@arzir.com",
    usage_count: 8,
    tags: ["application", "automotive", "facility"]
  },
  {
    id: "4",
    filename: "aluminum-extrusion-process.jpg",
    original_filename: "Y32-1000T-Extrusion-Press-Process.jpg", 
    file_size: 267890,
    mime_type: "image/jpeg",
    file_path: "images/products/aluminum-extrusion-process.jpg",
    alt_text: "Y32-1000T Extrusion Press aluminum forming process",
    caption: "High-capacity hydraulic press for aluminum profile extrusion",
    width: 1800,
    height: 1013,
    created_at: "2025-08-12T16:45:00Z",
    uploaded_by: "admin@arzir.com", 
    usage_count: 2,
    tags: ["product", "extrusion", "aluminum"]
  },
  {
    id: "5",
    filename: "four-shaft-shredder-components.jpg",
    original_filename: "PSL-4080-Four-Shaft-Shredder-Components.jpg",
    file_size: 189234,
    mime_type: "image/jpeg", 
    file_path: "images/products/four-shaft-shredder-components.jpg",
    alt_text: "PSL-4080 Four-Shaft Shredder component breakdown",
    caption: "Industrial four-shaft shredder design and components",
    width: 1600,
    height: 1200,
    created_at: "2025-08-11T11:30:00Z",
    uploaded_by: "admin@arzir.com",
    usage_count: 1,
    tags: ["product", "shredder", "components"]
  },
  {
    id: "6",
    filename: "arzir-factory-tour.jpg",
    original_filename: "ARZIR-Manufacturing-Facility-Tour.jpg",
    file_size: 423567,
    mime_type: "image/jpeg",
    file_path: "images/company/arzir-factory-tour.jpg", 
    alt_text: "ARZIR manufacturing facility interior",
    caption: "State-of-the-art manufacturing facility",
    width: 2400,
    height: 1350,
    created_at: "2025-08-10T08:00:00Z",
    uploaded_by: "admin@arzir.com",
    usage_count: 12,
    tags: ["company", "factory", "manufacturing"]
  }
];

export default function MediaLibraryPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  // Fetch media files from Supabase
  const fetchMediaFiles = async () => {
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
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }
      setUser(user);
      setLoading(false);
      
      // Fetch media files after auth
      await fetchMediaFiles();
    };

    checkAuth();
  }, [router, supabase.auth]);

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
    const matchesSearch = file.original_filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.alt_text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedFilter === "all") return matchesSearch;
    return matchesSearch && getFileTypeFromMime(file.mime_type) === selectedFilter;
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0 || !user) return;

    setUploading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        // Upload file to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase.storage
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
        const { data: mediaData, error: mediaError } = await supabase
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

  const handleDeleteFiles = () => {
    if (selectedFiles.length > 0 && window.confirm(`Delete ${selectedFiles.length} selected files?`)) {
      setMediaFiles(prev => prev.filter(file => !selectedFiles.includes(file.id)));
      setSelectedFiles([]);
    }
  };

  const copyFileUrl = (file: MediaFile) => {
    const url = `${window.location.origin}/media/${file.file_path}`;
    navigator.clipboard.writeText(url);
    alert('File URL copied to clipboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-arzir-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-arzir-primary mx-auto mb-4"></div>
          <p className="text-arzir-gray-600">Loading media library...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-arzir-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-arzir-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-heading font-bold text-black">Media Library</h1>
            </div>
            <div className="flex items-center gap-3">
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
                {uploading ? 'Uploading...' : 'Upload Files'}
              </Button>
              {selectedFiles.length > 0 && (
                <Button variant="outline" size="sm" className="text-red-600" onClick={handleDeleteFiles}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete ({selectedFiles.length})
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-arzir-gray-400" />
              <Input
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-arzir-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Files</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="pdf">PDFs</option>
              <option value="document">Documents</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Media Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredFiles.map((file) => (
              <Card key={file.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
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
                    <input
                      type="checkbox"
                      checked={selectedFiles.includes(file.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedFiles([...selectedFiles, file.id]);
                        } else {
                          setSelectedFiles(selectedFiles.filter(id => id !== file.id));
                        }
                      }}
                      className="absolute top-2 left-2 w-4 h-4"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-1">
                        <Button size="sm" variant="secondary" className="h-6 w-6 p-0" onClick={() => copyFileUrl(file)}>
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-black truncate" title={file.original_filename}>
                      {file.original_filename}
                    </p>
                    <div className="flex items-center justify-between text-xs text-arzir-gray-500">
                      <span>{formatFileSize(file.file_size)}</span>
                      <span>Used {file.usage_count}x</span>
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
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-arzir-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedFiles(filteredFiles.map(f => f.id));
                            } else {
                              setSelectedFiles([]);
                            }
                          }}
                          checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">File</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">Size</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">Usage</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-arzir-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-arzir-gray-200">
                    {filteredFiles.map((file) => (
                      <tr key={file.id} className="hover:bg-arzir-gray-50">
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            checked={selectedFiles.includes(file.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedFiles([...selectedFiles, file.id]);
                              } else {
                                setSelectedFiles(selectedFiles.filter(id => id !== file.id));
                              }
                            }}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-arzir-gray-100 rounded flex items-center justify-center">
                              {getFileTypeFromMime(file.mime_type) === 'image' ? (
                                <ImageIcon className="h-5 w-5 text-arzir-primary" />
                              ) : (
                                <File className="h-5 w-5 text-arzir-gray-500" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-black">{file.original_filename}</p>
                              <p className="text-xs text-arzir-gray-500">{file.alt_text}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-arzir-gray-700">{formatFileSize(file.file_size)}</td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className="text-xs">
                            {getFileTypeFromMime(file.mime_type)}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-arzir-gray-700">{file.usage_count} times</td>
                        <td className="px-4 py-3 text-sm text-arzir-gray-500">
                          {new Date(file.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" onClick={() => copyFileUrl(file)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <ImageIcon className="h-12 w-12 text-arzir-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-black mb-2">No media files found</h3>
            <p className="text-arzir-gray-600 mb-4">Upload some files to get started with your media library.</p>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Upload Your First File
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}