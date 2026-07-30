import React, { useEffect, useRef } from 'react';

export interface ParallaxProfilePhotoProps {
  src: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  shape?: 'circle' | 'square' | 'rounded';
  onClick?: () => void;
}

const ParallaxProfilePhoto: React.FC<ParallaxProfilePhotoProps> = ({
  src,
  alt = "Johnson T Profile Photo",
  className = "",
  containerClassName = "",
  shape = 'circle',
  onClick,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth / 5;
      const windowHeight = window.innerHeight / 5;
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;

      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const shapeStyles =
    shape === 'circle'
      ? 'rounded-full'
      : shape === 'rounded'
      ? 'rounded-2xl'
      : 'rounded-none';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden group ${shapeStyles} ${containerClassName}`}
    >
      {/* Background Image with Parallax translate3d */}
      <div
        ref={bgRef}
        role="img"
        aria-label={alt}
        className={`absolute -top-[5%] -left-[5%] w-[115%] h-[115%] bg-center bg-cover transition-transform duration-100 ease-out ${className}`}
        style={{
          backgroundImage: `url('${src}')`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};

export default ParallaxProfilePhoto;
