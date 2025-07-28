import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  Steps,
  Select,
  Upload,
  Radio,
  message
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  CloudUploadOutlined
} from '@ant-design/icons';

const { Step } = Steps;
const [registerForm] = Form.useForm();
const [currentStep, setCurrentStep] = useState(0);

const handleRegisterStepSubmit = async () => {
  try {
    if (currentStep < 2) {
      await registerForm.validateFields(
        currentStep === 0
          ? ['fullName', 'email', 'phone', 'password']
          : ['addressLine1', 'city', 'state', 'postalCode']
      );
      setCurrentStep(currentStep + 1);
    } else {
      await registerForm.validateFields();
      const values = registerForm.getFieldsValue();
      console.log('Submitted values:', values);
      message.success('Registration successful!');
      registerForm.resetFields();
      setCurrentStep(0);
      onClose(); // Close modal after success
    }
  } catch (error) {
    console.error('Validation failed:', error);
  }
};

const handlePrevStep = () => {
  setCurrentStep(currentStep - 1);
};

const steps = [
  {
    title: 'Basic Info',
    content: (
      <>
        <Form.Item name="fullName" rules={[{ required: true, message: 'Enter full name' }]}>
          <Input prefix={<UserOutlined />} placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: 'Enter phone number' }]}>
          <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Enter password' }, { min: 8 }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Address Info',
    content: (
      <>
        <Form.Item name="addressLine1" rules={[{ required: true, message: 'Enter address' }]}>
          <Input prefix={<HomeOutlined />} placeholder="Address Line 1" />
        </Form.Item>
        <Form.Item name="addressLine2">
          <Input prefix={<HomeOutlined />} placeholder="Address Line 2 (Optional)" />
        </Form.Item>
        <Form.Item name="city" rules={[{ required: true, message: 'Enter city' }]}>
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item name="state" rules={[{ required: true, message: 'Enter state' }]}>
          <Input placeholder="State" />
        </Form.Item>
        <Form.Item name="postalCode" rules={[{ required: true, message: 'Enter postal code' }]}>
          <Input placeholder="Postal Code" />
        </Form.Item>
        <Form.Item name="country">
          <Input placeholder="Country (Optional)" />
        </Form.Item>
        <Form.Item name="addressType">
          <Select placeholder="Address Type (Optional)">
            <Select.Option value="home">Home</Select.Option>
            <Select.Option value="work">Work</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="isDefault" valuePropName="checked">
          <Checkbox>Set as default address</Checkbox>
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Role & Confirm',
    content: (
      <>
        <Form.Item name="role" rules={[{ required: true, message: 'Select your role' }]}>
          <Radio.Group className="flex gap-4">
            <Radio value="tenant">Tenant</Radio>
            <Radio value="propertyOwner">Property Owner</Radio>
            <Radio value="hr">HR</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="profilePicture" label="Profile Picture">
          <Upload maxCount={1} listType="picture" beforeUpload={() => false}>
            <Button icon={<CloudUploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="termsAgreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Accept Terms & Privacy Policy'),
            },
          ]}
        >
          <Checkbox>
            I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
          </Checkbox>
        </Form.Item>
      </>
    ),
  },
];

// Define the prop types
interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
  initialTab: 'login' | 'signup';
}

declare global {
  interface Window {
    openHomivoAuth: (type?: 'login' | 'signup') => void;
  }
}

export default function AuthDialog({ open, onClose, initialTab }: AuthDialogProps) {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // When initialTab prop changes, update the active tab
  useEffect(() => {
    if (open) {
      setActiveTab(initialTab);
    }
  }, [initialTab, open]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) onClose();
    }}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Welcome to Homivo
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          {/* Login Form */}
          <TabsContent value="login" className="space-y-4 mt-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a 
                    className="text-sm text-primary hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input id="password" placeholder="Enter your password" type="password" />
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
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
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
          
          {/* Signup Form */}
          <TabsContent value="signup" className="space-y-4 mt-2">
  <Form
    form={registerForm}
    layout="vertical"
    initialValues={{ addressType: undefined, isDefault: false }}
  >
    <Steps current={currentStep} size="small" className="mb-4">
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>

    <div>{steps[currentStep].content}</div>

    <div className="flex justify-between mt-4">
      {currentStep > 0 && (
        <Button onClick={handlePrevStep} className="px-6">
          Previous
        </Button>
      )}
      <Button
        type="primary"
        onClick={handleRegisterStepSubmit}
        className={currentStep === 0 ? 'w-full' : 'px-8'}
      >
        {currentStep < steps.length - 1 ? 'Next' : 'Create Account'}
      </Button>
    </div>

    {/* Social login (only on step 0) */}
    {currentStep === 0 && (
      <>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or sign up with
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
      </>
    )}
  </Form>
</TabsContent>

        </Tabs>
      </DialogContent>
    </Dialog>
  );
}