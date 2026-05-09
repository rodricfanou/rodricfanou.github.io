"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const interests = isFr
    ? ["Collaboration en IA", "Consulting", "Autre"]
    : ["AI Collaboration", "Consulting", "Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/xpwzvkpk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", interest: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center md:py-12 md:px-8">
      {/* Hero */}
      <section
        className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        <div className="relative px-6 py-12 md:px-16 md:py-16">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg md:text-5xl">
                {isFr ? "Me Contacter" : "Contact Me"}
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl">
                {isFr
                  ? "Parlons d'IA ou de collaboration professionnelle."
                  : "Let's talk AI, computer networks, or collaboration."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg bg-gray-200 overflow-hidden md:mt-10 md:rounded-3xl">
        <div className="grid md:grid-cols-2 gap-0">

          {/* Left — Contact Info */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 text-white flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6">
                {isFr ? "Restons en contact" : "Let's Connect"}
              </h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p>
                  {isFr
                    ? "Vous souhaitez discuter d'IA, d'arbitrage locatif ou de collaboration professionnelle ? Remplissez le formulaire ou envoyez-moi un email."
                    : "Interested in AI, short-term rental arbitrage, or professional collaboration? Use the form or reach me directly."}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-300 mt-0.5">&#9993;</span>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide text-blue-200 mb-0.5">
                        {isFr ? "Email" : "Email"}
                      </p>
                      <a
                        href="mailto:roderick@roderickfanou.com"
                        className="hover:underline text-white/90"
                      >
                        roderick@roderickfanou.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-300 mt-0.5">&#128640;</span>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide text-blue-200 mb-0.5">
                        {isFr ? "GitHub" : "GitHub"}
                      </p>
                      <a
                        href="https://github.com/rodricfanou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-white/90"
                      >
                        github.com/rodricfanou
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-300 mt-0.5">&#128188;</span>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide text-blue-200 mb-0.5">
                        {isFr ? "Spécialisations" : "Expertise"}
                      </p>
                      <ul className="text-white/80 space-y-0.5 text-xs">
                        <li>&#x2022; {isFr ? "Agents IA & Orchestration" : "AI Agents & Orchestration"}</li>
                        <li>&#x2022; {isFr ? "Réseaux Informatiques & Architecture" : "Computer Networks & Architecture"}</li>
                        <li>&#x2022; {isFr ? "CDN & Edge Computing" : "CDN & Edge Computing"}</li>
                        <li>&#x2022; {isFr ? "Systèmes Distribués" : "Distributed Systems"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-blue-200 pt-2">
                  {isFr
                    ? "Je réponds sous 24–48h en semaine."
                    : "I respond within 24–48 hours on weekdays."}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-12 bg-white">
            <FadeIn>
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">&#9989;</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {isFr ? "Message envoyé !" : "Message Sent!"}
                  </h3>
                  <p className="text-gray-500">
                    {isFr
                      ? "Merci. Je vous répondrai sous 24–48h."
                      : "Thank you. I'll reply within 24–48 hours."}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-800 mb-6">
                    {isFr ? "Envoyez-moi un message" : "Send me a message"}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                        {isFr ? "Nom complet" : "Full Name"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={isFr ? "Votre nom" : "Your name"}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={isFr ? "votre@email.com" : "your@email.com"}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                        {isFr ? "Intérêt" : "Interest"}
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                      >
                        <option value="">
                          {isFr ? "Sélectionnez un sujet" : "Select a topic"}
                        </option>
                        {interests.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                        {isFr ? "Message" : "Message"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder={
                          isFr
                            ? "Décrivez votre projet, question ou proposition..."
                            : "Describe your project, question, or proposal..."
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-red-500 text-sm">{errorMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {isFr ? "Envoi en cours..." : "Sending..."}
                        </>
                      ) : (
                        isFr ? "Envoyer le message" : "Send Message"
                      )}
                    </button>
                  </form>
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    {isFr
                      ? "Powered by Formspree — votre email reste privée."
                      : "Powered by Formspree — your email stays private."}
                  </p>
                </>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}