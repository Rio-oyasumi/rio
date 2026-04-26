
'use client';

import { useEffect, useState } from 'react';

type Petal = {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
};

export default function FallingSakura() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 10}px`,
      duration: `${Math.random() * 5 + 7}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="falling-sakura-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal animate-sakura-fall"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
          }}
        />
      ))}
    </div>
  );
}
