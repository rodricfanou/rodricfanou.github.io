#!/bin/bash
# Run this script from your Mac terminal to commit and push the Sydney
# tourism blog post for review. The automated task edited the files locally
# but this sandbox has no GitHub push credentials (and its stale git lock
# files can't be cleared from here), so the actual commit and push have to
# happen from your machine. This creates a branch (not main), commits just
# the two changed tourism blog files, and pushes so your business team can
# review the post on GitHub before it goes live.
# Usage: bash push-sydney-tourism-post.sh

cd "$(dirname "$0")"

echo "Clearing stale git lock files..."
rm -f .git/HEAD.lock .git/index.lock

echo "Creating/switching to review branch..."
git checkout -B blog/tourism-sydney-2026-07-22

echo "Staging changes..."
git add "src/app/tourism/blog/[id]/page.tsx" src/app/tourism/blog/page.tsx

echo "Committing..."
git commit -m "Add tourism post: Sydney - Twenty Essential Encounters on the Harbour City

- 4-day itinerary (20 encounters): Opera House tour, Harbour Bridge
  Climb vs. the cheaper Pylon Lookout, Royal Botanic Garden and Mrs
  Macquarie's Chair, The Rocks, dinner at Bennelong, Bondi Beach and
  the 1929 Icebergs pool, the Bondi to Coogee coastal walk, Tamarama
  and Bronte, Coogee Beach and Wylie's Baths, jazz at Mary's
  Underground, Sydney Fish Market's new Blackwattle Bay site, Taronga
  Zoo by ferry, Barangaroo Reserve, the Art Gallery of NSW, Manly by
  ferry, a Blue Mountains day trip to the Three Sisters, Django Bar,
  the Enmore Theatre, Vivid Sydney, and Sydney New Year's Eve fireworks
- Opens with Alain de Botton's "On the Exotic" (The Art of Travel) as
  the framing device, continuing the series' de Botton-style approach
- Honest counterargument section (median house price, NSW homelessness
  street count, the Australia Day / Invasion Day debate) and a safety
  note citing the current US State Dept Level 1 advisory, rip-current
  and bushfire-season guidance
- Reviewed internally via the Frannie feedback-coach skill before
  finalizing (tightened the intro, added texture to Day 3/4)
- All facts sourced and cited (33 references); images from Unsplash
  License (free for commercial use, no copyright issues)
- Varies the series to Oceania, following North America (NYC),
  Europe (Paris), Africa (Cape Town), Asia (Tokyo), and South America
  (Rio de Janeiro) in prior weeks
- Needs business team review before merging to main / publishing

Automated weekly tourism post (scheduled task: visit-a-city-each-week)"

echo "Pushing branch to GitHub for review (NOT main)..."
git push -u origin blog/tourism-sydney-2026-07-22

echo ""
echo "Done. Open a pull request from 'blog/tourism-sydney-2026-07-22' into 'main'"
echo "on GitHub and have your business team review it before merging."
echo "Only merging to main will trigger the GitHub Actions deploy."
