#!/usr/bin/env bash
# Turns a screen recording into the three files a DeviceVideo needs:
#   <name>.mp4          H.264, the fallback every browser plays
#   <name>.webm         VP9, smaller, tried first
#   <name>-poster.webp  the first frame, shown before the video plays and when motion is reduced
# All are 780px wide, with no audio.
#
# Usage: scripts/encode-video.sh <recording> [name] [out-dir]
#   name     defaults to the recording's file name without its extension
#   out-dir  defaults to public/videos

set -euo pipefail

if [[ $# -lt 1 || $# -gt 3 ]]; then
  echo "Usage: $0 <recording> [name] [out-dir]" >&2
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is not installed (macOS: brew install ffmpeg)." >&2
  exit 1
fi

input="$1"
if [[ ! -f "$input" ]]; then
  echo "No such file: $input" >&2
  exit 1
fi

base="$(basename "$input")"
name="${2:-${base%.*}}"
out="${3:-public/videos}"
mkdir -p "$out"

# 780px wide; -2 keeps the height even, which H.264 needs
scale="scale=780:-2"

echo "→ $out/$name.mp4"
ffmpeg -hide_banner -loglevel error -y -i "$input" -an -vf "$scale" \
  -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart \
  "$out/$name.mp4"

echo "→ $out/$name.webm"
ffmpeg -hide_banner -loglevel error -y -i "$input" -an -vf "$scale" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 \
  "$out/$name.webm"

echo "→ $out/$name-poster.webp"
if ffmpeg -hide_banner -encoders 2>/dev/null | grep -q libwebp; then
  ffmpeg -hide_banner -loglevel error -y -i "$input" -an -vf "$scale" -frames:v 1 \
    -c:v libwebp -quality 80 \
    "$out/$name-poster.webp"
else
  # Some ffmpeg builds (Homebrew's among them) have no WebP encoder: take the frame as PNG and let sharp convert it
  frame="$(mktemp -t poster).png"
  ffmpeg -hide_banner -loglevel error -y -i "$input" -an -vf "$scale" -frames:v 1 "$frame"
  node -e "require('sharp')(process.argv[1]).webp({ quality: 80 }).toFile(process.argv[2])" "$frame" "$out/$name-poster.webp"
  rm -f "$frame"
fi

echo "Done."
ls -lh "$out/$name.mp4" "$out/$name.webm" "$out/$name-poster.webp"
