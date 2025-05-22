import React from 'react';
import { Code2, Search, Laptop, Rocket,  Globe2, CircleCheck  } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description,features }: { icon: React.ElementType, title: string, description: string ,features: string[] }) {
  return (
    <div className="bg-primary-foreground rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center mb-4">
        <Icon className="w-4 h-4 text-primary-foreground" />
      </div>
      <h3 className="text-lg max-sm:text-sm font-bold text-primary mb-3">{title}</h3>
      <p className="text-primary text-justify text-sm max-sm:text-xs mb-4">{description}</p>
      <ul className="mt-6 space-y-2 text-primary text-sm max-sm:text-xs">
            {features.map((feature, i) => (
                <li key={i} className="flex  items-center ">
                    <CircleCheck size={12} fontWeight={600} className='mr-2   text-primary  ' />
                    <span className="text-primary">{feature}</span>
                </li>
            ))}
    </ul>
    </div>
  );
}

function ServiceSecond() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Creating responsive, modern websites using the latest technologies and best practices for optimal user experience.",
      features: [
        "Responsive Design",
        "API Integrations",
        "CMS Implementation",
        "Performance Optimization"
      ]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improving your website's visibility in search engines through technical optimization and content strategy.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO Audits",
        "Content Strategy"
      ]
    },
    {
      icon: Globe2,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly across all devices and screen sizes.",
      features: [
        "Flexible grids",
        "Adaptive images",
        "Touch optimization",
        "Cross-browser testing"
      ]
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Enhancing website speed and performance for better user engagement and SEO rankings.",
      features: [
        "Lighthouse Optimization",
        "Image Optimization",
        "Code Splitting",
        "Caching Strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen max-w-4xl mx-auto">

      {/* Services Grid */}
      <div className=" ">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-center font-bold max-sm:text-2xl mb-6">What i offer</h2>
          <p className="text-primary/65 max-w-2xl max-sm:text-sm mx-auto">
            Comprehensive web development and optimization solutions to help your business thrive in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default ServiceSecond;