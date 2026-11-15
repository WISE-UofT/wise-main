// Sponsor logos - filename matching, no imports needed.
//
// HOW TO ADD A LOGO (for future editors):
// 1. Drop the logo into this folder: src/imports/sponsors/
//    e.g. src/imports/sponsors/autodesk.png
// 2. In src/data/content.ts, add the filename to that sponsor:
//    { name: "Autodesk", logo: "autodesk.png" }
// Sponsors without a `logo` fall back to their letter mark.

const modules = import.meta.glob<string>(
  "../imports/sponsors/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,svg,SVG}",
  {eager: true, query: "?url", import: "default"}
);

// Resolves a filename from content.ts to its bundled URL.
export function sponsorLogo(file?: string): string | undefined {
  if (!file) return undefined;
  return modules[`../imports/sponsors/${file}`];
}
