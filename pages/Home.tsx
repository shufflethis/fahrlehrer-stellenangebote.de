import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import JobCard from '../components/JobCard';
import { JobListing } from '../types';

const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Thomas Ehlenbeck Fahrschule',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-03-02'
  },
  {
    id: '2',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Ronald Müller',
    location: 'Zinnowitz, Ostseebad',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-02'
  },
  {
    id: '3',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule NOHA',
    location: 'Linz',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-03-01'
  },
  {
    id: '4',
    title: 'Fahrlehrer/in',
    company: 'my friends DEINE FAHRSCHULE',
    location: 'Ottensheim',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-02-27'
  },
  {
    id: '5',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Fahrschule Beckmann Inh. Gerrit Beckmann',
    location: 'Schlüchtern',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-27'
  },
  {
    id: '6',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Töff-Töff GmbH',
    location: 'Pfullingen',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-26'
  },
  {
    id: '7',
    title: 'Fahrlehrer (m/w/d)',
    company: 'AWB Abfallwirtschaftsbetriebe Köln GmbH',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-18'
  },
  {
    id: '8',
    title: 'Fahrlehrer m/w/d',
    company: 'Tommy\'s Fahrschule',
    location: 'Barsinghausen',
    type: 'Vollzeit',
    description: 'Fahrlehrer m/w/d',
    postedDate: '2026-02-17'
  },
  {
    id: '9',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Mobilitätsakademie&Fahrschule Andrea Wolf',
    location: 'Bad Kreuznach',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-17'
  },
  {
    id: '10',
    title: 'Fahrlehrer/in',
    company: 'U3ver',
    location: 'Wien,Rudolfsheim-Fünfhaus',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-02-16'
  },
  {
    id: '11',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Oliver - Inh. D. Nedeljkovic',
    location: 'Wels',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-02-13'
  },
  {
    id: '12',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Jan König Fahrschule Cars & Bikes',
    location: 'Bad Lobenstein',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-12'
  },
  {
    id: '13',
    title: 'Fahrlehrer/in (m/w/d)',
    company: 'Easy-Drive GmbH',
    location: 'Dessau-Roßlau',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in (m/w/d)',
    postedDate: '2026-02-10'
  },
  {
    id: '14',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Wien Nord',
    location: 'Wien,Donaustadt',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-02-09'
  },
  {
    id: '15',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Fahrschule Belau',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-05'
  },
  {
    id: '16',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule "Columbus"',
    location: 'Wien,Leopoldstadt',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-02-05'
  },
  {
    id: '17',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Mission Personal GmbH',
    location: 'Dresden',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-02-05'
  },
  {
    id: '18',
    title: 'Fahrlehrer*in (m/w/d)',
    company: 'damago GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Fahrlehrer*in (m/w/d)',
    postedDate: '2026-02-02'
  },
  {
    id: '19',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Favoriten',
    location: 'Wien,Favoriten',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-01-29'
  },
  {
    id: '20',
    title: 'Fahrlehrer/in',
    company: 'SCHOPPER Klaus Ing.',
    location: 'Eisenstadt',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-01-29'
  },
  {
    id: '21',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Björn Schweinhagen',
    location: 'Harzgerode',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-01-29'
  },
  {
    id: '22',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Schottenring',
    location: 'Wien,Innere Stadt',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-01-26'
  },
  {
    id: '23',
    title: 'Fahrlehrer (m/w/d)',
    company: 'Fahrschule Wolf',
    location: 'Rotenburg an der Fulda',
    type: 'Vollzeit',
    description: 'Fahrlehrer (m/w/d)',
    postedDate: '2026-01-23'
  },
  {
    id: '24',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Rath e.U.',
    location: 'Melk',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-01-21'
  },
  {
    id: '25',
    title: 'Fahrlehrer/in',
    company: 'Fahrschule Philip Staudinge r e.U.',
    location: 'Kirchdorf an der Krems',
    type: 'Vollzeit',
    description: 'Fahrlehrer/in',
    postedDate: '2026-01-20'
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
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
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400 font-medium">
            <span className="flex items-center"><CheckCircle size={16} className="mr-1 text-green-500" /> Über 500 aktuelle Jobs</span>
            <span className="flex items-center"><CheckCircle size={16} className="mr-1 text-green-500" /> Geprüfte Arbeitgeber</span>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-white">
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
    </div>
  );
};

export default Home;