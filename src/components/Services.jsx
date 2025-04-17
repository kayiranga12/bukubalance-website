import { useState } from 'react';
import { 
  BookOpenIcon, 
  CalculatorIcon, 
  ChartBarIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

function Services() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      title: 'Bookkeeping & Accounting System Setup',
      shortDesc: 'Streamlined financial record-keeping for your business',
      description: 'Our comprehensive bookkeeping services include transaction recording, QuickBooks & Odoo setup, monthly reconciliations, and detailed financial reports tailored to your business needs.',
      features: [
        'Transaction recording and categorization',
        'QuickBooks Online & Odoo 18 setup and training',
        'Monthly account reconciliations',
        'Financial statements and reports',
        'Chart of accounts setup and customization'
      ],
      icon: <BookOpenIcon className="h-8 w-8" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Tax Assistance & Compliance',
      shortDesc: 'Stay compliant with Rwanda tax regulations',
      description: 'We help businesses navigate Rwanda\'s tax requirements with our assistance for VAT, PAYE, CIT, IQP, and RSSB declarations, filing reminders, document review, and tax system guidance.',
      features: [
        'VAT, PAYE, CIT, IQP, and RSSB filing assistance',
        'Tax calendar and deadline management',
        'Document preparation and review',
        'Tax system guidance for startups',
        'Tax planning and optimization'
      ],
      icon: <CalculatorIcon className="h-8 w-8" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Business Advisory & Management Consultancy',
      shortDesc: 'Expert guidance for business growth',
      description: 'Our advisory services help businesses make informed decisions with financial planning, budgeting, internal control development, and SME structure recommendations.',
      features: [
        'Financial planning and analysis',
        'Budget creation and monitoring',
        'Internal control system development',
        'SME business structure advisory',
        'Growth strategy consultation'
      ],
      icon: <ChartBarIcon className="h-8 w-8" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Technical & Professional Services',
      shortDesc: 'Specialized business documentation and tools',
      description: 'We provide technical and professional services including business proposals, cash flow forecasting tools, standard operating procedure (SOP) creation, and policy drafting.',
      features: [
        'Business proposal development',
        'Cash flow forecasting tools',
        'SOP (Standard Operating Procedure) creation',
        'Policy drafting and implementation',
        'Business documentation templates'
      ],
      icon: <DocumentTextIcon className="h-8 w-8" />,
      color: 'bg-amber-100 text-amber-600'
    },
  ];

  return (
    <section id="services" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown text-center mb-4">
          Our Services
        </h2>
        <p className="text-grayish-brown text-center max-w-3xl mx-auto mb-12">
          We provide comprehensive financial services to help Rwandan businesses stay organized, compliant, and ready for growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`p-6 rounded-lg transition-all duration-300 text-left ${
                activeService === index 
                ? 'bg-coffee-brown text-white shadow-lg transform -translate-y-1' 
                : 'bg-white hover:bg-grayish-brown hover:bg-opacity-10'
              }`}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${
                activeService === index 
                ? 'bg-white bg-opacity-20' 
                : service.color
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className={`${
                activeService === index 
                ? 'text-cream text-opacity-90' 
                : 'text-grayish-brown'
              }`}>
                {service.shortDesc}
              </p>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-coffee-brown mb-4">
              {services[activeService].title}
            </h3>
            <p className="text-grayish-brown mb-6">
              {services[activeService].description}
            </p>
            
            <h4 className="font-semibold text-coffee-brown mb-3">Key Features:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {services[activeService].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-grayish-brown">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-coffee-brown text-white px-6 py-3 rounded-md hover:bg-grayish-brown transition shadow-md"
              >
                Inquire About This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;