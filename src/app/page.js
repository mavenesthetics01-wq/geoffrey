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

const faceCategories = [
  {
    number: "01",
    title: "Upper face",
    description:
      "Soften forehead lines, frown lines and the brow area, and refresh the eyes, for a relaxed, rested expression.",
  },
  {
    number: "02",
    title: "Mid face",
    description:
      "Restore cheek support and volume and smooth the under-eye transition, for a lifted, harmonious centre of the face.",
  },
  {
    number: "03",
    title: "Lower Face",
    description:
      "Define the jawline and chin, refine the lips and soften lines around the mouth, for a balanced, elegant profile.",
  },
  {
    number: "04",
    title: "Neck",
    description:
      "Smooth neck lines and bands and improve skin firmness, for a more youthful, defined neckline.",
  },
];

const laserTreatments = [
  {
    number: "01",
    title: "PICO",
    description:
      "Harness ultra-short picosecond pulses to target pigmentation and improve skin tone, texture, and clarity with minimal downtime and precision along with tattoo removal.",
  },
  {
    number: "02",
    title: "CO2",
    description:
      "Resurface and renew the skin with precision CO₂ laser technology to improve scars, wrinkles, pigmentation, texture, and overall skin quality.",
  },
  {
    number: "03",
    title: "EXCIMER LASER",
    description:
      "Targeted 308 nm phototherapy that precisely treats localized skin conditions such as vitiligo, atopic dermatitis and psoriasis while minimizing exposure to surrounding healthy skin.",
  },
  {
    number: "04",
    title: "DIODE",
    description:
      "Advanced laser technology for effective, long-lasting hair reduction by precisely targeting hair follicles while protecting the surrounding skin.",
  },
];

const wellnessPrograms = [
  {
    number: "01",
    title: "Physician-supervised wellness",
    description:
      "Personalized, evidence-based wellness programs guided by a physician to support healthy ageing, vitality, metabolic health, and overall well-being.",
  },
  {
    number: "02",
    title: "Weight management",
    description:
      "Personalized, physician-guided weight management focused on sustainable results, metabolic health, and long-term well-being.",
  },
  {
    number: "03",
    title: "Regenerative protocols",
    description:
      "Physician-led therapies that support the body's natural repair processes, recovery and long-term vitality.",
  },
  {
    number: "04",
    title: "Semaglutide / GLP-1 / Tirzepatide",
    description:
      "Physician-guided GLP-1 and tirzepatide therapies to support medically supervised weight management, metabolic health, and sustainable lifestyle goals.",
  },
  {
    number: "05",
    title: "NAD+ Cellular Infusions",
    description:
      "Physician-supervised cellular wellness infusions designed to support energy metabolism, cellular function, recovery, and healthy ageing.",
  },
];

const skinTreatments = [
  {
    number: "01",
    title: "IPL (Intense Pulsated Light)",
    description:
      "Harness broad-spectrum light technology to target rosacea, skin rejuvenation, pigmentation, redness, unwanted hair, and uneven skin tone for a clearer, more radiant complexion.",
  },
  {
    number: "02",
    title: "Chemical Peels",
    description:
      "Medically tailored exfoliation treatments that renew the skin, refine texture, reduce acne pigmentation, and restore a smoother, more radiant complexion.",
  },
  {
    number: "03",
    title: "Hydrafacial",
    description:
      "A multi-step skin-renewal treatment suitable for most skin types, including dull, dehydrated, congested, or uneven skin, combining deep cleansing, exfoliation, extraction, and hydration for a smoother, clearer, more radiant complexion.",
  },
  {
    number: "04",
    title: "Dermafrac",
    description:
      "A minimally invasive skin-renewal treatment combining microneedling and targeted serum infusion to improve hydration, texture, pigmentation, and overall skin radiance.",
  },
  {
    number: "05",
    title: "Microneedling Radiofrequency",
    description:
      "Microneedling Radiofrequency (MNRF) stimulates deep collagen remodeling to improve acne scars, enlarged pores, skin texture, and firmness with controlled, precise energy delivery.",
  },
  {
    number: "06",
    title: "Radio Frequency",
    description:
      "Controlled radiofrequency energy gently heats the deeper skin layers to stimulate collagen remodeling, improve firmness, and create a smoother, tighter appearance.",
  },
];

const dermatTreatments = [
  { number: "01", title: "Acne & Acne Scarring", description: "Medically led treatment that clears active breakouts, calms inflammation and refines scars for smoother skin." },
  { number: "02", title: "Pigmentation & Melasma", description: "Targeted protocols that even out skin tone and address stubborn pigmentation safely, for every skin type." },
  { number: "03", title: "Hair & Scalp", description: "Diagnosis-led care for hair fall, thinning and scalp conditions, built around the root cause rather than a quick fix." },
  { number: "04", title: "Eczema, Psoriasis & Vitiligo", description: "Evidence-based care for chronic skin conditions, including targeted Excimer phototherapy." },
];

const regenTreatments = [
  { number: "01", title: "PRP Facial", description: "Uses your own platelet-rich plasma to stimulate renewal, improve texture and restore natural radiance." },
  { number: "02", title: "PRP Hair Therapy", description: "Supports follicle health and hair density using your body's own growth factors." },
  { number: "03", title: "Exosome Therapy", description: "Advanced cell-signalling treatment that supports repair, healing and overall skin quality." },
  { number: "04", title: "PDRN & Polynucleotides", description: "Regenerative skin repair that improves hydration, elasticity and texture for a healthier-looking complexion." },
];



export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [formSent, setFormSent] = useState(false);
  const trackRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openFaceAccordion, setOpenFaceAccordion] = useState(null);
  const [openLaserAccordion, setOpenLaserAccordion] = useState(null);
  const [openWellnessAccordion, setOpenWellnessAccordion] = useState(null);
  const [openSkinAccordion, setOpenSkinAccordion] = useState(null);
  const [openDermatAccordion, setOpenDermatAccordion] = useState(null);
  const [openRegenAccordion, setOpenRegenAccordion] = useState(null);

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
          className="font-zapf whitespace-nowrap text-2xl italic tracking-wider"
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

<section className="relative isolate flex min-h-[50svh] w-full flex-col items-start overflow-hidden bg-[radial-gradient(ellipse_at_72%_48%,#50133f_0%,#260b26_43%,#170818_100%)] px-4 pt-[105px] pb-0 md:h-screen md:min-h-[720px] md:flex-row md:items-center md:px-[8%] md:pt-[88px] md:pb-0">

  {/* Background overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#120414]/20 to-transparent" />

  {/* Content */}
  <div className="relative z-20 w-full py-[20px] px-[20px] md:py-0 md:px-0 md:w-[65%] md:-translate-y-2">

    {/* Main Heading */}
    <div className="relative">
      <div className="relative">

        {/* GEOFFREY */}
        <h1 className="relative z-10 whitespace-nowrap font-zapf text-[clamp(34px,16vw,82px)] leading-[0.95] font-medium tracking-normal uppercase text-white md:text-[131px] md:leading-[124px] ">
          GEOFFREY
        </h1>

        {/* VAZ */}
        <span className="absolute left-[75%] top-[68%] z-0 whitespace-nowrap font-zapf text-[clamp(34px,12vw,68px)] font-medium leading-[1.13] tracking-normal uppercase bg-gradient-to-b from-[#B74DAA] to-[#E9C1E4] bg-clip-text text-transparent md:left-[64%] md:top-[62%] md:text-[clamp(42px,7.16vw,110px)] 3xl:left-[55%] 4xl:left-[49%]">
          VAZ
        </span>

      </div>
    </div>

    {/* Subtitle */}
    <div className="relative z-10 mt-6 md:mt-10">

      <h2 className="font-zapf bg-gradient-to-b from-[#B74DAA] to-[#E9C1E4] bg-clip-text text-transparent text-[clamp(32px,5vw,44px)] leading-[1.15] md:text-4xl lg:text-[3rem] md:leading-[1.25]">
        MD Dermatologist
        <br />
        & Medical Aesthetics Expert
      </h2>

      {/* Experience */}
      <p className="mt-4 font-sans text-[11px] font-bold uppercase tracking-wider text-white sm:text-lg md:mt-6 md:text-base">
        15+ YEARS <span className="text-[9px] font-medium sm:text-sm">
          OF EXPERIENCE
        </span>
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
  <div className="pointer-events-none relative z-10 mt-6 flex h-[48vh] w-full items-end justify-center md:absolute md:bottom-0 md:right-[18%] md:mt-0 md:h-[47%] md:w-[55%] md:justify-center">

    <picture className="relative h-full w-full">
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
        className="h-full w-full origin-bottom object-contain object-bottom drop-shadow-2xl md:scale-[2] md:object-contain"
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



<section id="about" className="scroll-mt-[96px] mt-[1px] mb-[10px] grid w-full bg-[#03091b] grid-cols-1 gap-4 p-[20px] lg:mt-[40px] lg:mb-[10px] lg:grid-cols-[637px_1fr] lg:gap-0 lg:px-0 lg:py-0 md:scroll-mt-[108px]">
  {/* ================= LEFT IMAGE ================= */}
  <div
    className="
      relative
      h-[350px]
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
          text-[clamp(32px,3vw,48px)]
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
          text-[16px] leading-[1.45] text-[#e0dce5] md:text-[18px] md:mt-8
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
          text-[16px] leading-[1.45] text-[#e0dce5] md:text-[18px] 
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
          text-[16px] leading-[1.45] text-[#e0dce5] md:text-[18px]
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
          text-[16px] leading-[1.45] text-[#e0dce5] md:text-[18px]
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
        MD Dermatologist & Medical Aesthetics Expert
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
  <div className="mx-auto mb-9 max-w-5xl text-left">
    <h2 className="font-zapf text-[31px] font-medium uppercase leading-tight tracking-wide text-[#eaa274] sm:text-4xl md:text-[46px]">
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

<section
  id="injectables"
  className="scroll-mt-[96px] w-full overflow-hidden bg-[#03091b] py-7 md:py-20 md:pl-[8%] md:scroll-mt-[108px]"
>

  <div className="mb-8 flex items-center justify-between pl-6 pr-6 md:mb-14">
    <h2 className="font-zapf text-[32px] font-medium uppercase leading-tight text-[#eaa274] md:text-[48px]">
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
          className="group relative h-[350px] w-[90vw] shrink-0 snap-start overflow-hidden bg-[#11172b] sm:w-[65vw] md:h-[400px] md:w-[390px]"
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#292039]/75 to-[#292039]/95 backdrop-blur-[3px]" /> */}
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#292039]/90 to-[#292039] backdrop-blur-[3px]" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-5">
            <h3 className="mb-3 font-sans text-[17px] font-semibold uppercase tracking-wide text-[#eaa274] md:text-[19px]">
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
  className="relative isolate w-full overflow-hidden bg-[#050b20] bg-inherit bg-center bg-no-repeat md:min-h-[100svh]"
  style={{
    backgroundImage: `url(${photos.face})`,
  }}
>
  {/* Content layered over the full-width background image */}
  <div className="relative z-10 flex min-h-[100svh] w-full items-center">
    <div className="ml-auto w-full px-6 py-10 sm:px-10 md:w-[66%] md:py-12 md:pl-0 md:pr-[7.5%]">

      <h2 className="font-zapf text-[clamp(32px,3vw,48px)] uppercase leading-[1.2] text-[#eaa274]">
        Skin That Feels Like You Again
      </h2>

      <p className="mt-5 max-w-[1000px] font-display text-base leading-relaxed text-[#e0dce5] md:text-lg">
        Not just another filler. Sculptra is a biostimulatory aesthetic
        injectable that helps stimulate your own natural collagen production
        to smooth facial wrinkles and improve skin tightness, revealing a
        refreshed-looking you.
      </p>


      {/* Mobile Accordion */}
      <div className="my-7 block md:hidden">
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
        ].map(([number, title, description]) => {
          const isOpen = openSkinAccordion === number;

          return (
            <article
              key={number}
              className="border-b border-white/15 bg-white/[0.09]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenSkinAccordion(isOpen ? null : number)
                }
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-sans text-sm font-semibold text-[#eaa274]">
                    {number}
                  </span>

                  <h3 className="font-sans text-lg font-semibold text-white">
                    {title}
                  </h3>
                </div>

                <span
                  className={`text-2xl font-light text-[#eaa274] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 font-zapf text-base leading-relaxed text-[#e0dce5]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Desktop / Tablet Grid */}
      <div className="my-7 hidden grid-cols-1 gap-4 sm:grid-cols-2 md:grid lg:grid-cols-3">
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

    </div>
  </div>
</section>

<section id="face" className="w-full bg-[#03091b] px-6 py-10 text-[#e5e1e9] sm:px-10 md:px-[7.5%] md:py-24">
  <div className="mx-auto grid w-full max-w-[1600px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-[5vw]">

    {/* ================= MOBILE ================= */}
    <div className="w-full md:hidden">
      <h2 className="mb-4 font-zapf text-[32px] uppercase leading-none text-[#eaa274]">
        Face
      </h2>

      <p className="max-w-[760px] font-zapf text-[17px] leading-[1.55] text-[#d0ccd5]">
        From the brow to the neckline, precise treatments that lift, define and refresh while keeping you looking like yourself.
      </p>

      {/* Face Image */}
      <div className="relative mt-7 w-full overflow-hidden border border-white/20">
        <img
          src={photos.face2}
          alt="Face aesthetic treatment"
          loading="lazy"
          className="h-[420px] w-full object-cover object-center"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#03091b] via-[#03091b]/70 to-transparent" />
      </div>

      {/* Mobile Accordion */}
      <div className="mt-8">
        {faceCategories.map(({ number, title, description }) => {
          const isOpen = openFaceAccordion === number;

          return (
            <article key={number} className="border-b border-white/15 bg-white/[0.09]">
              <button
                type="button"
                onClick={() => setOpenFaceAccordion(isOpen ? null : number)}
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-sans text-sm font-semibold text-[#eaa274]">
                    {number}
                  </span>

                  <h3 className="font-sans text-[18px] font-semibold leading-tight tracking-wide text-[#e8e4eb]">
                    {title}
                  </h3>
                </div>

                <span className={`text-2xl font-light text-[#eaa274] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 font-display text-[15px] leading-[1.45] text-[#858493]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>

    {/* ================= DESKTOP / TABLET ================= */}
    <div className="hidden w-full md:block">
      <h2 className="mb-8 font-zapf text-[24px] uppercase leading-none text-[#eaa274] md:text-[50px]">
        Face
      </h2>

      <p className="max-w-[760px] font-zapf text-[17px] leading-[1.55] text-[#d0ccd5] md:text-[19px]">
        From the brow to the neckline, precise treatments that lift, define and refresh while keeping you looking like yourself.
      </p>

      <div className="mt-9 space-y-7">
        {faceCategories.map(({ title, description }) => (
          <div key={title}>
            <h3 className="font-sans text-[18px] font-semibold leading-tight tracking-wide text-[#e8e4eb] md:text-[21px]">
              {title}
            </h3>

            <p className="mt-2 max-w-[760px] font-display text-[15px] leading-[1.45] text-[#858493] md:text-[17px]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* ================= DESKTOP IMAGE ================= */}
    <div className="relative hidden w-full overflow-hidden border border-white/20 aspect-square lg:aspect-[1.02/1] md:block">
      <img
        src={photos.face2}
        alt="Face aesthetic treatment"
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#03091b] via-[#03091b]/70 to-transparent" />
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
  {/* ================= BACKGROUND IMAGE ================= */}
  <div className="absolute inset-0 -z-20">
    <img
      src={photos.laser}
      alt="Laser treatment"
      className="h-full w-full object-cover object-center"
      loading="lazy"
    />
  </div>

  {/* Dark Overlay */}
  <div
    className="
      absolute
      inset-0
      -z-10
      bg-[#03091b]/55
    "
  />

  {/* Gradient Overlay */}
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

  {/* ================= MOBILE CONTENT ================= */}
  <div className="relative z-10 block md:hidden">

    {/* RIGHT CONTENT MOVED TO TOP */}
    <div>
      <h2 className="font-zapf text-[32px] uppercase leading-none text-[#eaa274]">
        Lasers
      </h2>

      <p className="mt-6 max-w-[700px] font-zapf text-[17px] leading-[1.45] text-[#e0dce5]">
        Advanced laser technology that treats pigmentation, scars,
        hair and chronic skin conditions with precision and minimal
        downtime.
      </p>
    </div>

    {/* MOBILE ACCORDION */}
    <div className="mt-8">
      {laserTreatments.map(({ number, title, description }) => {
        const isOpen = openLaserAccordion === number;

        return (
          <article
            key={number}
            className="border-b border-white/15 bg-white/[0.09]"
          >
            {/* Accordion Header */}
            <button
              type="button"
              onClick={() =>
                setOpenLaserAccordion(isOpen ? null : number)
              }
              className="flex w-full items-center justify-between px-5 py-5 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="font-sans text-sm font-semibold text-[#eaa274]">
                  {number}
                </span>

                <h3 className="font-sans text-[18px] font-semibold uppercase leading-tight tracking-wide text-[#e8e4eb]">
                  {title}
                </h3>
              </div>

              {/* Plus / Close */}
              <span
                className={`text-2xl font-light text-[#eaa274] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-zapf text-[15px] leading-[1.45] text-[#c9c5d0]">
                  {description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </div>

  {/* ================= DESKTOP / TABLET ================= */}
  <div
    className="
      relative
      z-10
      mx-auto
      hidden
      w-full
      max-w-[1600px]
      items-start
      gap-10

      md:grid
      lg:grid-cols-[1.05fr_1fr]
      lg:gap-[5vw]
    "
  >
    {/* LEFT - LASER TREATMENTS */}
    <div
      className="
        grid
        grid-cols-1
        gap-x-10
        gap-y-7
        sm:grid-cols-2
      "
    >
      {laserTreatments.map(({ title, description }) => (
        <div key={title}>
          <h3 className="font-sans text-[20px] font-semibold uppercase text-[#eaa274]">
            {title}
          </h3>

          <p className="mt-3 font-zapf text-[16px] leading-[1.45] text-[#c9c5d0] md:text-[17px]">
            {description}
          </p>
        </div>
      ))}
    </div>

    {/* RIGHT - LASERS */}
    <div className="pt-2 lg:pt-8">
      <h2 className="font-zapf text-[32px] uppercase leading-none text-[#eaa274] md:text-[52px]">
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


{/* Wellness */}


<section
  id="wellness"
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
    {/* ================= MOBILE CONTENT ================= */}
    <div className="w-full md:hidden">

      {/* Wellness Heading */}
      <h2
        className="
          font-zapf
          text-[32px]
          uppercase
          leading-tight
          text-[#eaa274]
        "
      >
        Wellness
      </h2>

      {/* Wellness Image - Between Heading and Accordion */}
      <div className="relative mt-7 w-full overflow-hidden">
        <img
          src={photos.wellness}
          alt="Wellness treatment"
          loading="lazy"
          className="h-[420px] w-full object-cover object-center"
        />
      </div>

      {/* Mobile Accordion */}
      <div className="mt-8">
        {wellnessPrograms.map(
          ({ number, title, description }) => {
            const isOpen =
              openWellnessAccordion === number;

            return (
              <article
                key={number}
                className="border-b border-white/15 bg-white/[0.09]"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenWellnessAccordion(
                      isOpen ? null : number
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-5
                    text-left
                  "
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-sm font-semibold text-[#eaa274]">
                      {number}
                    </span>

                    <h3
                      className="
                        font-zapf
                        text-[18px]
                        font-semibold
                        leading-tight
                        tracking-wide
                        text-white
                      "
                    >
                      {title}
                    </h3>
                  </div>

                  <span
                    className={`
                      text-2xl
                      font-light
                      text-[#eaa274]
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        px-5
                        pb-5
                        font-zapf
                        text-[15px]
                        leading-[1.45]
                        text-[#9d9aa7]
                      "
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </div>

    {/* ================= DESKTOP / TABLET ================= */}
    <div className="hidden w-full md:block">

      {/* Desktop content */}
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
        Wellness
      </h2>

      <div className="mt-12 space-y-7">
        {wellnessPrograms.map(({ title, description }) => (
          <div key={title}>
            <h3
              className="
                font-zapf
                text-[20px]
                font-semibold
                leading-tight
                tracking-wide
                text-white
                md:text-[22px]
              "
            >
              {title}
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
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* ================= DESKTOP / TABLET IMAGE ================= */}
    <div
      className="
        relative
        hidden
        w-full
        overflow-hidden
        md:block
        md:h-[588px]
      "
    >
      <img
        src={photos.wellness}
        alt="Wellness treatment"
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
    </div>
  </div>
</section>


<section id="skin" className="scroll-mt-[96px] relative isolate h-auto min-h-[850px] w-full overflow-hidden bg-[#03091b] px-6 py-16 sm:px-10 md:h-[870px] md:min-h-0 md:px-[7.5%] md:py-[105px] md:scroll-mt-[108px]">

  {/* ================= BACKGROUND IMAGE ================= */}
  <div className="absolute inset-0 -z-20">
    <img src={photos.skin} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
  </div>

  {/* ================= DARK OVERLAY ================= */}
  <div className="absolute inset-0 -z-10 bg-[#03091b]/80" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] flex-col">

    {/* ================= SKIN HEADING ================= */}
    <div className="w-full text-justify">
      <h2 className="font-zapf text-[32px] font-medium uppercase leading-none tracking-normal text-[#eaa274] sm:text-[46px] md:text-[52px]">
        Skin
      </h2>

      <p className="mx-auto mt-7 max-w-[800px] font-zapf text-[16px] font-normal leading-[1.45] text-[#d5d1dc] sm:text-[17px] md:text-[20px]">
        Advanced, physician-led treatments that improve texture, clarity and firmness, so your
        <br className="hidden md:block" />
        skin looks healthy and feels like you.
      </p>
    </div>

    {/* ================= MOBILE ACCORDION ================= */}
    <div className="mx-auto mt-10 block w-full md:hidden">
      {skinTreatments.map(({ number, title, description }) => {
        const isOpen = openAccordion === number;

        return (
          <article key={number} className="border-b border-white/15 bg-white/[0.09]">

            <button
              type="button"
              onClick={() => setOpenAccordion(isOpen ? null : number)}
              className="flex w-full items-center justify-between px-5 py-5 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="font-sans text-sm font-semibold text-[#eaa274]">
                  {number}
                </span>

                <h3 className="font-sans text-[17px] font-semibold uppercase leading-[1.1] tracking-[0.02em] text-[#eaa274]">
                  {title}
                </h3>
              </div>

              <span className={`ml-3 shrink-0 text-2xl font-light text-[#eaa274] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-zapf text-[15px] font-normal leading-[1.45] text-[#c5c2cd]">
                  {description}
                </p>
              </div>
            </div>

          </article>
        );
      })}
    </div>

    {/* ================= DESKTOP / TABLET GRID ================= */}
    <div className="mx-auto mt-[50px] hidden w-full max-w-[1080px] grid-cols-1 gap-x-[70px] gap-y-[48px] sm:grid-cols-2 md:mt-[50px] md:grid">

      {skinTreatments.map(({ title, description }) => (
        <div key={title}>
          <h3 className="font-sans text-[19px] font-semibold uppercase leading-[1.1] tracking-[0.02em] text-[#eaa274] md:text-[24px]">
            {title}
          </h3>

          <p className="mt-3 max-w-[530px] font-zapf text-[15px] font-normal leading-[1.45] text-[#c5c2cd] md:text-[17px]">
            {description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

<section id="dermat" className="scroll-mt-[96px] w-full bg-[#03091b] px-6 py-14 text-[#e5e1e9] sm:px-10 md:min-h-[850px] md:px-[7.5%] md:py-24 md:scroll-mt-[108px]">
  <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-[5vw]">
    <div className="w-full md:hidden">
      <h2 className="font-zapf text-[32px] uppercase leading-tight text-[#eaa274]">Dermat</h2>

      <div className="relative mt-7 w-full overflow-hidden">
        <img src={photos.dermat} alt="Dermatology treatment" loading="lazy" className="h-[420px] w-full object-cover object-center" />
      </div>

      <div className="mt-8">
        {dermatTreatments.map(({ number, title, description }) => {
          const isOpen = openDermatAccordion === number;

          return (
            <article key={number} className="border-b border-white/15 bg-white/[0.09]">
              <button type="button" onClick={() => setOpenDermatAccordion(isOpen ? null : number)} className="flex w-full items-center justify-between px-5 py-5 text-left">
                <div className="flex items-center gap-4">
                  <span className="font-sans text-sm font-semibold text-[#eaa274]">{number}</span>
                  <h3 className="font-sans text-[17px] font-semibold leading-[1.1] tracking-[0.02em] text-[#eaa274]">{title}</h3>
                </div>
                <span className={`ml-3 shrink-0 text-2xl font-light text-[#eaa274] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>

              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 font-zapf text-[15px] font-normal leading-[1.45] text-[#c5c2cd]">{description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>

    <div className="hidden w-full md:block">
      <h2 className="font-zapf text-[24px] uppercase leading-tight text-[#eaa274] md:text-[50px]">Dermat</h2>

      <div className="mt-12 space-y-7">
        {dermatTreatments.map(({ title, description }) => (
          <div key={title}>
            <h3 className="font-sans text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">{title}</h3>
            <p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">{description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="relative hidden h-[360px] w-full overflow-hidden sm:h-[450px] md:block md:h-[574px]">
      <img src={photos.dermat} alt="Dermatology treatment" loading="lazy" className="h-full w-full object-cover object-center" />
    </div>
  </div>
</section>

<section id="regen" className="scroll-mt-[96px] w-full bg-[#03091b] px-6 py-14 text-[#e5e1e9] sm:px-10 md:min-h-[850px] md:px-[7.5%] md:py-24 md:scroll-mt-[108px]">
  <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-[5vw]">
    <div className="w-full md:hidden">
      <h2 className="font-zapf text-[32px] uppercase leading-tight text-[#eaa274]">Regen</h2>
      <div className="relative mt-7 w-full overflow-hidden"><img src={photos.regen} alt="Regenerative treatment" loading="lazy" className="h-[420px] w-full object-cover object-center" /></div>
      <div className="mt-8">
        {regenTreatments.map(({ number, title, description }) => {
          const isOpen = openRegenAccordion === number;
          return <article key={number} className="border-b border-white/15 bg-white/[0.09]"><button type="button" onClick={() => setOpenRegenAccordion(isOpen ? null : number)} className="flex w-full items-center justify-between px-5 py-5 text-left"><div className="flex items-center gap-4"><span className="font-sans text-sm font-semibold text-[#eaa274]">{number}</span><h3 className="font-sans text-[17px] font-semibold leading-[1.1] tracking-[0.02em] text-[#eaa274]">{title}</h3></div><span className={`ml-3 shrink-0 text-2xl font-light text-[#eaa274] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span></button><div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="px-5 pb-5 font-zapf text-[15px] font-normal leading-[1.45] text-[#c5c2cd]">{description}</p></div></div></article>;
        })}
      </div>
    </div>
    <div className="hidden w-full md:block">
      <h2 className="font-zapf text-[24px] uppercase leading-tight text-[#eaa274] md:text-[50px]">Regen</h2>
      <div className="mt-12 space-y-7">
        {regenTreatments.map(({ title, description }) => <div key={title}><h3 className="font-sans text-[20px] font-semibold leading-tight tracking-wide text-white md:text-[22px]">{title}</h3><p className="mt-2 max-w-[700px] font-zapf text-[16px] leading-[1.45] text-[#9d9aa7] md:text-[17px]">{description}</p></div>)}
      </div>
    </div>
    <div className="relative hidden h-[360px] w-full overflow-hidden sm:h-[450px] md:block md:h-[574px]"><img src={photos.regen} alt="Regenerative treatment" loading="lazy" className="h-full w-full object-cover object-center" /></div>
  </div>
</section>
 

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
