"use client";

import { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import confetti from "canvas-confetti";

interface SuccessNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function SuccessNotification({ 
  isOpen, 
  onClose, 
  title = "Success!", 
  message = "Your request has been submitted successfully!" 
}: SuccessNotificationProps) {
  useEffect(() => {
    if (isOpen) {
      // Trigger confetti when notification opens
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD']
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD']
        });
      }, 400);

      // Auto close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-arzir-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
        
        <div className="relative z-10 text-center">
          {/* Success icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            {title}
          </h3>
          
          {/* Message */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {message}
          </p>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="bg-arzir-primary hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            Got it!
          </button>
        </div>
        
        {/* Close X button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}