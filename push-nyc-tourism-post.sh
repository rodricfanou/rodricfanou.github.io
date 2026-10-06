#!/bin/bash
# Run this script from your Mac terminal to push the New York City tourism
# blog post for review. The automated task already created the branch and
# commit locally (this sandbox has no GitHub push credentials, so the
# actual push has to happen from your machine). This checks out that
# branch (not main) and pushes it so your business team can review the
# post on GitHub before it goes live.
# Usage: bash push-nyc-tourism-post.sh

cd "$(dirname "$0")"

echo "Clearing stale git lock files..."
rm -f .git/HEAD.lock .git/index.lock .git/refs/heads/blog/tourism-nyc-2026-07-15.lock

echo "Checking out review branch..."
git checkout blog/tourism-nyc-2026-07-15

echo "Pushing branch to GitHub for review (NOT main)..."
git push -u origin blog/tourism-nyc-2026-07-15

echo ""
echo "Done. Open a pull request from 'blog/tourism-nyc-2026-07-15' into 'main'"
echo "on GitHub and have your business team review it before merging."
echo "Only merging to main will trigger the GitHub Actions deploy."
