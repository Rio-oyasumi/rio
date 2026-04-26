
'use client';

import { useEffect, useState } from 'react';

type Monkey = {
  id: number;
  top: string;
  duration: string;
  delay: string;
};

export default function RunningMonkeys() {
  const [monkeys, setMonkeys] = useState<Monkey[]>([]);

  useEffect(() => {
    const newMonkeys = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 70 + 10}%`,
      duration: `${Math.random() * 10 + 15}s`,
      delay: `${Math.random() * 10}s`,
    }));
    setMonkeys(newMonkeys);
  }, []);

  return (
    <div className="monkey-container">
      {monkeys.map((monkey) => (
        <div
          key={monkey.id}
          className="running-monkey animate-monkey-run"
          style={{
            top: monkey.top,
            animationDuration: monkey.duration,
            animationDelay: monkey.delay,
          }}
        >
          {monkey.id % 2 === 0 ? '🐒' : '🙈'}
        </div>
      ))}
    </div>
  );
}
