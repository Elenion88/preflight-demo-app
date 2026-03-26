#!/bin/bash
# Reset the demo app to its buggy baseline state
# Run this before each demo to ensure a clean starting point

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

cd "$REPO_DIR"

# Discard any local changes and go back to main
git checkout main
git reset --hard HEAD
git clean -fd

echo "Demo app reset to buggy baseline."
echo "Start with: npm run dev"
