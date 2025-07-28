import { useState } from 'react';

export default function Faq() {
  const faqs = [
    {
      question: "How does Homivo verify the listings?",
      answer: "We have a rigorous verification process where our team physically visits properties and authenticates ownership documents before the listing goes live on our platform. This ensures that all listings are genuine and accurately represented."
    },
    {
      question: "Is my payment secure on Homivo?",
      answer: "Yes, all payments on Homivo are secured using industry-standard encryption. We partner with trusted payment gateways like Razorpay and PhonePe to ensure your financial information is always protected."
    },
    {
      question: "Can I cancel my booking after confirmation?",
      answer: "Cancellation policies vary depending on the property owner's terms. Each listing clearly displays the cancellation policy, which may range from flexible to strict. Any applicable refunds are processed within 5-7 business days."
    },
    {
      question: "How do I sign the digital rental agreement?",
      answer: "Once your booking is confirmed, you'll receive a digital rental agreement via email and on your Homivo dashboard. You can review the agreement, digitally sign it using our secure e-signature system, and download a copy for your records."
    },
    {
      question: "Can property owners and tenants communicate directly?",
      answer: "Yes, Homivo provides a real-time messaging system where tenants and owners can communicate directly. All communications are recorded for security and transparency purposes."
    },
    {
      question: "What should I do if I face issues with my accommodation?",
      answer: "You can raise a complaint through the 'Support' section in your Homivo account. Our dedicated support team will address your concerns and mediate between you and the property owner if necessary."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Answers to common questions
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about using Homivo for your accommodation needs
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-indigo-600 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`px-6 pb-5 transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">Still have questions?</p>
          <a href="#" className="inline-flex items-center mt-2 text-indigo-600 font-medium hover:text-indigo-500 transition-colors">
            Contact our support team
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}