#!/bin/bash
set -e
LOGO_PATH="public/assets/ywc-logo.png"
URL="https://docs.google.com/uc?export=download&id=1ZweyOz3ZwcAxy5NIVyL4V2iyFolVyP3G"
mkdir -p $(dirname "$LOGO_PATH")
if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$URL" -o "$LOGO_PATH" || touch "$LOGO_PATH"
elif command -v wget >/dev/null 2>&1; then
  wget -q "$URL" -O "$LOGO_PATH" || touch "$LOGO_PATH"
else
  touch "$LOGO_PATH"
fi
