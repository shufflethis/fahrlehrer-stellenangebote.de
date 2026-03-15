import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, CheckCircle, TrendingUp, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';
import JobCard from '../components/JobCard';
import { JobListing } from '../types';

const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    postedDate: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedDate: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedDate: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedDate: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedDate: '2026-03-15'
  },
  {
    id: '6',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    postedDate: '2026-03-15'
  },
  {
    id: '7',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Alterlaa',
    location: 'Wien,Liesing',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-13'
  },
  {
    id: '8',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Donaustadt',
    location: 'Wien,Donaustadt',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-12'
  },
  {
    id: '9',
    title: 'Fahrlehrer (m/w/d)',
    company: 'ToTo77 GmbH Fahrschule',
    location: 'Dormagen',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-03-12'
  },
  {
    id: '10',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Fahrschule Schmidt GbR',
    location: 'Gunzenhausen am Altmühlsee',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-03-11'
  },
  {
    id: '11',
    title: 'Fahrlehrer/in m/w/d',
    company: 'Fahrschule Klein GmbH',
    location: 'Ansbach, Mittelfranken',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in m/w/d',
    postedDate: '2026-03-11'
  },
  {
    id: '12',
    title: 'Einrichtungsfachberater (m/w/d)',
    company: 'Wohn Schick GmbH + Co. KGSofort-Bewerbung',
    location: 'Haigerloch',
    type: 'Vollzeit',
    description: 'Einrichtungsfachberater (m/w/d)',
    postedDate: '2026-03-08'
  },
  {
    id: '13',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedDate: '2026-03-08'
  },
  {
    id: '14',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedDate: '2026-03-08'
  },
  {
    id: '15',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedDate: '2026-03-08'
  },
  {
    id: '16',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedDate: '2026-03-08'
  },
  {
    id: '17',
    title: 'Pflegefachkräfte oder Medizinische Fachangestellte (m/w/d) für die Dialyse',
    company: 'Nephrocare Salzgitter GmbH Medizinisches Versorgungszentrum',
    location: 'Salzgitter',
    type: 'Vollzeit',
    description: 'Pflegefachkräfte oder Medizinische Fachangestellte (m/w/d) für die Dialyse',
    postedDate: '2026-03-08'
  },
  {
    id: '18',
    title: 'Fahrlehrer/in',
    company: 'driveZone GmbH EASY DRIVERS',
    location: 'Enns',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-05'
  },
  {
    id: '19',
    title: 'Fahrlehrer/in',
    company: 'drivemistelbach - Fahrschul e Mistelbach e.U.',
    location: 'Mistelbach',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-04'
  },
  {
    id: '20',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Thomas Ehlenbeck Fahrschule',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-03-02'
  },
  {
    id: '21',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Ronald Müller',
    location: 'Zinnowitz, Ostseebad',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-02'
  },
  {
    id: '22',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule NOHA',
    location: 'Linz',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-01'
  },
  {
    id: '23',
    title: 'Fahrlehrer/in',
    company: 'my friends DEINE FAHRSCHULE',
    location: 'Ottensheim',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-02-27'
  },
  {
    id: '24',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Fahrschule Beckmann Inh. Gerrit Beckmann',
    location: 'Schlüchtern',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-27'
  },
  {
    id: '25',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Töff-Töff GmbH',
    location: 'Pfullingen',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-26'
  }
];

const FAQ_ITEMS = [
  {
    question: 'Was verdient ein Fahrlehrer in Deutschland?',
    answer: 'Das Einstiegsgehalt liegt bei ca. 2.800-3.200 Euro brutto/Monat (Klasse B). Erfahrene Fahrlehrer mit Zusatzklassen (CE, DE) können 3.800-5.000 Euro und mehr verdienen. Regionale Unterschiede und Anstellungsart (Festanstellung vs. freiberuflich) spielen ebenfalls eine Rolle.'
  },
  {
    question: 'Welche Voraussetzungen brauche ich, um Fahrlehrer zu werden?',
    answer: 'Sie benötigen ein Mindestalter von 21 Jahren, eine abgeschlossene Berufsausbildung oder Abitur, mindestens 3 Jahre Fahrpraxis (Klasse B), ein ärztliches Eignungszeugnis und ein Führungszeugnis. Die Fahrlehrerausbildung dauert ca. 12 Monate und ist im Fahrlehrergesetz (FahrlG) geregelt.'
  },
  {
    question: 'Wie lange dauert die Fahrlehrerausbildung?',
    answer: 'Die Ausbildung zum Fahrlehrer der Klasse BE dauert in der Regel 12 Monate. Sie gliedert sich in eine theoretische Ausbildung (ca. 8 Monate) an einer Fahrlehrerausbildungsstätte und ein viermonatiges Praktikum in einer Ausbildungsfahrschule.'
  },
  {
    question: 'Gibt es einen Fachkräftemangel bei Fahrlehrern?',
    answer: 'Ja, in Deutschland herrscht ein erheblicher Fachkräftemangel bei Fahrlehrern. Besonders gefragt sind Fahrlehrer mit Klasse A (Motorrad) und CE (LKW). Die Berufsaussichten gelten als exzellent und krisensicher, da der Führerschein weiterhin ein grundlegendes Bedürfnis bleibt.'
  },
  {
    question: 'Kann ich als Fahrlehrer auch in Teilzeit arbeiten?',
    answer: 'Ja, viele Fahrschulen bieten Teilzeitstellen an. Auch freiberufliche Tätigkeit ist möglich, bei der Sie Ihre Arbeitszeiten flexibel gestalten können. Gerade für Fahrlehrer mit Familie ist Teilzeitarbeit eine attraktive Option.'
  },
  {
    question: 'Was kostet eine Fahrlehrerausbildung?',
    answer: 'Die Kosten für die Fahrlehrerausbildung Klasse BE liegen zwischen 10.000 und 18.000 Euro, je nach Ausbildungsstätte und Region. Viele Ausbildungsstätten bieten Ratenzahlung an. Unter bestimmten Voraussetzungen ist eine Förderung durch die Agentur für Arbeit oder das Jobcenter möglich.'
  }
];

const GERMAN_CITIES = [
  'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main',
  'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen',
  'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg',
  'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster',
  'Mannheim', 'Karlsruhe', 'Augsburg', 'Wiesbaden', 'Potsdam',
  'Rostock', 'Erfurt', 'Mainz', 'Freiburg', 'Kiel'
];

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Job Listings Section - Mobile Prominent */}
      <section className="py-8 bg-white md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Aktuelle Fahrlehrer-Jobs</h2>
          <p className="text-slate-600 mb-4 text-sm">Die neuesten Stellenangebote</p>
          <div className="grid grid-cols-1 gap-4">
            {MOCK_JOBS.slice(0, 5).map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <Link to="/jobs" className="mt-4 block text-center bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Alle {MOCK_JOBS.length}+ Jobs ansehen
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/1920/1080?grayscale" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Karriere auf der <span className="text-blue-500">Überholspur</span>.
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Deutschlands spezialisierte Stellenbörse für Fahrlehrer, Fahrschulen und Bildungsträger. Finden Sie jetzt Ihren neuen Job oder qualifiziertes Personal.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Jobtitel, z.B. Fahrlehrer Klasse A"
                className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-grow relative border-t md:border-t-0 md:border-l border-slate-200">
              <MapPin className="absolute left-3 top-3.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Stadt oder PLZ"
                className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Link
              to="/jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center justify-center"
            >
              Suchen
            </Link>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm text-slate-400 font-medium">
            <span className="flex items-center justify-center"><CheckCircle size={16} className="mr-1 text-green-500" /> Über 500 aktuelle Jobs</span>
            <span className="flex items-center justify-center"><CheckCircle size={16} className="mr-1 text-green-500" /> Geprüfte Arbeitgeber</span>
          </div>
        </div>
      </section>

      {/* Featured Jobs - Desktop */}
      <section className="py-16 bg-white hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Aktuelle Top-Jobs</h2>
              <p className="text-slate-600 mt-2">Die neuesten Stellenangebote aus Ihrer Region</p>
            </div>
            <Link to="/jobs" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
              Alle Jobs ansehen <TrendingUp size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {MOCK_JOBS.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Für Arbeitgeber</h3>
              <p className="text-slate-600 mb-4">
                Erreichen Sie tausende qualifizierte Fahrlehrer. Nutzen Sie unsere KI-Tools zur Erstellung perfekter Anzeigen.
              </p>
              <Link to="/employer" className="text-blue-600 font-medium hover:underline">Mehr erfahren &rarr;</Link>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Für Jobsuchende</h3>
              <p className="text-slate-600 mb-4">
                Transparente Gehälter, Direktkontakt zu Fahrschulen und Karriereberatung. Kostenlos für Bewerber.
              </p>
              <Link to="/jobs" className="text-green-600 font-medium hover:underline">Jetzt bewerben &rarr;</Link>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Karriere-Ratgeber</h3>
              <p className="text-slate-600 mb-4">
                Alles über Fahrlehreranwärterschaft, Weiterbildungen nach § 33a FahrlG und Gehaltsentwicklung.
              </p>
              <Link to="/career" className="text-purple-600 font-medium hover:underline">Zum Ratgeber &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Der Markt für Fahrlehrer in Deutschland</h2>
            <article className="prose prose-slate max-w-none text-slate-600">
                <p>
                    Die Nachfrage nach qualifizierten Fahrlehrern in Deutschland ist so hoch wie nie zuvor.
                    Auf <strong>fahrlehrer-stellenangebote.de</strong> vernetzen wir moderne Fahrschulen mit motivierten Ausbildern.
                    Der Beruf des Fahrlehrers bietet nicht nur Krisensicherheit, sondern auch zunehmend attraktive Arbeitsbedingungen.
                </p>
                <p>
                    Egal ob Sie eine Anstellung in Vollzeit, Teilzeit oder auf Honorarbasis suchen – unser Portal deckt den gesamten Markt ab.
                    Besonders gefragt sind aktuell Fahrlehrer der Klassen A (Motorrad) und CE (LKW), da hier ein massiver Fachkräftemangel herrscht.
                    Nutzen Sie unsere GEO-optimierten Suchfunktionen, um genau die Stelle zu finden, die zu Ihrer Lebenssituation passt.
                </p>
            </article>
        </div>
      </section>

      {/* Geo SEO: Fahrlehrer-Jobs in deutschen Städten */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Fahrlehrer-Stellenangebote in Ihrer Stadt</h2>
          <p className="text-slate-600 mb-8">Finden Sie aktuelle Fahrlehrer-Jobs in den größten Städten Deutschlands.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {GERMAN_CITIES.map(city => (
              <Link
                key={city}
                to="/jobs"
                className="flex items-center gap-1.5 px-3 py-2.5 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition text-sm text-slate-700 hover:text-blue-700 font-medium"
              >
                <MapPin size={14} className="text-slate-400 flex-shrink-0" />
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Häufig gestellte Fragen</h2>
          <p className="text-slate-600 mb-8">Antworten auf die wichtigsten Fragen rund um den Fahrlehrerberuf.</p>
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-100 transition"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp size={20} className="text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Info Teaser */}
      <section className="py-16 bg-slate-900 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Karriere als Fahrlehrer starten</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Der Fahrlehrerberuf bietet Krisensicherheit, attraktive Gehälter und abwechslungsreiche Arbeit mit Menschen.
            Erfahren Sie alles über Ausbildung, Voraussetzungen, Gehalt und Zukunftschancen in unserem umfassenden Karriere-Ratgeber.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/career"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Zum Karriere-Ratgeber
            </Link>
            <Link
              to="/jobs"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-colors border border-white/20"
            >
              Offene Stellen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }) }} />
    </div>
  );
};

export default Home;
