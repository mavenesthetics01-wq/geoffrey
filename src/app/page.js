"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowLeft, Menu, X,
} from "lucide-react";

const photos = {
  hero: "/images/geoffrey2.png",
  hero_mobile: "/images/geoffreymb.png",
  doctor: "/images/second.jpg",
  training: "/images/third.png",
  inject1: "/images/carosule.jpg",
  inject2: "/images/carosule1.jpg",
  inject3: "/images/carosule2.jpg",
  inject4: "/images/lip.png",
  inject5: "/images/naseltrip.png",
  face: "/images/fivethsection.png",
  face2: "/images/face.png",
  laser: "/images/lASERS.jpg",
  wellness: "/images/wellness.png",
  skin: "/images/eight.jpg",
  dermat: "/images/dermat.png",
  regen: "/images/regen.png",
  model: "/images/nine.jpg",
  trainingVideo: "/videos/training.mp4",
};

const mediaLogos = [
  { src: "/brands/vogue.png", alt: "Vogue" },
  { src: "/brands/peaklife.png", alt: "PeakLife" },
  { src: "/brands/vogue.png", alt: "Vogue" },
  { src: "/brands/chronicle.png", alt: "Chronicle" },
  { src: "/brands/grazia.png", alt: "Grazia" },
  { src: "/brands/cosmopolitan.png", alt: "Cosmopolitan" },
  { src: "/brands/hindustan-times.png", alt: "Hindustan Times" },
  { src: "/brands/economic-times.png", alt: "Economic Times" },
  { src: "/brands/bazaar.png", alt: "Bazaar" },
  { src: "/brands/freepress.png", alt: "Free Press Journal" },
  { src: "/brands/pod.png", alt: "The Pod" },
];

const injectables = [
  ["BOTOX & WRINKLE RELAXER", "Soften expression lines, smooth wrinkles, and achieve a naturally refreshed, youthful appearance with precision wrinkle-relaxing treatments.", photos.inject1],
  ["BARBIETOX & CALF TOX", "Refine body contours with targeted muscle-relaxing treatments designed to create a more elongated, graceful silhouette and subtly slimmer calves.", photos.inject2],
  ["Facial Balancing & Jawline", "Enhance facial harmony and define the jawline with precision treatments tailored to your natural proportions for a refined, balanced appearance.", photos.inject3],
  ["Lip Architecture & Contou", "Sculpt and refine the lips with precise attention to proportion, structure, contour, and symmetry for a naturally elegant result.", photos.inject4],
  ["Nasal Tip and Nasal Flare", "Refine the nasal tip and soften nasal flare with precise, minimally invasive treatments designed to enhance nasal definition while preserving natural facial harmony.", photos.inject5]
];

// const skinTreatments = [
//   ["IPL (Intense Pulsed Light)", "Light-based treatment options for selected tone and pigmentation concerns."],
//   ["CHEMICAL PEELS", "Medical-grade peel options selected for individual skin concerns."],
//   ["DERMAFRAC", "A facial treatment approach focused on cleansing and hydration."],
//   ["HYDRAFACIAL", "A facial treatment focused on cleansing, exfoliation, and hydration."],
//   ["RF", "Explore radiofrequency-based skin treatment options."],
//   ["MNRF", "Discuss microneedling and radiofrequency treatment options."],
//   ["MICRONEEDLING", "Review collagen-induction treatment options with a clinician."],
// ];

// const bodyProcedures = [
//   ["Tummy Tuck (Abdominoplasty)", "Discuss abdominal contouring and muscle repair where appropriate."],
//   ["Comprehensive Mommy Makeover", "A coordinated plan based on individual anatomy and goals."],
//   ["High-Definition Liposuction", "Learn about body-contouring options and candidacy."],
//   ["Radiofrequency Skin Tightening", "Explore technology-based skin treatment options."],
// ];

// const breastProcedures = [
//   [["Vertical Scar Mastopexy", "Review breast-lift techniques, goals, and potential trade-offs."],
//    ["Dual-Plane Augmentation", "Discuss implant options, placement, and individualized planning."]],
//   [["Lift + Implants", "Understand combined procedure planning and recovery considerations."],
//    ["Implant Removal & Recontouring", "Explore implant removal and reconstructive options with a surgeon."]],
// ];

// const laserTreatments = [
//   ["Halo Laser", "Hybrid fractional laser treatment options for selected skin concerns."],
//   ["Broadband Light (BBL)", "Light-based options for selected pigmentation and redness concerns."],
//   ["Forever Clear", "Discuss light-based approaches for acne-prone skin."],
//   ["Moxi Laser", "Explore gentle fractional laser options and recovery expectations."],
// ];

// const results = [
//   ["Tummy Tuck", photos.model],
//   ["Body Contouring", photos.face],
//   ["Facial Rejuvenation", photos.skin],
//   ["Injectables", photos.inject1],
// ];

// function Eyebrow({ children }) {
//   return <p className="mb-4 font-sans text-xs uppercase tracking-[.2em] text-[#eaa274]">{children}</p>;
// }

// function SectionTitle({ eyebrow, children }) {
//   return <div className="mb-10"><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-display text-4xl uppercase leading-tight text-[#eaa274] sm:text-5xl lg:text-6xl">{children}</h2></div>;
// }

// function TextLink({ children, href = "#consult" }) {
//   return <a href={href} className="mt-8 inline-flex items-center gap-3 border-b border-white/70 pb-2 font-sans text-xs font-semibold uppercase tracking-[.12em] transition hover:border-[#eaa274] hover:text-[#eaa274]">{children}<ArrowUpRight size={16} /></a>;
// }

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [formSent, setFormSent] = useState(false);
  const trackRef = useRef(null);

  const moveCarousel = (direction) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: direction * trackRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  function TrainingVideo() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
      const section = sectionRef.current;
      const video = videoRef.current;

      if (!section || !video) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        {
          threshold: 0.15,
        }
      );

      observer.observe(section);

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <div
        ref={sectionRef}
        className="group relative mx-auto aspect-[2/1] w-full max-w-[1360px] overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          src={photos.trainingVideo}
          poster={photos.training}
          muted
          playsInline
          preload="auto"
          loop
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#03091b]/25 transition-opacity duration-500 group-hover:bg-[#03091b]/10" />
      </div>
    );
  }

  const navItems = [
    ["About", "#about"], ["Injectables", "#injectables"], 
    ["Skin", "#skin"], ["Lasers", "#lasers"], ["Dermat", "#dermat"],
    ["Wellness", "#wellness"], ["Regen", "#regen"],
  ];

  return (
    <main id="top" className="relative w-full min-h-screen overflow-x-hidden bg-[#03091b] text-[#f6f2f5]">
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 flex h-[76px] w-full items-center justify-between border-b border-white/15 bg-[#280C24] px-6 md:h-[88px] md:px-[7.5%]">
        <a
          href="#top"
          className="font-display whitespace-nowrap text-2xl italic tracking-wider"
        >
          Dr. Geoffrey Vaz
        </a>

        <button
          className="text-white md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#280C24] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs uppercase tracking-widest transition hover:text-[#eaa274]"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>



     
{/* Hero */}
<section className="relative isolate flex min-h-[50svh] w-full items-start overflow-hidden bg-[radial-gradient(ellipse_at_72%_48%,#50133f_0%,#260b26_43%,#170818_100%)] px-4 pt-[105px] pb-8 md:h-screen md:min-h-[720px] md:items-center md:px-[8%] md:pt-[88px] md:pb-0">

  {/* Background overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#120414]/20 to-transparent" />

  {/* Left Content */}
  <div className="relative z-20 w-[58%] md:w-[65%] md:-translate-y-2">

    {/* Main Heading */}
    <div className="relative">
      <div className="relative">

        {/* GEOFFREY */}
        <h1 className="relative z-10 whitespace-nowrap font-zapf text-[clamp(34px,10vw,82px)] leading-[0.95] font-medium tracking-normal uppercase text-white md:text-[131px] md:leading-[124px]">
          GEOFFREY
        </h1>

        {/* VAZ */}
        <span className="absolute left-[72%] top-[62%] z-0 whitespace-nowrap font-zapf text-[clamp(34px,8.5vw,68px)] font-medium leading-[1.13] tracking-normal uppercase bg-gradient-to-b from-[#B74DAA] to-[#E9C1E4] bg-clip-text text-transparent md:left-[63%] md:top-[62%] md:text-[clamp(42px,7.16vw,110px)] md:left-[55%]">
          VAZ
        </span>

      </div>
    </div>

    {/* Subtitle */}
    <div className="relative z-10 mt-6 md:mt-10">

      <h2 className="font-display bg-gradient-to-b from-[#B74DAA] to-[#E9C1E4] bg-clip-text text-transparent text-[clamp(24px,5vw,44px)] leading-[1.15] md:text-4xl lg:text-[3rem] md:leading-[1.25]">
        MD Dermatologist
        <br />
        & Medical Aesthetics Expert
      </h2>

      {/* Experience */}
      <p className="mt-4 font-sans text-[11px] font-bold uppercase tracking-wider text-white sm:text-lg md:mt-6 md:text-base">
        15+ YEARS <span className="text-[9px] font-medium sm:text-sm">OF EXPERIENCE</span>
      </p>

      {/* Consultation */}
      <a
        href="#consult"
        className="mt-4 inline-flex h-[45px] w-[180px] items-center justify-center bg-white px-4 py-3 font-sans text-[11px] font-bold uppercase tracking-wide text-[#101326] shadow-lg transition-all duration-300 sm:h-[57px] sm:w-[280px] sm:px-9 sm:py-5 sm:text-sm"
      >
        Book Consultation
      </a>

    </div>
  </div>

  {/* Doctor Image */}
  <div className="pointer-events-none absolute bottom-0 right-0 z-10 flex h-[93%] w-[48%] items-end justify-end md:right-[18%] md:h-[47%] md:w-[55%] md:justify-center">

    <picture className="h-full w-full relative left-[20px]">
      {/* Mobile image */}
      <source
        media="(max-width: 767px)"
        srcSet={photos.hero_mobile}
      />

      {/* Desktop image */}
      <img
        src={photos.hero}
        alt="Dr. Geoffrey Vaz"
        fetchPriority="high"
        className="h-full w-full origin-bottom object-contain object-bottom drop-shadow-2xl md:scale-[2]"
      />
    </picture>

  </div>

</section>

<section className="w-full overflow-hidden bg-[#03091b] py-4">
  <div className="flex w-max items-center animate-media-scroll">
    {[...mediaLogos, ...mediaLogos].map((logo, index) => (
      <div
        key={`${logo.alt}-${index}`}
        className="flex h-[55px] min-w-[190px] shrink-0 items-center justify-center px-5 md:min-w-[220px] md:px-6 md:h-[75px]"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className={`block max-h-[58px] max-w-[185px] w-auto h-auto object-contain brightness-0 invert ${
            ["Cosmopolitan", "Free Press Journal", "The Pod"].includes(logo.alt)
              ? "scale-[1.35]"
              : ""
          }`}
        />
      </div>
    ))}
  </div>
</section>



<section id="about" className="scroll-mt-[96px] mt-[1px] mb-[10px] grid w-full bg-[#03091b] grid-cols-1 gap-4 p-[15px] lg:mt-[40px] lg:mb-[10px] lg:grid-cols-[637px_1fr] lg:gap-0 lg:px-0 lg:py-0 md:scroll-mt-[108px]">
  {/* ================= LEFT IMAGE ================= */}
  <div
    className="
      relative
      h-[300px]
      w-full
      overflow-hidden

      lg:h-[708px]
      lg:w-[637px]
    "
  >
    <img
      src={photos.doctor}
      alt="Dr. Geoffrey Vaz at his clinic"
      loading="lazy"
      className="
        block
        h-full
        w-full
        object-cover
        object-center
      "
    />
  </div>

  {/* ================= RIGHT CONTENT ================= */}
  <div
    className="
      flex
      w-full
      flex-col
      justify-between

      px-0
      py-0

      lg:h-[708px]
      lg:px-[7%]
      lg:py-[3%]
    "
  >
    {/* ================= TOP CONTENT ================= */}
    <div>
      {/* Heading */}
      <h2
        className="
          font-zapf
          text-[clamp(24px,3vw,48px)]
          font-medium
          uppercase
          leading-[1.15]
          tracking-[0.02em]
          text-[#eaa274]
        "
      >
        The Surgeon &amp; Artist
      </h2>

      {/* Quote */}
      <blockquote
        className="
          mt-5
          border-l-2
          border-[#eaa274]
          bg-[#11172b]
          px-7
          py-4
          font-sans
          text-[14px] leading-[1.45] text-[#e0dce5] md:py-4 md:text-[16px] md:mt-8
        "
      >

        “Precision is my discipline, and subtlety is my signature.
        I want you to look like yourself, at your best.”
      </blockquote>

      {/* Paragraph 1 */}
      <p
        className="
          mt-5
          font-zapf
          text-[14px] leading-[1.45] text-[#e0dce5] md:text-[18px] md:mt-8
        "
      >
        Facial Aesthetic Specialist and national and international
        trainer educating doctors in advanced dermatology and
        aesthetic techniques.
      </p>

      {/* Paragraph 2 */}
      <p
        className="
          mt-4
          font-zapf
          text-[14px] leading-[1.45] text-[#e0dce5] md:text-[18px] 
        "
      >
        Mentored by global leaders Dr. Arthur Swift, Dr. Woffles Wu,
        and Dr. Mauricio de Maio, Dr. Vaz emphasizes subtle, natural
        results. His expertise spans medical dermatology, advanced
        skin treatments, facial aesthetics, and hair restoration
        using a holistic approach that links skin and hair health
        to hormonal, metabolic, and lifestyle factors. He serves
        underserved communities through R.K. Mission, Jeevan Jyoti,
        and Prerna Healthcare.
      </p>

      {/* Paragraph 3 */}
      <p
        className="
          mt-4
          font-zapf
          text-[14px] leading-[1.45] text-[#e0dce5] md:text-[18px]
        "
      >
        A former footballer and athlete, he applies discipline and
        precision to complex conditions like acne, eczema, and
        psoriasis. He is also a trusted skin and hair expert for
        Femina Miss India, Miss Diva, and Mr. India contestants,
        supporting winners at international pageants including
        Miss World, Miss Supranational, Miss Cosmoworld, and
        Mr. World.
      </p>

      {/* Paragraph 4 */}
      <p
        className="
          mt-4
          font-zapf
          text-[14px] leading-[1.45] text-[#e0dce5] md:text-[18px]
        "
      >
        His insight into human behavior enriches his approach,
        viewing dermatology as understanding the individual beyond
        treatment.
      </p>
    </div>

    {/* ================= SIGNATURE ================= */}
    <div
      className="
        mt-6
        text-left

        lg:mt-8
        lg:text-right
        md:mt-10
    "
    >
      <p
        className="
          font-zapf
          leading-tight
          text-[clamp(20px,3vw,28px)]
          text-[#eaa274]
          md:text-[28px]
        "
      >
        <span className="mr-2">—</span>
        Geoffrey Vaz, M.D.
      </p>

      <p
        className="
          mt-1
          font-sans
          text-[13px]
          uppercase
          tracking-wide
          text-[#c3bdca]
        "
      >
        ABPS Diplomat • Quad-A Surgical Director
      </p>
    </div>
  </div>
</section>



{/* Training With Doctor Section */}

<section
  id="training"
  className="w-full bg-[#03091b] px-6 pb-16 pt-10 md:px-[7.5%] md:pb-20 md:pt-30"
>
  {/* Section Heading */}
  <div className="mx-auto mb-9 max-w-5xl text-center">
    <h2 className="font-zapf text-[24px] font-medium uppercase leading-tight tracking-wide text-[#eaa274] sm:text-4xl md:text-[46px]">
      Training With Doctor
    </h2>

    <p className="mx-auto mt-5 max-w-5xl font-zapf text-base leading-relaxed text-[#d8d5df] sm:text-lg">
      Dr. Vaz trains doctors to be correct, not just confident. Across 150+ workshops and 500+ doctors, his programmes teach the anatomical safety, 
      complication management and clinical decision-making that most short courses skip.
    </p>
  </div>

  {/* Training Video */}
  <TrainingVideo />
</section>

{/* <section
  id="training"
  className="w-full bg-[#03091b] px-6 pb-16 pt-10 md:px-[7.5%] md:pb-20 md:pt-30"
>
  <div className="mx-auto mb-9 max-w-5xl text-center">
    <h2 className="font-zapf text-[24px] font-medium uppercase leading-tight tracking-wide text-[#eaa274] sm:text-4xl md:text-[46px] ">
      Training With Doctor
    </h2>

    <p className="mx-auto mt-5 max-w-5xl font-zapf text-base leading-relaxed text-[#d8d5df] sm:text-lg">
      Not just another filler. Sculptra is a biostimulatory aesthetic
      injectable that helps stimulate your own natural collagen
      production to smooth facial wrinkles and improve skin tightness,
      revealing a refreshed-looking you.
    </p>
  </div>

  <div className="group relative mx-auto w-full max-w-[1360px] overflow-hidden bg-black aspect-[2/1]">

    <img
      src={photos.training}
      alt="Dr. Geoffrey Vaz performing an aesthetic treatment"
      className="absolute inset-0 h-full w-full object-cover object-center"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-[#03091b]/45" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-[60px] sm:w-[60px]">
        <svg
          viewBox="0 0 24 24"
          className="ml-1 h-7 w-7 fill-[#03091b]"
          aria-hidden="true"
        >
          <path d="M8 5.5v13l10-6.5-10-6.5Z" />
        </svg>
      </div>
    </div>

  </div>
</section> */}



      {/* Injectables */}
      {/* <section id="injectables" className="bg-[#03091b] px-6 py-20 md:px-[7.5%] md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionTitle eyebrow="Precision treatments">Injectables</SectionTitle>
          <div className="mb-10 flex shrink-0 gap-3">
            <button onClick={() => moveCarousel(-1)} aria-label="Previous treatments" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-12 md:w-12"><ArrowLeft /></button>
            <button onClick={() => moveCarousel(1)} aria-label="Next treatments" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-12 md:w-12"><ArrowRight /></button>
          </div>
        </div>
        <div ref={trackRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {injectables.map(([title, description, image]) => <article key={title} className="group relative min-h-[390px] w-[85%] shrink-0 snap-start overflow-hidden bg-[#17182e] sm:w-[calc(50%-8px)] lg:min-h-[430px] lg:w-[calc((100%-2rem)/3)]">
            <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent to-[#03081a]" />
            <div className="absolute bottom-0 z-10 p-5 md:p-6"><h3 className="mb-2 font-sans text-base font-semibold uppercase">{title}</h3><p className="font-display text-base leading-relaxed text-[#e0dce5]">{description}</p></div>
          </article>)}
        </div>
        <div className="text-center"><TextLink>View All Injectables</TextLink></div>
      </section> */}



<section
  id="injectables"
  className="scroll-mt-[96px] w-full overflow-hidden bg-[#03091b] py-7 md:py-20 md:pl-[8%] md:scroll-mt-[108px]"
>

  <div className="mb-8 flex items-center justify-between pl-6 pr-6 md:mb-14">
    <h2 className="font-zapf text-[28px] font-medium uppercase leading-tight text-[#eaa274] md:text-[48px]">
      Injectables
    </h2>

  <div className="md:pl-[8%] md:pr-[8%]">
    <div className="flex shrink-0 gap-3">
      <button
        onClick={() => moveCarousel(-1)}
        aria-label="Previous treatments"
        className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-14 md:w-14"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={() => moveCarousel(1)}
        aria-label="Next treatments"
        className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-14 md:w-14"
      >
        <ArrowRight />
      </button>
    </div>
    </div>
  </div>

  <div
    ref={trackRef}
    className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pl-6 pr-0 pb-4 md:gap-7 md:pl-[7%] md:pr-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
  >
    {[injectables[1], injectables[0], ...injectables.slice(2)].map(
      ([title, description, image]) => (
        <article
          key={title}
          className="group relative h-[250px] w-[90vw] shrink-0 snap-start overflow-hidden bg-[#11172b] sm:w-[65vw] md:h-[400px] md:w-[390px]"
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#292039]/75 to-[#292039]/95 backdrop-blur-[3px]" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-5">
            <h3 className="mb-3 font-sans text-[17px] font-semibold uppercase tracking-wide text-white md:text-[19px]">
              {title}
            </h3>

            <p className="font-zapf text-[15px] leading-[1.5] text-[#f0eaf2] md:text-base">
              {description}
            </p>
          </div>
        </article>
      )
    )}
  </div>
</section>


<section
  className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050b20] bg-inherit bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${photos.face})`,
  }}
>
  {/* Content layered over the full-width background image */}
  <div className="relative z-10 flex min-h-[100svh] w-full items-center">
    <div className="ml-auto w-full px-6 py-10 sm:px-10 md:w-[66%] md:py-12 md:pl-0 md:pr-[7.5%]">

      <h2 className="font-zapf text-[clamp(24px,3vw,48px)] uppercase leading-[1.2] text-[#eaa274]">
        Skin That Feels Like You Again
      </h2>

      <p className="mt-5 max-w-[1000px] font-display text-base leading-relaxed text-[#e0dce5] md:text-lg">
        Not just another filler. Sculptra is a biostimulatory aesthetic
        injectable that helps stimulate your own natural collagen production
        to smooth facial wrinkles and improve skin tightness, revealing a
        refreshed-looking you.
      </p>

      <div className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [
            "01",
            "Sculptra",
            "Stimulates your skin's own collagen to rebuild volume gradually, for a soft, natural lift that keeps improving over weeks.",
          ],
          [
            "02",
            "Rich PL",
            "Improves skin density, texture and resilience from within for a firmer, healthier finish.",
          ],
          [
            "03",
            "HArmonyCa",
            "Combines hyaluronic acid and calcium hydroxylapatite for an immediate lift and contour, with collagen stimulation that continues over time.",
          ],
          [
            "04",
            "Skin Boosters",
            "Replenish hydration and enhance skin quality from within, improving radiance, texture, elasticity, and overall skin health for a fresh, luminous finish.",
          ],
          [
            "05",
            "PDRN",
            "Harness regenerative skin-repair technology to support collagen, hydration, texture, and elasticity, restoring a healthier, more youthful-looking complexion",
          ],
        ].map(([number, title, description]) => (
          <article
            key={number}
            className="flex min-h-[190px] flex-col bg-white/[0.09] p-5 md:min-h-[210px]"
          >
            <h3 className="mb-2 font-sans text-lg font-semibold text-[#eaa274]">
              {title}
            </h3>

            <p className="font-zapf text-base leading-relaxed text-[#e0dce5]">
              {description}
            </p>
          </article>
        ))}
      </div>

      {/* <TextLink>Explore Sculptra</TextLink> */}
    </div>
  </div>
</section>




<section
  id="face"
  className="
    w-full
    bg-[#03091b]
    px-6
    py-10
    text-[#e5e1e9]

    sm:px-10
    md:px-[7.5%]
    md:py-24
  "
>
  <div
    className="
      mx-auto
      grid
      w-full
      max-w-[1600px]
      items-center
      gap-12

      lg:grid-cols-[1.02fr_0.98fr]
      lg:gap-[5vw]
    "
  >
    {/* ================= LEFT CONTENT ================= */}
    <div className="w-full">
      {/* Heading */}
      <h2
        className="
          mb-4
          font-zapf
          text-[24px]
          uppercase
          leading-none
          text-[#eaa274]
          md:mb-8
          md:text-[50px]
        "
      >
        Face
      </h2>

      {/* Intro */}
      <p
        className="
          max-w-[760px]
          font-zapf
          text-[17px]
          leading-[1.55]
          text-[#d0ccd5]

          md:text-[19px]
        "
      >
        From the brow to the neckline, precise treatments that lift,
        define and refresh while keeping you looking like yourself.
      </p>

      {/* ================= FACE CATEGORIES ================= */}
      <div className="mt-9 space-y-7">
        {/* Upper Face */}
        <div>
          <h3
            className="
              font-sans
              text-[18px]
              font-semibold
              leading-tight
              tracking-wide
              text-[#e8e4eb]

              md:text-[21px]
            "
          >
            Upper face
          </h3>

          <p
            className="
              mt-2
              max-w-[760px]
              font-display
              text-[15px]
              leading-[1.45]
              text-[#858493]

              md:text-[17px]
            "
          >
            Soften forehead lines, frown lines and the brow area, and
            refresh the eyes, for a relaxed, rested expression.
          </p>
        </div>

        {/* Mid Face */}
        <div>
          <h3
            className="
              font-sans
              text-[18px]
              font-semibold
              leading-tight
              tracking-wide
              text-[#e8e4eb]

              md:text-[21px]
            "
          >
            Mid face
          </h3>

          <p
            className="
              mt-2
              max-w-[760px]
              font-display
              text-[15px]
              leading-[1.45]
              text-[#858493]

              md:text-[17px]
            "
          >
            Restore cheek support and volume and smooth the under-eye
            transition, for a lifted, harmonious centre of the face.
          </p>
        </div>

        {/* Lower Face */}
        <div>
          <h3
            className="
              font-sans
              text-[18px]
              font-semibold
              leading-tight
              tracking-wide
              text-[#e8e4eb]

              md:text-[21px]
            "
          >
            Lower Face
          </h3>

          <p
            className="
              mt-2
              max-w-[760px]
              font-display
              text-[15px]
              leading-[1.45]
              text-[#858493]

              md:text-[17px]
            "
          >
            Define the jawline and chin, refine the lips and soften
            lines around the mouth, for a balanced, elegant profile.
          </p>
        </div>

        {/* Neck */}
        <div>
          <h3
            className="
              font-sans
              text-[18px]
              font-semibold
              leading-tight
              tracking-wide
              text-[#e8e4eb]

              md:text-[21px]
            "
          >
            Neck
          </h3>

          <p
            className="
              mt-2
              max-w-[760px]
              font-display
              text-[15px]
              leading-[1.45]
              text-[#858493]

              md:text-[17px]
            "
          >
            Smooth neck lines and bands and improve skin firmness,
            for a more youthful, defined neckline.
          </p>
        </div>
      </div>
    </div>

    {/* ================= RIGHT IMAGE ================= */}
    <div
      className="
        relative
        w-full
        overflow-hidden
        border
        border-white/20

        aspect-square
        lg:aspect-[1.02/1]
      "
    >
      <img
        src={photos.face2}
        alt="Face aesthetic treatment"
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Bottom dark gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[45%]
          bg-gradient-to-t
          from-[#03091b]
          via-[#03091b]/70
          to-transparent
        "
      />
    </div>
  </div>
</section>

<section
  id="lasers"
  className="
    scroll-mt-[96px]
    relative
    isolate
    min-h-[560px]
    w-full
    overflow-hidden
    bg-[#03091b]
    px-6
    py-14
    text-[#e0dce5]

    md:min-h-[620px]
    md:px-[7.5%]
    md:py-16
    md:scroll-mt-[108px]
  "
>
  {/* Background Image */}
  <div className="absolute inset-0 -z-20">
    <img
      src={photos.laser}
      alt="Laser treatment"
      className="h-full w-full object-cover object-center"
      loading="lazy"
    />
  </div>

  {/* Lighter Dark Overlay */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-[#03091b]/55
    "
  />

  {/* Lighter Gradient Overlay */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-gradient-to-r
      from-[#03091b]/65
      via-[#03091b]/40
      to-[#03091b]/50
    "
  />

  {/* Main Content */}
  <div
    className="
      relative
      z-10
      mx-auto
      grid
      w-full
      max-w-[1600px]
      items-start
      gap-10

      lg:grid-cols-[1.05fr_1fr]
      lg:gap-[5vw]
    "
  >
    {/* LEFT */}
    <div
      className="
        grid
        grid-cols-1
        gap-x-10
        gap-y-7
        sm:grid-cols-2
      "
    >
      {/* PICO */}
      <div>
        <h3 className="font-sans text-[20px] font-semibold uppercase text-[#eaa274]">
          PICO
        </h3>

        <p className="mt-3 font-zapf text-[16px] leading-[1.45] text-[#c9c5d0] md:text-[17px]">
          Harness ultra-short picosecond pulses to target pigmentation
          and improve skin tone, texture, and clarity with minimal
          downtime and precision along with tattoo removal.
        </p>
      </div>

      {/* CO2 */}
      <div>
        <h3 className="font-sans text-[20px] font-semibold uppercase text-[#eaa274]">
          CO2
        </h3>

        <p className="mt-3 font-zapf text-[16px] leading-[1.45] text-[#c9c5d0] md:text-[17px]">
          Resurface and renew the skin with precision CO₂ laser
          technology to improve scars, wrinkles, pigmentation,
          texture, and overall skin quality.
        </p>
      </div>

      {/* EXCIMER LASER */}
      <div>
        <h3 className="font-sans text-[20px] font-semibold uppercase text-[#eaa274]">
          EXCIMER LASER
        </h3>

        <p className="mt-3 font-zapf text-[16px] leading-[1.45] text-[#c9c5d0] md:text-[17px]">
          Targeted 308 nm phototherapy that precisely treats localized
          skin conditions such as vitiligo, atopic dermatitis and
          psoriasis while minimizing exposure to surrounding healthy
          skin.
        </p>
      </div>

      {/* DIODE */}
      <div>
        <h3 className="font-sans text-[20px] font-semibold uppercase text-[#eaa274]">
          DIODE
        </h3>

        <p className="mt-3 font-zapf text-[16px] leading-[1.45] text-[#c9c5d0] md:text-[17px]">
          Advanced laser technology for effective, long-lasting hair
          reduction by precisely targeting hair follicles while
          protecting the surrounding skin.
        </p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="pt-2 lg:pt-8">
      <h2 className="font-zapf text-[24px] uppercase leading-none text-[#eaa274] md:text-[52px]">
        Lasers
      </h2>

      <p className="mt-7 max-w-[700px] font-zapf text-[18px] leading-[1.45] text-[#e0dce5] md:text-[19px]">
        Advanced laser technology that treats pigmentation, scars,
        hair and chronic skin conditions with precision and minimal
        downtime.
      </p>
    </div>
  </div>

</section>



      {/* Body */}
      {/* <section id="body" className="grid items-center gap-12 bg-[#03091b] px-6 py-20 md:grid-cols-[1fr_.95fr] md:gap-[6vw] md:px-[7.5%] md:py-28">
        <div>
          <Eyebrow>Sculpted with intention</Eyebrow>
          <h2 className="font-display text-4xl uppercase text-[#eaa274] sm:text-5xl">Body &amp; Contouring</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Explore surgical and non-surgical body-contouring options. Recommendations, recovery, and expected outcomes vary by patient and require consultation.</p>
          <div className="my-7">
            {bodyProcedures.map(([title, copy]) => <a href="#consult" key={title} className="flex items-center justify-between gap-4 border-b border-[#eaa274]/30 py-5 transition hover:text-[#eaa274]"><span><b className="block font-sans text-base font-medium">{title}</b><small className="mt-1 block text-sm leading-relaxed text-[#a9a5b3]">{copy}</small></span><span className="text-3xl text-[#eaa274]">›</span></a>)}
          </div>
          <TextLink>Body Procedures</TextLink>
        </div>
        <div className="relative h-[360px] border border-white/40 p-4 sm:h-[480px] lg:h-[620px]">
          <img src={photos.model} alt="Body contouring editorial" loading="lazy" className="h-full w-full object-cover" />
          <a href="#consult" className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#050b20] p-5 text-sm">Explore body procedures <ArrowRight className="text-[#eaa274]" /></a>
        </div>
      </section> */}

      {/* Breast */}
      {/* <section id="breast" className="bg-[#03091b] px-6 py-20 text-center md:px-[7.5%] md:py-28">
        <Eyebrow>Personalized surgical planning</Eyebrow>
        <h2 className="font-display text-4xl uppercase text-[#eaa274] sm:text-5xl">Breast Procedures</h2>
        <div className="mx-auto my-12 grid max-w-6xl items-center gap-5 md:grid-cols-[1fr_.78fr_1fr] md:gap-[3vw]">
          <div className="grid gap-5">{breastProcedures[0].map(([title, copy]) => <article key={title} className="bg-[#11172b] p-6 text-left"><h3 className="font-sans font-semibold uppercase text-[#eaa274]">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c3bdca]">{copy}</p></article>)}</div>
          <div className="mx-auto h-[340px] w-3/4 overflow-hidden rounded-[48%] border-[7px] border-purple-900 md:h-[430px] md:w-full"><img src={photos.doctor} alt="Surgical consultation editorial portrait" loading="lazy" className="h-full w-full object-cover grayscale" /></div>
          <div className="grid gap-5">{breastProcedures[1].map(([title, copy]) => <article key={title} className="bg-[#11172b] p-6 text-left"><h3 className="font-sans font-semibold uppercase text-[#eaa274]">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c3bdca]">{copy}</p></article>)}</div>
        </div>
        <p className="mx-auto max-w-3xl font-display text-base leading-relaxed text-[#c3bdca]">A consultation is required to determine whether a procedure is appropriate and to discuss risks, alternatives, and expected recovery.</p>
        <TextLink>Breast Procedures</TextLink>
      </section> */}

      {/* Lasers */}
      {/* <section id="lasers" className="relative grid items-center gap-10 bg-[#10142b] bg-cover bg-center px-6 py-20 md:grid-cols-[.9fr_1.1fr] md:gap-[5vw] md:px-[7.5%] md:py-28" style={{ backgroundImage: `linear-gradient(rgba(3,8,27,.88),rgba(3,8,27,.88)),url(${photos.skin})` }}>
        <div>
          <Eyebrow>Advanced skin technology</Eyebrow>
          <h2 className="font-display text-5xl uppercase text-[#eaa274]">Lasers</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Explore laser and light-based treatment options for concerns such as texture, tone, redness, and pigmentation. Suitability depends on skin type and clinical assessment.</p>
          <TextLink>Laser Treatments</TextLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {laserTreatments.map(([title, copy]) => <article key={title} className="min-h-44 bg-[#1c1f35]/85 p-6 backdrop-blur-md"><h3 className="font-sans text-lg font-semibold uppercase">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c4bfcc]">{copy}</p></article>)}
        </div>
      </section> */}


           {/* Wellness */}



<section
  id="wellness"
  className="scroll-mt-[96px] w-full bg-[#03091b] px-6 py-14 text-[#e5e1e9] sm:px-10 md:min-h-[850px] md:px-[7.5%] md:py-24 md:scroll-mt-[108px]"
>
  <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-[5vw]">

    {/* ================= LEFT CONTENT ================= */}
    <div className="w-full">

      {/* Heading */}
      <h2 className="font-zapf text-[24px] uppercase leading-tight text-[#eaa274] md:text-[50px]">
        Wellness
      </h2>

      {/* Wellness Programs */}
      <div className="mt-12 space-y-7 md:mt-12 md:space-y-7">

        {/* Physician-supervised wellness */}
        <div>
          <h3 className="font-zapf text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">
            Physician-supervised wellness
          </h3>

          <p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">
            Personalized, evidence-based wellness programs guided by a
            physician to support healthy ageing, vitality, metabolic health,
            and overall well-being.
          </p>
        </div>

        {/* Weight management */}
        <div>
          <h3 className="font-zapf text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">
            Weight management
          </h3>

          <p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">
            Personalized, physician-guided weight management focused on
            sustainable results, metabolic health, and long-term well-being.
          </p>
        </div>

        {/* Regenerative protocols */}
        <div>
          <h3 className="font-zapf text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">
            Regenerative protocols
          </h3>

          <p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">
            Physician-led therapies that support the body's natural repair
            processes, recovery and long-term vitality.
          </p>
        </div>

        {/* Semaglutide / GLP-1 / Tirzepatide */}
        <div>
          <h3 className="font-zapf text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">
            Semaglutide / GLP-1 / Tirzepatide
          </h3>

          <p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">
            Physician-guided GLP-1 and tirzepatide therapies to support
            medically supervised weight management, metabolic health,
            and sustainable lifestyle goals.
          </p>
        </div>

        {/* NAD+ Cellular Infusions */}
        <div>
          <h3 className="font-zapf text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">
            NAD+ Cellular Infusions
          </h3>

          <p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">
            Physician-supervised cellular wellness infusions designed to
            support energy metabolism, cellular function, recovery, and
            healthy ageing.
          </p>
        </div>

      </div>
    </div>

    {/* ================= RIGHT IMAGE ================= */}
    <div className="relative w-full overflow-hidden md:h-[588px] md:w-full">

      <img
        src={photos.wellness}
        alt="Wellness treatment"
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />

    </div>

  </div>
</section>


<section
  id="skin"
  className="
    scroll-mt-[96px]
    relative
    isolate
    h-auto
    min-h-[850px]
    w-full
    overflow-hidden
    bg-[#03091b]
    px-6
    py-16

    sm:px-10

    md:h-[870px]
    md:min-h-0
    md:px-[7.5%]
    md:py-[105px]
    md:scroll-mt-[108px]
  "
>
  {/* ================= BACKGROUND IMAGE ================= */}
  <div className="absolute inset-0 -z-20">
    <img
      src={photos.skin}
      alt=""
      aria-hidden="true"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-center
      "
    />
  </div>

  {/* ================= FIGMA DARK OVERLAY ================= */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-[#03091b]/80
    "
  />

  {/* ================= CONTENT ================= */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      h-full
      w-full
      max-w-[1240px]
      flex-col
    "
  >
    {/* ================= SKIN HEADING ================= */}
    <div className="w-full text-center">
      <h2
        className="
          font-zapf
          text-[24px]
          font-medium
          uppercase
          leading-none
          tracking-normal
          text-[#eaa274]

          sm:text-[46px]
          md:text-[52px]
        "
      >
        Skin
      </h2>

      <p
        className="
          mx-auto
          mt-7
          max-w-[800px]
          font-zapf
          text-[16px]
          font-normal
          leading-[1.45]
          text-[#d5d1dc]

          sm:text-[17px]
          md:text-[20px]
        "
      >
        Advanced, physician-led treatments that improve texture,
        clarity and firmness, so your
        <br className="hidden md:block" />
        skin looks healthy and feels like you.
      </p>
    </div>

    {/* ================= TREATMENTS ================= */}
    <div
      className="
        mx-auto
        mt-[50px]
        grid
        w-full
        max-w-[1080px]
        grid-cols-1
        gap-x-[70px]
        gap-y-[48px]

        sm:grid-cols-2

        md:mt-[50px]
        md:gap-x-[70px]
        md:gap-y-[48px]
      "
    >
      {/* ================= IPL ================= */}
      <div>
        <h3
          className="
            font-sans
            text-[19px]
            font-semibold
            uppercase
            leading-[1.1]
            tracking-[0.02em]
            text-[#eaa274]

            md:text-[24px]
          "
        >
          IPL (Intense Pulsated Light)
        </h3>

        <p
          className="
            mt-3
            max-w-[530px]
            font-zapf
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#c5c2cd]

            md:text-[17px]
          "
        >
          Harness broad-spectrum light technology to target rosacea,
          skin rejuvenation, pigmentation, redness, unwanted hair,
          and uneven skin tone for a clearer, more radiant complexion.
        </p>
      </div>

      {/* ================= CHEMICAL PEELS ================= */}
      <div>
        <h3
          className="
            font-sans
            text-[19px]
            font-semibold
            uppercase
            leading-[1.1]
            tracking-[0.02em]
            text-[#eaa274]

            md:text-[24px]
          "
        >
          Chemical Peels
        </h3>

        <p
          className="
            mt-3
            max-w-[530px]
            font-zapf
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#c5c2cd]

            md:text-[17px]
          "
        >
          Medically tailored exfoliation treatments that renew the
          skin, refine texture, reduce acne pigmentation, and restore
          a smoother, more radiant complexion.
        </p>
      </div>

      {/* ================= HYDRAFACIAL ================= */}
      <div>
        <h3
          className="
            font-sans
            text-[19px]
            font-semibold
            uppercase
            leading-[1.1]
            tracking-[0.02em]
            text-[#eaa274]

            md:text-[24px]
          "
        >
          Hydrafacial
        </h3>

        <p
          className="
            mt-3
            max-w-[530px]
            font-zapf
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#c5c2cd]

            md:text-[17px]
          "
        >
          A multi-step skin-renewal treatment suitable for most skin
          types, including dull, dehydrated, congested, or uneven
          skin, combining deep cleansing, exfoliation, extraction,
          and hydration for a smoother, clearer, more radiant
          complexion.
        </p>
      </div>

      {/* ================= DERMAFRAC ================= */}
      <div>
        <h3
          className="
            font-sans
            text-[19px]
            font-semibold
            uppercase
            leading-[1.1]
            tracking-[0.02em]
            text-[#eaa274]

            md:text-[24px]
          "
        >
          Dermafrac
        </h3>

        <p
          className="
            mt-3
            max-w-[530px]
            font-zapf
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#c5c2cd]

            md:text-[17px]
          "
        >
          A minimally invasive skin-renewal treatment combining
          microneedling and targeted serum infusion to improve
          hydration, texture, pigmentation, and overall skin
          radiance.
        </p>
      </div>

      {/* ================= MICRONEEDLING RADIOFREQUENCY ================= */}
      <div>
        <h3
          className="
            font-sans
            text-[19px]
            font-semibold
            uppercase
            leading-[1.1]
            tracking-[0.02em]
            text-[#eaa274]

            md:text-[24px]
          "
        >
          Microneedling Radiofrequency
        </h3>

        <p
          className="
            mt-3
            max-w-[530px]
            font-zapf
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#c5c2cd]

            md:text-[17px]
          "
        >
          Microneedling Radiofrequency (MNRF) stimulates deep collagen
          remodeling to improve acne scars, enlarged pores, skin
          texture, and firmness with controlled, precise energy
          delivery.
        </p>
      </div>

      {/* ================= RADIO FREQUENCY ================= */}
      <div>
        <h3
          className="
            font-sans
            text-[19px]
            font-semibold
            uppercase
            leading-[1.1]
            tracking-[0.02em]
            text-[#eaa274]

            md:text-[24px]
          "
        >
          Radio Frequency
        </h3>

        <p
          className="
            mt-3
            max-w-[530px]
            font-zapf
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#c5c2cd]

            md:text-[17px]
          "
        >
          Controlled radiofrequency energy gently heats the deeper
          skin layers to stimulate collagen remodeling, improve
          firmness, and create a smoother, tighter appearance.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  id="dermat"
  className="
    scroll-mt-[96px]
    w-full
    bg-[#03091b]
    px-6
    py-14
    text-[#e5e1e9]
    sm:px-10
    md:min-h-[850px]
    md:px-[7.5%]
    md:py-24
    md:scroll-mt-[108px]
  "
>
  <div
    className="
      mx-auto
      grid
      max-w-[1600px]
      items-center
      gap-12
      md:grid-cols-[1.05fr_1fr]
      md:gap-[5vw]
    "
  >

    {/* ================= LEFT CONTENT ================= */}
    <div className="w-full">

      {/* Heading */}
      <h2
        className="
          font-zapf
          text-[24px]
          uppercase
          leading-tight
          text-[#eaa274]
          md:text-[50px]
        "
      >
        Dermat
      </h2>

      {/* Treatments */}
      <div className="mt-12 space-y-7">

        {/* Acne & Acne Scarring */}
        <div>
          <h3
            className="
              font-sans
              text-[20px]
              font-semibold
              leading-tight
              tracking-wide
              text-white
              md:text-[22px]
            "
          >
            Acne &amp; Acne Scarring
          </h3>

          <p
            className="
              mt-2
              max-w-[700px]
              font-zapf
              text-[16px]
              leading-[1.45]
              text-[#9d9aa7]
              md:text-[17px]
            "
          >
            Medically led treatment that clears active breakouts,
            calms inflammation and refines scars for smoother skin.
          </p>
        </div>

        {/* Pigmentation & Melasma */}
        <div>
          <h3
            className="
              font-sans
              text-[20px]
              font-semibold
              leading-tight
              tracking-wide
              text-white
              md:text-[22px]
            "
          >
            Pigmentation &amp; Melasma
          </h3>

          <p
            className="
              mt-2
              max-w-[700px]
              font-zapf
              text-[16px]
              leading-[1.45]
              text-[#9d9aa7]
              md:text-[17px]
            "
          >
            Targeted protocols that even out skin tone and address
            stubborn pigmentation safely, for every skin type.
          </p>
        </div>

        {/* Hair & Scalp */}
        <div>
          <h3
            className="
              font-sans
              text-[20px]
              font-semibold
              leading-tight
              tracking-wide
              text-white
              md:text-[22px]
            "
          >
            Hair &amp; Scalp
          </h3>

          <p
            className="
              mt-2
              max-w-[700px]
              font-zapf
              text-[16px]
              leading-[1.45]
              text-[#9d9aa7]
              md:text-[17px]
            "
          >
            Diagnosis-led care for hair fall, thinning and scalp
            conditions, built around the root cause rather than a
            quick fix.
          </p>
        </div>

        {/* Eczema, Psoriasis & Vitiligo */}
        <div>
          <h3
            className="
              font-sans
              text-[20px]
              font-semibold
              leading-tight
              tracking-wide
              text-white
              md:text-[22px]
            "
          >
            Eczema, Psoriasis &amp; Vitiligo
          </h3>

          <p
            className="
              mt-2
              max-w-[700px]
              font-zapf
              text-[16px]
              leading-[1.45]
              text-[#9d9aa7]
              md:text-[17px]
            "
          >
            Evidence-based care for chronic skin conditions,
            including targeted Excimer phototherapy.
          </p>
        </div>

      </div>
    </div>

    {/* ================= RIGHT IMAGE ================= */}
    <div
      className="
        relative
        h-[360px]
        w-full
        overflow-hidden
        sm:h-[450px]
        md:h-[574px]
      "
    >
      <img
        src={photos.dermat}
        alt="Dermatology treatment"
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
          object-center
        "
      />
    </div>

  </div>
</section>

<section
  id="regen"
  className="
    scroll-mt-[96px]
    w-full
    bg-[#03091b]
    px-6
    py-10
    sm:px-8
    md:px-[7.5%]
    md:py-12
    md:scroll-mt-[108px]
  "
>
  <div
    className="
      mx-auto
      grid
      w-full
      items-stretch
      gap-8
      md:grid-cols-[1fr_1fr]
      md:gap-[1.8vw]
    "
  >

    {/* ================= LEFT IMAGE ================= */}
    <div
      className="
        relative
        h-[420px]
        w-full
        overflow-hidden
        sm:h-[500px]
        md:h-[616px]
      "
    >
      <img
        src={photos.regen}
        alt="Regenerative treatment"
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Bottom fade - same visual treatment as Figma */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[28%]
          bg-gradient-to-t
          from-[#03091b]
          via-[#03091b]/60
          to-transparent
        "
      />
    </div>

    {/* ================= RIGHT CONTENT ================= */}
    <div
      className="
        flex
        min-h-[420px]
        w-full
        flex-col
        justify-center
        bg-[#020718]
        sm:px-10
        md:min-h-[616px]
        md:px-[3.2vw]
        md:py-12
      "
    >

      {/* Heading */}
      <h2
        className="
          font-zapf
          text-[24px]
          uppercase
          leading-none
          text-[#eaa274]
          sm:text-[44px]
          md:text-[46px]
        "
      >
        Regen
      </h2>

      {/* Treatment List */}
      <div className="mt-10 space-y-6 md:mt-9 md:space-y-5">

        {/* PRP Facial */}
        <div>
          <h3
            className="
              font-sans
              text-[19px]
              font-medium
              leading-tight
              tracking-[0.02em]
              text-white
              md:text-[21px]
            "
          >
            PRP Facial
          </h3>

          <p
            className="
              mt-1.5
              font-zapf
              text-[15px]
              leading-[1.35]
              text-[#92909d]
              md:text-[16px]
            "
          >
            Uses your own platelet-rich plasma to stimulate renewal,
            improve texture and restore natural radiance.
          </p>
        </div>

        {/* PRP Hair Therapy */}
        <div>
          <h3
            className="
              font-sans
              text-[19px]
              font-medium
              leading-tight
              tracking-[0.02em]
              text-white
              md:text-[21px]
            "
          >
            PRP Hair Therapy
          </h3>

          <p
            className="
              mt-1.5
              font-zapf
              text-[15px]
              leading-[1.35]
              text-[#92909d]
              md:text-[16px]
            "
          >
            Supports follicle health and hair density using your
            body's own growth factors.
          </p>
        </div>

        {/* Exosome Therapy */}
        <div>
          <h3
            className="
              font-sans
              text-[19px]
              font-medium
              leading-tight
              tracking-[0.02em]
              text-white
              md:text-[21px]
            "
          >
            Exosome Therapy
          </h3>

          <p
            className="
              mt-1.5
              font-zapf
              text-[15px]
              leading-[1.35]
              text-[#92909d]
              md:text-[16px]
            "
          >
            Advanced cell-signalling treatment that supports repair,
            healing and overall skin quality.
          </p>
        </div>

        {/* PDRN & Polynucleotides */}
        <div>
          <h3
            className="
              font-sans
              text-[19px]
              font-medium
              leading-tight
              tracking-[0.02em]
              text-white
              md:text-[21px]
            "
          >
            PDRN &amp; Polynucleotides
          </h3>

          <p
            className="
              mt-1.5
              font-zapf
              text-[15px]
              leading-[1.35]
              text-[#92909d]
              md:text-[16px]
            "
          >
            Regenerative skin repair that improves hydration,
            elasticity and texture for a healthier-looking complexion.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
 


      {/* Results */}
      {/* <section id="results" className="bg-[#03091b] px-6 py-20 text-center md:px-[7.5%] md:py-28">
        <SectionTitle eyebrow="Patient stories">Before &amp; After Results</SectionTitle>
        <p className="mx-auto mb-12 max-w-3xl font-display text-lg leading-relaxed text-[#e0dce5]">View selected patient cases and learn what may be possible. Results vary; images are shared only with appropriate patient authorization.</p>
        <div className="grid grid-cols-2 gap-3 text-center md:grid-cols-4 md:gap-5">
          {results.map(([title, image]) => <article key={title} className="bg-[#f5f3f6] text-[#080d1b]"><img src={image} alt={`Authorized patient case: ${title}`} loading="lazy" className="h-44 w-full object-cover sm:h-56 md:h-[260px]" /><h3 className="p-3 font-sans text-sm font-semibold md:text-base">{title}</h3></article>)}
        </div>
        <TextLink>View Results</TextLink>
      </section> */}

      {/* Academy / skin treatments */}
      {/* <section id="academy" className="grid items-center gap-12 bg-cover bg-center px-6 py-20 md:grid-cols-2 md:gap-[6vw] md:px-[11%] md:py-28" style={{ backgroundImage: `linear-gradient(rgba(3,8,27,.9),rgba(3,8,27,.92)),url(${photos.skin})` }}>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {skinTreatments.map(([title, copy]) => <article key={title} className="border-b border-white/50 py-5"><h3 className="font-sans text-base font-semibold uppercase">{title}</h3><p className="mt-2 font-display text-sm leading-relaxed text-[#c3bdca]">{copy}</p></article>)}
        </div>
        <div>
          <Eyebrow>Skin health</Eyebrow>
          <h2 className="font-display text-4xl uppercase leading-tight text-[#eaa274] sm:text-5xl">Skin Treatments &amp; Education</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Discover personalized skin-care services and educational resources. Treatment selection should be guided by a qualified clinician.</p>
          <TextLink>Skin Treatments</TextLink>
        </div>
      </section> */}

      {/* Consultation */}
      {/* <section id="consult" className="bg-[#0b1025] px-6 py-20 md:px-[7.5%] md:py-28">
        <Eyebrow>Start a conversation</Eyebrow>
        <h2 className="font-display text-4xl uppercase text-[#eaa274] sm:text-5xl">Book a Consultation</h2>
        <p className="mt-5 max-w-3xl font-display text-lg leading-relaxed text-[#e0dce5]">Tell us how to reach you and which area you would like to discuss. Please do not include private medical details in this form.</p>
        <form className="mt-10 grid max-w-4xl gap-5 md:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}>
          <label className="grid gap-2 text-sm tracking-wide">Full name<input name="name" autoComplete="name" required className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Email address<input type="email" name="email" autoComplete="email" required className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Phone number<input type="tel" name="phone" autoComplete="tel" className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Area of interest<select name="interest" className="form-field"><option value="">Select a treatment area</option>{["Body", "Breast", "Injectables", "Lasers / Skin", "Wellness", "Other"].map(value => <option key={value}>{value}</option>)}</select></label>
          <label className="grid gap-2 text-sm tracking-wide md:col-span-2">Message<textarea name="message" rows={4} placeholder="How can our team help?" className="form-field" /></label>
          <button type="submit" className="inline-flex min-h-14 items-center justify-center justify-self-start border border-white bg-white px-9 font-sans text-sm font-semibold uppercase tracking-wider text-[#101326] transition hover:border-[#eaa274] hover:bg-[#eaa274]">Send Inquiry <ArrowRight className="ml-3" size={17} /></button>
          {formSent && <p role="status" className="flex items-center gap-2 text-sm text-[#eaa274]"><CheckCircle2 size={18} /> Form UI submitted. Connect this form to your API or secure form service to receive inquiries.</p>}
        </form>
        <p className="mt-5 text-xs text-[#c3bdca]">Connect this form to your preferred secure intake workflow before publishing.</p>
      </section> */}


<footer className="w-full overflow-hidden bg-[#03091b] text-white">
  {/* Top Footer Content */}
  <div className="grid w-full grid-cols-1 gap-12 px-8 py-[16px] sm:px-10 md:grid-cols-[0.9fr_1.6fr] md:px-[7.5%] md:py-20">

    {/* ================= SOCIAL LINKS ================= */}
    <div>
      <h3 className="font-zapf text-[32px] font-normal leading-none text-white md:text-[40px]">
        FOLLOW ME
      </h3>

      <div className="mt-10 space-y-6">
        {[
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/drgeoffreyvaz/",
          },
          {
            name: "Instagram",
            href: "https://www.instagram.com/maven.esthetics/",
          },
          {
            name: "Facebook",
            href: "https://www.facebook.com/mavenestheticsindia",
          },
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              w-[260px]
              items-center
              justify-between
              font-sans
              text-[20px]
              font-normal
              text-[#c8c7d0]
              transition-colors
              duration-300
              hover:text-white
              md:text-[21px]
            "
          >
            <span>{social.name}</span>

            <span
              className="
                text-[25px]
                leading-none
                text-[#c8c7d0]
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>

    {/* ================= NAVIGATION ================= */}
    <nav className="w-full">
      {[
        {
          label: "HOME",
          number: "01",
          href: "#top",
        },
        {
          label: "ABOUT",
          number: "02",
          href: "#about",
        },
        {
          label: "CONTACT",
          number: "03",
          href: "#contact",
        },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="
            group
            flex
            h-[62px]
            w-full
            items-center
            justify-between
            border-b
            border-[#3a3b45]
            transition-colors
            duration-300
            hover:border-white/60
          "
        >
          <span
            className="
              font-sans
              text-[22px]
              font-semibold
              tracking-[0.14em]
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-1
              md:text-[25px]
            "
          >
            {item.label}
          </span>

          <span
            className="
              font-sans
              text-[20px]
              font-normal
              text-[#9b9ba5]
            "
          >
            {item.number}
          </span>
        </a>
      ))}
    </nav>
  </div>

  {/* ================= LARGE NAME ================= */}
  <div className="relative mt-4 w-full overflow-hidden px-4 sm:px-6 md:px-[7%]">
    <div className="relative overflow-hidden">
      <h2
        className="
          whitespace-nowrap
          font-zapf
          text-[clamp(54px,13vw,280px)]
          font-medium
          uppercase
          leading-[0.8]
          tracking-[-0.04em]
          text-white
        "
      >
        GEOFFREY VAZ
      </h2>

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-gradient-to-t
          from-[#03091b]
          via-[#03091b]/85
          to-transparent
        "
      />
    </div>
  </div>

  {/* Bottom spacing */}
  <div className="h-10 bg-[#03091b] md:h-14" />
</footer>
 
      {/* Footer */}
      {/* <footer className="border-t border-[#eaa274]/30 bg-[#020614] px-6 py-16 text-center md:px-[7.5%]">
        <a href="#top" className="font-display text-2xl italic tracking-wider">Dr. Geoffrey Vaz</a>
        <p className="mx-auto mt-4 max-w-xl font-display text-base text-[#e0dce5]">Individualized aesthetic care. Informed decisions. Thoughtful outcomes.</p>
        <div className="my-8 flex flex-col justify-center gap-5 font-sans text-xs uppercase tracking-widest sm:flex-row sm:gap-8"><a href="#about" className="hover:text-[#eaa274]">About</a><a href="#consult" className="hover:text-[#eaa274]">Contact</a><a href="#consult" className="hover:text-[#eaa274]">Book Consultation</a></div>
        <small className="text-xs text-[#9895a5]">© {new Date().getFullYear()} Geoffrey Vaz. All rights reserved. Website content is informational and is not a substitute for medical advice.</small>
      </footer> */}
    </main>
  );
}
