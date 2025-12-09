import React, { useState } from 'react';
import { Sparkles, Check, Copy, Loader2 } from 'lucide-react';
import { generateJobDescription } from '../services/geminiService';

const Employers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    requirements: '',
    benefits: ''
  });
  const [generatedAd, setGeneratedAd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!formData.name || !formData.location) return;
    setLoading(true);
    const result = await generateJobDescription(formData.name, formData.location, formData.requirements, formData.benefits);
    setGeneratedAd(result);
    setLoading(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Finden Sie die besten Fahrlehrer für Ihre Fahrschule</h1>
          <p className="text-xl text-slate-300 mb-8">
            Effizientes Recruiting mit Unterstützung modernster KI. Erstellen Sie in Sekunden professionelle Stellenanzeigen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        {/* Generator Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
          <div className="border-b border-slate-100 bg-slate-50 p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800 flex items-center">
              <Sparkles className="text-blue-600 mr-2" /> 
              KI-Stellenanzeigen-Generator
            </h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">Kostenlos testen</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Input Side */}
            <div className="p-6 md:p-8 space-y-6 border-r border-slate-100">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name der Fahrschule</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="z.B. Fahrschule Müller"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Standort</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="z.B. Berlin Charlottenburg"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Gesuchte Klassen / Anforderungen</label>
                <textarea 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                  placeholder="z.B. Klasse B und BE zwingend, A wäre toll. Geduldiger Umgang mit Schülern."
                  value={formData.requirements}
                  onChange={e => setFormData({...formData, requirements: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Was bieten Sie? (Benefits)</label>
                <textarea 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                  placeholder="z.B. Eigener Firmenwagen, 30 Tage Urlaub, Weihnachtsgeld, modernes E-Auto."
                  value={formData.benefits}
                  onChange={e => setFormData({...formData, benefits: e.target.value})}
                />
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={loading || !formData.name}
                className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center transition-all ${
                  loading || !formData.name 
                    ? 'bg-slate-300 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30'
                }`}
              >
                {loading ? <><Loader2 className="animate-spin mr-2"/> Generiere...</> : <><Sparkles className="mr-2"/> Anzeige generieren</>}
              </button>
            </div>

            {/* Output Side */}
            <div className="p-6 md:p-8 bg-slate-50 min-h-[500px] flex flex-col">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Vorschau</label>
              <div className="flex-grow bg-white border border-slate-200 rounded-lg p-6 shadow-sm overflow-y-auto prose prose-sm prose-slate max-w-none">
                {generatedAd ? (
                  <div dangerouslySetInnerHTML={{ __html: generatedAd }} />
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center p-8">
                    <Sparkles size={48} className="mb-4 text-slate-300" />
                    <p>Füllen Sie das Formular aus, um mit Hilfe von Gemini AI in Sekunden eine perfekte Stellenanzeige zu erstellen.</p>
                  </div>
                )}
              </div>
              {generatedAd && (
                 <button 
                   className="mt-4 flex items-center justify-center w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-2 rounded-lg font-medium transition"
                   onClick={() => navigator.clipboard.writeText(generatedAd.replace(/<[^>]*>?/gm, ''))}
                 >
                   <Copy size={16} className="mr-2" /> Text kopieren
                 </button>
              )}
            </div>
          </div>
        </div>

        {/* Pricing / CTA Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-xl mb-4">Basis Inserat</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">99€ <span className="text-sm text-slate-500 font-normal">/ 30 Tage</span></p>
                <ul className="text-left space-y-3 mb-8 mt-6">
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Online für 30 Tage</li>
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Standard Sichtbarkeit</li>
                </ul>
                <button className="w-full bg-slate-100 text-slate-800 font-bold py-2 rounded hover:bg-slate-200 transition">Auswählen</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">EMPFOHLEN</div>
                <h3 className="font-bold text-xl mb-4">Premium Inserat</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">149€ <span className="text-sm text-slate-500 font-normal">/ 30 Tage</span></p>
                <ul className="text-left space-y-3 mb-8 mt-6">
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Top-Platzierung</li>
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Highlighted Design</li>
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Social Media Post inkl.</li>
                </ul>
                <button className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">Auswählen</button>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-xl mb-4">Jahres-Flat</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">990€ <span className="text-sm text-slate-500 font-normal">/ Jahr</span></p>
                <ul className="text-left space-y-3 mb-8 mt-6">
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Unbegrenzte Inserate</li>
                    <li className="flex items-center text-sm text-slate-600"><Check size={16} className="text-green-500 mr-2" /> Arbeitgeber-Profil Seite</li>
                </ul>
                <button className="w-full bg-slate-100 text-slate-800 font-bold py-2 rounded hover:bg-slate-200 transition">Kontaktieren</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;