'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'

interface ServiceCard {
  id: string
  number: string
  title: string
  description: string
  bgImage: string
  bgColor: string
  numberBgColor: string
  numberTextColor: string
  textColor: string
}

interface ServicesCarouselProps {
  cards: ServiceCard[]
}

export function ServicesCarousel({ cards }: ServicesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 3,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div>
      {/* Navigation Buttons */}
      <div className="flex justify-end mb-[118px] gap-2">
        <button
          onClick={scrollPrev}
          className="w-[52px] h-[52px] rounded-full bg-[#262C31] flex items-center justify-center hover:bg-[#363c41] transition-colors"
          aria-label="Previous slide"
        >
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.4107,37.5905l-10.61,-11.528l10.61,-11.527M14.4107,26.0625h25.93" stroke="#7A848B" strokeWidth="2.59364" transform="translate(-13.8, -14.5)"/>
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101.8007,14.4095l10.61,11.527l-10.61,11.528M112.8107,25.9365h-25.94" stroke="black" strokeWidth="2.59364" transform="translate(-86.87, -14.4)"/>
          </svg>
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-[8px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-[0_0_calc(33.333%-5.33px)] min-w-0"
            >
              <div
                className="rounded-[30px] p-12 relative overflow-hidden h-[558px] flex flex-col"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-[600] text-[21.04px] leading-[20.20px] mb-[218px]"
                  style={{
                    backgroundColor: card.numberBgColor,
                    color: card.numberTextColor,
                    fontFamily: 'var(--font-rethink-sans)',
                    letterSpacing: '-0.21px',
                  }}
                >
                  {card.number}
                </div>
                <h3
                  className="font-[600] text-[50px] leading-[48px] mb-[31px]"
                  style={{
                    color: card.textColor,
                    fontFamily: 'var(--font-rethink-sans)',
                    letterSpacing: '-0.50px',
                  }}
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <p
                  className="font-[400] text-[30px] leading-[31.50px]"
                  style={{
                    color: card.textColor,
                    fontFamily: 'var(--font-rethink-sans)',
                    letterSpacing: '-0.30px',
                  }}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
