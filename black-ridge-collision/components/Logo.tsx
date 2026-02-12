import React from 'react';

interface LogoProps {
  className?: string;
  color?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = '', color = 'dark' }) => {
  const textColor = color === 'dark' ? 'text-slate-900' : 'text-white';
  const borderColor = color === 'dark' ? 'border-slate-900' : 'border-white';
  const strokeColor = color === 'dark' ? '#0f172a' : '#ffffff';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative border-2 ${borderColor} px-2 py-1`}>
        {/* Mountain Graphic Simulation */}
        <svg width="120" height="40" viewBox="0 0 120 40" className="absolute bottom-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <path d="M0 40 L20 25 L35 35 L50 15 L70 30 L90 10 L120 40" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
        
        <div className="flex flex-col items-center z-10 relative">
          <span className={`font-display font-bold tracking-[0.2em] text-lg uppercase leading-tight ${textColor}`}>
            Black Ridge
          </span>
        </div>
      </div>
      <span className={`font-display font-bold tracking-[0.3em] text-sm uppercase mt-1 ${textColor}`}>
        Collision
      </span>
    </div>
  );
};

export default Logo;