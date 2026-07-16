import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return ["", "/pow", "/blogs"].map((path) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: new Date(),
		changeFrequency: path === "" ? "monthly" : "weekly",
		priority: path === "" ? 1 : 0.8,
	}));
}
