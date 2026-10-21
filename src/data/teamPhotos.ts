// Team member portraits - filename matching, no imports needed.
//
// HOW TO ADD A PHOTO (for future editors):
// 1. Drop the portrait into this folder: src/imports/team/
//    e.g. src/imports/team/sarah-wang.jpg
// 2. In src/data/content.ts, add the filename to that person:
//    { role: "VP Finance", name: "Sarah Wang", photo: "sarah-wang.jpg" }
// That's it - the card and modal pick it up automatically. Anyone without
// a `photo` keeps the placeholder icon.

// Eagerly loads every image in this folder as a URL, keyed by path.
const modules = import.meta.glob<string>(
  "../imports/team/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}",
  {eager: true, query: "?url", import: "default"}
);

// Resolves a filename from content.ts to its bundled URL.
// Returns undefined when missing so callers can fall back to the placeholder.
export function teamPhoto(file?: string): string | undefined {
  if (!file) return undefined;
  return modules[`../imports/team/${file}`];
}
