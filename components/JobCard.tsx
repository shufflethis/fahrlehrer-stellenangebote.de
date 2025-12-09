import React from 'react';
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { JobListing } from '../types';

interface JobCardProps {
  job: JobListing;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center group">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl uppercase border border-blue-100">
          {job.company.substring(0, 2)}
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {job.title}
        </h3>
        <p className="text-slate-600 font-medium mb-2">{job.company}</p>
        
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-500">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1.5 text-slate-400" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-1.5 text-slate-400" />
            {job.type}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1.5 text-slate-400" />
            {job.postedDate}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {job.classes.map((cls) => (
            <span key={cls} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
              Kl. {cls}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
        <button className="w-full sm:w-auto bg-white border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center">
          Details
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;