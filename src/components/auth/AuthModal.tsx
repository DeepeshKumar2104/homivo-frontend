import { useState, useEffect } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
}

interface SignupFormData {
  // Basic Info
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  
  // Address Details
  address: string;
  city: string;
  state: string;
  postalCode: string;
  
  // Role & Confirmation
  role: "tenant" | "landlord" | "agent";
  photo: File | null;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function AuthModal({ isOpen, onClose, mode = "login" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(mode);
  const [signupStep, setSignupStep] = useState(1);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Form data
  const [signupData, setSignupData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    role: "tenant",
    photo: null,
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Validation states
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSignupStep(1);
      setShowOtpModal(false);
      setOtp(["", "", "", "", "", ""]);
      setIsOtpVerified(false);
      setErrors({});
      setSignupData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        role: "tenant",
        photo: null,
        agreeToTerms: false,
        agreeToMarketing: false,
      });
    }
  }, [isOpen]);

  // Update active tab when mode changes
  useEffect(() => {
    setActiveTab(mode);
  }, [mode]);

  // Validation functions
  const validateStep1 = () => {
    const newErrors: Partial<SignupFormData> = {};
    
    if (!signupData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!signupData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signupData.email)) newErrors.email = "Invalid email format";
    
    if (!signupData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(signupData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    
    if (!signupData.password) newErrors.password = "Password is required";
    else if (signupData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    
    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<SignupFormData> = {};
    
    if (!signupData.address.trim()) newErrors.address = "Address is required";
    if (!signupData.city.trim()) newErrors.city = "City is required";
    if (!signupData.state.trim()) newErrors.state = "State is required";
    if (!signupData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Partial<SignupFormData> = {};
    
    if (!signupData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step navigation
  const nextStep = () => {
    let isValid = false;
    
    switch (signupStep) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
    }
    
    if (isValid) {
      if (signupStep === 3) {
        handleSignupSubmit();
      } else {
        setSignupStep(signupStep + 1);
      }
    }
  };

  const prevStep = () => {
    setSignupStep(Math.max(1, signupStep - 1));
  };

  // Handle signup submission
  const handleSignupSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setShowOtpModal(true);
    
    toast({
      title: "OTP Sent!",
      description: "We've sent a 6-digit code to your email and phone.",
    });
  };

  // Handle OTP input
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle OTP verification
  const handleOtpVerification = async () => {
    const otpString = otp.join("");
    
    if (otpString.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit code.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock verification (always succeeds for demo)
    if (otpString === "123456" || otpString === "000000") {
      setIsOtpVerified(true);
      toast({
        title: "Success!",
        description: "Your account has been created successfully.",
      });
      
      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      toast({
        title: "Invalid OTP",
        description: "The code you entered is incorrect. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSignupData(prev => ({ ...prev, photo: file }));
    }
  };

  // Handle form input changes
  const handleSignupChange = (field: keyof SignupFormData, value: any) => {
    setSignupData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleLoginChange = (field: keyof LoginFormData, value: any) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  // Handle login submission
  const handleLoginSubmit = async () => {
    setIsLoading(true);
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });
    
    setIsLoading(false);
    onClose();
  };

  // Social login handlers
  const handleGoogleLogin = () => {
    toast({
      title: "Google Login",
      description: "Google login functionality will be implemented here.",
    });
  };

  const handleAppleLogin = () => {
    toast({
      title: "Apple Login",
      description: "Apple login functionality will be implemented here.",
    });
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
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
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input 
                    id="email-login" 
                    type="email" 
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => handleLoginChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password-login">Password</Label>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="password-login" 
                    type="password" 
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => handleLoginChange("password", e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                                         <Checkbox 
                         id="remember" 
                         checked={loginData.rememberMe}
                         onCheckedChange={(checked) => handleLoginChange("rememberMe", checked as boolean)}
                       />
                  <label htmlFor="remember" className="text-sm font-medium leading-none">
                    Remember me
                  </label>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={handleLoginSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
                
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
                  <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
                    <i className="fab fa-google mr-2"></i> Google
                  </Button>
                  <Button variant="outline" className="w-full" onClick={handleAppleLogin}>
                    <i className="fab fa-apple mr-2"></i> Apple
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="signup" className="space-y-4 pt-4">
              {signupStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Basic Information</h3>
                    <Badge variant="secondary">Step 1 of 3</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input 
                      id="fullname" 
                      placeholder="John Doe"
                      value={signupData.fullName}
                      onChange={(e) => handleSignupChange("fullName", e.target.value)}
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-signup">Email</Label>
                    <Input 
                      id="email-signup" 
                      type="email" 
                      placeholder="john.doe@example.com"
                      value={signupData.email}
                      onChange={(e) => handleSignupChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone-signup">Phone Number</Label>
                    <Input 
                      id="phone-signup" 
                      type="tel" 
                      placeholder="9876543210"
                      value={signupData.phone}
                      onChange={(e) => handleSignupChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password-signup">Password</Label>
                    <Input 
                      id="password-signup" 
                      type="password" 
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) => handleSignupChange("password", e.target.value)}
                      className={errors.password ? "border-red-500" : ""}
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••"
                      value={signupData.confirmPassword}
                      onChange={(e) => handleSignupChange("confirmPassword", e.target.value)}
                      className={errors.confirmPassword ? "border-red-500" : ""}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                  
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
                    <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
                      <i className="fab fa-google mr-2"></i> Google
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleAppleLogin}>
                      <i className="fab fa-apple mr-2"></i> Apple
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={nextStep}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Next Step"}
                  </Button>
                </div>
              )}
              
              {signupStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Address Details</h3>
                    <Badge variant="secondary">Step 2 of 3</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      placeholder="123 Main Street"
                      value={signupData.address}
                      onChange={(e) => handleSignupChange("address", e.target.value)}
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="Bangalore"
                        value={signupData.city}
                        onChange={(e) => handleSignupChange("city", e.target.value)}
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state" 
                        placeholder="Karnataka"
                        value={signupData.state}
                        onChange={(e) => handleSignupChange("state", e.target.value)}
                        className={errors.state ? "border-red-500" : ""}
                      />
                      {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postal-code">Postal Code</Label>
                    <Input 
                      id="postal-code" 
                      placeholder="560001"
                      value={signupData.postalCode}
                      onChange={(e) => handleSignupChange("postalCode", e.target.value)}
                      className={errors.postalCode ? "border-red-500" : ""}
                    />
                    {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode}</p>}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Previous
                    </Button>
                    <Button onClick={nextStep} className="flex-1" disabled={isLoading}>
                      {isLoading ? "Processing..." : "Next Step"}
                    </Button>
                  </div>
                </div>
              )}
              
              {signupStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Role & Confirmation</h3>
                    <Badge variant="secondary">Step 3 of 3</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>I am a:</Label>
                    <RadioGroup 
                      value={signupData.role} 
                      onValueChange={(value) => handleSignupChange("role", value)}
                      className="grid grid-cols-1 gap-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tenant" id="tenant" />
                        <Label htmlFor="tenant" className="flex-1 cursor-pointer">
                          <div>
                            <div className="font-medium">Tenant</div>
                            <div className="text-sm text-muted-foreground">Looking for accommodation</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="landlord" id="landlord" />
                        <Label htmlFor="landlord" className="flex-1 cursor-pointer">
                          <div>
                            <div className="font-medium">Landlord</div>
                            <div className="text-sm text-muted-foreground">Renting out properties</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="agent" id="agent" />
                        <Label htmlFor="agent" className="flex-1 cursor-pointer">
                          <div>
                            <div className="font-medium">Agent</div>
                            <div className="text-sm text-muted-foreground">Property management professional</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="photo">Profile Photo (Optional)</Label>
                    <Input 
                      id="photo" 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="cursor-pointer"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                                             <Checkbox 
                         id="terms" 
                         checked={signupData.agreeToTerms}
                         onCheckedChange={(checked) => handleSignupChange("agreeToTerms", checked as boolean)}
                       />
                      <Label htmlFor="terms" className="text-sm leading-none">
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </Label>
                    </div>
                    {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
                    
                    <div className="flex items-center space-x-2">
                                             <Checkbox 
                         id="marketing" 
                         checked={signupData.agreeToMarketing}
                         onCheckedChange={(checked) => handleSignupChange("agreeToMarketing", checked as boolean)}
                       />
                      <Label htmlFor="marketing" className="text-sm leading-none">
                        I agree to receive marketing communications from Homivo
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Previous
                    </Button>
                    <Button onClick={nextStep} className="flex-1" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* OTP Verification Modal */}
      <Dialog open={showOtpModal} onOpenChange={setShowOtpModal}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-center">Verify Your Account</DialogTitle>
            <DialogDescription className="text-center">
              We've sent a 6-digit verification code to your email and phone number.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-center block">Enter the 6-digit code</Label>
              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-lg font-semibold"
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !digit && index > 0) {
                        const prevInput = document.getElementById(`otp-${index - 1}`);
                        prevInput?.focus();
                      }
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Didn't receive the code?{" "}
                <button 
                  className="text-primary hover:underline"
                  onClick={() => {
                    toast({
                      title: "Code Resent",
                      description: "A new verification code has been sent.",
                    });
                  }}
                >
                  Resend
                </button>
              </p>
              <p className="text-xs text-muted-foreground">
                Demo: Use "123456" or "000000" to verify
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowOtpModal(false)} 
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleOtpVerification} 
                className="flex-1"
                disabled={isLoading || isOtpVerified}
              >
                {isLoading ? "Verifying..." : isOtpVerified ? "Verified!" : "Verify"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}