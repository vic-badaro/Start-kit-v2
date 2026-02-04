import Image from 'next/image'
import React from 'react'
import { ServicesCarousel } from '@/components/ServicesCarousel'

const servicesData = [
  {
    id: '1',
    number: '01',
    title: 'Pesquisa<br />e Estratégia',
    description: 'Diagnóstico e Estratégia<br />de Experiência.',
    bgImage: '/images/card-bg-pink.svg',
    bgColor: '#8B1552',
    numberBgColor: '#ff1596',
    numberTextColor: '#ffcbe5',
    textColor: '#ffcbe5',
  },
  {
    id: '2',
    number: '02',
    title: 'Experience<br />Design',
    description: 'Design de Marcas, Produtos e Serviços.',
    bgImage: '/images/card-bg-yellow.svg',
    bgColor: '#C5E063',
    numberBgColor: '#354806',
    numberTextColor: '#e6ffa9',
    textColor: '#354806',
  },
  {
    id: '3',
    number: '03',
    title: 'Inovação<br />e Tecnologia',
    description: 'Tecnologia e Automação<br />da Experiência para sustentar.',
    bgImage: '/images/card-bg-purple.svg',
    bgColor: '#C0A0D9',
    numberBgColor: '#482f64',
    numberTextColor: '#deb3f1',
    textColor: '#482f64',
  },
  {
    id: '4',
    number: '01',
    title: 'Pesquisa<br />e Estratégia',
    description: 'Diagnóstico e Estratégia<br />de Experiência.',
    bgImage: '/images/card-bg-pink.svg',
    bgColor: '#8B1552',
    numberBgColor: '#ff1596',
    numberTextColor: '#ffcbe5',
    textColor: '#ffcbe5',
  },
  {
    id: '5',
    number: '02',
    title: 'Experience<br />Design',
    description: 'Design de Marcas, Produtos e Serviços.',
    bgImage: '/images/card-bg-yellow.svg',
    bgColor: '#C5E063',
    numberBgColor: '#354806',
    numberTextColor: '#e6ffa9',
    textColor: '#354806',
  },
  {
    id: '6',
    number: '03',
    title: 'Inovação<br />e Tecnologia',
    description: 'Tecnologia e Automação<br />da Experiência para sustentar.',
    bgImage: '/images/card-bg-purple.svg',
    bgColor: '#C0A0D9',
    numberBgColor: '#482f64',
    numberTextColor: '#deb3f1',
    textColor: '#482f64',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white py-6">
        <div className="mx-auto px-[68px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/badaro-logo.svg"
              alt="Badaro"
              width={147}
              height={34}
              className="h-[34px] w-[147px]"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-[70px]">
            <button className="flex items-center gap-2 text-black font-[400] text-[20px] leading-[24px]" style={{ fontFamily: 'var(--font-figtree)' }}>
              Soluções
              <Image src="/icons/chevron-down.svg" alt="" width={15} height={8} />
            </button>
            <button className="flex items-center gap-2 text-black font-[400] text-[20px] leading-[24px]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
              Clientes
              <Image src="/icons/chevron-down.svg" alt="" width={15} height={8} />
            </button>
            <a href="#" className="text-black font-[400] text-[20px] leading-[24px]" style={{ fontFamily: 'var(--font-figtree)' }}>
              Carreiras
            </a>
            <a href="#" className="text-black font-[400] text-[20px] leading-[24px]" style={{ fontFamily: 'var(--font-figtree)' }}>
              Ideias
            </a>
            <a href="#" className="text-black font-[400] text-[20px] leading-[24px]" style={{ fontFamily: 'var(--font-figtree)' }}>
              Sobre
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-8">
            {/* Contact Button */}
            <button className="bg-[#ff1596] rounded-[154px] px-6 py-3 flex items-center gap-[9px] text-white font-[500] text-[20px] leading-[22px]" style={{ fontFamily: 'var(--font-figtree)' }}>
              <Image src="/icons/ellipse.svg" alt="" width={12} height={12} className="w-3 h-3" />
              Contato
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-3">
              <Image src="/icons/globe.svg" alt="" width={21} height={21} />
              <button className="flex items-center gap-2 text-black font-[400] text-[19.65px]" style={{ fontFamily: 'var(--font-figtree)' }}>
                Português
                <Image src="/icons/chevron-down.svg" alt="" width={15} height={8} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black py-[120px]">
        <div className="mx-auto px-[185px]">
          {/* Main Heading */}
          <h1
            className="text-white font-[600] text-[82.71px] leading-[79.40px] mb-[57px] max-w-[1250px]"
            style={{
              fontFamily: 'var(--font-figtree)',
              letterSpacing: '-0.83px',
            }}
          >
            Mais do que entregar
            <br />
            projetos, criamos transformações sustentáveis.
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#a5aeb5] font-[400] text-[36px] leading-[40.68px] max-w-[658px] mb-[77px]"
            style={{
              fontFamily: 'var(--font-figtree)',
              letterSpacing: '-0.72px',
            }}
          >
            Integramos estratégia, design e engenharia para fazer negócios fluírem
            <br />— com impacto real e humano.
          </p>

          {/* Services Carousel */}
          <ServicesCarousel cards={servicesData} />
        </div>
      </section>
    </div>
  )
}
