
import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, children, className = "" }) => {
  return (
    <div className={`bg-white border border-slate-200 p-6 rounded-xl hover:shadow-sm transition-shadow ${className}`}>
      <h3 className="text-xl font-semibold text-slate-800 mb-1">{title}</h3>
      {subtitle && <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wider">{subtitle}</p>}
      <div className="text-slate-600 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
};

export default Card;
