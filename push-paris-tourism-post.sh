#!/bin/bash
# Run this script from your Mac terminal to push the Paris tourism blog post
# for review. It creates a branch (not main) so your business team can
# review the post on GitHub before it goes live.
# Usage: bash push-paris-tourism-post.sh

cd "$(dirname "$0")"

echo "Clearing stale git lock files..."
rm -f .git/HEAD.lock .git/index.lock

echo "Creating/switching to review branch..."
git checkout -B blog/tourism-paris-2026-07-13

echo "Staging changes..."
git add "src/app/tourism/blog/[id]/page.tsx" src/app/tourism/blog/page.tsx

echo "Committing..."
git commit -m "Add tourism post: Paris - Twenty Essential Encounters in the City of Light

- 4-day itinerary (20 encounters): Eiffel Tower, Louvre, Musee d'Orsay,
  Sacre-Coeur, Notre-Dame, Shakespeare and Company, jazz clubs, Le Marais,
  Fontainebleau bouldering/hiking, Buttes-Chaumont, Paris Plages, Arc de
  Triomphe, Catacombs, Palais Garnier, Bastille Day, Fete de la Musique/
  Nuit Blanche, Place des Vosges
- Honest counterargument section (overtourism, Louvre price/access,
  banlieues, Paris syndrome) and safety note citing the current State
  Dept Level 2 advisory
- All facts sourced and cited (20 references); images from Unsplash
  License (free for commercial use, no copyright issues)
- Needs business team review before merging to main / publishing

Automated weekly tourism post (scheduled task: visit-a-city-each-week)"

echo "Pushing branch to GitHub for review (NOT main)..."
git push -u origin blog/tourism-paris-2026-07-13

echo ""
echo "Done. Open a pull request from 'blog/tourism-paris-2026-07-13' into 'main'"
echo "on GitHub and have your business team review it before merging."
echo "Only merging to main will trigger the GitHub Actions deploy."
