
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">Arya Siregar</h3>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={20} />
            </Button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Interested in working together?{' '}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:underline font-medium"
            >
              Let's get in touch!
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
