"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X ,Sun, Moon } from "lucide-react";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => setMounted(true), []);
  
    const navigation = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#About' },
      { name: 'Skills', href: '#skills' },
      { name: 'projects', href: '#projects' }
    ];
  
    return (
      <header className="fixed w-full px-10 max-lg:px-0 z-50">
        <nav className="mt-4 max-w-4xl  mx-auto bg-background/80 backdrop-blur-sm z-50 max-lg:border-none border-[1.5px] border-primary/60 rounded-lg px-4 ">
          <div className="flex items-center justify-between py-2  ">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl max-md:text-sm font-bold">
                PORTFOLIO
              </Link>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden  md:flex md:items-center md:space-x-4 border-x-[1.5px] border-primary/40 px-8 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:bg-gray-200/30 px-2 py-2  transition-all rounded-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-2 ">
                <Link href="#contact" className="bg-primary px-4 py-2 rounded-md hover:bg-primary-foreground border  text-sm font-medium hover:text-primary text-primary-foreground  ">
                    Contact
                </Link>
            
                {mounted && (
                    <Button className="cursor-pointer"
                    variant="ghost"
                    size="icon"
                    arail-label="Toggle theme"
                    title="Toggle theme"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                    {theme === 'dark' ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                    </Button>
                )}
            </div>
  
            {/* Mobile Navigation */}              
            
            <div className="lg:hidden flex items-center  ">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="cursor-pointer mr-2"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5 " />
                  )}
                </Button>
              )}
              <Button
                variant="ghost"
                aria-label="Toggle menu"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
            <div
            className={`lg:hidden transform transition-transform duration-900 ease-in-out border-[1.5px] rounded-b-xl 
                ${isMenuOpen ? "opacity-100 translate-y-0 visible border-opacity-100 " : "opacity-0 border-opacity-0 -translate-y-5 max-h-0 overflow-hidden invisible"}`}
            >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.name}
                </Link>
                ))}
                <Link
                href="#contact"
                className="bg-primary block mt-2 w-full px-3 py-2 rounded-md text-center text-sm font-medium text-primary-foreground"
                >
                Contact
                </Link>
            </div>
            </div>

        </nav>
      </header>
    )
}

export default Navbar