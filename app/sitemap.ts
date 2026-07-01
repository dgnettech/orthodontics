import type { MetadataRoute } from "next";

const routes = ["", "/about", "/treatments", "/first-appointment", "/smile-gallery", "/patient-information", "/contact", "/book-appointment"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nel-orthodontics.vercel.app";
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
