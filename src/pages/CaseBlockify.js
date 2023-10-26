import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const getRandomLetter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const LetterAnimator = ({ target }) => {
  const [current, setCurrent] = useState(Array.from({ length: target.length }, getRandomLetter).join(''));
  const [progress, setProgress] = useState(0);
  
  const { p } = useSpring({
    from: { p: 0 },
    to: { p: 1 },
    config: { duration: 3000 },
    onFrame: ({ p }) => {
      setProgress(p);
    },
  });
  
  useEffect(() => {
    setCurrent((prev) => {
      return Array.from(target).map((char, index) => {
        if (Math.random() < progress) {
          return target[index];
        }
        return getRandomLetter();
      }).join('');
    });
  }, [progress, target]);

  return (
    <animated.div>
      {current}
    </animated.div>
  );
};

const App = () => {
  return (
    <LetterAnimator target="HelloWorld" />
  );
};

export default App;
