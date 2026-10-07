"use client";

import { useRef, useState } from "react";
import {
  ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Play, Menu, X,
} from "lucide-react";

const photos = {
  hero: "/images/geoffrey2.png",
  doctor: "/images/second.jpg",
  training: "/images/third.png",
  inject1: "/images/carosule.jpg",
  inject2: "/images/carosule1.jpg",
  inject3: "/images/carosule2.jpg",
  face: "/images/fivethsection.png",
  wellness: "/images/seven.png",
  skin: "/images/eight.jpg",
  model: "/images/nine.jpg",
};

const injectables = [
  ["BOTOX & WRINKLE RELAXER", "Botox®, Dysport®, and Daxxify® micro-dosed to soften forehead bands, crow’s feet, and gummy smiles while preserving natural human expression.", photos.inject1],
  ["BARBIETOX & CALF TOX", "A personalized approach to proportion and contour, planned around your anatomy, goals, and clinical assessment.", photos.inject2],
  ["FACIAL BALANCING & JAWLINE", "Thoughtful facial balancing focused on proportion, structure, and harmony.", photos.inject3],
  ["LIP AUGMENTATION", "Thoughtful, balanced enhancement designed to complement your natural features.", photos.inject2],
];

const skinTreatments = [
  ["IPL (Intense Pulsed Light)", "Light-based treatment options for selected tone and pigmentation concerns."],
  ["CHEMICAL PEELS", "Medical-grade peel options selected for individual skin concerns."],
  ["DERMAFRAC", "A facial treatment approach focused on cleansing and hydration."],
  ["HYDRAFACIAL", "A facial treatment focused on cleansing, exfoliation, and hydration."],
  ["RF", "Explore radiofrequency-based skin treatment options."],
  ["MNRF", "Discuss microneedling and radiofrequency treatment options."],
  ["MICRONEEDLING", "Review collagen-induction treatment options with a clinician."],
];

const bodyProcedures = [
  ["Tummy Tuck (Abdominoplasty)", "Discuss abdominal contouring and muscle repair where appropriate."],
  ["Comprehensive Mommy Makeover", "A coordinated plan based on individual anatomy and goals."],
  ["High-Definition Liposuction", "Learn about body-contouring options and candidacy."],
  ["Radiofrequency Skin Tightening", "Explore technology-based skin treatment options."],
];

const breastProcedures = [
  [["Vertical Scar Mastopexy", "Review breast-lift techniques, goals, and potential trade-offs."],
   ["Dual-Plane Augmentation", "Discuss implant options, placement, and individualized planning."]],
  [["Lift + Implants", "Understand combined procedure planning and recovery considerations."],
   ["Implant Removal & Recontouring", "Explore implant removal and reconstructive options with a surgeon."]],
];

const laserTreatments = [
  ["Halo Laser", "Hybrid fractional laser treatment options for selected skin concerns."],
  ["Broadband Light (BBL)", "Light-based options for selected pigmentation and redness concerns."],
  ["Forever Clear", "Discuss light-based approaches for acne-prone skin."],
  ["Moxi Laser", "Explore gentle fractional laser options and recovery expectations."],
];

const results = [
  ["Tummy Tuck", photos.model],
  ["Body Contouring", photos.face],
  ["Facial Rejuvenation", photos.skin],
  ["Injectables", photos.inject1],
];

function Eyebrow({ children }) {
  return <p className="mb-4 font-sans text-xs uppercase tracking-[.2em] text-[#E9C1E4]">{children}</p>;
}

function SectionTitle({ eyebrow, children }) {
  return <div className="mb-10"><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-display text-4xl uppercase leading-tight text-[#E9C1E4] sm:text-5xl lg:text-6xl">{children}</h2></div>;
}

function TextLink({ children, href = "#consult" }) {
  return <a href={href} className="mt-8 inline-flex items-center gap-3 border-b border-white/70 pb-2 font-sans text-xs font-semibold uppercase tracking-[.12em] transition hover:border-[#eaa274] hover:text-[#E9C1E4]">{children}<ArrowUpRight size={16} /></a>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const trackRef = useRef(null);

  const moveCarousel = (direction) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: direction * trackRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  const navItems = [
    ["About", "#about"], ["Body", "#body"], ["Breast", "#breast"],
    ["Lasers", "#lasers"], ["Injectables", "#injectables"],
    ["Wellness", "#wellness"], ["Academy", "#academy"],
  ];

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#280C24] text-white">
      {/* Header */}
      <header className="absolute left-0 top-0 z-50 flex h-[76px] w-full items-center justify-between border-b border-white/15 bg-[#190518]/50 px-6 backdrop-blur-md md:h-[88px] md:px-[7.5%]">
        <a href="#top" className="font-display whitespace-nowrap text-2xl italic tracking-wider">Dr. Geoffrey Vaz</a>
        <button className="text-white md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
        <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#280C24] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="font-sans text-xs uppercase tracking-widest transition hover:text-[#E9C1E4]">{label}</a>)}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[linear-gradient(189.16deg,#280C24_4.78%,#3B1237_48%,#280C24_95.78%)] px-6 pb-0 pt-32 md:min-h-[760px] md:h-screen md:max-h-[1000px] md:px-[7.5%] md:pt-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#120414]/20 to-transparent" />
        <div className="relative z-10 w-full pb-[330px] md:w-[56%] md:pb-8">
          <p className="mb-5 bg-gradient-to-r from-[#B74DAA] to-[#E9C1E4] bg-clip-text font-sans text-lg text-transparent md:text-xl">Geoffrey Vaz</p>
          <h1 className="mb-8 max-w-[790px] font-display text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl xl:text-[6.2rem]">Dermatologic &amp;<br />Cosmetic Surgeon</h1>
          <a href="#consult" className="inline-flex min-h-14 items-center justify-center border border-white bg-white px-9 font-sans text-sm font-semibold uppercase tracking-wider text-[#280C24] text-[#280C24] transition hover:border-white hover:from-[#A4649D] hover:to-[#57337D] hover:text-white">Book Consultation <ArrowRight className="ml-3" size={17} /></a>
        </div>
        <div className="absolute bottom-0 right-[-5%] flex h-[350px] w-[90%] items-end justify-center sm:right-0 sm:h-[390px] sm:w-3/4 md:right-[8%] md:h-[85%] md:w-[42%]">
          <img src={photos.hero} alt="Dr. Geoffrey Vaz" fetchPriority="high" className="h-full w-full object-contain object-bottom drop-shadow-2xl" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid items-center gap-10 bg-[#280C24] px-6 py-20 md:grid-cols-[1.15fr_.85fr] md:gap-[4.5vw] md:px-[7.5%] md:py-28">
        <div className="h-[330px] overflow-hidden sm:h-[420px] lg:h-[min(43vw,650px)]"><img src={photos.training} alt="Surgeon speaking at an educational event" className="h-full w-full object-cover" loading="lazy" /></div>
        <div>
          <Eyebrow>Philosophy &amp; precision</Eyebrow>
          <h2 className="font-display text-4xl uppercase leading-tight text-[#E9C1E4] sm:text-5xl">The Surgeon &amp; Artist</h2>
          <blockquote className="my-7 border-l-2 border-[#eaa274] bg-[#35102f] px-6 py-5 font-display text-lg leading-relaxed text-[#e0dce5]">“Every incision is a sculpted stroke. We do not mass-produce beauty — we unveil proportion that honors natural biology.”</blockquote>
          <p className="font-display text-lg leading-relaxed text-[#e0dce5]">Dr. Geoffrey Vaz approaches aesthetic medicine through the lens of thoughtful proportions, individualized care, and medical integrity.</p>
          <p className="mt-10 text-right font-display text-2xl text-[#E9C1E4]">— Geoffrey Vaz, M.D.</p>
          <p className="mt-1 text-right text-xs tracking-widest text-[#c3bdca]">ABPS Diplomat · Surgical Director</p>
        </div>
      </section>

      {/* Injectables */}
      <section id="injectables" className="bg-[#280C24] px-6 py-20 md:px-[7.5%] md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionTitle eyebrow="Precision treatments">Injectables</SectionTitle>
          <div className="mb-10 flex shrink-0 gap-3">
            <button onClick={() => moveCarousel(-1)} aria-label="Previous treatments" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-12 md:w-12"><ArrowLeft /></button>
            <button onClick={() => moveCarousel(1)} aria-label="Next treatments" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101326] transition hover:bg-[#eaa274] md:h-12 md:w-12"><ArrowRight /></button>
          </div>
        </div>
        <div ref={trackRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {injectables.map(([title, description, image]) => <article key={title} className="group relative min-h-[390px] w-[85%] shrink-0 snap-start overflow-hidden bg-[#35102f] sm:w-[calc(50%-8px)] lg:min-h-[430px] lg:w-[calc((100%-2rem)/3)]">
            <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent to-[#03081a]" />
            <div className="absolute bottom-0 z-10 p-5 md:p-6"><h3 className="mb-2 font-sans text-base font-semibold uppercase">{title}</h3><p className="font-display text-base leading-relaxed text-[#e0dce5]">{description}</p></div>
          </article>)}
        </div>
        <div className="text-center"><TextLink>View All Injectables</TextLink></div>
      </section>

      {/* Skin / regenerative feature */}
      <section className="grid items-center gap-10 bg-[#35102f] px-6 py-20 md:grid-cols-2 md:gap-[5vw] md:px-[7.5%] md:py-28">
        <div className="h-[330px] overflow-hidden sm:h-[420px] lg:h-[min(48vw,700px)]"><img src={photos.face} alt="Portrait illustrating facial rejuvenation" loading="lazy" className="h-full w-full object-cover" /></div>
        <div>
          <Eyebrow>Regenerative aesthetics</Eyebrow>
          <h2 className="font-display text-4xl uppercase leading-tight text-[#E9C1E4] sm:text-5xl">Skin That Feels Like You Again</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Learn about treatment options designed to support skin quality and a refreshed appearance. Your plan should be based on an in-person assessment and your individual goals.</p>
          <div className="my-8 grid gap-3 sm:grid-cols-3">
            {[["01", "Cheeks", "Discuss facial volume, skin quality, and treatment goals."], ["02", "Smile Lines", "Review options for the appearance of facial folds."], ["03", "Lower Face", "Explore a personalized approach to lower-face balance."]].map(([n, title, copy]) => <article key={n} className="min-h-44 bg-white/[.08] p-5"><span className="mb-5 block text-xl text-[#E9C1E4]">{n}</span><h3 className="font-sans text-sm font-semibold uppercase text-[#E9C1E4]">{title}</h3><p className="mt-2 font-display text-sm leading-relaxed text-[#c3bdca]">{copy}</p></article>)}
          </div>
          <TextLink>Explore Treatments</TextLink>
        </div>
      </section>

      {/* Body */}
      <section id="body" className="grid items-center gap-12 bg-[#280C24] px-6 py-20 md:grid-cols-[1fr_.95fr] md:gap-[6vw] md:px-[7.5%] md:py-28">
        <div>
          <Eyebrow>Sculpted with intention</Eyebrow>
          <h2 className="font-display text-4xl uppercase text-[#E9C1E4] sm:text-5xl">Body &amp; Contouring</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Explore surgical and non-surgical body-contouring options. Recommendations, recovery, and expected outcomes vary by patient and require consultation.</p>
          <div className="my-7">
            {bodyProcedures.map(([title, copy]) => <a href="#consult" key={title} className="flex items-center justify-between gap-4 border-b border-[#B74DAA]/40 py-5 transition hover:text-[#E9C1E4]"><span><b className="block font-sans text-base font-medium">{title}</b><small className="mt-1 block text-sm leading-relaxed text-[#a9a5b3]">{copy}</small></span><span className="text-3xl text-[#E9C1E4]">›</span></a>)}
          </div>
          <TextLink>Body Procedures</TextLink>
        </div>
        <div className="relative h-[360px] border border-white/40 p-4 sm:h-[480px] lg:h-[620px]">
          <img src={photos.model} alt="Body contouring editorial" loading="lazy" className="h-full w-full object-cover" />
          <a href="#consult" className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#35102f] p-5 text-sm">Explore body procedures <ArrowRight className="text-[#E9C1E4]" /></a>
        </div>
      </section>

      {/* Breast */}
      <section id="breast" className="bg-[#280C24] px-6 py-20 text-center md:px-[7.5%] md:py-28">
        <Eyebrow>Personalized surgical planning</Eyebrow>
        <h2 className="font-display text-4xl uppercase text-[#E9C1E4] sm:text-5xl">Breast Procedures</h2>
        <div className="mx-auto my-12 grid max-w-6xl items-center gap-5 md:grid-cols-[1fr_.78fr_1fr] md:gap-[3vw]">
          <div className="grid gap-5">{breastProcedures[0].map(([title, copy]) => <article key={title} className="bg-[#35102f] p-6 text-left"><h3 className="font-sans font-semibold uppercase text-[#E9C1E4]">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c3bdca]">{copy}</p></article>)}</div>
          <div className="mx-auto h-[340px] w-3/4 overflow-hidden rounded-[48%] border-[7px] border-[#57337D] md:h-[430px] md:w-full"><img src={photos.doctor} alt="Surgical consultation editorial portrait" loading="lazy" className="h-full w-full object-cover grayscale" /></div>
          <div className="grid gap-5">{breastProcedures[1].map(([title, copy]) => <article key={title} className="bg-[#35102f] p-6 text-left"><h3 className="font-sans font-semibold uppercase text-[#E9C1E4]">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c3bdca]">{copy}</p></article>)}</div>
        </div>
        <p className="mx-auto max-w-3xl font-display text-base leading-relaxed text-[#c3bdca]">A consultation is required to determine whether a procedure is appropriate and to discuss risks, alternatives, and expected recovery.</p>
        <TextLink>Breast Procedures</TextLink>
      </section>

      {/* Lasers */}
      <section id="lasers" className="relative grid items-center gap-10 bg-[#35102f] bg-cover bg-center px-6 py-20 md:grid-cols-[.9fr_1.1fr] md:gap-[5vw] md:px-[7.5%] md:py-28" style={{ backgroundImage: `linear-gradient(rgba(3,8,27,.88),rgba(3,8,27,.88)),url(${photos.skin})` }}>
        <div>
          <Eyebrow>Advanced skin technology</Eyebrow>
          <h2 className="font-display text-5xl uppercase text-[#E9C1E4]">Lasers</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Explore laser and light-based treatment options for concerns such as texture, tone, redness, and pigmentation. Suitability depends on skin type and clinical assessment.</p>
          <TextLink>Laser Treatments</TextLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {laserTreatments.map(([title, copy]) => <article key={title} className="min-h-44 bg-[#1c1f35]/85 p-6 backdrop-blur-md"><h3 className="font-sans text-lg font-semibold uppercase">{title}</h3><p className="mt-3 font-display text-base leading-relaxed text-[#c4bfcc]">{copy}</p></article>)}
        </div>
      </section>

      {/* Wellness */}
      <section id="wellness" className="grid items-center gap-10 bg-[#280C24] px-6 py-20 md:grid-cols-2 md:gap-[5vw] md:px-[7.5%] md:py-28">
        <div>
          <Eyebrow>Whole-person care</Eyebrow>
          <h2 className="font-display text-5xl uppercase text-[#E9C1E4]">Wellness</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Learn about physician-guided wellness services and recovery support. Any medication-based program requires a medical evaluation, discussion of risks, and ongoing supervision.</p>
          <div className="my-8 bg-black/25 p-6">
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-[#E9C1E4]">Areas to Explore</h3>
            <ul className="grid gap-3 text-sm text-[#e0dce5] sm:grid-cols-2">{["Weight-management consultation", "Nutrition and lifestyle support", "Recovery and rehabilitation planning", "Regenerative wellness consultation"].map(item => <li key={item} className="flex gap-2"><CheckCircle2 size={17} className="shrink-0 text-[#E9C1E4]" />{item}</li>)}</ul>
          </div>
          <TextLink>Wellness Consultation</TextLink>
        </div>
        <div className="h-[330px] overflow-hidden sm:h-[480px]"><img src={photos.wellness} alt="Wellness editorial portrait" loading="lazy" className="h-full w-full object-cover" /></div>
      </section>

      {/* Results */}
      <section id="results" className="bg-[#280C24] px-6 py-20 text-center md:px-[7.5%] md:py-28">
        <SectionTitle eyebrow="Patient stories">Before &amp; After Results</SectionTitle>
        <p className="mx-auto mb-12 max-w-3xl font-display text-lg leading-relaxed text-[#e0dce5]">View selected patient cases and learn what may be possible. Results vary; images are shared only with appropriate patient authorization.</p>
        <div className="grid grid-cols-2 gap-3 text-center md:grid-cols-4 md:gap-5">
          {results.map(([title, image]) => <article key={title} className="bg-[#f5f3f6] text-[#080d1b]"><img src={image} alt={`Authorized patient case: ${title}`} loading="lazy" className="h-44 w-full object-cover sm:h-56 md:h-[260px]" /><h3 className="p-3 font-sans text-sm font-semibold md:text-base">{title}</h3></article>)}
        </div>
        <TextLink>View Results</TextLink>
      </section>

      {/* Academy / skin treatments */}
      <section id="academy" className="grid items-center gap-12 bg-cover bg-center px-6 py-20 md:grid-cols-2 md:gap-[6vw] md:px-[11%] md:py-28" style={{ backgroundImage: `linear-gradient(rgba(3,8,27,.9),rgba(3,8,27,.92)),url(${photos.skin})` }}>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {skinTreatments.map(([title, copy]) => <article key={title} className="border-b border-white/50 py-5"><h3 className="font-sans text-base font-semibold uppercase">{title}</h3><p className="mt-2 font-display text-sm leading-relaxed text-[#c3bdca]">{copy}</p></article>)}
        </div>
        <div>
          <Eyebrow>Skin health</Eyebrow>
          <h2 className="font-display text-4xl uppercase leading-tight text-[#E9C1E4] sm:text-5xl">Skin Treatments &amp; Education</h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-[#e0dce5]">Discover personalized skin-care services and educational resources. Treatment selection should be guided by a qualified clinician.</p>
          <TextLink>Skin Treatments</TextLink>
        </div>
      </section>

      {/* Consultation */}
      <section id="consult" className="bg-[#280C24] px-6 py-20 md:px-[7.5%] md:py-28">
        <Eyebrow>Start a conversation</Eyebrow>
        <h2 className="font-display text-4xl uppercase text-[#E9C1E4] sm:text-5xl">Book a Consultation</h2>
        <p className="mt-5 max-w-3xl font-display text-lg leading-relaxed text-[#e0dce5]">Tell us how to reach you and which area you would like to discuss. Please do not include private medical details in this form.</p>
        <form className="mt-10 grid max-w-4xl gap-5 md:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}>
          <label className="grid gap-2 text-sm tracking-wide">Full name<input name="name" autoComplete="name" required className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Email address<input type="email" name="email" autoComplete="email" required className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Phone number<input type="tel" name="phone" autoComplete="tel" className="form-field" /></label>
          <label className="grid gap-2 text-sm tracking-wide">Area of interest<select name="interest" className="form-field"><option value="">Select a treatment area</option>{["Body", "Breast", "Injectables", "Lasers / Skin", "Wellness", "Other"].map(value => <option key={value}>{value}</option>)}</select></label>
          <label className="grid gap-2 text-sm tracking-wide md:col-span-2">Message<textarea name="message" rows={4} placeholder="How can our team help?" className="form-field" /></label>
          <button type="submit" className="inline-flex min-h-14 items-center justify-center justify-self-start border border-white bg-white px-9 font-sans text-sm font-semibold uppercase tracking-wider text-[#280C24] text-[#280C24] transition hover:border-white hover:from-[#A4649D] hover:to-[#57337D] hover:text-white">Send Inquiry <ArrowRight className="ml-3" size={17} /></button>
          {formSent && <p role="status" className="flex items-center gap-2 text-sm text-[#E9C1E4]"><CheckCircle2 size={18} /> Form UI submitted. Connect this form to your API or secure form service to receive inquiries.</p>}
        </form>
        <p className="mt-5 text-xs text-[#c3bdca]">Connect this form to your preferred secure intake workflow before publishing.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#B74DAA]/40 bg-[#170818] px-6 py-16 text-center md:px-[7.5%]">
        <a href="#top" className="font-display text-2xl italic tracking-wider">Dr. Geoffrey Vaz</a>
        <p className="mx-auto mt-4 max-w-xl font-display text-base text-[#e0dce5]">Individualized aesthetic care. Informed decisions. Thoughtful outcomes.</p>
        <div className="my-8 flex flex-col justify-center gap-5 font-sans text-xs uppercase tracking-widest sm:flex-row sm:gap-8"><a href="#about" className="hover:text-[#E9C1E4]">About</a><a href="#consult" className="hover:text-[#E9C1E4]">Contact</a><a href="#consult" className="hover:text-[#E9C1E4]">Book Consultation</a></div>
        <small className="text-xs text-[#9895a5]">© {new Date().getFullYear()} Geoffrey Vaz. All rights reserved. Website content is informational and is not a substitute for medical advice.</small>
      </footer>
    </main>
  );
}
