import React, { useEffect, useState } from 'react';
import { BookOpen, TrendingUp, DollarSign, Award, ChevronDown } from 'lucide-react';
import { generateInterviewQuestions } from '../services/geminiService';

const CareerInfo: React.FC = () => {
  const [interviewQuestions, setInterviewQuestions] = useState<string>("");
  const [loadingQuestions, setLoadingQuestions] = useState(false);

  const loadQuestions = async () => {
    setLoadingQuestions(true);
    const qs = await generateInterviewQuestions();
    setInterviewQuestions(qs);
    setLoadingQuestions(false);
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Image */}
      <div className="h-64 md:h-80 w-full relative overflow-hidden">
        <img 
          src="https://picsum.photos/id/184/1920/600" 
          alt="Fahrschulauto auf der Straße" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Berufsbild Fahrlehrer</h1>
            <p className="text-slate-200 mt-2 text-lg">Alles zu Ausbildung, Gehalt und Zukunftschancen.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Table of Contents Sticky Sidebar */}
        <aside className="hidden lg:block col-span-1">
          <div className="sticky top-24 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Inhalt</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#berufsbild" className="hover:text-blue-600 transition">Das Berufsbild</a></li>
              <li><a href="#gehalt" className="hover:text-blue-600 transition">Gehalt & Verdienst</a></li>
              <li><a href="#voraussetzungen" className="hover:text-blue-600 transition">Voraussetzungen</a></li>
              <li><a href="#zukunft" className="hover:text-blue-600 transition">Zukunftsaussichten</a></li>
              <li><a href="#interview" className="hover:text-blue-600 transition">Vorstellungsgespräch</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content Article */}
        <article className="col-span-1 lg:col-span-3 prose prose-slate max-w-none prose-lg">
          <section id="berufsbild">
            <h2 className="flex items-center text-slate-900">
              <BookOpen className="mr-3 text-blue-600" /> Der Fahrlehrerberuf
            </h2>
            <p>
              Fahrlehrer zu sein bedeutet mehr als nur "rechts sitzen und Anweisungen geben". Es ist ein 
              anspruchsvoller pädagogischer Beruf, der hohe Verantwortung, psychologisches Geschick und technisches 
              Verständnis erfordert. Sie bereiten Menschen auf die Teilnahme am Straßenverkehr vor – und tragen 
              somit maßgeblich zur Verkehrssicherheit in Deutschland bei.
            </p>
            <p>
              Der Arbeitsalltag ist abwechslungsreich. Er teilt sich auf in den theoretischen Unterricht im 
              Schulungsraum und die praktische Ausbildung im Fahrzeug. Dabei arbeiten Sie mit unterschiedlichsten 
              Menschen zusammen, vom 17-jährigen Schüler bis hin zu Berufskraftfahrern in der Weiterbildung.
            </p>
          </section>

          <section id="gehalt" className="mt-12">
            <h2 className="flex items-center text-slate-900">
              <DollarSign className="mr-3 text-green-600" /> Gehalt und Verdienstmöglichkeiten
            </h2>
            <p>
              Das Gehalt eines Fahrlehrers variiert in Deutschland stark und hängt von der Region, der Anstellungsart 
              (Festanstellung vs. Freiberuflich) und den unterrichteten Klassen ab. 
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 my-6 not-prose">
              <h4 className="font-bold text-lg mb-2">Durchschnittsgehälter (Brutto / Monat)</h4>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Fahrlehrer Klasse B (Einsteiger):</span> <span className="font-mono font-semibold">2.800€ - 3.200€</span></li>
                <li className="flex justify-between"><span>Fahrlehrer Klasse B (Erfahren):</span> <span className="font-mono font-semibold">3.200€ - 4.000€</span></li>
                <li className="flex justify-between"><span>Fahrlehrer Klasse CE/DE (LKW/Bus):</span> <span className="font-mono font-semibold">3.800€ - 5.000€+</span></li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Stand: 2024. Angaben sind Schätzwerte ohne Gewähr.</p>
            </div>
            <p>
              Besonders Fahrlehrer, die auch für LKW (CE) und Bus (DE) ausbilden dürfen, sind extrem gefragt und 
              können oft überdurchschnittliche Gehälter verhandeln. Auch die Position als Fahrschulleiter oder 
              die Selbstständigkeit mit einer eigenen Fahrschule bieten weitere finanzielle Perspektiven.
            </p>
          </section>

          <section id="voraussetzungen" className="mt-12">
            <h2 className="flex items-center text-slate-900">
              <Award className="mr-3 text-purple-600" /> Voraussetzungen für die Ausbildung
            </h2>
            <p>
              Um Fahrlehrer zu werden, müssen gemäß Fahrlehrergesetz (FahrlG) bestimmte Voraussetzungen erfüllt sein:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mindestalter 21 Jahre</li>
              <li>Geistige und körperliche Eignung (ärztliches Zeugnis)</li>
              <li>Persönliche Zuverlässigkeit (Führungszeugnis)</li>
              <li>Abgeschlossene Berufsausbildung (in einem beliebigen Beruf) ODER Abitur/Fachabitur</li>
              <li>Besitz der Fahrerlaubnisklassen, für die ausgebildet werden soll (für Klasse B: Mindestens 3 Jahre Fahrpraxis)</li>
            </ul>
          </section>

          <section id="zukunft" className="mt-12">
            <h2 className="flex items-center text-slate-900">
              <TrendingUp className="mr-3 text-red-600" /> Zukunftsaussichten & KI
            </h2>
            <p>
              Die Automobilbranche wandelt sich. E-Mobilität und autonomes Fahren verändern auch das Berufsbild. 
              Dennoch bleibt der Fahrlehrer unersetzlich. Die Bedienung von Assistenzsystemen muss gelernt sein, 
              und die psychologische Komponente der Angstbewältigung bei Fahrschülern kann keine KI übernehmen.
              Die Berufsaussichten gelten als <strong>exzellent</strong> und <strong>krisensicher</strong>.
            </p>
          </section>

           <section id="interview" className="mt-12 bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="flex items-center text-slate-900 !mt-0">
               Trainer-Tipp: Das Vorstellungsgespräch
            </h2>
            <p>
                Bereiten Sie sich optimal auf Ihr nächstes Gespräch vor. Unsere KI hat typische Fragen für Fahrlehrer analysiert.
            </p>
            
            {!interviewQuestions && (
                <button 
                    onClick={loadQuestions}
                    disabled={loadingQuestions}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center"
                >
                    {loadingQuestions ? 'Lade Fragen...' : 'KI-Fragen anzeigen'} <ChevronDown className="ml-2" />
                </button>
            )}

            {interviewQuestions && (
                <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                    <div dangerouslySetInnerHTML={{ __html: interviewQuestions }} />
                </div>
            )}
          </section>

        </article>
      </div>
    </div>
  );
};

export default CareerInfo;