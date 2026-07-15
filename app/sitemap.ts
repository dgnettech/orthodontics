import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

const routes = ["", "/about", "/treatments", "/first-appointment", "/smile-gallery", "/patient-information", "/contact", "/book-appointment"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.siteUrl;
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
