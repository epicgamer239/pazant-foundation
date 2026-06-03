import type { Metadata } from "next";
import { BiographyBody } from "@/components/biography/BiographyBody";
import { HeroPortrait } from "@/components/HeroPortrait";

export const metadata: Metadata = {
  title: "Rosalie Frazier Pazant: Full Biography",
  description:
    "Educator. Leader. Trailblazer. Legacy Builder. The distinguished career of Rosalie Frazier Pazant.",
};

export default function BiographyPage() {
  return (
    <>
      <HeroPortrait
        compact
        backLink={{ href: "/", label: "Back to home" }}
        title="Rosalie Frazier Pazant"
        subtitle="Educator. Leader. Trailblazer. Legacy builder."
      />
      <BiographyBody />
    </>
  );
}
