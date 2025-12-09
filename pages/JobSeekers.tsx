import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import JobCard from '../components/JobCard';
import { JobListing } from '../types';

const JOB_DATA: JobListing[] = [
  { id: '1', title: 'Fahrlehrer Klasse BE (m/w/d)', company: 'Fahrschule Müller', location: 'Berlin', type: 'Vollzeit', classes: ['B', 'BE'], postedDate: 'Gestern', description: '' },
  { id: '2', title: 'LKW-Fahrlehrer CE gesucht', company: 'Bildungszentrum West', location: 'Köln', type: 'Vollzeit', classes: ['C', 'CE'], postedDate: 'Vor 2 Tagen', description: '' },
  { id: '3', title: 'Motorrad-Instruktor (Klasse A)', company: 'Fahrschule Speed', location: 'München', type: 'Saison', classes: ['A', 'A2'], postedDate: 'Vor 5 Tagen', description: '' },
  { id: '4', title: 'Fahrlehreranwärter (m/w/d)', company: 'Akademie Nord', location: 'Hamburg', type: 'Ausbildung', classes: ['B'], postedDate: 'Heute', description: '' },
  { id: '5', title: 'Fahrlehrer in Teilzeit', company: 'Fahrschule Klein', location: 'Stuttgart', type: 'Teilzeit', classes: ['B'], postedDate: 'Vor 1 Woche', description: '' },
];

const JobSeekers: React.FC = () => {
  const [filterClass, setFilterClass] = useState<string>('Alle');
  const [search, setSearch] = useState('');

  const filteredJobs = JOB_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || job.location.toLowerCase().includes(search.toLowerCase());
    const matchesClass = filterClass === 'Alle' || job.classes.includes(filterClass);
    return matchesSearch && matchesClass;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Finden Sie Ihren Traumjob als Fahrlehrer</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Durchsuchen Sie hunderte Stellenangebote von geprüften Fahrschulen in ganz Deutschland. Filtern Sie nach Führerscheinklassen, Standort und Anstellungsart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Filter size={20} />
                <h2>Filter</h2>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Suche</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Titel, Stadt..." 
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Klasse</label>
                <select 
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                >
                  <option value="Alle">Alle Klassen</option>
                  <option value="B">Klasse B/BE</option>
                  <option value="A">Klasse A (Motorrad)</option>
                  <option value="C">Klasse C/CE (LKW)</option>
                  <option value="D">Klasse D (Bus)</option>
                </select>
              </div>

              <div className="mb-6">
                 <label className="block text-sm font-medium text-slate-700 mb-2">Anstellungsart</label>
                 <div className="space-y-2">
                   {['Vollzeit', 'Teilzeit', 'Ausbildung', 'Aushilfe'].map(type => (
                     <label key={type} className="flex items-center">
                       <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300" />
                       <span className="ml-2 text-sm text-slate-600">{type}</span>
                     </label>
                   ))}
                 </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">Filter anwenden</button>
            </div>
          </div>

          {/* Job List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="mb-4 text-slate-500 text-sm">
              {filteredJobs.length} Ergebnisse gefunden
            </div>
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-500">Keine Jobs gefunden, die Ihren Kriterien entsprechen.</p>
                <button 
                  onClick={() => {setSearch(''); setFilterClass('Alle');}}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;