import { useEffect } from 'react';

const useDisableScroll = (): void => {
  useEffect(() => {
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
    };
  }, []);
};

export default useDisableScroll;
