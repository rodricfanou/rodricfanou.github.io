#!/bin/bash
# Run this script from your Mac terminal to commit and push the tourism blog
# post(s) for review. The automated task edited the files locally but this
# sandbox has no GitHub push credentials (and its stale git lock files can't
# be cleared from here), so the actual commit and push have to happen from
# your machine. This creates a branch (not main), commits just the two
# changed tourism blog files, and pushes so your business team can review the
# post(s) on GitHub before anything goes live.
#
# IMPORTANT: this commit bundles FOUR unpublished tourism posts, not just
# London. When this week's scheduled task started, src/app/tourism/blog/
# page.tsx and [id]/page.tsx already contained uncommitted New York City
# (2026-07-15), Sydney (2026-07-22), and Bangkok (2026-07-30) posts from
# prior scheduled runs - their own push-nyc-tourism-post.sh,
# push-sydney-tourism-post.sh, and push-bangkok-tourism-post.sh scripts were
# apparently never run, so those posts were still sitting as local,
# unpushed edits on top of main. This sandbox cannot run git commands at all
# (permission-denied lock files in .git), so there was no way to split them
# into separate commits from here. This script commits all four together;
# if you want them as separate PRs instead, you can `git diff origin/main`
# against the two tourism files and split it by hand before running this.
#
# Usage: bash push-london-tourism-post.sh

cd "$(dirname "$0")"

echo "Clearing stale git lock files..."
rm -f .git/HEAD.lock .git/index.lock

echo "Creating/switching to review branch..."
git checkout -B blog/tourism-nyc-sydney-bangkok-london-2026-08-05

echo "Staging changes (tourism blog files only)..."
git add "src/app/tourism/blog/[id]/page.tsx" src/app/tourism/blog/page.tsx

echo "Committing..."
git commit -m "Add tourism posts: New York City, Sydney, Bangkok, and London

This single commit bundles four previously-unpublished weekly tourism
posts, because the NYC, Sydney, and Bangkok posts were prepared in
earlier scheduled runs but their push scripts were never executed,
leaving them uncommitted on top of main when this week's task started.
This sandbox cannot run git commands at all (permission-denied .git
lock files), so there was no way to commit them separately from here.

- New York City (2026-07-15): Twenty Essential Encounters in the City
  You Already Know
- Sydney (2026-07-22): Twenty Essential Encounters on the Harbour City
- Bangkok (2026-07-30): Twenty Essential Encounters in the World's
  Most-Visited City
- London (2026-08-05): Twenty Essential Encounters in the World's
  Third Most-Visited City - this week's new post. A 4-day itinerary
  covering the Tower of London and Crown Jewels, Tower Bridge, Borough
  Market, the South Bank walk (Tate Modern, Shakespeare's Globe), the
  free Sky Garden view, Westminster Abbey, Big Ben, the British Museum
  and the Rosetta Stone, The Mousetrap (the world's longest-running
  play, since 1952), the 100 Club (live music since 1942), Camden
  Market, the Jazz Cafe and the Roundhouse, Hampstead Heath (Parliament
  Hill view and the Mixed Bathing Pond, swimmable since the 1860s),
  Notting Hill and Portobello Road Market, live jazz at Ronnie Scott's
  (since 1959), a Greenwich day of the Royal Observatory / Prime
  Meridian / Cutty Sark, Kew Gardens' Treetop Walkway, a Windsor Castle
  day trip by train, dinner at Core by Clare Smyth (three Michelin
  stars), and closes on Notting Hill Carnival, Europe's largest street
  festival, which falls 30-31 August 2026
  - Opens with Alain de Botton's 'On Possessing Beauty' (John Ruskin,
    The Art of Travel) as the framing device, continuing the series'
    de Botton-style approach; this chapter has not been used in any
    prior post in the series
  - Honest counterargument section (12,938 people recorded sleeping
    rough in London April 2025-March 2026, the second-highest annual
    total on record, and 75,600 households in temporary accommodation
    at end of 2025) plus a safety note covering the July 2026 US State
    Department Level 2 advisory (terrorism concerns, not street crime)
    and Met Police phone-theft data, which most travel blogs omit
  - Also flags directly, in the intro, that London has no hiking
    trails or beaches worth the name, rather than forcing those
    categories in
  - Reviewed internally via the Frannie feedback-coach skill before
    finalizing
  - All facts sourced and cited (32 references, largely official
    sites: Historic Royal Palaces, Tower Bridge, Borough Market,
    British Museum, Ronnie Scott's, Royal Museums Greenwich, MICHELIN
    Guide, Crisis, US State Department, Met Police); images from
    Unsplash License (free for commercial use, no copyright issues)
  - Confirmed via StatRanker/Euromonitor that London is the world's
    third most-visited city by international arrivals in 2025 (22.7
    million, behind Bangkok and Hong Kong), making it this week's
    pick; varies the series to Europe after Southeast Asia (Bangkok)
    two weeks prior
  - Needs business team review before merging to main / publishing

Automated weekly tourism post (scheduled task: visit-a-city-each-week)"

echo "Pushing branch to GitHub for review (NOT main)..."
git push -u origin blog/tourism-nyc-sydney-bangkok-london-2026-08-05

echo ""
echo "Done. Open a pull request from 'blog/tourism-nyc-sydney-bangkok-london-2026-08-05'"
echo "into 'main' on GitHub and have your business team review it before merging."
echo "Only merging to main will trigger the GitHub Actions deploy."
