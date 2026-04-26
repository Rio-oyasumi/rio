
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

export default function FinalQuestion() {
  const [noButtonPos, setNoButtonPos] = useState<{ 
    top: string; 
    left: string; 
    position: 'static' | 'relative' 
  }>({ 
    top: 'auto', 
    left: 'auto', 
    position: 'static' 
  });
  const [isAccepted, setIsAccepted] = useState(false);

  const handleNoHover = () => {
    const x = Math.random() * 150 - 75; // Random movement range
    const y = Math.random() * 150 - 75;
    setNoButtonPos({
      position: 'relative',
      top: `${y}px`,
      left: `${x}px`,
    });
  };

  const handleYes = () => {
    setIsAccepted(true);
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ['circle'],
        colors: ['#FF80BC', '#F5BFED', '#FFFFFF'],
        scalar: 2
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        shapes: ['circle'],
        colors: ['#FF80BC', '#F5BFED', '#FFFFFF'],
        scalar: 2
      });
    }, 250);
  };

  if (isAccepted) {
    return (
      <div className="text-center p-12 glass rounded-3xl animate-in fade-in zoom-in duration-1000">
        <h2 className="text-4xl font-headline mb-4 text-primary animate-breathing-glow">
          The best decision ever!
        </h2>
        <p className="text-xl italic text-accent">I love you more than words can say, Som ♥.</p>
        <div className="mt-8 text-6xl">🌸✨❤️</div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8 py-12">
      <h2 className="text-4xl font-headline text-white drop-shadow-md">
        Will you be my Partner?
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button
          size="lg"
          onClick={handleYes}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-8 text-2xl rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
        >
          Yes!
        </Button>
        <div className="h-20 flex items-center justify-center min-w-[120px]">
          <Button
            variant="outline"
            onMouseEnter={handleNoHover}
            className="border-primary/50 text-primary/70 rounded-full transition-all duration-75"
            style={{
              position: noButtonPos.position,
              top: noButtonPos.top,
              left: noButtonPos.left,
            }}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
