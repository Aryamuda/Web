
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGithubClick = () => {
    window.open('https://github.com/Aryamuda', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    window.open('https://linkedin.com/in/arya-siregar-a09085275', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aryamudasiregar32@gmail.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-electric-teal bg-clip-text text-transparent">
                  Arya Siregar
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Data Scientist | ML & AI Agent Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Volatility moves the market. I build the logic that moves through it.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={handleGithubClick}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={handleLinkedinClick}
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={handleEmailClick}
              >
                <Mail size={20} />
              </Button>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToAbout}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                Learn More About Me
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={scrollToProjects}
              >
                View My Projects
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-left">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-electric-teal/20 p-2">
                <div className="w-full h-full rounded-full bg-card border border-border overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/Aryamuda/Web/main/public/IMG_20250405_091700_476.png" 
                    alt="Arya Siregar - Data Scientist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-teal rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
