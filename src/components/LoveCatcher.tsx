
'use client';

import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

const POWER_UPS = [
  'Achievement Unlocked: Stunning & Sporty',
  'New Record: Most Beautiful Athlete Found',
  'Virtual Hug Sent! ❤️',
  'You are breathtakingly gorgeous!',
];

export default function LoveCatcher() {
  const [score, setScore] = useState(0);
  const [heartPos, setHeartPos] = useState({ x: 50, y: -10 });
  const [message, setMessage] = useState('Catch the Heart!');
  const [isPulsing, setIsPulsing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const resetHeart = () => {
    setHeartPos({ x: Math.random() * 80 + 10, y: -10 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartPos((prev) => {
        if (prev.y > 100) {
          return { x: Math.random() * 80 + 10, y: -10 };
        }
        return { ...prev, y: prev.y + 1 };
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleCatch = () => {
    setScore((s) => s + 1);
    setIsPulsing(true);
    setMessage(POWER_UPS[Math.floor(Math.random() * POWER_UPS.length)]);
    resetHeart();
    setTimeout(() => setIsPulsing(false), 500);
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[400px] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center border-accent/20">
      <div className="absolute top-4 left-4 text-xs font-semibold text-primary/80 tracking-widest uppercase">
        Love Catcher Game
      </div>
      <div className="mt-8 text-center px-4">
        <p className="text-xl font-headline italic text-accent">{message}</p>
        <p className="text-sm mt-1 opacity-60">Hearts Caught: {score}</p>
      </div>

      <div ref={containerRef} className="flex-1 w-full relative cursor-crosshair">
        <div
          onClick={handleCatch}
          className={`absolute cursor-pointer transition-transform duration-300 ${isPulsing ? 'scale-150' : 'scale-100 hover:scale-110'}`}
          style={{ left: `${heartPos.x}%`, top: `${heartPos.y}%` }}
        >
          <Heart className="text-primary fill-primary w-8 h-8 drop-shadow-[0_0_10px_rgba(255,128,188,0.8)]" />
        </div>
      </div>
    </div>
  );
}
