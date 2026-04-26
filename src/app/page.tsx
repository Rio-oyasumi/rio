
'use client';

import { useEffect, useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import FallingSakura from '@/components/FallingSakura';
import RunningMonkeys from '@/components/RunningMonkeys';
import LoveCatcher from '@/components/LoveCatcher';
import FinalQuestion from '@/components/FinalQuestion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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

      {/* Reasons Why Gallery */}
      <section className="w-full max-w-6xl px-4 py-24 z-10 space-y-16">
        <h2 className="text-3xl font-headline text-center text-rose-300 tracking-widest uppercase">
          A few reasons why...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:bg-card/60 transition-colors">
            <div className="bg-primary/20 p-4 rounded-full">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-body italic text-white/90">
              "If my thoughts were a map, they’d all eventually lead back to you."
            </p>
          </div>

          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:bg-card/60 transition-colors">
            <div className="bg-accent/20 p-4 rounded-full">
              <Star className="w-8 h-8 text-accent" />
            </div>
            <p className="text-lg font-body italic text-white/90">
              "Most people try to stand out; you were just built that way. It suits you."
            </p>
          </div>

          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:bg-card/60 transition-colors">
            <div className="bg-secondary/20 p-4 rounded-full">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-lg font-body italic text-white/90">
              "I was going to build this site about the stars, but I realized they’re a lot less interesting than you."
            </p>
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
