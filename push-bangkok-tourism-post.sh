#!/bin/bash
# Run this script from your Mac terminal to commit and push the tourism blog
# post(s) for review. The automated task edited the files locally but this
# sandbox has no GitHub push credentials (and its stale git lock files can't
# be cleared from here), so the actual commit and push have to happen from
# your machine. This creates a branch (not main), commits just the two
# changed tourism blog files, and pushes so your business team can review the
# post(s) on GitHub before anything goes live.
#
# IMPORTANT: this commit bundles THREE unpublished tourism posts, not just
# Bangkok. When this week's scheduled task started, src/app/tourism/blog/
# page.tsx and [id]/page.tsx already contained uncommitted New York City
# (2026-07-15) and Sydney (2026-07-22) posts from prior scheduled runs -
# their own push-nyc-tourism-post.sh and push-sydney-tourism-post.sh scripts
# were apparently never run, so those posts were still sitting as local,
# unpushed edits on top of main. This sandbox cannot run git commands at all
# (permission-denied lock files in .git), so there was no way to split them
# into separate commits from here. This script commits all three together;
# if you want them as separate PRs instead, you can `git diff` the file
# against main and split it by hand before running this.
#
# Usage: bash push-bangkok-tourism-post.sh

cd "$(dirname "$0")"

echo "Clearing stale git lock files..."
rm -f .git/HEAD.lock .git/index.lock

echo "Creating/switching to review branch..."
git checkout -B blog/tourism-nyc-sydney-bangkok-2026-07-30

echo "Staging changes (tourism blog files only)..."
git add "src/app/tourism/blog/[id]/page.tsx" src/app/tourism/blog/page.tsx

echo "Committing..."
git commit -m "Add tourism posts: New York City, Sydney, and Bangkok

This single commit bundles three previously-unpublished weekly tourism
posts, because the NYC and Sydney posts were prepared in earlier
scheduled runs but their push scripts were never executed, leaving them
uncommitted on top of main when this week's task started. This sandbox
cannot run git commands at all (permission-denied .git lock files), so
there was no way to commit them separately from here.

- New York City (2026-07-15): Twenty Essential Encounters in the City
  You Already Know
- Sydney (2026-07-22): Twenty Essential Encounters on the Harbour City
- Bangkok (2026-07-30): Twenty Essential Encounters in the World's
  Most-Visited City - this week's new post. A 5-day itinerary covering
  the Grand Palace, Wat Pho's Reclining Buddha and its birthplace-of-
  Thai-massage school, Wat Arun, the Chao Phraya Express Boat, Yaowarat
  Chinatown's Michelin Bib Gourmand stalls, Chatuchak Weekend Market,
  the Jim Thompson House, the Erawan Shrine, live music at Saxophone
  Pub since 1987, cycling Bang Kachao's green lung, Lumpini Park's
  water monitor lizards, sunset at Sky Bar 247m up, Asiatique the
  Riverfront, a Muay Thai fight night at Rajadamnern Stadium (1945),
  day trips to Ayutthaya and the Damnoen Saduak/Amphawa floating
  markets, Koh Larn as the nearest (and honestly assessed) beach, a
  Michelin-starred dinner, and Loy Krathong/Songkran depending on dates
  - Opens with Alain de Botton's 'On Curiosity' (Alexander von Humboldt,
    The Art of Travel) as the framing device, continuing the series'
    de Botton-style approach
  - Honest counterargument section (Bangkok's January 2026 PM2.5 spike
    to 58.1 ug/m3 against a 37.5 standard, and the still-active Grand
    Palace gem-shop scam) plus a safety note covering the July 2026
    US State Department advisory (Level 1 overall, Level 2 near the
    Thai-Cambodian border and in Yala/Pattani/Narathiwat) and Thailand's
    lese-majeste law (Section 112), which most travel blogs omit
  - Reviewed internally via the Frannie feedback-coach skill before
    finalizing
  - All facts sourced and cited (35 references); images from Unsplash
    License (free for commercial use, no copyright issues)
  - Confirmed via Euromonitor International (StatRanker, Forbes) that
    Bangkok drew the most international arrivals of any city on earth
    in 2025 (30.3 million), making it this week's pick; varies the
    series to Southeast Asia after Oceania (Sydney) the prior week
  - Needs business team review before merging to main / publishing

Automated weekly tourism post (scheduled task: visit-a-city-each-week)"

echo "Pushing branch to GitHub for review (NOT main)..."
git push -u origin blog/tourism-nyc-sydney-bangkok-2026-07-30

echo ""
echo "Done. Open a pull request from 'blog/tourism-nyc-sydney-bangkok-2026-07-30'"
echo "into 'main' on GitHub and have your business team review it before merging."
echo "Only merging to main will trigger the GitHub Actions deploy."
