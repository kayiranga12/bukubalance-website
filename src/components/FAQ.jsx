import { useState } from 'react';

function FAQ() {
  const faqs = [
    {
      question: "What bookkeeping services do you offer?",
      answer: "We offer comprehensive bookkeeping services including transaction recording, QuickBooks & Odoo setup, monthly reconciliations, and financial reports tailored to your business needs."
    },
    {
      question: "How can you help with tax compliance?",
      answer: "We provide assistance with VAT, PAYE, CIT, IQP, and RSSB declarations, filing reminders, document review, and tax system guidance specifically designed for Rwandan startups and SMEs."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in supporting entrepreneurs, SMEs, NGOs, cooperatives, and professionals who need affordable, tech-savvy financial support."
    },
    {
      question: "What digital tools do you use?",
      answer: "We leverage modern tools including QuickBooks Online, Odoo 18, Microsoft Excel, and Google Sheets to ensure your financial systems are efficient and accessible."
    },
    {
      question: "How do I get started with your services?",
      answer: "Simply reach out through our contact form, email, or WhatsApp, and we'll schedule an initial consultation to assess your needs and create a customized solution for your business."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-coffee-brown">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-coffee-brown transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div 
                className={`px-5 pb-5 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-grayish-brown">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;