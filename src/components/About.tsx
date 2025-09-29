
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skillProgression = [
    {
      year: '2022',
      title: 'Foundation Year',
      skills: ['Python', 'Basic Programming', 'Pandas', 'NumPy', 'Personal Development'],
      description: 'Started my journey into data science by learning Python fundamentals, data handling, and building discipline through daily routines.'
    },
    {
      year: '2023',
      title: 'Applied Learning & Market Entry',
      skills: ['Scikit-Learn', 'Matplotlib', 'Seaborn', 'Basic ML', 'Forex Trading', 'Macroeconomics'],
      description: 'Applied data science to financial markets. Began trading forex, analyzing economic indicators, and developing basic ML-driven insights.'
    },
    {
      year: '2024',
      title: 'Quant Analysis & Backtesting',
      skills: ['Time Series Modeling', 'ARIMA', 'GARCH', 'Backtesting', 'VaR', 'Risk Analysis'],
      description: 'Focused on quantitative methods and time-series forecasting. Built backtesting systems and explored risk modeling in real world forex data.'
    },
    {
      year: '2025',
      title: 'LLM Agents & Research Systems',
      skills: ['LangGraph', 'LLM Agent Architecture', 'Reinforcement Learning', 'Options Pricing', 'Factor Models', 'SaaS Prototyping'],
      description: 'Built advanced AI agents to analyze macroeconomic volatility and market behavior. Combined LLMs with structured data systems for real-time forex intelligence and research automation.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in data science and the skills I've developed along the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m here to identify leverage points others miss.
                  I build real systems that break down markets, analyze volatility, and give me an edge. 
                  I study at Institut Teknologi Sumatra, but most of what I know comes from building things that actually solve problems. 
                  Turning noise into structure, especially in the chaos of market is my focus.
                </p>
                <p>
                  At the heart of my work is a custom built LLM agent, my own macro analyst. 
                  It reads economic events, watches volatility shifts, and generates structured bias across multiple pairs. 
                  It doesn’t just echo what’s obvious, it forces me to think sharper, question assumptions, and stay ahead. 
                  I didn’t build it because it was trendy. I built it because nothing else was good enough.
                </p>
                <p>
                  Everything I do is built on routine, intent, and control. 
                  I log my trades, refine my systems, and treat every project as a step toward mastery. 
                  This portfolio isn’t just a collection of code 
                  it’s the trail of what I’ve built, what I’ve broken, and where I’m headed next.
                </p>
              </div>
            </Card>
          </div>

          {/* Skill Progression Timeline */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Skill Progression Timeline</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-electric-teal to-primary"></div>
              
              {skillProgression.map((item, index) => (
                <div key={item.year} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm border-4 border-background">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="ml-6 p-6 bg-card/50 backdrop-blur-sm border-border flex-1">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
