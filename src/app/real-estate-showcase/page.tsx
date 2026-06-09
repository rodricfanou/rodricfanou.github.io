"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";

function LeadForm({ isFr }: { isFr: boolean }) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkoyqdla", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSucceeded(true);
      } else {
        const json = await res.json();
        setError(json?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (succeeded) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {isFr ? "Merci !" : "You're all set!"}
        </h3>
        <p className="text-gray-300 text-sm">
          {isFr
            ? "Nous vous contacterons sous peu avec votre package d'annonces."
            : "We'll be in touch shortly with your listing package."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      {/* Agent Info */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Your Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" name="agent_name" required maxLength={100} placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
          <input type="email" name="agent_email" required maxLength={150} placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
        </div>
        <input type="text" name="agent_phone" maxLength={30} placeholder="Phone (optional)"
          className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
      </div>

      {/* Section 1 — Property Basics */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Property Basics</p>
        <div className="space-y-3">
          <input type="text" name="property_address" required maxLength={200} placeholder="Property address"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select name="property_type" required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition">
              <option value="">Property type</option>
              <option value="single-family">Single-family</option>
              <option value="condo">Condo</option>
              <option value="townhome">Townhome</option>
              <option value="acreage">Acreage / Land</option>
              <option value="luxury-estate">Luxury Estate</option>
              <option value="multi-family">Multi-family</option>
              <option value="commercial">Commercial</option>
              <option value="other">Other</option>
            </select>
            <select name="transaction_type" required
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition">
              <option value="">Sale / Rent / New Construction</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
              <option value="new-construction">New Construction</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <input type="text" name="price" required maxLength={30} placeholder="Price"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
            <input type="number" name="beds" required min={0} max={99} placeholder="Beds"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
            <input type="number" name="baths" required min={0} max={99} step="0.5" placeholder="Baths"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
            <input type="number" name="sqft" required min={0} placeholder="Sq Ft"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input type="text" name="year_built" maxLength={4} placeholder="Year built (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
            <input type="text" name="lot_size" maxLength={50} placeholder="Lot size (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
            <input type="text" name="garage" maxLength={100} placeholder="Garage details (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Section 2 — Distinguishing Details */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">What Makes It Special</p>
        <div className="space-y-3">
          <textarea name="top_features" required rows={3} maxLength={1000}
            placeholder="Top 3–5 standout features (what makes this property different)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition resize-none placeholder:text-gray-400" />
          <textarea name="updates" rows={2} maxLength={1000}
            placeholder="Major updates with years (roof, HVAC, kitchen remodel, etc. — optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition resize-none placeholder:text-gray-400" />
          <textarea name="outdoor_highlights" rows={2} maxLength={1000}
            placeholder="Lot / outdoor highlights (pool, views, waterfront, patio, acreage, etc. — optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition resize-none placeholder:text-gray-400" />
        </div>
      </div>

      {/* Section 3 — Location */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Location</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" name="neighborhood" maxLength={200} placeholder="Neighborhood / subdivision (optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
          <input type="text" name="school_district" maxLength={200} placeholder="School district (optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition placeholder:text-gray-400" />
        </div>
      </div>

      {/* Section 4 — The Story */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">The Story &amp; Tone</p>
        <div className="space-y-3">
          <textarea name="compelling_feature" rows={2} maxLength={500}
            placeholder="The single most compelling feature of this property (optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition resize-none placeholder:text-gray-400" />
          <textarea name="seller_story" rows={3} maxLength={1500}
            placeholder="Seller story or emotional hook — why is this home special to them? (optional)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition resize-none placeholder:text-gray-400" />
          <select name="tone" required
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition">
            <option value="">Desired tone</option>
            <option value="warm-lifestyle">Warm &amp; Lifestyle</option>
            <option value="luxury-elevated">Luxury &amp; Elevated</option>
            <option value="modern-architectural">Modern &amp; Architectural</option>
            <option value="investment-focused">Investment-Focused</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-xs text-center">{error}</p>
      )}

      <p className="text-sm text-gray-300 font-semibold text-center">
        {isFr
          ? "Un apport. Plusieurs sorties. Gratuit."
          : "One input. Multiple outputs. Free."}
      </p>

      <button type="submit" disabled={submitting}
        className="w-full py-3 bg-white hover:bg-gray-100 disabled:bg-gray-400 text-gray-900 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
        {submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-gray-400 border-t-gray-900 rounded-full animate-spin" />
            {isFr ? "Envoi en cours..." : "Sending..."}
          </>
        ) : (isFr ? "Obtenir mon package gratuit" : "Get My Free Package")}
      </button>
    </form>
  );
}

const listings = [
  { address: "742 Evergreen Terrace", type: "Single Family", beds: 4, baths: 2, sqft: 2100, features: "Updated kitchen · Large backyard · New roof 2023" },
  { address: "100 Main St #505", type: "Condo", beds: 2, baths: 1, sqft: 950, features: "City views · Rooftop access · In-unit laundry" },
  { address: "15 Maple Drive", type: "Single Family", beds: 5, baths: 3, sqft: 3200, features: "Gourmet kitchen · Finished basement · 3-car garage" },
  { address: "7 Sunset Ridge", type: "Single Family", beds: 5, baths: 4, sqft: 4100, features: "Panoramic views · Saltwater pool · Wine cellar" },
  { address: "22 Lakeview Dr", type: "Single Family", beds: 4, baths: 3, sqft: 2800, features: "Private dock · Updated kitchen · Spacious deck" },
  { address: "88 Ocean Ave", type: "Townhouse", beds: 3, baths: 2, sqft: 1650, features: "Steps to beach · Private patio · Updated bathrooms" },
];

export default function RealEstateShowcase() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center md:py-12 md:px-8">
      {/* Hero */}
      <section
        className="relative w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        <div className="relative px-6 py-14 md:px-16 md:py-24">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-3 drop-shadow-lg md:text-5xl">
                {isFr
                  ? "Transformez une Propriété en un Package Marketing Complet en Minutes"
                  : "Turn One Property Into a Complete Marketing Package in Minutes"}
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl max-w-4xl mx-auto">
                {isFr
                  ? "Découvrez six exemples concrets montrant comment les détails d'une propriété peuvent être transformés en descriptions MLS professionnelles, contenus pour réseaux sociaux, remarques d'agent et actifs marketing en quelques minutes."
                  : "Explore six real-world examples showcasing how property details can be transformed into professional MLS descriptions, social media content, agent remarks, and marketing assets in minutes."}
              </p>
              <p className="text-sm text-white/70 mt-3 max-w-2xl mx-auto">
                {isFr
                  ? "Conçu pour les agents, équipes et courtiers occupés qui souhaitent gagner du temps, commercialiser les annonces plus rapidement et maintenir un marketing professionnel et cohérent pour chaque propriété."
                  : "Built for busy Realtors, teams, and brokerages looking to save time, market listings faster, and maintain consistent, professional marketing across every property."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video + Lead Capture */}
      <section className="w-full max-w-6xl mt-8 md:mt-10">
        <FadeIn>
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: Video + Workflow */}
              <div className="md:col-span-2 p-8 md:p-10 text-white flex flex-col justify-center bg-gray-900">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md bg-gray-700 mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title={isFr ? "Vidéo de démonstration" : "Demo video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <h2 className="text-lg font-bold mb-1">
                  {isFr ? "Un Apport → Plusieurs Sorties" : "One Input → Multiple Outputs"}
                </h2>
                <p className="text-xs text-gray-400 mb-4">
                  {isFr
                    ? "Entrez les détails une seule fois. Obtenez tout ce dont vous avez besoin."
                    : "Enter details once. Get everything you need."}
                </p>

                <div className="space-y-0">
                  {/* Input box */}
                  <div className="bg-gray-800 border border-dashed border-gray-600 rounded-lg px-4 py-3 text-center">
                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                      {isFr ? "Détails de la Propriété" : "Property Details"}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      adresse, prix, chambres, caractéristiques…
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-1.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
                      <path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Processor box */}
                  <div className="bg-gray-700 border border-gray-500 rounded-lg px-4 py-3 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-sm font-bold text-white">Real Estate Listing Pro</p>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      AI-powered marketing engine
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-1.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
                      <path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Outputs grid */}
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2 text-center">
                      {isFr ? "Actifs Marketing Générés" : "Marketing Assets Generated"}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { en: "MLS Description", fr: "Description MLS" },
                        { en: "Instagram Post", fr: "Publication Instagram" },
                        { en: "Facebook Post", fr: "Publication Facebook" },
                        { en: "Agent Remarks", fr: "Remarques Agent" },
                        { en: "Property Highlights", fr: "Points Forts" },
                        { en: "Email Blast", fr: "Campagne Email" },
                      ].map((item) => (
                        <div key={item.en} className="bg-green-900/30 border border-green-700/40 rounded px-2 py-1.5 text-center">
                          <p className="text-[10px] font-medium text-green-300">{isFr ? item.fr : item.en}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 text-center mt-3">
                  {isFr
                    ? "1 apport → 6+ actifs. Pas juste de l'écriture IA — de l'automatisation."
                    : "1 input → 6+ assets. Not just AI writing — workflow automation."}
                </p>
              </div>
              {/* Right: Form */}
              <div className="md:col-span-3 p-8 md:p-10 bg-gray-800">
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <h3 className="text-base font-bold text-white mb-3">
                    {isFr ? "Pourquoi les agents utilisent Real Estate Listing Pro" : "Why Realtors Use Real Estate Listing Pro"}
                  </h3>
                  <ul className="space-y-1.5">
                    {[
                      { en: "Save hours on every listing", fr: "Gagnez des heures sur chaque annonce" },
                      { en: "Generate professional marketing content in minutes", fr: "Générez du contenu marketing professionnel en minutes" },
                      { en: "Maintain consistent quality across every property", fr: "Maintenez une qualité cohérente pour chaque propriété" },
                      { en: "Create social media content faster", fr: "Créez du contenu pour les réseaux sociaux plus rapidement" },
                      { en: "Spend more time selling and less time writing", fr: "Passez plus de temps à vendre et moins à écrire" },
                    ].map((item) => (
                      <li key={item.en} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-0.5 shrink-0">✔</span>
                        {isFr ? item.fr : item.en}
                      </li>
                    ))}
                  </ul>
                </div>
                <LeadForm isFr={isFr} />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Listings Grid */}
      <section className="w-full max-w-6xl mt-8 md:mt-10">
        <FadeIn>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {isFr ? "6 Annonces Exemples" : "6 Sample Listings"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {listings.map((item) => (
              <div
                key={item.address}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-4">
                  <a
                    href={`https://www.zillow.com/homes/${encodeURIComponent(item.address)}_rb/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-blue-700 hover:text-blue-900 hover:underline leading-tight block"
                  >
                    {item.address} <span className="text-[10px] font-normal text-gray-400">↗</span>
                  </a>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {/* Before */}
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase mb-1">Before</p>
                      <div className="text-[11px] text-gray-600 leading-relaxed">
                        {item.beds}bd · {item.baths}ba · {item.sqft.toLocaleString()}sqft
                      </div>
                      <div className="text-[10px] text-gray-500 leading-relaxed mt-0.5">
                        {item.features}
                      </div>
                    </div>
                    {/* After */}
                    <div>
                      <p className="text-[10px] font-semibold text-green-600 uppercase mb-1">After</p>
                      <div className="flex flex-wrap gap-x-1 gap-y-0.5">
                        {["MLS","IG","FB","Remarks","Open House","Email","Luxury","FTHB","Investor"].map((label) => (
                          <span key={label} className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-100 text-[10px] text-gray-500 text-center">
                    {isFr
                      ? "1 apport → 7+ sorties"
                      : "1 Input → 7+ Outputs"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
