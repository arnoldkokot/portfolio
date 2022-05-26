import { useState, useEffect } from "react";

const useReveal = (ref) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return revealed;
};

export default useReveal;
