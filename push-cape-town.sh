#!/bin/bash
# Run this script from your Mac terminal to push the Cape Town blog post
# Usage: bash push-cape-town.sh

cd "$(dirname "$0")"

echo "Clearing stale git lock files..."
rm -f .git/HEAD.lock .git/index.lock

echo "Staging changes..."
git add src/app/blog/[id]/page.tsx src/app/blog/page.tsx

echo "Committing..."
git commit -m "Add tourism post: Cape Town - Twenty Essential Encounters in the Mother City"

echo "Pushing to GitHub..."
git push origin main

echo "Done! GitHub Actions will build and deploy the site."
