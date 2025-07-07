
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Zap, Shield } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { useTranslations } from '@/utils/translations';

const ProductSection = () => {
  const { language } = useAppContext();
  const t = useTranslations(language);

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: t.product.benefits.performance },
    { icon: <Shield className="w-5 h-5" />, text: t.product.benefits.security },
    { icon: <Users className="w-5 h-5" />, text: t.product.benefits.userFriendly }
  ];

  return (
    <section id="moj-produkt" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
            {t.product.badge}
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.product.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.product.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/20 dark:to-blue-900/20 rounded-2xl p-1 shadow-xl">
              <img
                src="ngosik landing.jpg"
                alt="Product mockup"
                className="w-full h-97 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg">
              <Star className="w-8 h-8" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.product.benefitsTitle}</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary">{benefit.icon}</div>
                  <span className="text-gray-700 dark:text-gray-300">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Card className="mb-8 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{t.product.targetAudienceTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {t.product.targetAudience}
                </CardDescription>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => window.open('mailto:mat.jankowski99@gmail.com')}>
                {t.product.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
