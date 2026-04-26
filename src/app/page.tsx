
'use client';

import { useEffect, useState } from 'react';
import { Heart, Star, Sparkles, Lock, MousePointer2, Fingerprint } from 'lucide-react';
import FallingSakura from '@/components/FallingSakura';
import RunningMonkeys from '@/components/RunningMonkeys';
import LoveCatcher from '@/components/LoveCatcher';
import FinalQuestion from '@/components/FinalQuestion';
import { cn } from '@/lib/utils';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // States for the interactive cards
  const [revealed1, setRevealed1] = useState(false);
  const [revealed2, setRevealed2] = useState(false);
  const [revealed3, setRevealed3] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleScratch = () => {
    if (revealed2) return;
    setScratchProgress((prev) => {
      const next = prev + 5;
      if (next >= 100) {
        setRevealed2(true);
        return 100;
      }
      return next;
    });
  };

  const isThirdUnlocked = revealed1 && revealed2;

  return (
    <main className="min-h-screen relative flex flex-col items-center">
      <FallingSakura />
      <RunningMonkeys />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center z-10 space-y-8 animate-in fade-in duration-1000">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-cursive text-white max-w-5xl leading-tight animate-breathing-glow py-4">
          For the one who brings the stars into my night.
        </h1>
        <p className="text-xl md:text-2xl font-body italic text-accent max-w-2xl opacity-90">
          Som ♥, you are breathtakingly beautiful, and I’m completely obsessed with you.
        </p>
        <div className="animate-bounce mt-12">
          <Heart className="w-8 h-8 text-primary fill-primary" />
        </div>
      </section>

      {/* Interactive Reasons Why Gallery */}
      <section className="w-full max-w-6xl px-4 py-24 z-10 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-headline text-rose-300 tracking-widest uppercase">
            A few reasons why...
          </h2>
          <p className="text-muted-foreground italic text-sm">Follow the clues to unlock my heart's secrets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Click to Reveal */}
          <div 
            onClick={() => setRevealed1(true)}
            className={cn(
              "relative glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4 cursor-pointer transition-all duration-500 overflow-hidden min-h-[250px] justify-center",
              !revealed1 ? "hover:scale-105" : "bg-card/60"
            )}
          >
            {!revealed1 ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-primary/20 p-4 rounded-full animate-pulse">
                  <Fingerprint className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-primary/80 uppercase tracking-tighter">Tap to open</p>
              </div>
            ) : (
              <div className="animate-in zoom-in fade-in duration-500 flex flex-col items-center space-y-4">
                <Heart className="w-8 h-8 text-primary fill-primary/20" />
                <p className="text-lg font-body italic text-white/90">
                  "If my thoughts were a map, they’d all eventually lead back to you."
                </p>
              </div>
            )}
          </div>

          {/* Card 2: Scratch to Reveal */}
          <div 
            onMouseMove={handleScratch}
            onTouchMove={handleScratch}
            className={cn(
              "relative glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4 transition-all duration-500 overflow-hidden min-h-[250px] justify-center group",
              !revealed2 ? "cursor-none" : "bg-card/60"
            )}
          >
            {!revealed2 ? (
              <>
                <div 
                  className="absolute inset-0 bg-neutral-600 flex flex-col items-center justify-center z-20 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: 1 - (scratchProgress / 100) }}
                >
                  <div className="bg-white/10 p-4 rounded-full mb-2">
                    <MousePointer2 className="w-6 h-6 text-white/50" />
                  </div>
                  <p className="text-xs font-bold text-white/40 uppercase">Rub to scratch</p>
                </div>
                <p className="text-white/20 select-none">Scratching...</p>
              </>
            ) : (
              <div className="animate-in zoom-in fade-in duration-500 flex flex-col items-center space-y-4">
                <Star className="w-8 h-8 text-accent fill-accent/20" />
                <p className="text-lg font-body italic text-white/90">
                  "Most people try to stand out; you were just built that way. It suits you."
                </p>
              </div>
            )}
          </div>

          {/* Card 3: Conditional Locked Card */}
          <div 
            onClick={() => isThirdUnlocked && setRevealed3(true)}
            className={cn(
              "relative glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4 transition-all duration-500 overflow-hidden min-h-[250px] justify-center",
              !isThirdUnlocked ? "opacity-50 grayscale cursor-not-allowed" : "cursor-pointer hover:bg-card/60",
              revealed3 && "bg-card/60"
            )}
          >
            {!revealed3 ? (
              <div className="flex flex-col items-center space-y-4">
                <div className={cn(
                  "p-4 rounded-full",
                  isThirdUnlocked ? "bg-secondary/40 animate-bounce" : "bg-muted"
                )}>
                  {isThirdUnlocked ? <Sparkles className="w-8 h-8 text-secondary" /> : <Lock className="w-8 h-8 text-muted-foreground" />}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/60">
                  {isThirdUnlocked ? "Ready to unlock" : "Solve the others first"}
                </p>
              </div>
            ) : (
              <div className="animate-in zoom-in fade-in duration-500 flex flex-col items-center space-y-4">
                <Sparkles className="w-8 h-8 text-secondary fill-secondary/20" />
                <p className="text-lg font-body italic text-white/90">
                  "I was going to build this site about the stars, but I realized they’re a lot less interesting than you."
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Game Section */}
      <section className="w-full max-w-4xl px-4 py-24 z-10 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-headline text-white">A Little Something Extra</h2>
          <p className="text-accent italic">Because I know you love a good challenge.</p>
        </div>
        <LoveCatcher />
      </section>

      {/* Final Question Section */}
      <section className="w-full max-w-4xl px-4 py-32 z-10">
        <FinalQuestion />
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-xs text-muted-foreground/50 z-10">
        Made with ❤️ for Som. Always yours.
      </footer>
    </main>
  );
}
