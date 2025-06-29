import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function AutomatenAufstellen() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Anfrage erfolgreich gesendet!');
        setIsSuccess(true);
        setFormData({ email: '', message: '' });
      } else {
        setSubmitMessage('Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <NextSeo
        title="Eigenen Zigarettenautomaten aufstellen - Zigarettenautomatkarte.de"
        description="Erfahren Sie, wie Sie einfach und schnell einen Zigarettenautomaten an Ihrem Standort aufstellen können. Persönliche Beratung und professionelle Umsetzung."
        canonical="https://www.zigarettenautomatkarte.de/automaten-aufstellen"
        openGraph={{
          url: 'https://www.zigarettenautomatkarte.de/automaten-aufstellen',
          title: 'Eigenen Zigarettenautomaten aufstellen - Zigarettenautomatkarte.de',
          description: 'Erfahren Sie, wie Sie einfach und schnell einen Zigarettenautomaten an Ihrem Standort aufstellen können. Persönliche Beratung und professionelle Umsetzung.',
          images: [
            {
              url: 'https://www.zigarettenautomatkarte.de/screenshot.png',
              width: 800,
              height: 600,
              alt: 'Zigarettenautomat aufstellen',
            },
          ],
          site_name: 'Zigarettenautomatkarte.de',
        }}
      />
      <header className="bg-white shadow-lg py-4">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Logo" width={32} height={32} />
          </Link>
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            Zurück zur Startseite
          </Link>
        </nav>
      </header>

      <section className="bg-gray-900 text-white py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Eigenen Automaten aufstellen
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Verwandeln Sie Ihren Standort in eine lukrative Einnahmequelle. Wir begleiten Sie von der Idee bis zur Inbetriebnahme.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>

      <main className="flex-grow">
        {/* How it works Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">So funktioniert's</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-extrabold text-indigo-600 mb-4">1</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Interesse bekunden</h3>
                <p className="text-gray-600 leading-relaxed">Füllen Sie unser einfaches Kontaktformular aus und teilen Sie uns Ihr Interesse mit.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-extrabold text-indigo-600 mb-4">2</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Persönliche Beratung</h3>
                <p className="text-gray-600 leading-relaxed">Unsere Experten kontaktieren Sie, um den optimalen Standort zu bewerten und alle Fragen zu klären.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-extrabold text-indigo-600 mb-4">3</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Automatenaufstellung</h3>
                <p className="text-gray-600 leading-relaxed">Nach erfolgreicher Planung wird der Zigarettenautomat an Ihrem Standort installiert.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gray-50 rounded-xl shadow-2xl p-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Interesse? Kontaktieren Sie uns!</h2>
              <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed">
                Füllen Sie das untenstehende Formular aus, um eine persönliche Beratung zu erhalten und den besten Weg für Ihr Automaten-Geschäft zu finden.
              </p>

           
              <form onSubmit={handleSubmit} className="space-y-6">
                

                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Anfrage senden
                </button>
              </form>

              {submitMessage && (
                <div className={`text-center mt-6 text-xl font-bold ${isSuccess ? 'text-green-600' : 'text-gray-700'}`}>
                  {submitMessage}
                </div>
              )}

            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}