import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date('2026-01-31T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 my-6">
      <div className="flex flex-col items-center bg-white/80 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
        <span className="text-2xl font-bold text-slate-800">{timeLeft.days}</span>
        <span className="text-xs text-slate-600 uppercase tracking-wide">Days</span>
      </div>
      <div className="flex flex-col items-center bg-white/80 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
        <span className="text-2xl font-bold text-slate-800">{timeLeft.hours}</span>
        <span className="text-xs text-slate-600 uppercase tracking-wide">Hours</span>
      </div>
      <div className="flex flex-col items-center bg-white/80 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
        <span className="text-2xl font-bold text-slate-800">{timeLeft.minutes}</span>
        <span className="text-xs text-slate-600 uppercase tracking-wide">Min</span>
      </div>
      <div className="flex flex-col items-center bg-white/80 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
        <span className="text-2xl font-bold text-slate-800">{timeLeft.seconds}</span>
        <span className="text-xs text-slate-600 uppercase tracking-wide">Sec</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
