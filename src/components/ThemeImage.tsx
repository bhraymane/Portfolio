// components/ThemeImage.tsx
'use client';

import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  ...props
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
} & Omit<ImageProps, 'src' | 'alt'>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <div 
        style={{ 
          width: props.width || '100%', 
          height: props.height || '100%',
          backgroundColor: 'var(--background)'
        }} 
      />
    );
  }

  return (
    <Image
      src={resolvedTheme === 'dark' ? darkSrc : lightSrc}
      alt={alt}
      {...props}
    />
  );
}