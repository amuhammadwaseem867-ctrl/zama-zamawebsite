const baseUrl = "https://zamazama.site";

const routes = [
  "",
  "/about",
  "/services",
  "/services/tyre-fitting",
  "/services/wheel-alignment",
  "/services/wheel-balancing",
  "/services/puncture-repairs",
  "/services/suspension-mechanical",
  "/tyres-wheels",
  "/contact",
  "/book-appointment",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
