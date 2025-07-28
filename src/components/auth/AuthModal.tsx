import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, mode = "login" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(mode);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Welcome to Homivo
          </DialogTitle>
          <DialogDescription className="text-center">
            {activeTab === "login" 
              ? "Sign in to your account to access your dashboard"
              : "Create an account to start finding your perfect accommodation"
            }
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue={mode} value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email-login">Email</Label>
              <Input id="email-login" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-login">Password</Label>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input id="password-login" type="password" placeholder="••••••••" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            
            <Button className="w-full">Sign In</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <i className="fab fa-google mr-2"></i> Google
              </Button>
              <Button variant="outline" className="w-full">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email-signup">Email</Label>
              <Input id="email-signup" type="email" placeholder="john.doe@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone-signup">Phone Number</Label>
              <Input id="phone-signup" type="tel" placeholder="+91 98765 43210" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-signup">Password</Label>
              <Input id="password-signup" type="password" placeholder="••••••••" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <Button className="w-full">Create Account</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <i className="fab fa-google mr-2"></i> Google
              </Button>
              <Button variant="outline" className="w-full">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}