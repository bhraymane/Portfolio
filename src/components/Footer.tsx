// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="max-w-4xl w-full mx-auto border-t">
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
                <p className="text-primary/70 text-xs">
                © 2025 by Aymane Bachar. All Rights Reserved.
                </p>
            </div>
                
            <p className='text-xs text-primary/70 max-sm:text-center'>
                built with <strong>Next js 15</strong> , <strong>Tailwind CSS v4</strong> and  <strong>framer motion</strong> 
            </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;