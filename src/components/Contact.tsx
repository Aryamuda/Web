
import { Card } from '@/components/ui/card';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'aryamudasiregar32@gmail.com',
      href: 'mailto:aryamudasiregar32@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+62 81271241637',
      href: 'tel:+6281271241637'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Lampung, B.Lampung',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just chat about data science
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center justify-center">
                <MessageSquare className="mr-3 h-6 w-6" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-center">
                I'm always interested in discussing new opportunities, innovative projects, 
                or potential collaborations. Whether you're looking for a data scientist 
                or just want to chat about the latest in ML and AI, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-200 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
