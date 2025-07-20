
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'YourName_DataScientist_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Certifications',
      items: [
        'Google Advanced Data Analytics Capstone',
        'The Nuts and Bolts of Machine Learning',
        'The Power of Statistics'
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Experience',
      items: [
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Education',
      items: [
        'B.S. Data Science - Institut Teknologi Sumatera (2023)',
        'Relevant Coursework: ML, Statistics, Databases, Time-Series'
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional background and qualifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((section, index) => (
            <Card 
              key={section.title} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Resume Download Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-electric-teal/5 border-primary/20 text-center">
          <div className="max-w-md mx-auto">
            <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Download Full Resume</h3>
            <p className="text-muted-foreground mb-6">
              Get a detailed view of my experience, education, and technical skills in PDF format.
            </p>
            <Button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
