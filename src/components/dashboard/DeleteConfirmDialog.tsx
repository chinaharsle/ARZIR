"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Trash2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  itemName: string;
  isDeleting?: boolean;
  deleteType?: 'inquiry' | 'blog' | 'default';
}

export function DeleteConfirmDialog({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  description, 
  itemName,
  isDeleting = false,
  deleteType = 'default'
}: DeleteConfirmDialogProps) {
  const [confirmText, setConfirmText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Reset states when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      setConfirmText("");
      setShowSuccess(false);
    }
  }, [isOpen]);

  // Handle successful deletion
  useEffect(() => {
    if (!isDeleting && showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isDeleting, showSuccess, onClose]);

  const getTypeConfig = () => {
    switch (deleteType) {
      case 'inquiry':
        return {
          iconBg: 'bg-orange-100',
          iconColor: 'text-orange-600',
          borderColor: 'border-orange-400',
          confirmPhrase: 'delete inquiry',
          warningText: 'This will permanently remove the inquiry and all related data from the system.'
        };
      case 'blog':
        return {
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600',
          borderColor: 'border-purple-400',
          confirmPhrase: 'delete post',
          warningText: 'This will permanently remove the blog post and make it unavailable to visitors.'
        };
      default:
        return {
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600',
          borderColor: 'border-red-400',
          confirmPhrase: 'delete',
          warningText: 'This action cannot be undone. This will permanently delete the item from our servers.'
        };
    }
  };

  const config = getTypeConfig();
  const isConfirmValid = confirmText.toLowerCase() === config.confirmPhrase;

  const handleConfirm = async () => {
    if (isConfirmValid) {
      // Add a small delay to show the transition effect
      setTimeout(() => {
        setShowSuccess(true);
      }, 200);
      onConfirm();
    }
  };

  if (showSuccess && !isDeleting) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md transform transition-all duration-300 ease-in-out">
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <CheckCircle2 className="h-8 w-8 text-green-600 animate-bounce" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 animate-fade-in">
              Successfully Deleted
            </h3>
            <p className="text-arzir-gray-600 animate-fade-in">
              The {deleteType === 'inquiry' ? 'inquiry' : deleteType === 'blog' ? 'blog post' : 'item'} has been removed from the system.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg transform transition-all duration-300 ease-in-out">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-2">
            <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center flex-shrink-0 transition-all duration-200`}>
              <AlertTriangle className={`h-6 w-6 ${config.iconColor} animate-pulse`} />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-semibold text-black mb-2">
                {title}
              </DialogTitle>
              <p className="text-arzir-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          {/* Item details */}
          <div className={`bg-arzir-gray-50 rounded-lg p-4 border-l-4 ${config.borderColor}`}>
            <div className="flex items-start gap-3">
              <AlertCircle className={`h-5 w-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
              <div>
                <p className="font-medium text-black text-sm mb-1">
                  Item to be deleted:
                </p>
                <p className="text-arzir-gray-800 text-sm break-words">
                  {itemName}
                </p>
              </div>
            </div>
          </div>
          
          {/* Warning */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800 text-sm mb-1">
                  Warning: This action is irreversible
                </h4>
                <p className="text-red-700 text-sm">
                  {config.warningText}
                </p>
              </div>
            </div>
          </div>

          {/* Confirmation input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black">
              Type <span className="font-mono bg-arzir-gray-100 px-2 py-1 rounded text-red-600">
                {config.confirmPhrase}
              </span> to confirm:
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder={`Type "${config.confirmPhrase}" here`}
              disabled={isDeleting}
              className="w-full px-3 py-2 border border-arzir-gray-300 rounded-md text-sm 
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                         disabled:bg-arzir-gray-100 disabled:cursor-not-allowed"
              autoComplete="off"
            />
          </div>
        </div>

        <DialogFooter className="flex gap-3 pt-4 border-t border-arzir-gray-200">
          <Button 
            variant="outline" 
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleConfirm}
            disabled={isDeleting || !isConfirmValid}
            className={`flex-1 bg-red-600 hover:bg-red-700 disabled:bg-arzir-gray-300 disabled:cursor-not-allowed
                       transition-all duration-200 ${!isConfirmValid && !isDeleting ? 'opacity-50' : ''}`}
          >
            {isDeleting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Deleting...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Trash2 className="h-4 w-4" />
                Delete {deleteType === 'inquiry' ? 'Inquiry' : deleteType === 'blog' ? 'Post' : 'Item'}
              </div>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}