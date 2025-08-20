"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function TimelineCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(320);
  const totalCards = 6;

  // Update scroll amount based on screen size
  useEffect(() => {
    const updateScrollAmount = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setScrollAmount(288 + 16); // w-72 (288px) + gap-4 (16px)
        } else if (window.innerWidth < 768) {
          setScrollAmount(304 + 24); // w-76 (304px) + gap-6 (24px)
        } else {
          setScrollAmount(320 + 32); // w-80 (320px) + gap-8 (32px)
        }
      }
    };

    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / scrollAmount);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const milestones = [
    {
      year: "2012",
      title: "Company Founded",
      description: "ARZIR established in Nanjing, China, with a vision to revolutionize recycling machinery manufacturing.",
      image: "/images/our journey/Company Founded.jpg",
      highlight: "Foundation Year"
    },
    {
      year: "2014",
      title: "First International Export",
      description: "Successfully exported our first recycling baler to Southeast Asia, marking the beginning of global expansion.",
      image: "/images/our journey/First International Export.png",
      highlight: "Global Reach"
    },
    {
      year: "2015",
      title: "New Manufacturing Facility",
      description: "Opened state-of-the-art 30,000㎡ production facility with advanced manufacturing capabilities.",
      image: "/images/our journey/New Manufacturing Facility.jpg",
      highlight: "Scale Up"
    },
    {
      year: "2017",
      title: "ISO Certification",
      description: "Achieved ISO 9001 certification, demonstrating our commitment to quality management systems.",
      image: "/images/our journey/ISO Certification.png",
      highlight: "Quality Excellence"
    },
    {
      year: "2019",
      title: "Global Service Network",
      description: "Established international offices and service centers to better serve customers worldwide.",
      image: "/images/our journey/Global Service Network.jpg",
      highlight: "Service Excellence"
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description: "Leading the industry with cutting-edge technology and sustainable manufacturing practices.",
      image: "/images/our journey/Innovation Leadership.jpg",
      highlight: "Future Ready"
    }
  ];

  return (
    <div className="relative">
      {/* Scrollable timeline container */}
      <div className="overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="flex gap-4 sm:gap-6 md:gap-8 pb-8 snap-x snap-mandatory overflow-x-auto scrollbar-hide" ref={containerRef}>
          {milestones.map((milestone) => (
            <div key={milestone.year} className="flex-shrink-0 w-72 sm:w-76 md:w-80 snap-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-arzir-gray-200 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-arzir-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  {/* Year badge */}
                  <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 bg-arzir-primary text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    {milestone.year}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 text-center">
                    <Image
                      src={milestone.image}
                      alt={`${milestone.year} ${milestone.title}`}
                      width={320}
                      height={240}
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 304px, 320px"
                      className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-lg sm:rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-black mb-2 sm:mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-arzir-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {milestone.description}
                  </p>
                  
                  {/* Highlight tag */}
                  <div className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1 bg-arzir-gray-100 text-arzir-gray-700 rounded-full text-xs font-medium">
                    {milestone.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - Outside container to avoid overlap */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 md:left-4 z-20">
        <button 
          onClick={scrollPrev}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-arzir-primary hover:bg-arzir-primary hover:text-white cursor-pointer border border-arzir-gray-200"
        >
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 rotate-180" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 md:right-4 z-20">
        <button 
          onClick={scrollNext}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-arzir-primary hover:bg-arzir-primary hover:text-white cursor-pointer border border-arzir-gray-200"
        >
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentIndex === index ? 'bg-arzir-primary' : 'bg-arzir-gray-300 hover:bg-arzir-primary'
            }`}
          />
        ))}
      </div>
    </div>
  );
}