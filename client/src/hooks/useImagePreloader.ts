import { useState, useEffect } from 'react';

interface UseImagePreloaderReturn {
  isLoading: boolean;
  progress: number;
  error: string | null;
  loadedImages: string[];
}

interface UseImagePreloaderOptions {
  timeout?: number; // Timeout in ms (default: 5000)
  enablePreloadLinks?: boolean; // Add <link rel="preload"> tags (default: true)
  minLoadTime?: number; // Minimum load time in ms (default: 1000)
}

export const useImagePreloader = (
  imageUrls: string[],
  options: UseImagePreloaderOptions = {}
): UseImagePreloaderReturn => {
  const { timeout = 5000, enablePreloadLinks = true, minLoadTime = 1000 } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    if (!imageUrls.length) {
      setIsLoading(false);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    let timeoutId: NodeJS.Timeout;
    const preloadLinks: HTMLLinkElement[] = [];
    const startTime = Date.now();

    // Add preload link tags for faster network requests
    if (enablePreloadLinks) {
      imageUrls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'image';
        link.crossOrigin = 'anonymous';
        
        // Determine image type from URL extension
        const extension = url.split('.').pop()?.toLowerCase();
        if (extension === 'webp') {
          link.type = 'image/webp';
        } else if (extension === 'png') {
          link.type = 'image/png';
        } else if (extension === 'jpg' || extension === 'jpeg') {
          link.type = 'image/jpeg';
        }
        
        document.head.appendChild(link);
        preloadLinks.push(link);
      });
    }

    // Preload images using Image constructor
    const preloadImage = (url: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          const currentProgress = (loadedCount / imageUrls.length) * 100;
          setProgress(currentProgress);
          setLoadedImages(prev => [...prev, url]);
          resolve(url);
        };
        
        img.onerror = () => {
          reject(new Error(`Failed to load image: ${url}`));
        };
        
        img.src = url;
      });
    };

    // Set timeout fallback
    timeoutId = setTimeout(() => {
      setError(`Image loading timed out after ${timeout}ms`);
      setIsLoading(false);
      setProgress(100);
    }, timeout);

    // Preload all images
    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        clearTimeout(timeoutId);
        
        // Ensure minimum load time has passed
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
          setProgress(100);
        }, remainingTime + 100);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        console.error('Error preloading images:', err);
        setError(err.message);
        
        // Ensure minimum load time even with errors
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
          setProgress(100);
        }, remainingTime + 500);
      });

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      
      // Remove preload link tags
      preloadLinks.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(imageUrls), timeout, enablePreloadLinks]);

  return {
    isLoading,
    progress,
    error,
    loadedImages,
  };
};