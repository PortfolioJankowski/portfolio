
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Settings, Zap, Users } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { useTranslations } from '@/utils/translations';

const ServicesSection = () => {
  const { language } = useAppContext();
  const t = useTranslations(language);

  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t.services.implementation.title,
      description: t.services.implementation.description
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: t.services.development.title,
      description: t.services.development.description
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: t.services.consulting.title,
      description: t.services.consulting.description
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t.services.training.title,
      description: t.services.training.description
    }
  ];

  return (
    <section id="uslugi" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 dark:bg-primary/20 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
