"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login after a brief display
    const timer = setTimeout(() => {
      router.push("/auth/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-arzir-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-arzir-primary" />
            </div>
            <CardTitle className="text-xl">Registration Disabled</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-sm text-arzir-gray-600">
              Public registration is not available. New users must be invited by an administrator through the dashboard.
            </p>
            <p className="text-xs text-arzir-gray-500">
              If you need access, please contact your system administrator.
            </p>
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/auth/login">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go to Login
                </Link>
              </Button>
            </div>
            <p className="text-xs text-arzir-gray-400 pt-2">
              Redirecting to login in 3 seconds...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}