import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const posts: Record<string, { title: string; date: string; readTime: string; content: React.ReactNode }> = {
    "6": {
      title: "Tokyo: Twenty Essential Encounters with the World's Greatest City",
      date: "2026-05-27",
      readTime: "7 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg text-justify">

          {/* Intro */}
          <p>
            There is a quality to Tokyo&apos;s light at three in the morning — neon reflected off wet pavement, the smell of ramen broth drifting from a door left open — that is unlike the light of any other city I have known. Tokyo has been described, by people who should know better, as overwhelming: too big, too strange, too far from anywhere familiar. What it actually is, upon arrival, is <em>clarifying</em>. The trains run. The signs explain themselves. A stranger asked for directions will draw a map on the back of a receipt. I visited on a wet morning in March and could not bring myself to leave in June.
          </p>
          <p>
            What follows is an account of twenty things that will reward you honestly — specific, counter-argued where necessary, with the details the glossy guides tend to omit.
          </p>

          {/* Hero image — Shibuya crossing */}
          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1741920852881-5284c70305bd?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Shibuya Scramble Crossing at night, Tokyo"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "480px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Shibuya Scramble Crossing at night — Photo by <strong className="text-gray-500">mos design</strong> on <a href="https://unsplash.com/photos/JMD0K-kCJ5I" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a> &mdash; <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          {/* ---- 1 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">1. Stand at Shibuya Scramble Crossing</h2>
          <p>
            The crossing handles up to 2,500 pedestrians per signal cycle at peak hours, with traffic halted simultaneously in every direction. It is worth experiencing first as a participant — caught in the current, swept to the far kerb — before retreating to observe. The second-floor window of the Mag&apos;s Park Starbucks provides a direct angle over the intersection; arrive before 10 AM to find a seat. At night the volume of neon, reflected off ten thousand umbrellas during a rainstorm, becomes something that functions like a natural phenomenon.
          </p>

          {/* ---- 2 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">2. Senso-ji Temple, Asakusa — Before 8 AM</h2>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1567948136274-12a92b84d50f?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Senso-ji Temple, Asakusa, Tokyo under blue skies"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Senso-ji Temple, Asakusa — Photo by <strong className="text-gray-500">Rémi Bertogliati</strong> on <a href="https://unsplash.com/photos/L3Fi8pMqXZg" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a> &mdash; <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          <p>
            Tokyo&apos;s oldest temple was founded in 628 AD according to temple records and draws approximately 30 million visitors each year.<sup><a href="https://www.senso-ji.jp/english/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[1]</a></sup> The honest advice is to go early. The Nakamise shopping arcade — 250 meters of souvenir stalls leading to the main hall — becomes genuinely oppressive by midday. At dawn the stone lanterns are lit, the incense smoke moves in vertical lines through cool air, and you will have stretches of the courtyard almost to yourself. Admission is free. The grounds are open 24 hours.
          </p>

          {/* ---- 3 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">3. TeamLab Planets, Toyosu — Book Two Weeks Ahead</h2>
          <p>
            This is, by reasonable measures, the most-visited art installation on earth: 2.51 million visitors in 2025, recipient of the World Travel Awards for &quot;Asia&apos;s Leading Tourist Attraction&quot; in both 2023 and 2025.<sup><a href="https://questfordurian.com/teamlab-borderless-vs-planets/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[2]</a></sup> You walk barefoot through shallow water, into mirrored rooms where projections of flowers bloom and dissolve, into a field of floating lights that respond to your movement. Adult admission is ¥3,800 on weekdays (~$25) and ¥4,200 on weekends as of 2026. Buy tickets at least two weeks ahead — popular evening slots disappear within hours of release. The installation is open until the end of 2027.
          </p>

          {/* ---- 4 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">4. Pre-Dawn Sushi at Tsukiji Outer Market</h2>
          <p>
            The wholesale inner market relocated to Toyosu in 2018, but the Tsukiji Outer Market remains Tokyo&apos;s finest morning food experience. The best stalls open between 6 and 7 AM. The market is closed Wednesdays, Sundays, and public holidays — a detail travel guides tend to bury in footnotes, and which has stranded many an early riser.<sup><a href="https://tripmate.news/posts/tsukiji-market-restaurant-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[3]</a></sup> Sushizanmai and Sushi Sei are well-established counters. Breakfast costs less than a café pastry in Paris and tastes significantly better.
          </p>

          {/* ---- 5 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">5. Meiji Shrine and Yoyogi Park</h2>
          <p>
            The shrine stands within a forest of 70,000 trees planted in 1920 to honor Emperor Meiji and Empress Shoken.<sup><a href="https://www.japan-guide.com/e/e3002.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[4]</a></sup> The walk from Harajuku Station along the gravel path, under trees that block the noise and much of the light, produces one of Tokyo&apos;s reliable small shocks: you understand, unmistakably, that you are inside a city of 14 million people, and yet you cannot hear a single car. Admission is free; the inner shrine charges ¥1,000 to enter the garden.
          </p>

          {/* ---- 6 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">6. Shibuya Sky: The City at 230 Meters</h2>
          <p>
            Located on the 47th floor of Shibuya Scramble Square, Shibuya Sky is Japan&apos;s highest open-air rooftop observation deck at approximately 230 meters.<sup><a href="https://www.gotokyo.org/en/spot/1749/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[5]</a></sup> The view encompasses Tokyo Tower, Tokyo Skytree, the National Stadium, and Yoyogi Park — essentially the city&apos;s entire geometry displayed at once. Advance tickets are essential: slots are released four weeks ahead and the 30 minutes before sunset sells out within hours. Adults pay ¥2,200 on weekdays and ¥2,500 on weekends. The free alternative — the observation deck of the Tokyo Metropolitan Government Building in Shinjuku, at 202 meters — is genuinely comparable, and costs nothing.
          </p>

          {/* ---- 7 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">7. Tokyo Skytree — 634 Meters</h2>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1768711478173-07768f32b426?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Tokyo Skytree illuminated at night with city skyline and river reflection"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Tokyo Skytree at night — Photo by <strong className="text-gray-500">Tsuyoshi Kozu</strong> on <a href="https://unsplash.com/photos/ZXKFniLzUNQ" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a> &mdash; <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          <p>
            Japan&apos;s tallest tower at 634 meters offers two observation levels: the Tembo Deck at 350 meters and the glass-floored Tembo Galleria at 450 meters. On clear winter mornings — January and February especially — Mount Fuji is visible 100 kilometers to the southwest. The Skytree is best seen from a distance at night, when it is illuminated in seasonal colors that reflect in the Sumida River below.
          </p>

          {/* ---- 8 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">8. Shinjuku Golden Gai — Weeknights Only</h2>
          <p>
            Approximately 200 bars distributed across six narrow alleyways, each seating between four and ten people. Most charge a cover of ¥500–1,000 and specialize: one in jazz vinyl, one in film posters, one in manga, one in whisky served by a former sumo wrestler. The honest note: some establishments operate informal &quot;regulars only&quot; policies enforced selectively. Bars that genuinely welcome visitors post English menus outside. Go on a weeknight; on weekends the alleyways become performance rather than place.<sup><a href="https://tokyocheapo.com/locations/central-tokyo/shibuya-2/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[6]</a></sup>
          </p>

          {/* ---- 9 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">9. Harajuku: Two Streets, Two Centuries</h2>
          <p>
            Takeshita-dori — 350 meters of street fashion, crêpe vendors, and deliberate excess — sits five minutes&apos; walk from Omotesando, one of the most architecturally distinguished shopping streets in the world: a long boulevard lined with buildings by Tadao Ando, Kengo Kuma, Toyo Ito, and Herzog &amp; de Meuron. Fashion chaos and architectural precision, separated by a short walk. Both deserve your time.
          </p>

          {/* ---- 10 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">10. Akihabara — Electronics, Anime, and the Full Spectrum</h2>
          <p>
            Akihabara&apos;s electronics district has been partially displaced by anime and gaming culture, but the combination remains unreplicable anywhere else on earth. Multi-floor arcades, maid cafes (costumed servers performing a specific brand of theatrical hospitality), vintage game hardware shops, and the world&apos;s most concentrated retail selection of manga. Allow two hours minimum; budget considerably more.
          </p>

          {/* ---- 11 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">11. Hike Mount Takao</h2>
          <p>
            A 599-meter mountain in western Tokyo, accessible in under one hour from Shinjuku Station via the Keio Line (approximately ¥430 each way).<sup><a href="https://everwas.com/2025/03/day-hikes-near-tokyo-mt-takao/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[7]</a></sup> Mount Takao receives roughly 3 million visitors annually — making it one of the most-visited mountains on earth — but Trail 1, the main paved route, takes 90 minutes to the summit with views across the Kanto Plain. On clear winter days the summit offers an unobstructed line to Mount Fuji. A ropeway and cable car provide alternatives. Takao-san Yakuo-in Temple, passed en route, dates from 744 AD.
          </p>

          {/* ---- 12 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">12. Yanaka — Old Tokyo, Intact</h2>
          <p>
            One of the few Tokyo neighborhoods to survive both the 1923 Great Kanto Earthquake and the 1945 firebombing, Yanaka retains wooden shopfronts, small temples on every corner, and narrow lanes without a chain store in sight. The Yanaka Ginza shopping street sells pickles, ceramics, fresh tofu, and the materials of daily life rather than souvenirs of it. The cemetery has become a neighborhood park. If you want to understand what Tokyo felt like before the economy remade it, this is where to look.
          </p>

          {/* ---- 13 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">13. Grand Sumo at Ryogoku Kokugikan</h2>
          <p>
            Grand Sumo tournaments are held three times a year in Tokyo — in January, May, and September — each running for 15 days at Ryogoku Kokugikan.<sup><a href="https://tokyocheapo.com/entertainment/sport/tokyo-sumo-cheap/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[8]</a></sup> The arena holds 11,098 spectators; box seats sell out months in advance. Upper-tier seats cost ¥3,000–¥8,000 and offer a full view of the ring. If your visit falls outside tournament months, morning practice (keiko) tours at sumo stables offer an alternative with considerably more access.
          </p>

          {/* ---- 14 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">14. Live Jazz: Pit Inn and Blue Note Tokyo</h2>
          <p>
            Pit Inn in Shinjuku has operated since 1965 and remains the reference venue for contemporary and avant-garde jazz in Japan, booking musicians of genuine international significance for full-set performances in a room that seats around 200.<sup><a href="https://roadbook.com/tokyo/city-guide/best-listening-bars-live-music-venues-clubs-nightlife-tokyo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[9]</a></sup> Blue Note Tokyo, in Minami-Aoyama, is the Tokyo outpost of the New York club and programs recognized acts across jazz and adjacent genres. Both charge a cover; both justify it. Tokyo&apos;s listening bar culture — cover charge, small snacks, concentrated sound — is itself worth experiencing as a form.
          </p>

          {/* ---- 15 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">15. TeamLab Borderless, Azabudai Hills</h2>
          <p>
            The permanent counterpart to Planets, reopened at its current Azabudai Hills location in 2024. Where Planets is intimate and sequential, Borderless is an open building where installations bleed into one another: there are no rooms with defined endings. The experience rewards wandering over planning. Selected by TIME as one of the &quot;World&apos;s Greatest Places 2024.&quot; 1.69 million visitors in 2025.<sup><a href="https://www.teamlab.art/e/tokyo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[10]</a></sup>
          </p>

          {/* ---- 16 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">16. Ueno Park and the Tokyo National Museum</h2>
          <p>
            The Tokyo National Museum holds approximately 120,000 objects including the world&apos;s largest collection of Japanese art — 13th-century scroll paintings, Meiji-era lacquerwork, Buddhist sculpture, samurai armor.<sup><a href="https://www.tnm.jp/?lang=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[11]</a></sup> The surrounding Ueno Park contains temples, a zoo, Shinobazu Pond with its lotus field, and in late March and early April, the most-attended cherry blossom viewing in Tokyo. Admission to the museum is ¥1,000 for adults.
          </p>

          {/* ---- 17 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">17. Shimokitazawa — Music, Vintage, No Agenda</h2>
          <p>
            Tokyo&apos;s answer to the question of what happens when musicians, artists, and thrift-store devotees accumulate in one neighborhood and cannot be priced out. Small live music venues — Club Que, Shelter, Tiny Tiny — showcase indie and underground acts nightly. Vintage clothing at prices that embarrass every other city. Coffee shops without queues. The bars here assume you came because you wanted to be here, not because an itinerary sent you. It is the neighborhood most likely to make you miss a flight home.
          </p>

          {/* ---- 18 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">18. Imperial Palace East Gardens — Free</h2>
          <p>
            Free admission to the former site of Edo Castle, seat of the Tokugawa shogunate from 1603 to 1868.<sup><a href="https://sankan.kunaicho.go.jp/english/guide/koukyo_higashi.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[12]</a></sup> The gardens are closed Mondays and Fridays, and on national holidays. They contain the ruins of the original castle keep, a large traditional garden, and a 1,000-seat amphitheater. The contrast — immense quiet in the absolute center of the most populous metropolitan area on earth — is its own kind of argument.
          </p>

          {/* ---- 19 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">19. Eat Tokyo: Ramen, Izakaya, and the Michelin Context</h2>
          <p>
            Tokyo has held the record for most Michelin-starred restaurants of any city for 18 consecutive years. The 2025 guide lists 504 starred establishments, including 12 with three stars.<sup><a href="https://guide.michelin.com/us/en/tokyo-region/tokyo/restaurants" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[13]</a></sup> The three-star restaurants require reservations months in advance and some are accessible only through hotel concierge networks. The honest alternative: Tokyo&apos;s greatest meals are frequently served at counter-only ramen shops with eight seats and no stars, at yakitori stalls beneath the train lines in Yurakucho, and at izakayas in Shinjuku that close at 5 AM.
          </p>

          {/* ---- 20 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">20. Odaiba and Tokyo Bay at Dusk</h2>
          <p>
            Odaiba is an artificial island in Tokyo Bay, accessible via the Yurikamome driverless monorail from Shimbashi Station. Odaiba Seaside Park is an artificial urban beach — do not expect Mediterranean conditions; swimming is not recommended — but it offers something the city rarely provides: distance. From the water&apos;s edge at dusk, with Rainbow Bridge to the left and the full Tokyo skyline reflected in the bay, you get the city&apos;s scale all at once. It is, unexpectedly, the right place to decide whether you are ready to leave.
          </p>

          {/* Counter-argument */}
          <div className="mt-10 p-6 rounded-xl bg-amber-50 border border-amber-200">
            <h2 className="text-xl font-bold text-gray-800 mb-3">The Honest Counterargument</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tokyo is, in the ways that matter, a machine for overwhelming the earnest visitor. The list above represents a fraction of what the city contains, and pursuing it systematically produces a particular kind of exhaustion — a tourist&apos;s fatigue, which is not the tiredness of engagement but of acquisition. The finest hours I spent in Tokyo were not at any listed attraction but on a Wednesday morning walking the Meguro River with no plan, in an izakaya in Yurakucho that I found because I followed a smell, in a used-bookshop in Jimbocho that I entered because it was raining. The city is so large and so organized that the temptation to consume it efficiently is almost irresistible. Resist it. The itinerary is a starting point, not a contract.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-sm text-gray-500 leading-relaxed mt-8">
            <strong className="text-gray-700">Disclaimer:</strong> This post shares findings from independent research using publicly available sources. All information reflects conditions as of May 2026. Prices, hours, and availability change — verify directly with venues before visiting. The author has no commercial relationship with any venue listed.
          </div>

          {/* Photo Credits */}
          <h2 className="text-2xl font-bold text-gray-900">Photo Credits</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            All photographs sourced from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unsplash</a> and used under the <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unsplash License</a>, which grants free use for all purposes — commercial and non-commercial — worldwide, with no attribution legally required. We credit photographers voluntarily as a matter of practice.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-500">
            <li>
              <strong>Shibuya Scramble Crossing at night</strong> — Photo by{" "}
              <a href="https://unsplash.com/@mosdesign" target="_blank" rel="noopener noreferrer" className="hover:underline">mos design</a>{" "}
              on Unsplash &mdash;{" "}
              <a href="https://unsplash.com/photos/JMD0K-kCJ5I" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/JMD0K-kCJ5I</a>
            </li>
            <li>
              <strong>Senso-ji Temple, Asakusa</strong> — Photo by{" "}
              <a href="https://unsplash.com/@remi_b" target="_blank" rel="noopener noreferrer" className="hover:underline">Rémi Bertogliati</a>{" "}
              on Unsplash &mdash;{" "}
              <a href="https://unsplash.com/photos/L3Fi8pMqXZg" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/L3Fi8pMqXZg</a>
            </li>
            <li>
              <strong>Tokyo Skytree at night</strong> — Photo by{" "}
              <a href="https://unsplash.com/@tsuyoshikozu" target="_blank" rel="noopener noreferrer" className="hover:underline">Tsuyoshi Kozu</a>{" "}
              on Unsplash &mdash;{" "}
              <a href="https://unsplash.com/photos/ZXKFniLzUNQ" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/ZXKFniLzUNQ</a>
            </li>
          </ul>

          {/* Sources */}
          <h2 className="text-2xl font-bold text-gray-900">Sources</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-500">
            <li><a href="https://www.senso-ji.jp/english/" target="_blank" rel="noopener noreferrer" className="hover:underline">Senso-ji Temple Official Website, senso-ji.jp.</a></li>
            <li><a href="https://questfordurian.com/teamlab-borderless-vs-planets/" target="_blank" rel="noopener noreferrer" className="hover:underline">Quest for Durian, &quot;TeamLab Borderless vs Planets: Which Is Worth Visiting in 2026?&quot;</a></li>
            <li><a href="https://tripmate.news/posts/tsukiji-market-restaurant-guide/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tokyo Mate, &quot;Tokyo Tsukiji Market Restaurant Guide: 2025 Hours, Closed Days &amp; Complete Food Guide.&quot;</a></li>
            <li><a href="https://www.japan-guide.com/e/e3002.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Japan Guide, &quot;Meiji Jingu,&quot; japan-guide.com.</a></li>
            <li><a href="https://www.gotokyo.org/en/spot/1749/index.html" target="_blank" rel="noopener noreferrer" className="hover:underline">GO TOKYO Official Travel Guide, &quot;SHIBUYA SKY.&quot;</a></li>
            <li><a href="https://tokyocheapo.com/locations/central-tokyo/shibuya-2/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tokyo Cheapo, &quot;Shibuya Area Guide.&quot;</a></li>
            <li><a href="https://everwas.com/2025/03/day-hikes-near-tokyo-mt-takao/" target="_blank" rel="noopener noreferrer" className="hover:underline">Everwas, &quot;Day Hikes near Tokyo: Mt. Takao,&quot; March 2025.</a></li>
            <li><a href="https://tokyocheapo.com/entertainment/sport/tokyo-sumo-cheap/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tokyo Cheapo, &quot;Tokyo Sumo Guide: When, Where and Getting Cheap Tickets.&quot;</a></li>
            <li><a href="https://roadbook.com/tokyo/city-guide/best-listening-bars-live-music-venues-clubs-nightlife-tokyo/" target="_blank" rel="noopener noreferrer" className="hover:underline">Roadbook, &quot;Best Listening Bars, Clubs and Music Venues in Tokyo.&quot;</a></li>
            <li><a href="https://www.teamlab.art/e/tokyo/" target="_blank" rel="noopener noreferrer" className="hover:underline">teamLab, &quot;teamLab Borderless TOKYO, Azabudai Hills,&quot; teamlab.art.</a></li>
            <li><a href="https://www.tnm.jp/?lang=en" target="_blank" rel="noopener noreferrer" className="hover:underline">Tokyo National Museum Official Website, tnm.jp.</a></li>
            <li><a href="https://sankan.kunaicho.go.jp/english/guide/koukyo_higashi.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Imperial Household Agency, &quot;East Gardens of the Imperial Palace,&quot; kunaicho.go.jp.</a></li>
            <li><a href="https://guide.michelin.com/us/en/tokyo-region/tokyo/restaurants" target="_blank" rel="noopener noreferrer" className="hover:underline">MICHELIN Guide, &quot;Tokyo Restaurants,&quot; guide.michelin.com.</a></li>
            <li><a href="https://www.teamlab.art/e/planets/" target="_blank" rel="noopener noreferrer" className="hover:underline">teamLab, &quot;teamLab Planets TOKYO, Toyosu,&quot; teamlab.art.</a></li>
            <li><a href="https://www.gotokyo.org/en/destinations/outlying-area/okutama-and-around/index.html" target="_blank" rel="noopener noreferrer" className="hover:underline">GO TOKYO Official Travel Guide, &quot;Okutama &amp; Around.&quot;</a></li>
            <li><a href="https://www.magical-trip.com/media/tokyo-michelin-restaurants-guide-2025-ultimate-gourmet-experience/" target="_blank" rel="noopener noreferrer" className="hover:underline">Magical Trip, &quot;Tokyo Michelin Restaurants Guide 2025: Ultimate Gourmet Experience.&quot;</a></li>
          </ol>
        </div>
      ),
    },
    "5": {
      title: "This Week in AI: Google Goes Agentic, OpenAI Proves a Theorem, and ChatGPT Gets Ads",
      date: "2026-05-26",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg text-justify">
          <p>
            The AI industry this week offered a data point that seemed impossible six months ago: a general-purpose language model cracked an unsolved conjecture in pure mathematics. The Erdős unit distance problem, posed in 1946 and untouched for eight decades, fell to an OpenAI reasoning model with no mathematics-specific training. Meanwhile, Google turned its developer conference into an agentic product announcement, OpenAI quietly built out a self-serve advertising platform, and Anthropic disclosed a model so capable of cyberattacks it declined to release it publicly. The field is accelerating. The restraint is selective.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">A Theorem 80 Years in the Making</h2>
          <p>
            On May 20, OpenAI announced that a general-purpose reasoning model had disproved a central conjecture in discrete geometry: the unit distance problem Paul Erdős first posed in 1946.<sup><a href="https://openai.com/index/model-disproves-discrete-geometry-conjecture/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[1]</a></sup> Mathematicians had long believed square grid constructions were optimal for maximizing unit-distance pairs among <em>n</em> points in a plane. The model found an infinite family of counterexamples, doing so by drawing from algebraic number theory, specifically infinite class field towers and a 1960s theorem called Golod-Shafarevich. The connection between that theorem and this geometry problem had never been made before. Three external mathematicians independently verified the proof.<sup><a href="https://aitoolly.com/ai-news/article/2026-05-21-openai-reasoning-model-disproves-longstanding-erds-conjecture-in-discrete-geometry" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[2]</a></sup> The result came from a general reasoner, not a system tuned for mathematics or targeted at this specific problem. That is the point.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Google&apos;s Agentic Pivot at I/O</h2>
          <p>
            At Google I/O 2026, the company released Gemini 3.5 Flash as the global default model for the Gemini app and AI Mode in Search.<sup><a href="https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[3]</a></sup> Flash gains improved safety characteristics: fewer harmful outputs and fewer false refusals. Google also announced Gemini Spark, a general-purpose agent that reasons across connected apps and takes actions on behalf of users.<sup><a href="https://cloud.google.com/blog/products/ai-machine-learning/innovations-from-google-io-26-on-google-cloud" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[4]</a></sup> Spark is in beta, available first to trusted testers and Google AI Ultra subscribers. Google added Omni, a world model that predicts physical environments from user actions. Gemini can now generate Docs, Sheets, Slides, PDFs, and spreadsheets directly from prompts, posing a direct challenge to the productivity software layer Microsoft has long owned. The breadth of the product surface suggests Google is betting on the assistant layer, not just the model.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">ChatGPT Becomes an Ad Platform</h2>
          <p>
            In May, OpenAI eliminated the $50,000 minimum spend requirement for its self-serve advertising platform and expanded the ads pilot to the UK, Mexico, Brazil, Japan, and South Korea.<sup><a href="https://openai.com/index/testing-ads-in-chatgpt/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[5]</a></sup><sup><a href="https://www.axios.com/2026/05/05/openai-self-serve-ad-platform" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[6]</a></sup> Ads appear in labeled, tinted boxes below AI responses; OpenAI says they cannot influence the model&apos;s answers. The company targets $2.5 billion in ad revenue this year and $100 billion by 2030. ChatGPT launched ads for U.S. free users in February, less than four months ago. The timeline from &quot;no ads, ever&quot; to an international self-serve platform took approximately 18 months of public pressure and a need for revenue diversification. Whether answers remain uninfluenced as advertiser revenue scales is a structural question, not a policy one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Model Anthropic Won&apos;t Ship</h2>
          <p>
            Anthropic&apos;s Claude Mythos Preview identified more than 23,000 potential vulnerabilities in open-source projects, with 1,726 confirmed by external security firms, including over 1,000 rated high or critical severity.<sup><a href="https://www.securityweek.com/anthropic-mythos-detected-23000-potential-vulnerabilities-across-1000-oss-projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[7]</a></sup> In controlled tests, Mythos developed 181 working exploits against Firefox&apos;s JavaScript engine; Claude Opus 4.6 produced two.<sup><a href="https://red.anthropic.com/2026/mythos-preview/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[8]</a></sup> Anthropic declined to release Mythos commercially. Instead, the company launched Project Glasswing, deploying Mythos to proactively patch the vulnerabilities it finds.<sup><a href="https://www.anthropic.com/glasswing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[9]</a></sup> The UK AI Safety Institute published an independent evaluation of Mythos&apos;s cyber capabilities, the first of its kind for a frontier model.<sup><a href="https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[10]</a></sup> Anthropic is simultaneously in talks to raise $30 billion at a reported $900 billion valuation,<sup><a href="https://www.bloomberg.com/news/articles/2026-05-12/anthropic-in-talks-to-raise-30-billion-at-900-billion-valuation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[11]</a></sup> which would surpass OpenAI&apos;s $852 billion post-money figure from earlier this year. The combination of the most capable offensive-security model and the industry&apos;s highest valuation is not a coincidence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Claude Goes to Work: Enterprise Deals, Coding Events, and New Features</h2>
          <p>
            Anthropic held Code with Claude in East London this week, its first developer-focused event in Europe, drawing mainstream coverage from Fortune, MIT Technology Review, and Time.<sup><a href="https://fortune.com/2026/05/21/claude-code-london-anthropic-ai-software-engineering/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[15]</a></sup> The event was oversubscribed and the company&apos;s stated position was direct: Claude now performs at roughly the level of a midlevel software engineer for writing code, though senior engineers remain necessary for system design and harder debugging.<sup><a href="https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[16]</a></sup> On the partnership side, KPMG announced a global alliance to embed Claude inside Digital Gateway, its core business software platform used by 276,000 employees, starting with tools for tax and legal clients.<sup><a href="https://www.anthropic.com/news/anthropic-kpmg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[17]</a></sup> SAP followed by announcing plans to make Claude a primary reasoning capability across its AI-enabled solution portfolio and the newly launched SAP Business AI Platform, extending Claude&apos;s reach into enterprise resource planning at global scale.<sup><a href="https://news.sap.com/2026/05/sap-anthropic-to-bring-claude-sap-business-ai-platform/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[18]</a></sup> On the product side, Anthropic announced a &quot;dreaming&quot; capability in which Claude Code agents write notes to themselves during tasks, with a consolidation system that synthesizes those notes across tasks to build persistent knowledge of a codebase. The company also shipped sandboxes, letting companies run Claude agents on their own infrastructure, and MCP tunnels, which allow agents to reach internal systems without touching the public internet.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Coding Agents and What AI Actually Costs</h2>
          <p>
            xAI launched Grok Build, a coding agent positioned against Anthropic&apos;s Claude Code and GitHub Copilot CLI.<sup><a href="https://www.engadget.com/2173482/xai-coding-agent-grok-build/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[12]</a></sup> The beta is limited to SuperGrok Heavy subscribers at $300 per month. Grok 4.3, released May 4, added native video input and a 1-million-token context window at $1.25 per million input tokens.<sup><a href="https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[13]</a></sup> Simultaneously, Microsoft reportedly began canceling Claude Code licenses for engineers, six months after first enabling access, redirecting them toward Copilot CLI.<sup><a href="https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[14]</a></sup> A Fortune investigation found that deploying AI agents can cost more than paying human employees to do equivalent work. The industry does not yet have a public answer to this problem. Scaling laws work in both directions.
          </p>

          <p>
            The Erdős proof and the Mythos evaluation represent opposite ends of the same trend: AI systems that produce outputs their builders did not fully anticipate. One resolved a problem mathematicians had given up on; the other found vulnerabilities faster than any human security team. Both results exceeded expectation, and neither company had a fully worked-out plan for what to do next. The industry needs better answers to that question than a classified distribution program and a fundraising round.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-sm text-gray-500 leading-relaxed">
            <strong className="text-gray-700">Disclaimer:</strong> All information in this post was gathered through research from publicly available web sources. While every effort has been made to verify accuracy and link primary sources, readers are encouraged to check the references below before drawing conclusions.
          </div>

          <h2 className="text-2xl font-bold text-gray-900">References</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-500">
            <li><a href="https://openai.com/index/model-disproves-discrete-geometry-conjecture/" target="_blank" rel="noopener noreferrer" className="hover:underline">OpenAI, &quot;An OpenAI model has disproved a central conjecture in discrete geometry,&quot; May 20, 2026.</a></li>
            <li><a href="https://aitoolly.com/ai-news/article/2026-05-21-openai-reasoning-model-disproves-longstanding-erds-conjecture-in-discrete-geometry" target="_blank" rel="noopener noreferrer" className="hover:underline">AIToolly, &quot;OpenAI Reasoning Model Disproves Longstanding Erdős Conjecture in Discrete Geometry,&quot; May 21, 2026.</a></li>
            <li><a href="https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html" target="_blank" rel="noopener noreferrer" className="hover:underline">CNBC, &quot;Google unveils AI model Gemini 3.5 and AI agent Gemini Spark,&quot; May 19, 2026.</a></li>
            <li><a href="https://cloud.google.com/blog/products/ai-machine-learning/innovations-from-google-io-26-on-google-cloud" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Cloud Blog, &quot;Innovations from Google I/O 26 on Google Cloud,&quot; 2026.</a></li>
            <li><a href="https://openai.com/index/testing-ads-in-chatgpt/" target="_blank" rel="noopener noreferrer" className="hover:underline">OpenAI, &quot;Testing ads in ChatGPT,&quot; 2026.</a></li>
            <li><a href="https://www.axios.com/2026/05/05/openai-self-serve-ad-platform" target="_blank" rel="noopener noreferrer" className="hover:underline">Axios, &quot;OpenAI launches self-serve ad platform,&quot; May 5, 2026.</a></li>
            <li><a href="https://www.securityweek.com/anthropic-mythos-detected-23000-potential-vulnerabilities-across-1000-oss-projects/" target="_blank" rel="noopener noreferrer" className="hover:underline">SecurityWeek, &quot;Anthropic: Mythos Detected 23,000 Potential Vulnerabilities Across 1,000 OSS Projects,&quot; 2026.</a></li>
            <li><a href="https://red.anthropic.com/2026/mythos-preview/" target="_blank" rel="noopener noreferrer" className="hover:underline">Anthropic, &quot;Claude Mythos Preview,&quot; red.anthropic.com, 2026.</a></li>
            <li><a href="https://www.anthropic.com/glasswing" target="_blank" rel="noopener noreferrer" className="hover:underline">Anthropic, &quot;Project Glasswing,&quot; anthropic.com, 2026.</a></li>
            <li><a href="https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities" target="_blank" rel="noopener noreferrer" className="hover:underline">UK AI Safety Institute, &quot;Our evaluation of Claude Mythos Preview&apos;s cyber capabilities,&quot; 2026.</a></li>
            <li><a href="https://www.bloomberg.com/news/articles/2026-05-12/anthropic-in-talks-to-raise-30-billion-at-900-billion-valuation" target="_blank" rel="noopener noreferrer" className="hover:underline">Bloomberg, &quot;Anthropic In Talks to Raise $30 Billion at $900 Billion Valuation,&quot; May 12, 2026.</a></li>
            <li><a href="https://www.engadget.com/2173482/xai-coding-agent-grok-build/" target="_blank" rel="noopener noreferrer" className="hover:underline">Engadget, &quot;xAI introduces its coding agent called Grok Build,&quot; 2026.</a></li>
            <li><a href="https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10" target="_blank" rel="noopener noreferrer" className="hover:underline">Fabio Chiusano, &quot;xAI Releases Grok 4.3 — Weekly AI Newsletter,&quot; Medium, May 4, 2026.</a></li>
            <li><a href="https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/" target="_blank" rel="noopener noreferrer" className="hover:underline">Fortune, &quot;Microsoft reports are exposing AI&apos;s real cost problem,&quot; May 22, 2026.</a></li>
            <li><a href="https://fortune.com/2026/05/21/claude-code-london-anthropic-ai-software-engineering/" target="_blank" rel="noopener noreferrer" className="hover:underline">Fortune, &quot;Anthropic lands in London as AI-powered coding goes mainstream,&quot; May 21, 2026.</a></li>
            <li><a href="https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/" target="_blank" rel="noopener noreferrer" className="hover:underline">MIT Technology Review, &quot;Anthropic&apos;s Code with Claude showed off coding&apos;s future,&quot; May 21, 2026.</a></li>
            <li><a href="https://www.anthropic.com/news/anthropic-kpmg" target="_blank" rel="noopener noreferrer" className="hover:underline">Anthropic, &quot;KPMG integrates Claude across its core business,&quot; anthropic.com, 2026.</a></li>
            <li><a href="https://news.sap.com/2026/05/sap-anthropic-to-bring-claude-sap-business-ai-platform/" target="_blank" rel="noopener noreferrer" className="hover:underline">SAP, &quot;SAP and Anthropic: Claude on SAP Business AI Platform,&quot; May 2026.</a></li>
          </ol>
        </div>
      ),
    },
    "1": {
      title: "Generating AI Agents Using ChatGPT and Claude",
      date: "2026-05-04",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg text-justify">
          <p>
            I&apos;ve been experimenting with AI agents — autonomous systems that can plan, reason, and execute multi-step tasks. The most effective approach I&apos;ve found involves combining ChatGPT and Claude, leveraging their complementary strengths.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Why Two Models?</h2>
          <p>
            ChatGPT excels at creative ideation and rapid iteration, while Claude shines at structured reasoning and longer-context analysis. My typical workflow uses ChatGPT for brainstorming and code scaffolding, then Claude for review, refinement, and edge-case handling.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Architecture</h2>
          <p>
            A simple coordinator agent delegates tasks to specialized sub-agents, each backed by a different model:
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`class AgentCoordinator:
    def __init__(self):
        self.chatgpt = OpenAI()
        self.claude = anthropic.Anthropic()

    def brainstorm(self, task: str) -> str:
        return self.chatgpt.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": task}]
        )

    def refine(self, draft: str) -> str:
        return self.claude.messages.create(
            model="claude-sonnet-4-20250514",
            messages=[{"role": "user", "content": f"Review: {draft}"}
        )`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Prompt Patterns That Work</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Role assignment:</strong> Give each agent a specific persona and expertise area.</li>
            <li><strong>Chain-of-thought:</strong> Ask agents to reason step-by-step before producing output.</li>
            <li><strong>Self-correction loops:</strong> Have Claude review ChatGPT&apos;s output and flag issues.</li>
            <li><strong>Structured outputs:</strong> Enforce JSON or markdown for reliable parsing.</li>
          </ul>

          <p>
            Key takeaways:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Start simple — a two-agent coordinator is enough for most tasks.</li>
            <li>Don&apos;t over-prompt. Clear instructions are better than complex ones.</li>
            <li>Always keep a human-in-the-loop for critical decisions.</li>
            <li>Cache responses to reduce cost and latency.</li>
          </ul>

          <p>
            The future of AI agents isn&apos;t about finding the single best model — it&apos;s about orchestrating multiple models to play to their individual strengths.
          </p>
        </div>
      ),
    },
    "2": {
      title: "Building a Daily AI News Agent with ChatGPT and Claude",
      date: "2026-05-04",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg text-justify">
          <p>
            The AI field moves too fast for any human to track comprehensively. I used to spend 30-45 minutes each morning scanning Hacker News, ArXiv, and various newsletters — and still missed things. So I built an agent that does it for me in under a minute.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Pipeline</h2>
          <p>
            My agent runs daily on a cron schedule with three stages:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Scrape &amp; Collect</strong> — Gather raw content from 10+ sources (ArXiv, HN, RSS feeds, GitHub trends).</li>
            <li><strong>ChatGPT — First Pass Filter</strong> — Process items in parallel, tag by category, and score relevance (1-10). Fast and cheap.</li>
            <li><strong>Claude — Deep Analysis</strong> — Take the top ~15 items, produce summaries, cross-reference, and flag hype.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">Stage 2: The Fast Filter</h2>
          <p>
            I use GPT-4o-mini for filtering — it&apos;s fast and cheap. The prompt returns structured JSON:
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`PROMPT = """
For each item, return:
- category: [research, product, infra, policy, opinion]
- relevance_score: 1-10
- one_sentence_summary: max 15 words

Items: {items_json}
Respond as JSON only.
"""`}</pre>
          </div>

          <p>
            From ~150 raw items, this filters down to 15-25 that score 6+. Cost: ~$0.05/day.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Stage 3: Claude&apos;s Deep Analysis</h2>
          <p>
            Claude Sonnet 4 receives the filtered items and produces a structured briefing with sections for major developments, notable research, infrastructure changes, and a &quot;signal vs noise&quot; assessment. Its strength is synthesizing information across sources and applying contextual judgment — often noticing connections ChatGPT misses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Delivery &amp; Cost</h2>
          <p>
            The briefing arrives via email at 7 AM (3-5 minutes to read), with an optional Telegram bot. Cost breakdown:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 px-4">Stage</th>
                  <th className="text-left py-2 px-4">Model</th>
                  <th className="text-left py-2 px-4">Cost/day</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">Scrape</td>
                  <td className="py-2 px-4">—</td>
                  <td className="py-2 px-4">$0.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">Filter</td>
                  <td className="py-2 px-4">GPT-4o-mini</td>
                  <td className="py-2 px-4">~$0.05</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">Analysis</td>
                  <td className="py-2 px-4">Claude Sonnet 4</td>
                  <td className="py-2 px-4">~$0.15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Total: ~$6/month. Less than a cup of coffee for a personalized briefing better than any newsletter.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Iterative Improvements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Feedback loop:</strong> Thumbs-up/down on items adjusts scoring weights weekly.</li>
            <li><strong>Deduplication:</strong> Hash-based dedup avoids processing the same story from multiple sources.</li>
            <li><strong>Historical context:</strong> Claude has access to a rolling 30-day index for tracking evolving stories.</li>
            <li><strong>Weekend mode:</strong> Synthesizes the past 7 days into a longer, reflective piece.</li>
          </ul>

          <p>
            The lesson: AI agents don&apos;t need to be complex. The best ones solve a specific, recurring pain point with a simple pipeline. Start small, measure value, and iterate.
          </p>
        </div>
      ),
    },
    "3": {
      title: "From Prompts to Agents: A Practical Framework for Autonomous AI",
      date: "2026-05-09",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg text-justify">
          <p>
            Most AI tutorials stop at prompts. But the real shift happens when you build systems that can perceive, decide, and act — with or without human input. Here is the framework I use to take an idea from single-prompt to production-ready agent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Agent Maturity Model</h2>
          <p>
            Not all agents are equal. I think about AI autonomy across four levels:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Level 0 — Prompt:</strong> Single request, single response. No state. ChatGPT at its most basic.</li>
            <li><strong>Level 1 — Chain:</strong> Sequential prompts where output from one becomes input to the next. Memory is minimal.</li>
            <li><strong>Level 2 — Tool Use:</strong> The agent calls external functions — web search, code execution, APIs. This is where autonomy begins.</li>
            <li><strong>Level 3 — Memory:</strong> The agent maintains state across sessions, learns from past interactions, and builds a knowledge base.</li>
            <li><strong>Level 4 — Multi-Agent:</strong> Multiple specialized agents coordinate, delegate, and debate. Emergent behavior begins.</li>
          </ul>
          <p>
            Most production agents today operate at Level 2 or 3. Level 4 is experimental but increasingly practical.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Step 1: Define the Loop</h2>
          <p>
            Every agent is fundamentally a loop: <strong>Perceive → Think → Act → Reflect</strong>. Before writing any code, I map this loop for the task:
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`AGENT LOOP TEMPLATE:
1. PERCEIVE: What triggers the agent? (input, schedule, event)
2. THINK: What model and prompt interpret the input?
3. ACT: What tool(s) does it call?
4. REFLECT: Did the output achieve the goal? Retry or exit?

Edge cases:
- What if the tool fails?
- What if confidence is below threshold?
- When does a human need to be looped in?`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Step 2: Tool Use is Everything</h2>
          <p>
            The difference between a chatbot and an agent is tool access. Without tools, the model is just a prediction engine. With tools, it becomes an actor in the world.
          </p>
          <p>
            My starter toolkit for any agent:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Web search:</strong> Brave Search, Serper, or Tavily for real-time information retrieval.</li>
            <li><strong>Code execution:</strong> Python sandbox or Bash for calculations, file ops, and data processing.</li>
            <li><strong>URL fetch:</strong> Read web pages, scrape data, pull documentation.</li>
            <li><strong>Database:</strong> Query, store, and retrieve structured data — Postgres, Redis, or SQLite.</li>
            <li><strong>Slack/Email:</strong> Deliver results to humans who need them.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Step 3: Guardrails and Fallbacks</h2>
          <p>
            Without guardrails, agents can spiral. I always implement:
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`MAX_STEPS = 10       # Prevent infinite loops
CONFIDENCE_THRESHOLD = 0.7  # Below this, escalate to human
RETRY_LIMIT = 3             # Per tool, before failing gracefully
COST_BUDGET = 0.50          # Per run, hard stop
HUMAN_IN_THE_LOOP = True   # For high-stakes decisions`}</pre>
          </div>

          <p>
            These parameters are tuned per task. A news aggregator can run 50 steps cheaply. A financial trade agent needs strict limits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Step 4: Memory and Context</h2>
          <p>
            Stateless agents forget everything after each run. For tasks that span days or weeks, I implement a simple memory layer:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Short-term:</strong> Conversation context within a session. Handled by the model's context window.</li>
            <li><strong>Medium-term:</strong> Session summaries stored in Redis or a file. Retrieved on next run.</li>
            <li><strong>Long-term:</strong> Vector embeddings in a Pinecone or Weaviate index. Semantic search across all past interactions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Step 5: Orchestration Patterns</h2>
          <p>
            For complex tasks, one agent is not enough. Here are the patterns I use:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Router:</strong> A lightweight model classifies the input and routes to the right specialist agent.</li>
            <li><strong>Parallel:</strong> Multiple agents work simultaneously on independent sub-tasks, results merged at the end.</li>
            <li><strong>Sequential:</strong> Output of Agent A feeds into Agent B. Used for refine-and-expand workflows.</li>
            <li><strong>Debate:</strong> Two agents argue opposing sides of a decision, third agent resolves.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">A Minimal Working Agent</h2>
          <p>
            Here is the simplest production-ready agent I run — a research assistant that searches the web, summarizes findings, and sends a Slack message:
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`from anthropic import Anthropic
from brave import BraveSearch
import json, re

claude = Anthropic()
search = BraveSearch()

def research_agent(query: str) -> str:
    # Step 1: Search
    results = search.text(query=query, count=5)

    # Step 2: Summarize
    context = "\\n".join([f"{r['title']}: {r['description']}" for r in results["web"]["results"]])
    prompt = f"Summarize these search results in 3 bullet points:\\n\\n{context}"

    summary = claude.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=512,
        messages=[{"role": "user", "content": prompt}]
    )

    # Step 3: Deliver
    return summary.content

# Run
result = research_agent("latest on AI agent frameworks 2026")
print(result)`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">What&apos;s Next</h2>
          <p>
            I am currently building Level 4 multi-agent systems for portfolio research and automated content pipelines. The key insight: agents fail silently when they are poorly scoped. Start with a single, well-defined task. Measure output quality. Only then expand scope.
          </p>
          <p>
            The future is not one agent that does everything. It is many agents that do one thing — and coordinate.
          </p>
        </div>
      ),
    },
    "4": {
      title: "Manus AI: The General Purpose Agent That Actually Works",
      date: "2026-05-19",
      readTime: "6 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg text-justify">
          <p>
            In early 2025, a new kind of AI tool arrived — one that didn&apos;t just answer questions. Manus AI, now part of Meta, is an autonomous general AI agent that accepts a goal and independently plans, executes, and delivers a finished work product. No step-by-step guidance or copying and pasting results is needed. Upon the submission of a task, a complete deliverable is returned.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">What Is Manus AI?</h2>

          <div className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-md">
            <div className="text-6xl mb-4">🤖</div>
            <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
              The general-purpose autonomous agent that delivers complete work products from a single goal.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <span className="text-green-400 text-sm font-medium">●</span>
              <span className="text-white text-sm font-medium">Now part of Meta</span>
            </div>
          </div>

          <p>
            Manus AI is a general-purpose autonomous agent that operates in a sandboxed cloud Linux environment — essentially a virtual computer with its own browser, file system, and internet access. It remembers context across long tasks, installs software, writes and executes code, and produces production-ready files without human oversight at every step.
          </p>

          <p>
            The critical distinction: traditional AI tools like ChatGPT or Claude respond to individual prompts. Manus accepts a <strong>goal</strong>. You describe what you want — a research report, a website, a comparison table — and Manus independently plans the workflow, browses multiple sources, cross-references data, and returns a finished output.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">How Manus Works: Architecture at a Glance</h2>

          <div className="rounded-xl bg-gray-50 p-8 shadow-md border border-gray-200">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">🎯</div>
                  <span className="text-xs font-semibold text-gray-700">Goal Processing</span>
                </div>
                <div className="text-gray-400 text-2xl font-light">→</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">⚙️</div>
                  <span className="text-xs font-semibold text-gray-700">Autonomous Execution</span>
                </div>
                <div className="text-gray-400 text-2xl font-light">→</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">📦</div>
                  <span className="text-xs font-semibold text-gray-700">Delivery</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Manus AI operational model: Goal → Execution → Delivered Work Product</p>
            </div>
          </div>

          <p>
            Manus operates in three conceptual layers:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li><strong>Goal Processing</strong> — You submit a natural language objective. Manus decomposes it into a sequence of sub-tasks.</li>
            <li><strong>Autonomous Execution</strong> — Manus opens a browser, searches and reads multiple sources, runs code, creates files, and fills out forms — all without additional input.</li>
            <li><strong>Delivery</strong> — Manus then packages the output as a finished product: a PDF, a slide deck, a spreadsheet, a working web app, or a formatted report.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">What Can Manus Actually Do?</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { emoji: "🔍", label: "Deep Research" },
              { emoji: "🌐", label: "Web Apps" },
              { emoji: "📊", label: "Data Analysis" },
              { emoji: "🌐", label: "Automation" },
              { emoji: "📁", label: "File Creation" },
            ].map(({ emoji, label }) => (
              <div key={label} className="bg-gray-800 text-white rounded-xl p-4 text-center shadow-md">
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="text-xs font-semibold">{label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">Deep Research</h3>
          <p>
            Manus can navigate JavaScript-heavy websites, interact with pagination and filters, and synthesize information from dozens of sources in parallel. For comparative research, vendor analysis, market research, competitive intelligence, this is meaningfully more powerful than Perplexity or ChatGPT web search, which surface a list of links rather than synthesized content.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Build Full-Stack Web Applications</h3>
          <p>
            Submit &ldquo;Build me a project tracker where team members can log tasks, set deadlines, and mark items complete with a login system,&rdquo; and Manus will produce a working full-stack web app — React frontend, backend API, and database schema. This takes 10–30 minutes for complex apps. It is a real, deployable product, not a prototype.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Data Analysis</h3>
          <p>
            Drop a CSV or Excel file into Manus and it will analyze it programmatically, produce charts, pivot tables, and structured summaries — without you writing a single line of code. For non-technical professionals who need to make sense of operational data quickly, this is a genuine productivity multiplier.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Browser Automation</h3>
          <p>
            The Manus Browser Operator fills out forms, logs into web services, extracts structured data from web applications, and completes multi-step workflows across multiple browser tabs. Think of it as a lightweight Robotic Process Automation (RPA) tool that you operate through plain English.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">File Creation</h3>
          <p>
            Manus creates a wide range of files: PowerPoint presentations (PPTX), PDF reports, websites, spreadsheets, images, and more. All files are fully editable and ready to use — no post-processing required.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Manus vs. Traditional AI Assistants</h2>

          <div className="overflow-hidden rounded-xl shadow-md">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-3 font-medium">Capability</th>
                  <th className="px-4 py-3 font-medium">ChatGPT / Claude</th>
                  <th className="px-4 py-3 font-medium">Manus AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Unit of work</td>
                  <td className="px-4 py-3">Single prompt → single response</td>
                  <td className="px-4 py-3">Goal → complete deliverable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Research depth</td>
                  <td className="px-4 py-3">Shallow, link-based</td>
                  <td className="px-4 py-3">Deep, multi-source synthesis</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">File creation</td>
                  <td className="px-4 py-3">Code snippets only</td>
                  <td className="px-4 py-3">Full editable files (PPTX, PDF, web apps)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Long task memory</td>
                  <td className="px-4 py-3">Context window limit</td>
                  <td className="px-4 py-3">Persistent across sessions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Web browsing</td>
                  <td className="px-4 py-3">Surface-level search</td>
                  <td className="px-4 py-3">Interactive, multi-step automation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Data analysis</td>
                  <td className="px-4 py-3">Requires code or plugin</td>
                  <td className="px-4 py-3">Drag-and-drop CSV → charts & tables</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Limitations to Know</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Cost</strong> — Tasks consume credits based on compute, model calls, and browser time. Complex research or app builds can consume significant credits.</li>
            <li><strong>No API integrations</strong> — Direct integrations with external services (Slack, Salesforce, etc.) are limited compared to Zapier or Make.</li>
            <li><strong>Execution opacity</strong> — You see results but have limited visibility into the agent&apos;s intermediate steps during execution.</li>
            <li><strong>Not a decision engine</strong> — Manus excels at execution but should not be treated as a source of legal, financial, or medical advice.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Use Cases Where Manus Shines</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Market research reports with vendor comparisons and pricing tables</li>
            <li>Competitive intelligence across dozens of sources in one run</li>
            <li>Due diligence on companies or investment targets</li>
            <li>Building MVP web apps before handing off to engineers</li>
            <li>Analyzing sales, operational, or financial CSV data and producing dashboards</li>
            <li>Automating multi-step web form submissions</li>
            <li>Creating polished slide decks and reports for stakeholder meetings</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Who Is Manus For?</h2>
          <p>
            Manus is built for professionals who need results, not just answers. It is particularly valuable for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Entrepreneurs and consultants who need to move fast without a technical team</li>
            <li>Researchers who need deep multi-source synthesis without manual aggregation</li>
            <li>Operations and finance professionals who need to analyze data without coding</li>
            <li>Product managers who want to validate app ideas before committing engineering resources</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Who Is Manus For?</h2>
          <p>
            Manus is built for professionals who need results, not just answers. It is particularly valuable for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Entrepreneurs and consultants who need to move fast without a technical team</li>
            <li>Researchers who need deep multi-source synthesis without manual aggregation</li>
            <li>Operations and finance professionals who need to analyze data without coding</li>
            <li>Product managers who want to validate app ideas before committing engineering resources</li>
          </ul>

<h2 className="text-2xl font-bold text-gray-900">Who Is Manus For?</h2>
          <p>
            Manus is built for professionals who need results, not just answers. It is particularly valuable for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Entrepreneurs and consultants who need to move fast without a technical team</li>
            <li>Researchers who need deep multi-source synthesis without manual aggregation</li>
            <li>Operations and finance professionals who need to analyze data without coding</li>
            <li>Product managers who want to validate app ideas before committing engineering resources</li>
          </ul>

          <div className="mt-8 p-6 rounded-xl bg-gray-100 border border-gray-300 text-sm text-gray-600">
            <strong>Disclaimer:</strong> This post reflects my personal analysis and research. I am not affiliated with Manus AI or Meta. Information is solely based on publicly available documentation and community reports as of May 2026.
          </div>
        </div>
      ),
    },
  };

  const post = posts[id];

  if (!post) {
    return (
      <main className="bg-gray-100 min-h-screen py-12 px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            &larr; Back to blog
          </Link>
        </div>
      </main>
    );
  }

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

        <div className="relative px-6 py-12 md:px-16 md:py-16">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg md:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/80 text-sm mt-4">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>&bull;</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article */}
      <article className="relative w-full max-w-5xl mt-8 bg-white rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16">
        <FadeIn>
          {post.content}
        </FadeIn>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
          <p className="text-gray-700 text-sm leading-relaxed">
            Interested in AI agents, custom software, web design, or any of my other services? I offer consulting across AI & automation, computer networks, IT infrastructure, research collaboration, and more. Reach out to discuss your project →
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Reach out to discuss your project &rarr;
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:underline font-medium">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
