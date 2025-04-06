// components/ContactSection.tsx

import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const promise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // If the response is ok, resolve the promise
          resolve(response);
        } else {
          // If there's an issue with the response, reject the promise
          reject(new Error('Failed to send message.'));
        }
      } catch (error) {
        // If there's a network error, reject the promise
        reject(error);
      }
    });

    toast.promise(
      promise,
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: (error) => {
          // Customize the error message
          return error instanceof Error ? error.message : "Failed to send message.";
        },
      }
    );

    promise.then(() => reset()).catch(() => {}); 

    
  };

  return (
        <div className="flex justify-center gap-12 max-md:flex-col ">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10  p-3 rounded-lg">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-primary">Email</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">contact@aymanebachar.com</p>
                <a 
                  href="mailto:contact@aymanebachar.com" 
                  className="mt-2 inline-flex items-center text-xs font-medium text-primary/45 hover:text-primary "
                >
                  Send a message
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-primary">Phone</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">+1 (123) 456-7890</p>
                <a 
                  href="tel:+11234567890" 
                  className="mt-2 inline-flex items-center text-xs font-medium text-primary/45 hover:text-primary "
                >
                  Call now
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-primary">Location</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Marrakech</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className='flex gap-3 max-md:flex-col'>
                <div className='flex-1'>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                    Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    placeholder='Enter your name'
                    {...register('name', { required: true })}
                    className="w-full px-4 text-sm py-2 border border-primary dark:border-gray-600 rounded-sm  dark:text-white"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">Name is required</p>}
                </div>

                <div className='flex-1'>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                    Email Address
                    </label>
                    <input
                    type="email"
                    id="email"
                    placeholder='Enter your email'
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 text-sm py-2 border border-primary dark:border-gray-600 rounded-sm  dark:text-white"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">Valid email is required</p>}
                </div>

              </div>
              

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: true })}
                  
                  className="w-full resize-none px-4 text-sm py-2 border border-primary dark:border-gray-600 rounded-sm  dark:text-white"
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-600">Message is required</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full text-sm cursor-pointer px-6 py-3 bg-primary hover:bg-primary/70 text-primary-foreground font-medium rounded-sm transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          
        </div>

  );
};

export default ContactSection;