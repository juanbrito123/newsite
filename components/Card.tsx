
import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, children, className = "" }) => {
  return (
    <div className={`bg-white border-2 border-emerald-50 p-8 rounded-[32px] hover:shadow-xl hover:shadow-emerald-100 transition-all hover:border-emerald-200 group ${className}`}>
      <h3 className="text-2xl font-black text-emerald-900 mb-2 group-hover:text-emerald-600 transition-colors">{title}</h3>
      {subtitle && (
        <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-widest">
          {subtitle}
        </div>
      )}
      <div className="text-emerald-800/70 leading-relaxed text-sm font-medium">
        {children}
      </div>
    </div>
  );
};

export default Card;
