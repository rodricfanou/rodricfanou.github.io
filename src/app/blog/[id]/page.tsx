import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }];
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const posts: Record<string, { title: string; date: string; readTime: string; content: React.ReactNode }> = {
    "7": {
      title: "Rio de Janeiro: Essential Encounters in the Cidade Maravilhosa",
      date: "2026-05-27",
      readTime: "5 min",
      content: (
        <div className="space-y-6 text-gray-700 text-base leading-relaxed md:text-lg text-justify">

          {/* Intro */}
          <p>
            Rio de Janeiro does not ease you in. The city arrives all at once: mountains erupting from the Atlantic, a statue arms-wide above a green canopy, beaches so broad they function as public squares, and a sound that is neither music nor noise but a third thing Cariocas call "alegria". What follows is an honest account of twenty encounters, arranged for a four days visit.
          </p>

          {/* Hero image */}
          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Aerial view of Rio de Janeiro with Christ the Redeemer overlooking the city and coast"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "480px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Rio de Janeiro, &quot;Cidade Maravilhosa.&quot; Photo by <strong className="text-gray-500">Raphael Nogueira</strong> on{" "}
              <a href="https://unsplash.com/photos/christ-the-redeemer-brazil-OkiDIla7K8Q" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>.{" "}
              <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          {/* DAY 1 */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10">Day 1: The Icons Rio Refuses to Underplay </h2>

          {/* ---- 1 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">1. Christ the Redeemer via the Parque Lage Trail</h2>
          <p>
            The statue is 30 meters tall on an 8-meter pedestal, completed in 1931 after nine years of construction, standing on the 710-meter summit of Corcovado.<sup><a href="https://christ-the-redeemer.com/entrance-fee/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[1]</a></sup> None of these figures prepare you for it. The trail from Parque Lage through the Tijuca Atlantic Forest takes two to three hours each way; the park entrance is free and the forest is dense enough to make you forget the city below until, abruptly, it reappears 710 meters beneath your feet. If hiking, entrance to the monument itself is not included in the van or train ticket and must be paid at the summit; current adult rate is approximately R$134 for the combined cog-train access.<sup><a href="https://christ-the-redeemer.com/tickets/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[2]</a></sup> Important safety note: there have been multiple reports of robberies on the Corcovado Trail in recent years; hiking with a certified guide is strongly recommended.
          </p>

          {/* ---- 2 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">2. Sugarloaf Mountain (Pão de Açúcar) at Dusk</h2>
          <p>
            The 396-meter granite monolith rising directly from the sea is reached by two sequential cable-car stages: first to Morro da Urca (215 m), then to the summit. Adult tickets cost R$180 (approximately US$35); the official park operates daily and the last cable car departs before closing, so arrive at least 45 minutes before dusk if you want the transition from daylight to city lights.<sup><a href="https://www.bondinho.com.br/en/ingresso-bondinho" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[3]</a></sup> From the summit, Christ the Redeemer is visible across the bay on Corcovado. The view at dusk, with Guanabara Bay below and the city turning gold and then electric, is one of the more persuasive arguments for the existence of beauty as a category.
          </p>

          {/* Sugarloaf aerial */}
          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1731159623214-888a439ea7ea?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Aerial view of Rio de Janeiro with Sugarloaf Mountain rising from Guanabara Bay"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Aerial view of Rio with Sugarloaf Mountain. Photo by <strong className="text-gray-500">UC Berkeley, Dept. of Geography</strong> on{" "}
              <a href="https://unsplash.com/photos/aerial-view-of-rio-de-janeiro-with-sugarloaf-mountain-4Ju1JNREksM" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>.{" "}
              <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a>
            </figcaption>
          </figure>

          {/* ---- 3 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">3. Ipanema Beach, Posto 9</h2>
          <p>
            Ipanema is 2.5 kilometers of white sand flanked by the Dois Irmãos peaks to the west and the Arpoador rocks to the east. Posto 9, the ninth lifeguard station, is the beach&apos;s social center: bohemian. Arrive before 9 AM for a chair and umbrella at a manageable price; later in the day vendors circulate selling agua de coco, açaí, and mate. Do not bring valuables beyond what you intend to use. The beach is not safe after dark.
          </p>

          {/* Ipanema beach */}
          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1587646534144-abd34fe0455f?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Ipanema beach with city skyline and mountains in the background, Rio de Janeiro"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Ipanema beach, Rio de Janeiro. Photo by <strong className="text-gray-500">Raphael Nogueira</strong> on{" "}
              <a href="https://unsplash.com/photos/body-of-water-near-city-buildings-under-blue-sky-during-daytime-0_OeBU9kUNk" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>.{" "}
              <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a>
            </figcaption>
          </figure>

          {/* ---- 4 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">4. Arpoador Rock at Sunset: The Applause</h2>
          <p>
            At the point where Ipanema gives way to Copacabana, a granite outcrop called Pedra do Arpoador juts into the Atlantic. Every evening, crowds gather to watch the sun descend behind Morro Dois Irmãos. When it drops below the horizon, they applaud. The tradition is attributed to journalist Carlos Leonam, who began it in the 1960s.<sup><a href="https://blog.hotelarpoador.com/en/arpoador-rock-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[4]</a></sup> It is the only tourist activity in Rio that costs nothing and is impossible to photograph adequately: you have to be there for the light, the crowd, and the strange sincerity of several hundred people applauding the sun.
          </p>

          {/* ---- 5 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">5. Copacabana: the Democratic Promenade</h2>
          <p>
            Four kilometers of beach open to everyone, lined by the wave-pattern mosaic boardwalk (calçadão) designed by Roberto Burle Marx. The beach runs from Posto 2 to Posto 6, each with its own social character; Posto 4 and 5 draw a working-class Carioca crowd that serves as a useful corrective to Ipanema&apos;s reputation for exclusivity. The Copacabana Palace hotel, open since 1923, is worth entering even if you are not a guest: the pool bar is the correct vantage point for the argument that the 20th century had some admirable ideas.
          </p>

          {/* DAY 2 */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10">Day 2: Lapa, Samba, and the Bohemian Hill</h2>

          {/* ---- 6 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">6. Escadaria Selarón Before 9 AM</h2>
          <p>
            Chilean-born artist Jorge Selarón began covering the 215-step staircase linking Lapa to Santa Teresa in 1990, ultimately using more than 2,000 tiles from 60 countries, many sent by visitors after he publicized his project internationally.<sup><a href="https://carolinerosetravel.com/the-ultimate-list-of-things-to-do-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[5]</a></sup> He died on the steps in 2013 and is buried nearby; the steps are now maintained by the city. Come before 9 AM: the morning light catches the blue, green, and yellow tiles directly, the tour groups have not arrived, and the neighborhood is quiet enough that you can actually see what Selarón made rather than photographing it through other people&apos;s phones.
          </p>

          {/* ---- 7 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">7. Lapa Arches at Night</h2>
          <p>
            The Arcos da Lapa are an 18th-century aqueduct, 270 meters long and 64 meters at its highest point, repurposed in 1896 as the viaduct for the Santa Teresa tram.<sup><a href="https://www.rioculturalsecrets.com/attractions-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[6]</a></sup> At night the arches are lit and the neighborhood around them fills with samba from open doorways, street food, and the ambient energy of a city that takes its nightlife seriously. Arrive after 10 PM on a Friday or Saturday for the full effect. Use Uber to get there and back; street taxis in Lapa at night carry more risk than they are worth.
          </p>

          {/* ---- 8 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">8. Rio Scenarium: Live Samba in a Former Antiques Shop</h2>
          <p>
            A multilevel bar occupying a 19th-century building in Lapa, furnished with antiques, carnival masks, and vintage furniture, with a live samba stage that runs until the early hours.<sup><a href="https://www.mustseespots.com/brazil/articles/nightlife-in-rio-de-janeiro-best-bars-clubs-samba-experiences/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[7]</a></sup> On Saturdays from noon, Rio Scenarium serves a traditional feijoada with live music, which is the correct way to spend a Saturday afternoon in Brazil if you have no other obligations. Reserve a table online; walk-in capacity is limited on weekend evenings.
          </p>

          {/* ---- 9 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">9. Bar Carioca da Gema: Choro and Cachaça</h2>
          <p>
            A smaller, more intimate venue than Rio Scenarium, in a colonial mansion two blocks away. Carioca da Gema is considered one of Rio&apos;s most musically serious samba rooms: the performers are regulars rather than hired acts, the sound mix favors the acoustic instruments, and a table on the balcony overlooking the street is among the better seats in Lapa.<sup><a href="https://eatrio.net/samba-in-rio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[8]</a></sup> Cover charge applies most nights.
          </p>

          {/* ---- 10 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">10. Santa Teresa: the Hillside Enclave</h2>
          <p>
            A neighborhood of steep cobbled streets, colonial mansions, and artists&apos; studios built on a hill above Lapa, reached by the Santa Teresa tram (bonde) that crosses the Arcos da Lapa. The neighborhood survived the 20th century&apos;s urbanization with more of its original character intact than almost anywhere else in Rio. Aprazível restaurant, set in a garden on the hillside with views of Guanabara Bay, serves artisanal Brazilian cuisine under a canopy of toucans and tropical plants; it is one of the better arguments for eating slowly.<sup><a href="https://brasilatm.com/best-restaurants-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[9]</a></sup>
          </p>

          {/* DAY 3 */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10">Day 3: The Green City</h2>

          {/* ---- 11 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">11. Parque Lage: the Hidden Courtyard</h2>
          <p>
            A 52-hectare park at the base of Corcovado, free to enter, containing a neo-Renaissance mansion whose courtyard has been converted into an open-air café. The park is where the Corcovado hike begins, but it is worth arriving an hour early to sit in the courtyard with a coffee before the trail. The mansion houses the Visual Arts School of Rio de Janeiro (Escola de Artes Visuais); galleries are usually accessible during park hours. Capuchin monkeys occasionally descend from the Atlantic Forest behind. No entry fee.
          </p>

          {/* ---- 12 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">12. Jardim Botânico: 7,000 Species and Two Hours of Quiet</h2>
          <p>
            The Rio de Janeiro Botanical Garden, founded by Prince Regent João VI in 1808, is a UNESCO-listed biosphere reserve covering 137 hectares, home to more than 7,000 tropical plant species including giant Amazonian water lilies (Victoria amazonica), 900 species of orchid, and an avenue of imperial palms 750 meters long.<sup><a href="https://www.viator.com/Rio-de-Janeiro-attractions/Rio-de-Janeiro-Botanical-Garden-Jardim-Botanico/d712-a1321" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[10]</a></sup> Toucans, marmosets, and agoutis move through the understory without apparent concern for the human visitors. Adult entrance approximately R$30; open daily except Mondays.
          </p>

          {/* ---- 13 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">13. Tijuca National Park: Taunay Waterfall</h2>
          <p>
            Tijuca is the world&apos;s largest urban forest: 32 square kilometers of Atlantic rainforest within the city limits, home to ocelots, howler monkeys, more than 300 bird species, and a network of trails to waterfalls and viewpoints.<sup><a href="https://www.viator.com/Rio-de-Janeiro-attractions/Tijuca-National-Park/d712-a1333" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[11]</a></sup> The Taunay Waterfall circuit is the most accessible introduction: a 2-hour round trip through dense forest, ending at a cascade you can swim under. The 19th-century Mayrink Chapel is en route. Park entry fees apply; guided tours from the Botanical Garden area are available and recommended for first-time visitors.
          </p>

          {/* ---- 14 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">14. Morro Dois Irmãos via Vidigal</h2>
          <p>
            The Two Brothers peaks (533 meters at the highest) rise directly from the sea at the western end of Leblon, and the summit offers what is likely the finest 360-degree view in Rio: Ipanema and Copacabana spreading east, Lagoa Rodrigo de Freitas behind, Sugarloaf and Guanabara Bay to the north, and the open Atlantic south.<sup><a href="https://nowinrio.com/hiking-the-dois-irmaos/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[12]</a></sup> The trail begins inside the Vidigal community (favela); the hike takes 45 minutes to an hour and is rated moderate. A moto-taxi from Leblon to the trailhead costs approximately R$5-10. Go in a group; inform your hotel of your plan.
          </p>

          {/* Rio panoramic image */}
          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1548963670-aaaa8f73a5e3?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Panoramic view of Rio de Janeiro city with mountains and coastline"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Rio de Janeiro from above. Photo by <strong className="text-gray-500">Krys Amon</strong> on{" "}
              <a href="https://unsplash.com/photos/rio-de-janero-brazil-under-blue-skies-8tTh9isJoos" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>.{" "}
              <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a>
            </figcaption>
          </figure>

          {/* ---- 15 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">15. Beco das Garrafas: Where Bossa Nova Began</h2>
          <p>
            In the late 1950s, a narrow alley in Copacabana called Beco das Garrafas (Bottles Alley) hosted the earliest bossa nova sessions: João Gilberto, Tom Jobim, and Vinicius de Moraes among them. Two venues on the alley, Bottles Bar and Little Club, continue the tradition with live bossa nova and samba-jazz performances.<sup><a href="https://goingtorio.com/blog/where-to-see-live-samba-in-rio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[13]</a></sup> It is one of those rare places where the historical claim and the current quality are both genuine.
          </p>

          {/* DAY 4 */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10">Day 4: Architecture, Taste, and the Difficult Exit</h2>

          {/* ---- 16 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">16. Confeitaria Colombo: Breakfast in 1894</h2>
          <p>
            A Belle Époque café in the Centro district, opened in 1894, with Belgian stained glass, Portuguese azulejo tiles, carved jacaranda-wood counters, and mirrored walls that make the room seem to extend indefinitely.<sup><a href="https://carolinerosetravel.com/the-ultimate-list-of-things-to-do-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[14]</a></sup> The pão de queijo (cheese bread) is made on the premises. Go for breakfast before the lunch crowd arrives; the building alone justifies the trip to Centro.
          </p>

          {/* ---- 17 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">17. Teatro Municipal: the City&apos;s Architectural Centerpiece</h2>
          <p>
            The Municipal Theatre, inaugurated in 1909, was designed by Francisco de Oliveira Passos after the Paris Opera as its explicit model. The facade, the grand staircase, the painted ceiling of the main hall, and the Assyrian Room used for pre-show receptions constitute one of the finest examples of Belle Époque public architecture in South America. Guided tours run on weekday mornings; check the current performance schedule at teatromunicipal.rio.br, as a performance seen here from the upper gallery is a different experience than the tour.
          </p>

          {/* ---- 18 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">18. A Bloco, Any Bloco</h2>
          <p>
            Rio&apos;s official Carnaval runs over five days in February (in 2026, February 13 to 17, with the Champions Parade on February 21); 462 blocos (street parties) were authorized across the city for 2026.<sup><a href="https://www.carnivality.com/rio-de-janeiro-carnival/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[15]</a></sup> Pre-Carnaval blocos begin in mid-January. Outside of Carnaval season, informal street parties and neighborhood bandas continue year-round in Lapa, Santa Teresa, and the Zona Sul. Cordão da Bola Preta, founded in 1918 and the oldest bloco in Rio, parades on the Saturday before Ash Wednesday and draws crowds exceeding one million. Entry to street blocos is free; protect your belongings.
          </p>

          {/* ---- 19 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">19. Fine Dining: Lasai or Oro</h2>
          <p>
            Lasai, led by chef Rafael Costa e Silva, holds two Michelin stars and operates as a 10-seat counter facing the kitchen in Botafogo; the tasting menu is built around the restaurant&apos;s own garden and seasonal Brazilian ingredients.<sup><a href="https://guide.michelin.com/en/article/dining-out/restaurants-in-rio-de-janeiro-that-are-reimagining-brazilian-cuisine" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[16]</a></sup> Oro, led by chef Felipe Bronze in Leblon, also holds two Michelin stars and takes a more theatrical approach to modern Brazilian cuisine. Both require reservations at least two weeks in advance during high season (December through February). Both justify the effort. A third option for the budget-conscious: Aprazível in Santa Teresa, no Michelin stars, but a terrace meal there at sunset is among the most pleasant hours a city can offer.
          </p>

          {/* ---- 20 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">20. Pedra da Gávea: For the Committed</h2>
          <p>
            The world&apos;s tallest coastal monolith, at 842 meters, with a summit reached by a trail that includes the Carrasqueira: a 30-meter exposed rock face requiring basic climbing technique (graded 5.2 in the Yosemite Decimal System) and presenting serious injury risk without a rope and harness.<sup><a href="https://www.riomountainsports.com/gavea-hike" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[17]</a></sup> This trail is not a casual hike. Go with a certified guide, in a small group, in good weather, with proper footwear. The summit view is, by all accounts, worth the difficulty: the full southern coastline from Barra to Niterói, with the city spread below like a map that has been crumpled and set among mountains. If the Dois Irmãos hike on Day 3 felt too easy, this is the next conversation.
          </p>

          {/* Counter-argument */}
          <div className="mt-10 p-6 rounded-xl bg-amber-50 border border-amber-200">
            <h2 className="text-xl font-bold text-gray-800 mb-3">The Honest Counterargument</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              The strongest case against this itinerary is the one Rio itself makes: the city is acutely unequal, and the twenty experiences above are almost exclusively available to visitors with mobility and the security of a foreign passport. The favelas that ring the Zona Sul and climb the hillsides above Ipanema are not incidental to Rio; they are structural. The carioca who applauds the sunset at Arpoador may take a bus to a neighborhood you will not visit and live under conditions the guidebooks omit. Engaging honestly with Rio means knowing this and not pretending that four days of beaches and Michelin stars constitute a complete picture of the city. It does not make the beaches less beautiful. It makes them more complicated.
            </p>
          </div>

          {/* Safety */}
          <div className="mt-6 p-6 rounded-xl bg-blue-50 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-800 mb-3">A Note on Safety</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Rio de Janeiro is a city of genuine contrasts in safety. Tourist-dense neighborhoods (Ipanema, Leblon, Copacabana, Botafogo, Santa Teresa, Lapa) are well-policed and heavily visited; they carry the ordinary urban risks of any large city. Favela complexes carry significantly higher risk, including during police operations; Some publications recommend avoiding them entirely.<sup><a href="https://travel.gc.ca/destinations/brazil" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[18]</a></sup><sup><a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[19]</a></sup> Primary risks for tourists are phone theft (motorbike snatch), beach robberies (arrastão), and PIX express kidnapping. Use Uber rather than street taxis; do not carry valuables on beaches; do not walk on the beach at night; do not accept drinks from strangers. Research current conditions before travel, and register with your country&apos;s embassy upon arrival.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-sm text-gray-500 leading-relaxed mt-8">
            <strong className="text-gray-700">Disclaimer:</strong> This post shares findings from independent research using publicly available sources. All information reflects conditions as of May 2026. Prices, hours, and availability change; verify directly with venues before visiting. The author has no commercial relationship with any venue listed. Security conditions in Rio de Janeiro can change rapidly; consult your government&apos;s official travel advisory and current local sources before traveling.
          </div>

          {/* Photo Credits */}
          <h2 className="text-2xl font-bold text-gray-900">Photo Credits</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            All photographs sourced from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unsplash</a> and used under the <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unsplash License</a>, which grants free use for all purposes, commercial and non-commercial, worldwide, with no attribution legally required. We credit photographers voluntarily as a matter of practice.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-500">
            <li>
              <strong>Rio de Janeiro, Cidade Maravilhosa (aerial).</strong> Photo by{" "}
              <a href="https://unsplash.com/@phaelnogueira" target="_blank" rel="noopener noreferrer" className="hover:underline">Raphael Nogueira</a>{" "}
              on Unsplash.{" "}
              <a href="https://unsplash.com/photos/christ-the-redeemer-brazil-OkiDIla7K8Q" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/OkiDIla7K8Q</a>
            </li>
            <li>
              <strong>Christ the Redeemer at sunset.</strong> Photo by{" "}
              <a href="https://unsplash.com/@agustindiazg" target="_blank" rel="noopener noreferrer" className="hover:underline">Agustin Diaz Gargiulo</a>{" "}
              on Unsplash.{" "}
              <a href="https://unsplash.com/photos/christ-the-redeemer-GTLJklnjn-E" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/GTLJklnjn-E</a>
            </li>
            <li>
              <strong>Aerial view with Sugarloaf Mountain.</strong> Photo by{" "}
              <a href="https://unsplash.com/@ucberkeley" target="_blank" rel="noopener noreferrer" className="hover:underline">UC Berkeley, Dept. of Geography</a>{" "}
              on Unsplash.{" "}
              <a href="https://unsplash.com/photos/aerial-view-of-rio-de-janeiro-with-sugarloaf-mountain-4Ju1JNREksM" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/4Ju1JNREksM</a>
            </li>
            <li>
              <strong>Ipanema beach with city skyline.</strong> Photo by{" "}
              <a href="https://unsplash.com/@phaelnogueira" target="_blank" rel="noopener noreferrer" className="hover:underline">Raphael Nogueira</a>{" "}
              on Unsplash.{" "}
              <a href="https://unsplash.com/photos/body-of-water-near-city-buildings-under-blue-sky-during-daytime-0_OeBU9kUNk" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/0_OeBU9kUNk</a>
            </li>
            <li>
              <strong>Rio de Janeiro panoramic.</strong> Photo by{" "}
              <a href="https://unsplash.com/@krysamon" target="_blank" rel="noopener noreferrer" className="hover:underline">Krys Amon</a>{" "}
              on Unsplash.{" "}
              <a href="https://unsplash.com/photos/rio-de-janero-brazil-under-blue-skies-8tTh9isJoos" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/8tTh9isJoos</a>
            </li>
          </ul>

          {/* Sources */}
          <h2 className="text-2xl font-bold text-gray-900">Sources</h2>
          <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-500">
            <li><a href="https://christ-the-redeemer.com/entrance-fee/" target="_blank" rel="noopener noreferrer" className="hover:underline">Christ the Redeemer Website, &quot;Christ the Redeemer Entrance Fee,&quot; christ-the-redeemer.com.</a></li>
            <li><a href="https://christ-the-redeemer.com/tickets/" target="_blank" rel="noopener noreferrer" className="hover:underline">Christ the Redeemer Website, &quot;Christ the Redeemer Tickets,&quot; christ-the-redeemer.com.</a></li>
            <li><a href="https://www.bondinho.com.br/en/ingresso-bondinho" target="_blank" rel="noopener noreferrer" className="hover:underline">Sugarloaf Mountain Park Official Website, &quot;Cable Car Ticket,&quot; bondinho.com.br.</a></li>
            <li><a href="https://blog.hotelarpoador.com/en/arpoador-rock-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Hotel Arpoador Blog, &quot;Arpoador Rock in Rio de Janeiro.&quot;</a></li>
            <li><a href="https://carolinerosetravel.com/the-ultimate-list-of-things-to-do-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Caroline Rose Travel, &quot;The Ultimate List of Things to Do in Rio de Janeiro.&quot;</a></li>
            <li><a href="https://www.rioculturalsecrets.com/attractions-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Rio Cultural Secrets, &quot;Top 50 Attractions in Rio de Janeiro 2025.&quot;</a></li>
            <li><a href="https://www.mustseespots.com/brazil/articles/nightlife-in-rio-de-janeiro-best-bars-clubs-samba-experiences/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mustseespots.com, &quot;Nightlife in Rio de Janeiro: Best Bars, Clubs &amp; Samba Experiences.&quot;</a></li>
            <li><a href="https://eatrio.net/samba-in-rio" target="_blank" rel="noopener noreferrer" className="hover:underline">Eat Rio, &quot;Samba in Rio,&quot; eatrio.net.</a></li>
            <li><a href="https://brasilatm.com/best-restaurants-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Brasil ATM, &quot;Best Restaurants in Rio de Janeiro You Can&apos;t Miss.&quot;</a></li>
            <li><a href="https://www.viator.com/Rio-de-Janeiro-attractions/Rio-de-Janeiro-Botanical-Garden-Jardim-Botanico/d712-a1321" target="_blank" rel="noopener noreferrer" className="hover:underline">Viator, &quot;Rio de Janeiro Botanical Garden (Jardim Botânico).&quot;</a></li>
            <li><a href="https://www.viator.com/Rio-de-Janeiro-attractions/Tijuca-National-Park/d712-a1333" target="_blank" rel="noopener noreferrer" className="hover:underline">Viator, &quot;Tijuca National Park, Rio de Janeiro.&quot;</a></li>
            <li><a href="https://nowinrio.com/hiking-the-dois-irmaos/" target="_blank" rel="noopener noreferrer" className="hover:underline">Now In Rio, &quot;Hiking Morro Dois Irmãos: The Complete Guide.&quot;</a></li>
            <li><a href="https://goingtorio.com/blog/where-to-see-live-samba-in-rio" target="_blank" rel="noopener noreferrer" className="hover:underline">Going to Rio, &quot;Where to See Live Samba in Rio de Janeiro: Best Shows &amp; Weekly Guide.&quot;</a></li>
            <li><a href="https://carolinerosetravel.com/the-ultimate-list-of-things-to-do-in-rio-de-janeiro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Caroline Rose Travel, &quot;Confeitaria Colombo,&quot; in &quot;The Ultimate List of Things to Do in Rio de Janeiro.&quot;</a></li>
            <li><a href="https://www.carnivality.com/rio-de-janeiro-carnival/" target="_blank" rel="noopener noreferrer" className="hover:underline">Carnivality, &quot;Rio de Janeiro Carnival 2026.&quot;</a></li>
            <li><a href="https://guide.michelin.com/en/article/dining-out/restaurants-in-rio-de-janeiro-that-are-reimagining-brazilian-cuisine" target="_blank" rel="noopener noreferrer" className="hover:underline">MICHELIN Guide, &quot;The Rio de Janeiro Restaurants Reimagining Brazilian Cuisine.&quot;</a></li>
            <li><a href="https://www.riomountainsports.com/gavea-hike" target="_blank" rel="noopener noreferrer" className="hover:underline">Rio Mountain Sports, &quot;Pedra da Gávea Hike.&quot;</a></li>
            <li><a href="https://travel.gc.ca/destinations/brazil" target="_blank" rel="noopener noreferrer" className="hover:underline">Government of Canada, &quot;Travel Advice and Advisories for Brazil,&quot; travel.gc.ca.</a></li>
            <li><a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html" target="_blank" rel="noopener noreferrer" className="hover:underline">U.S. Department of State, &quot;Brazil Travel Advisory,&quot; travel.state.gov.</a></li>
          </ol>
        </div>
      ),
    },
    "6": {
      title: "Tokyo: Twenty Essential Encounters in one of the World's Greatest Cities",
      date: "2026-05-27",
      readTime: "5 min",
      content: (
        <div className="space-y-6 text-gray-700 text-base leading-relaxed md:text-lg text-justify">

          {/* Intro */}
          <p>
            Tokyo is not overwhelming; it is <em>clarifying</em>. The trains run on time. The signs explain themselves. A stranger asked for directions will draw a map on the back of a receipt. What follows is an honest account of twenty things that will reward you, with the specific details the glossy guides tend to omit.
          </p>

          {/* Hero image: Shibuya crossing */}
          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1741920852881-5284c70305bd?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Shibuya Scramble Crossing at night, Tokyo"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "480px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Shibuya Scramble Crossing at night. Photo by <strong className="text-gray-500">mos design</strong> on <a href="https://unsplash.com/photos/JMD0K-kCJ5I" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>. <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          {/* ---- 1 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">1. Shibuya Scramble Crossing</h2>
          <p>
            Up to 2,500 pedestrians cross simultaneously per signal cycle, traffic halted in every direction at once. Walk it first as a participant; then watch from the Mag&apos;s Park Starbucks second-floor window; arrive before 10 AM for a seat. At night, neon reflected off rain-slicked pavement turns it into something closer to a natural phenomenon than an intersection.
          </p>

          {/* ---- 2 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">2. Senso-ji Temple, Asakusa (Before 8 AM)</h2>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1567948136274-12a92b84d50f?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Senso-ji Temple, Asakusa, Tokyo under blue skies"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Senso-ji Temple, Asakusa. Photo by <strong className="text-gray-500">Rémi Bertogliati</strong> on <a href="https://unsplash.com/photos/L3Fi8pMqXZg" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>. <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          <p>
            Tokyo&apos;s oldest temple, founded in 628 AD, draws 30 million visitors a year.<sup><a href="https://www.senso-ji.jp/english/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[1]</a></sup> Go before 8 AM: the 250-meter Nakamise arcade becomes oppressive by midday, but at dawn the lanterns are lit, incense smoke moves in straight lines, and the courtyard is nearly empty. Admission free; grounds open 24 hours.
          </p>

          {/* ---- 3 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">3. TeamLab Planets, Toyosu</h2>
          <p>
            The most-visited art installation on earth: 2.51 million visitors in 2025, winner of the World Travel Awards &quot;Asia&apos;s Leading Tourist Attraction&quot; two years running.<sup><a href="https://questfordurian.com/teamlab-borderless-vs-planets/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[2]</a></sup> You walk barefoot through water and mirrored rooms of blooming projections. Adults ¥3,800 weekday / ¥4,200 weekend (2026); book at least two weeks ahead, as evening slots sell out within hours of release.
          </p>

          {/* ---- 4 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">4. Pre-Dawn Sushi at Tsukiji Outer Market</h2>
          <p>
            The wholesale inner market moved to Toyosu in 2018, but the Tsukiji Outer Market remains Tokyo&apos;s best morning food stop. Best stalls open 6–7 AM; closed Wednesdays, Sundays, and public holidays; a critical detail that has ambushed many early risers.<sup><a href="https://tripmate.news/posts/tsukiji-market-restaurant-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[3]</a></sup> Sushizanmai and Sushi Sei are well-established counters. Breakfast costs less than a café pastry in Paris.
          </p>

          {/* ---- 5 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">5. Meiji Shrine and Yoyogi Park</h2>
          <p>
            A forest of 70,000 trees planted in 1920, dedicated to Emperor Meiji and Empress Shoken.<sup><a href="https://www.japan-guide.com/e/e3002.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[4]</a></sup> The walk in from Harajuku Station produces one of Tokyo&apos;s reliable small shocks: you are inside a city of 14 million people and cannot hear a single car. Shrine admission free; inner garden ¥1,000.
          </p>

          {/* ---- 6 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">6. Shibuya Sky: 230 Meters, Open Air</h2>
          <p>
            Japan&apos;s highest open-air rooftop observation deck, on the 47th floor of Shibuya Scramble Square.<sup><a href="https://www.gotokyo.org/en/spot/1749/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[5]</a></sup> Book the 30 minutes before sunset; tickets are released four weeks ahead and that slot sells out quickly. Adults ¥2,200–¥2,500. The free alternative: Tokyo Metropolitan Government Building observation deck in Shinjuku, at 202 meters, genuinely comparable.
          </p>

          {/* ---- 7 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">7. Tokyo Skytree: 634 Meters</h2>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1768711478173-07768f32b426?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Tokyo Skytree illuminated at night with city skyline and river reflection"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ maxHeight: "420px" }}
            />
            <figcaption className="text-xs text-gray-400 mt-2 text-center">
              Tokyo Skytree at night. Photo by <strong className="text-gray-500">Tsuyoshi Kozu</strong> on <a href="https://unsplash.com/photos/ZXKFniLzUNQ" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>. <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash License</a> (free for all uses, including commercial)
            </figcaption>
          </figure>

          <p>
            Japan&apos;s tallest structure: Tembo Deck at 350 m, glass-floored Tembo Galleria at 450 m. On clear winter mornings Mount Fuji is visible 100 km southwest. Best appreciated from a distance at night, reflected in the Sumida River.
          </p>

          {/* ---- 8 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">8. Shinjuku Golden Gai (Weeknights Only)</h2>
          <p>
            Around 200 bars across six alleyways, each seating 4–10 people, cover ¥500–1,000, each specializing in something: jazz vinyl, film posters, manga, whisky.<sup><a href="https://tokyocheapo.com/locations/central-tokyo/shibuya-2/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[6]</a></sup> Bars welcoming visitors post English menus outside. Weekends feel like a theme park; weeknights feel like Tokyo.
          </p>

          {/* ---- 9 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">9. Harajuku: Two Streets, Two Centuries</h2>
          <p>
            Takeshita-dori (350 m of street fashion and crêpe vendors) is a five-minute walk from Omotesando, a boulevard of landmark buildings by Tadao Ando, Kengo Kuma, Toyo Ito, and Herzog &amp; de Meuron. Fashion chaos and architectural precision, separated by a short walk.
          </p>

          {/* ---- 10 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">10. Akihabara</h2>
          <p>
            Multi-floor arcades, maid cafes, vintage game hardware, and the world&apos;s densest retail selection of manga and anime, a combination unreplicable anywhere else. Allow two hours minimum.
          </p>

          {/* ---- 11 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">11. Hike Mount Takao</h2>
          <p>
            A 599 m mountain less than one hour from Shinjuku via the Keio Line (~¥430 each way).<sup><a href="https://everwas.com/2025/03/day-hikes-near-tokyo-mt-takao/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[7]</a></sup> Trail 1 reaches the summit in 90 minutes; a ropeway provides an alternative. On clear winter days the summit gives an unobstructed view of Mount Fuji. Takao-san Yakuo-in Temple, en route, dates from 744 AD.
          </p>

          {/* ---- 12 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">12. Yanaka: Old Tokyo, Intact</h2>
          <p>
            One of few Tokyo neighborhoods to survive both the 1923 earthquake and 1945 firebombing. Wooden shopfronts, small temples, no chain stores. The Yanaka Ginza sells pickles, tofu, and ceramics: daily life rather than souvenirs. The cemetery is now a neighborhood park.
          </p>

          {/* ---- 13 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">13. Grand Sumo at Ryogoku Kokugikan</h2>
          <p>
            Tournaments run in January, May, and September; 15 days each, 11,098 seats.<sup><a href="https://tokyocheapo.com/entertainment/sport/tokyo-sumo-cheap/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[8]</a></sup> Upper-tier seats (¥3,000–¥8,000) offer a full view of the ring and are available closer to tournament dates. Outside tournament season, morning practice (keiko) tours at sumo stables provide closer access.
          </p>

          {/* ---- 14 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">14. Live Jazz: Pit Inn and Blue Note Tokyo</h2>
          <p>
            Pit Inn (Shinjuku, open since 1965) is Japan&apos;s premier jazz venue for contemporary and avant-garde acts.<sup><a href="https://roadbook.com/tokyo/city-guide/best-listening-bars-live-music-venues-clubs-nightlife-tokyo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[9]</a></sup> Blue Note Tokyo (Minami-Aoyama) is the Tokyo outpost of the New York club, booking recognized international acts. Both charge a cover; both justify it.
          </p>

          {/* ---- 15 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">15. TeamLab Borderless, Azabudai Hills</h2>
          <p>
            The permanent counterpart to Planets, reopened at Azabudai Hills in 2024. Where Planets is sequential, Borderless is open: installations bleed into one another with no defined endings. TIME &quot;World&apos;s Greatest Places 2024;&quot; 1.69 million visitors in 2025.<sup><a href="https://www.teamlab.art/e/tokyo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[10]</a></sup>
          </p>

          {/* ---- 16 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">16. Ueno Park and the Tokyo National Museum</h2>
          <p>
            Japan&apos;s largest art museum (~120,000 objects, world&apos;s largest collection of Japanese art).<sup><a href="https://www.tnm.jp/?lang=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[11]</a></sup> Ueno Park surrounding it hosts cherry blossoms (late March–April), temples, a zoo, and Shinobazu Pond. Adults ¥1,000.
          </p>

          {/* ---- 17 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">17. Shimokitazawa: Music, Vintage, No Agenda</h2>
          <p>
            Small live venues (Club Que, Shelter, Tiny Tiny), vintage clothing at reasonable prices, coffee shops without queues. The bars assume you came because you wanted to, not because an itinerary sent you. It is the neighborhood most likely to make you miss a flight home.
          </p>

          {/* ---- 18 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">18. Imperial Palace East Gardens (Free)</h2>
          <p>
            The former site of Edo Castle (1603–1868), free to enter, closed Mondays and Fridays.<sup><a href="https://sankan.kunaicho.go.jp/english/guide/koukyo_higashi.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[12]</a></sup> Castle ruins, a traditional garden, and immense quiet at the absolute center of the world&apos;s most populous metropolitan area.
          </p>

          {/* ---- 19 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">19. Eat Tokyo: Ramen, Izakaya, and the Michelin Context</h2>
          <p>
            Tokyo has led all cities in Michelin stars for 18 consecutive years: 504 starred restaurants in 2025, including 12 three-star establishments.<sup><a href="https://guide.michelin.com/us/en/tokyo-region/tokyo/restaurants" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs">[13]</a></sup> Three-star reservations require months of lead time. The honest alternative: counter ramen shops with eight seats and no stars, yakitori stalls under the Yurakucho train lines, izakayas in Shinjuku that close at 5 AM.
          </p>

          {/* ---- 20 ---- */}
          <h2 className="text-2xl font-bold text-gray-900">20. Odaiba and Tokyo Bay at Dusk</h2>
          <p>
            An artificial island in Tokyo Bay, reached by the Yurikamome driverless monorail from Shimbashi. Odaiba Seaside Park is an urban beach (swimming not recommended), but from the water&apos;s edge at dusk, Rainbow Bridge to the left and the full Tokyo skyline reflected in the bay, you get the city&apos;s scale all at once. The right place to decide whether you are ready to leave.
          </p>

          {/* Counter-argument */}
          <div className="mt-10 p-6 rounded-xl bg-amber-50 border border-amber-200">
            <h2 className="text-xl font-bold text-gray-800 mb-3">The Honest Counterargument</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pursuing this list systematically produces a tourist&apos;s fatigue, not the tiredness of engagement but of acquisition. The finest hours I spent in Tokyo were walking the Meguro River on a Wednesday with no plan, finding an izakaya in Yurakucho because I followed a smell, entering a Jimbocho bookshop because it was raining. The city is so organized that consuming it efficiently feels almost irresistible. Resist it. The itinerary is a starting point, not a contract.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-sm text-gray-500 leading-relaxed mt-8">
            <strong className="text-gray-700">Disclaimer:</strong> This post shares findings from independent research using publicly available sources. All information reflects conditions as of May 2026. Prices, hours, and availability change; verify directly with venues before visiting. The author has no commercial relationship with any venue listed.
          </div>

          {/* Photo Credits */}
          <h2 className="text-2xl font-bold text-gray-900">Photo Credits</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            All photographs sourced from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unsplash</a> and used under the <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unsplash License</a>, which grants free use for all purposes, commercial and non-commercial, worldwide, with no attribution legally required. We credit photographers voluntarily as a matter of practice.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-500">
            <li>
              <strong>Shibuya Scramble Crossing at night.</strong> Photo by{" "}
              <a href="https://unsplash.com/@mosdesign" target="_blank" rel="noopener noreferrer" className="hover:underline">mos design</a>{" "}
              on Unsplash.{" "}
              <a href="https://unsplash.com/photos/JMD0K-kCJ5I" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/JMD0K-kCJ5I</a>
            </li>
            <li>
              <strong>Senso-ji Temple, Asakusa.</strong> Photo by{" "}
              <a href="https://unsplash.com/@remi_b" target="_blank" rel="noopener noreferrer" className="hover:underline">Rémi Bertogliati</a>{" "}
              on Unsplash,{" "}
              <a href="https://unsplash.com/photos/L3Fi8pMqXZg" target="_blank" rel="noopener noreferrer" className="hover:underline">unsplash.com/photos/L3Fi8pMqXZg</a>
            </li>
            <li>
              <strong>Tokyo Skytree at night.</strong> Photo by{" "}
              <a href="https://unsplash.com/@tsuyoshikozu" target="_blank" rel="noopener noreferrer" className="hover:underline">Tsuyoshi Kozu</a>{" "}
              on Unsplash,{" "}
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
