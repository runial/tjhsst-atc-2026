import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: readonly string[];
  showNavigationDots?: boolean;
  hFull?: boolean;
}

export function Carousel({ images, showNavigationDots, hFull }: CarouselProps) {
  showNavigationDots ??= true;
  hFull ??= false;

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [initialZoomTriggered, setInitialZoomTriggered] = useState(false); // New state

  useEffect(() => {
    setHasMounted(true);
    // Trigger initial zoom after a short delay
    const timer = setTimeout(() => {
      setInitialZoomTriggered(true);
    }, 50); // Small delay to allow initial render
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative w-full h-[300px] ${hFull ? 'md:h-full' : 'md:h-[400px]'} overflow-hidden rounded-2xl`}>
      {images.map((src, index) => {
        const isCurrent = index === currentIndex;
        // The image that was just current and is now sliding out
        // This is the image at prevIndexRef.current, but only if it's not the same as currentIndex
        const isLeaving = hasMounted && index === prevIndexRef.current && index !== currentIndex;

        let containerClasses = 'absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out';

        if (isCurrent) {
          containerClasses += ' translate-x-0 z-10';
        } else if (isLeaving) {
          containerClasses += ' -translate-x-full z-5';
        } else {
          // All other images are off-screen to the right, without transition
          containerClasses += ' translate-x-full z-0';
        }

        let imageScaleClass = 'scale-100';
        let imageDurationClass = 'duration-1000'; // Default for non-active images

        if (isCurrent) {
          imageScaleClass = initialZoomTriggered ? 'scale-125' : 'scale-100';
          imageDurationClass = 'duration-[4500ms]'; // Current image zooms over 3s
        } else if (isLeaving) {
          imageScaleClass = 'scale-125'; // Image leaving, maintain zoom
          imageDurationClass = 'duration-1000'; // Match container slide duration
        }

        const imageClasses = `w-full h-full object-cover transition-transform ease-linear ${imageScaleClass} ${imageDurationClass}`;

        return (
          <div key={src} className={containerClasses}>
            <img
              src={src}
              alt={`image ${index + 1} of atc club`}
              className={imageClasses}
            />
          </div>
        );
      })}
      {showNavigationDots && (<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-bg' : 'bg-bg opacity-50'} focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>)}
    </div>
  );
}