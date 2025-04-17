function Services() {
    const services = [
      {
        title: 'Bookkeeping & Accounting System Setup',
        description: 'Transaction recording, QuickBooks & Odoo setup, monthly reconciliations, and financial reports.',
      },
      {
        title: 'Tax Assistance & Compliance',
        description: 'VAT, PAYE, CIT, IQP, and RSSB declaration assistance, filing reminders, and tax system guidance for startups.',
      },
      {
        title: 'Business Advisory & Management Consultancy',
        description: 'Financial planning, budgeting, internal control, and SME structure advisory.',
      },
      {
        title: 'Technical & Professional Services (ISIC 7490)',
        description: 'Business proposals, cash flow forecasting tools, SOP, and policy drafting.',
      },
    ];
  
    return (
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-light-blue p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-navy-blue mb-4">{service.title}</h3>
                <p className="text-slate-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;