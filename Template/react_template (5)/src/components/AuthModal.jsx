import { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Steps, Select, Upload, Checkbox, message, Tabs, Radio } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CloudUploadOutlined, GoogleOutlined, AppleOutlined, CloseOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { TabPane } = Tabs;

export default function AuthModal({ open, onClose, initialTab = 'login' }) {
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set active tab when initialTab prop changes
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleLogin = async (values) => {
    try {
      // Here you would implement your login logic
      console.log('Login form submitted:', values);
      message.success('Login successful!');
      loginForm.resetFields();
      onClose();
    } catch (error) {
      message.error('Login failed. Please try again.');
    }
  };

  const handleRegisterStepSubmit = async () => {
    try {
      if (currentStep < 2) {
        // Validate current step fields
        await registerForm.validateFields(
          currentStep === 0 
            ? ['fullName', 'email', 'phone', 'password'] 
            : ['addressLine1', 'city', 'state', 'postalCode']
        );
        setCurrentStep(currentStep + 1);
      } else {
        // Final submission
        await registerForm.validateFields();
        const values = registerForm.getFieldsValue();
        console.log('Registration form submitted:', values);
        message.success('Registration successful!');
        registerForm.resetFields();
        setCurrentStep(0);
        onClose();
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Registration form steps content
  const steps = [
    {
      title: 'Basic Info',
      content: (
        <>
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Full Name" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Email Address" size="large" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input prefix={<PhoneOutlined className="text-gray-400" />} placeholder="Phone Number" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please enter your password' },
              { min: 8, message: 'Password must be at least 8 characters' }
            ]}
          >
            <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Password" size="large" />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Address Details',
      content: (
        <>
          <Form.Item
            name="addressLine1"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input prefix={<HomeOutlined className="text-gray-400" />} placeholder="Address Line 1" size="large" />
          </Form.Item>
          <Form.Item name="addressLine2">
            <Input prefix={<HomeOutlined className="text-gray-400" />} placeholder="Address Line 2 (Optional)" size="large" />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[{ required: true, message: 'Please enter your city' }]}
          >
            <Input placeholder="City" size="large" />
          </Form.Item>
          <Form.Item
            name="state"
            rules={[{ required: true, message: 'Please select your state' }]}
          >
            <Input placeholder="State" size="large" />
          </Form.Item>
          <Form.Item
            name="postalCode"
            rules={[{ required: true, message: 'Please enter your postal code' }]}
          >
            <Input placeholder="Postal Code" size="large" />
          </Form.Item>
          <Form.Item name="country">
            <Input placeholder="Country (Optional)" size="large" />
          </Form.Item>
          <Form.Item name="addressType">
            <Select placeholder="Address Type (Optional)" size="large">
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
      title: 'Role & Confirmation',
      content: (
        <>
          <div className="mb-4">
            <Form.Item
              name="role"
              rules={[{ required: true, message: 'Please select your role' }]}
              label="I am a"
              className="mb-4"
            >
              <Radio.Group className="w-full flex flex-wrap gap-4">
                <Radio value="tenant" className="border rounded-lg p-3 flex-1 text-center">
                  <div className="flex flex-col items-center">
                    <i className="fas fa-user mb-1"></i>
                    <span>Tenant</span>
                  </div>
                </Radio>
                <Radio value="propertyOwner" className="border rounded-lg p-3 flex-1 text-center">
                  <div className="flex flex-col items-center">
                    <i className="fas fa-home mb-1"></i>
                    <span>Property Owner</span>
                  </div>
                </Radio>
                <Radio value="hr" className="border rounded-lg p-3 flex-1 text-center">
                  <div className="flex flex-col items-center">
                    <i className="fas fa-briefcase mb-1"></i>
                    <span>HR</span>
                  </div>
                </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item name="profilePicture" label="Profile Picture (Optional)">
            <Upload maxCount={1} listType="picture" beforeUpload={() => false}>
              <Button icon={<CloudUploadOutlined />} size="large">
                Upload Photo
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="termsAgreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')),
              },
            ]}
          >
            <Checkbox>
              I agree to the <a href="#" className="text-indigo-600">Terms of Service</a> and <a href="#" className="text-indigo-600">Privacy Policy</a>
            </Checkbox>
          </Form.Item>
        </>
      ),
    },
  ];

  // Login Form Content
  const LoginContent = () => (
    <Form
      form={loginForm}
      name="login"
      onFinish={handleLogin}
      layout="vertical"
      className="px-2"
    >
      <div className="text-center mb-6">
        <div className="inline-flex justify-center items-center h-14 w-14 rounded-full bg-indigo-100 mb-3">
          <i className="fas fa-home text-indigo-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Welcome back</h3>
        <p className="text-gray-500 mt-1">Log in to your Homivo account</p>
      </div>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Email Address" size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Password" size="large" />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-between">
          <Checkbox>Remember me</Checkbox>
          <a href="#" className="text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" className="w-full h-12 text-base rounded-lg">
          Log in
        </Button>
      </Form.Item>

      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="px-4 text-gray-500 text-sm">Or continue with</span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button 
          icon={<GoogleOutlined />} 
          size="large"
          className="flex items-center justify-center h-12 border border-gray-200 rounded-lg"
        >
          <span className="ml-2">Google</span>
        </Button>
        <Button 
          icon={<AppleOutlined />} 
          size="large"
          className="flex items-center justify-center h-12 border border-gray-200 rounded-lg"
        >
          <span className="ml-2">Apple</span>
        </Button>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account? 
          <a 
            href="#" 
            className="text-indigo-600 ml-1 font-medium"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('register');
            }}
          >
            Sign up
          </a>
        </p>
      </div>
    </Form>
  );

  // Registration Form Content
  const RegisterContent = () => (
    <div>
      {currentStep === 0 && (
        <div className="text-center mb-6">
          <div className="inline-flex justify-center items-center h-14 w-14 rounded-full bg-indigo-100 mb-3">
            <i className="fas fa-user-plus text-indigo-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Create your account</h3>
          <p className="text-gray-500 mt-1">Join thousands of happy users on Homivo</p>
        </div>
      )}

      {currentStep > 0 && (
        <div className="mb-6">
          <Steps current={currentStep} size="small" className="mb-8">
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
      )}

      <Form
        form={registerForm}
        name="register"
        layout="vertical"
        initialValues={{ addressType: undefined, isDefault: false }}
        className="px-2"
      >
        <div className="registration-steps">{steps[currentStep].content}</div>
        
        <div className="flex justify-between mt-6">
          {currentStep > 0 && (
            <Button onClick={handlePrevStep} size="large" className="h-12 px-6">
              Previous
            </Button>
          )}
          <Button
            type="primary"
            onClick={handleRegisterStepSubmit}
            size="large"
            className={`h-12 ${currentStep === 0 ? 'w-full' : 'px-8'} rounded-lg`}
          >
            {currentStep < 2 ? 'Next' : 'Create account'}
          </Button>
        </div>
      </Form>

      {currentStep === 0 && (
        <>
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">Or sign up with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button 
              icon={<GoogleOutlined />} 
              size="large"
              className="flex items-center justify-center h-12 border border-gray-200 rounded-lg"
            >
              <span className="ml-2">Google</span>
            </Button>
            <Button 
              icon={<AppleOutlined />} 
              size="large"
              className="flex items-center justify-center h-12 border border-gray-200 rounded-lg"
            >
              <span className="ml-2">Apple</span>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account? 
              <a 
                href="#" 
                className="text-indigo-600 ml-1 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('login');
                }}
              >
                Log in instead
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );

  const modalTitle = isMobile ? (
    <div className="relative">
      <Button 
        type="text" 
        icon={<CloseOutlined />} 
        onClick={onClose}
        className="absolute -right-6 -top-6"
      />
    </div>
  ) : null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={isMobile ? "100%" : 500}
      style={isMobile ? { top: 0, margin: 0, maxWidth: '100%', height: '100%' } : {}}
      bodyStyle={isMobile ? { height: '100vh', overflow: 'auto', padding: '20px' } : {}}
      closable={!isMobile}
      maskClosable={!isMobile}
      title={modalTitle}
      className="auth-modal"
      centered={!isMobile}
    >
      {!isMobile ? (
        <Tabs activeKey={activeTab} onChange={setActiveTab} centered className="auth-tabs">
          <TabPane tab="Login" key="login">
            <LoginContent />
          </TabPane>
          <TabPane tab="Register" key="register">
            <RegisterContent />
          </TabPane>
        </Tabs>
      ) : (
        activeTab === 'login' ? <LoginContent /> : <RegisterContent />
      )}
    </Modal>
  );
}