"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, UserPlus, Mail, Calendar } from "lucide-react";
import { useState } from "react";

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  created_at: string;
  is_active: boolean;
}

interface UserManagementDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@arzir.com",
    full_name: "System Administrator",
    role: "admin",
    created_at: "2025-01-01T00:00:00Z",
    is_active: true
  },
  {
    id: "2",
    email: "editor@arzir.com",
    full_name: "Content Editor",
    role: "editor",
    created_at: "2025-02-15T00:00:00Z",
    is_active: true
  },
  {
    id: "3",
    email: "viewer@arzir.com",
    full_name: "Sales Viewer",
    role: "viewer",
    created_at: "2025-03-10T00:00:00Z",
    is_active: false
  }
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "admin": return "bg-red-100 text-red-800";
    case "editor": return "bg-blue-100 text-blue-800";
    case "viewer": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function UserManagementDialog({ isOpen, onClose }: UserManagementDialogProps) {
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    full_name: "",
    role: "viewer",
    password: ""
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding new user:", newUser);
    setNewUser({ email: "", full_name: "", role: "viewer", password: "" });
    setShowAddUser(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading font-bold text-black flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Management
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header with Add User Button */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-black">Dashboard Users</h3>
              <p className="text-sm text-arzir-gray-600">Manage access to the ARZIR admin dashboard</p>
            </div>
            <Button 
              onClick={() => setShowAddUser(true)}
              className="bg-arzir-primary hover:bg-primary-600"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>

          {/* Add User Form */}
          {showAddUser && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">Add New User</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddUser} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="user@arzir.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        value={newUser.full_name}
                        onChange={(e) => setNewUser(prev => ({ ...prev, full_name: e.target.value }))}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select value={newUser.role} onValueChange={(value) => setNewUser(prev => ({ ...prev, role: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin - Full access</SelectItem>
                          <SelectItem value="editor">Editor - Content management</SelectItem>
                          <SelectItem value="viewer">Viewer - Read only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Temporary Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={newUser.password}
                        onChange={(e) => setNewUser(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Temporary password"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowAddUser(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-arzir-primary hover:bg-primary-600">
                      Create User
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Users List */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black">Current Users ({mockUsers.length})</h4>
            
            <div className="grid gap-4">
              {mockUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-arzir-primary/10 rounded-full flex items-center justify-center">
                          <Shield className="h-6 w-6 text-arzir-primary" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <h5 className="font-semibold text-black">{user.full_name}</h5>
                            <Badge className={getRoleColor(user.role)}>
                              {user.role}
                            </Badge>
                            {!user.is_active && (
                              <Badge variant="outline" className="text-red-600 border-red-200">
                                Inactive
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-arzir-gray-600">
                            <div className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Joined {new Date(user.created_at).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {user.role !== 'admin' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700"
                          >
                            {user.is_active ? 'Deactivate' : 'Activate'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Permissions Info */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-black mb-3">Role Permissions</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium text-red-800">Admin</div>
                  <ul className="text-red-700 space-y-1 mt-1">
                    <li>• Full system access</li>
                    <li>• User management</li>
                    <li>• All content editing</li>
                    <li>• System settings</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-800">Editor</div>
                  <ul className="text-blue-700 space-y-1 mt-1">
                    <li>• Create/edit blog posts</li>
                    <li>• Manage inquiries</li>
                    <li>• View analytics</li>
                    <li>• Content publishing</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-green-800">Viewer</div>
                  <ul className="text-green-700 space-y-1 mt-1">
                    <li>• View inquiries</li>
                    <li>• Read blog posts</li>
                    <li>• Basic analytics</li>
                    <li>• No editing rights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}