/**
 * Public, approved Philon's Kitchen media assets.
 * Supply NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_MEDIA_BUCKET.
 * Never put secret or service-role credentials in NEXT_PUBLIC_ variables.
 */
const base = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
const bucket = process.env.NEXT_PUBLIC_SUPABASE_MEDIA_BUCKET || "philons-kitchen-media";
export type MediaKey = "logo" | "heroPilau" | "heroStew" | "heroSkewers" | "heroChapati" | "heroSamosas" | "heroCake" | "chefPhillip";
const paths: Record<MediaKey,string> = {
 logo:"branding/philon-kitchen-logo.webp",
 heroPilau:"hero/01-kenyan-pilau.webp",
 heroStew:"hero/02-beef-stew.webp",
 heroSkewers:"hero/03-chicken-skewers.webp",
 heroChapati:"hero/04-layered-chapati.webp",
 heroSamosas:"hero/05-samosas.webp",
 heroCake:"hero/06-celebration-cake.webp",
 chefPhillip:"chef/chef-phillip.webp"
};
export function mediaUrl(key:MediaKey):string|null {
 if(!base) return null;
 return `${base}/storage/v1/object/public/${encodeURIComponent(bucket)}/${paths[key].split("/").map(encodeURIComponent).join("/")}`;
}
export const mediaManifest = paths;
