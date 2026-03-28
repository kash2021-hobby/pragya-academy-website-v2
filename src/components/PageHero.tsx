import { useState, useEffect } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  bgImages?: string[];
  textOnly?: boolean;
}

const PageHero = ({ title, subtitle, bgImage, bgImages, textOnly }: PageHeroProps) => {
  const images = bgImages || (bgImage ? [bgImage] : []);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (textOnly) {
    return (
      <section className="bg-navy py-16 md:py-20 flex items-center justify-center">
        <div className="text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-primary-foreground/80 text-lg">{subtitle}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${title} ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative text-center text-primary-foreground z-10 bg-black/50 px-8 py-5 rounded-xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-primary-foreground/80 text-lg">{subtitle}</p>}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PageHero;
