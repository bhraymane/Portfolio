// components/ServicesSection.tsx
import { Code, Search, Smartphone, Zap } from 'lucide-react';
import ThemeImage from './ThemeImage';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom, high-performance websites and web applications built with modern technologies like Next.js, React, and Tailwind CSS.",
      features: [
        "Responsive Design",
        "API Integrations",
        "CMS Implementation",
        "Performance Optimization"
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your visibility and organic traffic.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO Audits",
        "Content Strategy"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimization",
      description: "Flawless mobile experiences with responsive design and progressive web app capabilities.",
      features: [
        "PWA Development",
        "Mobile-First Design",
        "Performance Tuning",
        "Cross-Browser Testing"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Boost",
      description: "Speed optimization to reduce bounce rates and improve conversion.",
      features: [
        "Lighthouse Optimization",
        "Image Optimization",
        "Code Splitting",
        "Caching Strategies"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            What I Offer
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Custom solutions tailored to your business needs with cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Get started
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics Visual */}
        <div className="mt-20 max-w-4xl mx-auto">
          <ThemeImage
            lightSrc="/images/performance-metrics-light.png"
            darkSrc="/images/performance-metrics-dark.png"
            alt="Performance metrics"
            width={800}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;