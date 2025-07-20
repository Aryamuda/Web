
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, BarChart3, Brain, TrendingUp, Database, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Optimization Dashboard',
      description: 'A web app that helps you analyze and optimize your investment portfolios using Modern Portfolio Theory. I designed it to calculate the best asset allocation to maximize your returns for a given level of risk',
      tools: ['Python', 'Streamlit', 'PyPortfolioOpt', 'Yfinance',],
      icon: <TrendingUp className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      githubUrl: 'https://github.com/Aryamuda/Portfolio-Optimizer-Dashboard',
      liveUrl: 'https://portfolio-optimizer-dashboard.streamlit.app/'
    },
    {
      title: 'Neural Network using C++ for Time-Series Analysis',
      description: 'A from scratch implementation of a neural network in C++ for predicting financial time-series data. Features a configurable architecture, built-in data processing, and robust evaluation metrics.',
        tools: ['C++20', 'CMake'],
      icon: <BarChart3 className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
      githubUrl: 'https://github.com/Aryamuda/Predicting_Close_Price_Using_NN',
      liveUrl: 'https://github.com/Aryamuda/Predicting_Close_Price_Using_NN'
    },
    {
      title: 'BTC Spread Arbitrage',
      description: 'The strategy aims to exploit temporary pricing inefficiencies between Bitcoin priced in US Dollars (BTC-USD) and Bitcoin priced in Euros (BTC-EUR).',
      tools: ['Google Colab', 'Yfinance', 'Monte Carlo Simulation'],
      icon: <Brain className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      githubUrl: 'https://github.com/Aryamuda/BTC-Spread-Arbitrage-',
      liveUrl: 'https://colab.research.google.com/drive/1fWBl0cES-AXnWlrExQsmB4R__Zqb9zci?usp=sharing'
    },
    {
      title: 'Macro Event-Driven Analysis System',
      description: 'Implemented a system that fuses quantitative analysis with narrative sentiment analysis from news data. I use a ChromaDB vector database to manage and query the narrative information, which allows for more context-aware insights.',
      tools: ['Python', 'OpenAI API', 'Chromadb', 'Twelvedata API','Gnews','NewsAPI','pyyaml', 'Real-time Processing'],
      icon: <Database className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=250&fit=crop',
      videoUrl: 'https://example.com/demo-video',
      isVideoOnly: true
    }
  ];

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllProjects = () => {
    window.open('https://github.com/Aryamuda', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my data science projects and machine learning applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 p-2 bg-primary/90 rounded-lg text-primary-foreground">
                  {project.icon}
                </div>
                {project.isVideoOnly && (
                  <div className="absolute top-4 right-4 p-2 bg-amber-500/90 rounded-lg text-white">
                    <Play className="h-4 w-4" />
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => handleGithubClick(project.githubUrl!)}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleDemoClick(project.liveUrl!)}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                  
                  {project.videoUrl && (
                    <Button 
                      size="sm"
                      className={`${project.githubUrl || project.liveUrl ? 'flex-1' : 'w-full'} bg-amber-500 hover:bg-amber-600 text-white`}
                      onClick={() => handleVideoClick(project.videoUrl!)}
                    >
                      <Play size={16} className="mr-2" />
                      Video Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={handleViewAllProjects}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
