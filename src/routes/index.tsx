import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dajashni R — Aspiring IT Professional & B.Tech Student" },
      {
        name: "description",
        content:
          "Portfolio of Dajashni R, a 2nd-year B.Tech Information Technology student at R.M.D Engineering College, Chennai, passionate about coding, NLP, and building modern digital solutions.",
      },
      { property: "og:title", content: "Dajashni R — Portfolio" },
      { property: "og:description", content: "Aspiring IT professional. B.Tech IT student at R.M.D Engineering College, Chennai." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});
