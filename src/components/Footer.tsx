
import { Github, Linkedin, Mail } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { useTranslations } from '@/utils/translations';

const Footer = () => {
  const { language } = useAppContext();
  const t = useTranslations(language);

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                MJ
              </div>
              <span className="ml-3 text-xl font-semibold">Mateusz Jankowski</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#o-mnie" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">{t.nav.about}</a></li>
              <li><a href="#moj-produkt" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">{t.nav.product}</a></li>
              <li><a href="#uslugi" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">{t.nav.services}</a></li>
              <li><a href="#kontakt" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.followMe}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
