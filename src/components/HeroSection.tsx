
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Technology } from '@/types';
import { useAppContext } from '@/contexts/AppContext';
import { useTranslations } from '@/utils/translations';
import { Navigate } from "react-router-dom";

const HeroSection = () => {
  const { language } = useAppContext();
  const t = useTranslations(language);

  const technologies: Technology[] = [
    { name: 'C# .NET', icon: '⚙️' },
    { name: 'WinForms', icon: '🖥️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'VBA', icon: '📊' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Azure', icon: '☁️' }
  ];

  return (
    <section id="o-mnie" className="py-20 lg:py-32">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {t.hero.available}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.hero.greeting} <span className="text-primary">Mateusz Jankowski</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.hero.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.hero.technologies}</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="px-3 py-2 text-sm border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.hero.education}</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                {t.hero.educationItems.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300" onClick={() => window.open('https://www.linkedin.com/in/mat-jankowski/', '_blank') }>
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300" onClick={() => window.open('mailto:jan@example.com')}>
                <Mail className="w-4 h-4 mr-2" />
                jan@example.com
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-primary to-blue-600 rounded-lg p-2 shadow-2xl">
                <img
                  src="zdj.jpg"
                  alt="Mateusz Jankowski"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
