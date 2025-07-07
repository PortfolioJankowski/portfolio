
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { useTranslations } from '@/utils/translations';

const ContactSection = () => {
  const { language } = useAppContext();
  const t = useTranslations(language);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const subject = (document.getElementById('subject') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;

  const content = `
    **Nowa wiadomość z formularza kontaktowego** 📩
    👤 Imię: ${name}
    ✉️ Email: ${email}
    📌 Temat: ${subject}
    💬 Wiadomość:
    ${message}
      `;

  await fetch('https://discord.com/api/webhooks/1391824408854663188/xJYlWRe_ppWPX-G4SY77HNTUD1vBKsS-5vlvV2nKRvA1Spbim9i-GNXy_5Ad7_rwZBQn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  });
     (document.getElementById('name') as HTMLInputElement).value = '';
      (document.getElementById('email') as HTMLInputElement).value = '';
      (document.getElementById('subject') as HTMLInputElement).value = '';
       (document.getElementById('message') as HTMLTextAreaElement).value = '';

  alert('Wiadomość wysłana');
  };

  

  return (
    <section id="kontakt" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{t.contact.formTitle}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {t.contact.formDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">{t.contact.form.name}</Label>
                      <Input id="name" placeholder={t.contact.form.namePlaceholder} className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">{t.contact.form.email}</Label>
                      <Input id="email" type="email" placeholder={t.contact.form.emailPlaceholder} className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">{t.contact.form.subject}</Label>
                    <Input id="subject" placeholder={t.contact.form.subjectPlaceholder} className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">{t.contact.form.message}</Label>
                    <Textarea id="message" placeholder={t.contact.form.messagePlaceholder} rows={5} className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 dark:text-gray-300">mat.jankowski99@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 dark:text-gray-300">+48 796 113 748</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 dark:text-gray-300">Katowice, Polska</span>
                </div>
              </div>
            </div>

            <Card className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t.contact.responseTime}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t.contact.responseDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
