import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Guarding',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your interest in S&P INTER GUARD. We will contact you shortly.");
    setFormState({ name: '', email: '', phone: '', service: 'Guarding', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-blue font-bold text-lg uppercase tracking-widest mb-2 font-thai">{t.contact.eyebrow}</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-thai mb-6">{t.contact.title}</h3>
            <p className="text-slate-600 mb-12 text-lg font-thai">
              {t.contact.description}
            </p>

            <div className="space-y-8 font-thai">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-brand-blue flex-shrink-0 mr-5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{t.contact.infoHeadquarters}</h4>
                  <p className="text-slate-600">123 Sukhumvit Road, Watthana<br/>Bangkok 10110, Thailand</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-brand-blue flex-shrink-0 mr-5">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{t.contact.infoPhone}</h4>
                  <p className="text-slate-600">+66 2 123 4567 (24/7 Hotline)<br/>+66 8 9876 5432 (Sales)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-brand-blue flex-shrink-0 mr-5">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{t.contact.infoEmail}</h4>
                  <p className="text-slate-600">contact@spinterguard.th<br/>careers@spinterguard.th</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 font-thai">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 font-thai">{t.contact.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labels.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none bg-slate-50"
                    placeholder={t.contact.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labels.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none bg-slate-50"
                    placeholder={t.contact.placeholders.phone}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labels.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none bg-slate-50"
                  placeholder={t.contact.placeholders.email}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labels.service}</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none bg-slate-50"
                >
                  <option value="Guarding">{t.contact.serviceOptions.guarding}</option>
                  <option value="Surveillance">{t.contact.serviceOptions.surveillance}</option>
                  <option value="Corporate">{t.contact.serviceOptions.corporate}</option>
                  <option value="Event">{t.contact.serviceOptions.event}</option>
                  <option value="Other">{t.contact.serviceOptions.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labels.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none bg-slate-50"
                  placeholder={t.contact.placeholders.message}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-blue-900 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>{t.contact.submit}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;