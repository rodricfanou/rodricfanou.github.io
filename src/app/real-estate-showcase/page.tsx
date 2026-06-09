"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
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
            ? "Nous vous contacterons sous peu avec votre premier package d'annonces."
            : "We'll be in touch shortly with your first listing package."}
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
          ? "Nous générerons votre premier package d'annonces gratuitement."
          : "We'll generate your first listing package for free."}
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
  { address: "742 Evergreen Terrace", type: "Single Family", price: "$849,000", beds: 4, baths: 2, sqft: 2100, desc: "Charming family home with modern updates and a spacious backyard." },
  { address: "100 Main St #505", type: "Condo", price: "$425,000", beds: 2, baths: 1, sqft: 950, desc: "Bright corner unit with city views and rooftop access." },
  { address: "15 Maple Drive", type: "Single Family", price: "$1,200,000", beds: 5, baths: 3, sqft: 3200, desc: "Executive home in sought-after school district with gourmet kitchen." },
  { address: "88 Ocean Ave", type: "Townhouse", price: "$675,000", beds: 3, baths: 2, sqft: 1650, desc: "Steps from the beach with private patio and updated bathrooms." },
  { address: "200 Park Blvd", type: "Condo", price: "$310,000", beds: 1, baths: 1, sqft: 680, desc: "Affordable starter unit near transit and downtown dining." },
  { address: "12 Elm Street", type: "Single Family", price: "$950,000", beds: 4, baths: 3, sqft: 2500, desc: "Recently renovated colonial with hardwood floors and finished basement." },
  { address: "7 Sunset Ridge", type: "Single Family", price: "$1,550,000", beds: 5, baths: 4, sqft: 4100, desc: "Stunning hillside estate with panoramic views and pool." },
  { address: "42 Oak Lane", type: "Townhouse", price: "$525,000", beds: 3, baths: 2, sqft: 1400, desc: "End-unit townhouse with attached garage and private yard." },
  { address: "300 River Rd #12", type: "Condo", price: "$375,000", beds: 2, baths: 2, sqft: 1050, desc: "Ground-floor condo with patio overlooking the river." },
  { address: "9 Highland Ave", type: "Multi-Family", price: "$1,100,000", beds: 6, baths: 4, sqft: 3600, desc: "Turnkey duplex with two separate units and strong rental income." },
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
                {isFr ? "Annonces Immobilières Générées par IA" : "AI-Generated Real Estate Listings"}
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl max-w-3xl mx-auto">
                {isFr
                  ? "10 annonces immobilières professionnelles générées avec l'IA. Regardez la vidéo pour voir comment elles ont été créées."
                  : "10 professional real estate listings generated with AI. Watch the demo video to see how they were created."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full max-w-6xl mt-8 md:mt-10 flex flex-col lg:flex-row gap-6">
        {/* Video Sidebar */}
        <aside className="w-full lg:w-[400px] lg:shrink-0">
          <FadeIn>
            <div className="bg-gray-200 rounded-2xl shadow-lg p-6 md:p-8 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {isFr ? "Vidéo de Démonstration" : "Demo Video"}
              </h2>
              <p className="text-gray-500 text-xs mb-4">
                {isFr
                  ? "Regardez comment ces 10 annonces ont été générées par IA en moins de 2 minutes."
                  : "Watch how these 10 listings were generated by AI in under 2 minutes."}
              </p>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md bg-gray-300">
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
              <p className="text-[11px] text-gray-400 text-center mt-3">
                {isFr
                  ? "Remplacez VIDEO_ID par l'ID de votre vidéo YouTube."
                  : "Replace VIDEO_ID with your YouTube video ID."}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg text-sm transition-colors"
                >
                  {isFr ? "Me Contacter" : "Get in Touch"}
                </Link>
              </div>
            </div>
          </FadeIn>
        </aside>

        {/* Listings Grid */}
        <section className="flex-1">
          <FadeIn>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {isFr ? "10 Annonces Exemples" : "10 Sample Listings"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listings.map((item) => (
                <div
                  key={item.address}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Image placeholder */}
                  <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                    {isFr ? "Image de la propriété" : "Property image"}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-sm leading-tight flex-1 pr-2">
                        {item.address}
                      </h3>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-lg font-extrabold text-green-700 mb-2">
                      {item.price}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{item.beds} {isFr ? "ch" : "beds"}</span>
                      <span className="text-gray-300">|</span>
                      <span>{item.baths} {isFr ? "sdb" : "baths"}</span>
                      <span className="text-gray-300">|</span>
                      <span>{item.sqft.toLocaleString()} sqft</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </div>

      {/* Lead Capture */}
      <section className="w-full max-w-6xl mt-8 md:mt-10">
        <FadeIn>
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 p-8 md:p-10 text-white flex flex-col justify-center bg-gray-900">
                <h2 className="text-xl font-bold mb-3">
                  {isFr ? "Générez vos annonces IA" : "Generate Your AI Listing Package"}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {isFr
                    ? "Remplissez les détails ci-dessous et nous générerons gratuitement un package complet : MLS, Zillow, Instagram, Facebook, Email, Flyer, Tagline et Text Blast."
                    : "Fill in the details below and we'll generate a full package for free: MLS, Zillow, Instagram, Facebook, Email, Flyer, Tagline, and Text Blast."}
                </p>
              </div>
              <div className="md:col-span-3 p-8 md:p-10 bg-gray-800">
                <LeadForm isFr={isFr} />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
