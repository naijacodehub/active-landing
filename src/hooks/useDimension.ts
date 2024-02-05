import { useEffect, useState } from 'react';

export default function useDimension() {
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
      window.addEventListener('resize', () => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
      });
      return () => {
        window.removeEventListener('resize', () => {
          setInnerHeight(window.innerHeight);
          setInnerWidth(window.innerWidth);
        });
      };
    }
  }, []);
  return { height: innerHeight, width: innerWidth };
}
