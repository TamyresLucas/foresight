import figma from "@figma/code-connect";
import { SectionLabel } from "./section-label";

// Connection for the "Section Label" component set (using it for S2 Subsection)
figma.connect(
  SectionLabel, 
  "https://www.figma.com/design/2JOucEtocJMAUytbgt0tGK/Project-X---Rebranded-Unified-Components-Library?node-id=4098-12361", 
  {
    props: {
      type: figma.enum("Type", {
        "S2 Subsection": "s2-subsection",
      }),
    },
    example: () => (
      <SectionLabel variant="s2-subsection">
        Subsection
      </SectionLabel>
    ),
  }
);

// Connection for the "S2 Section" standalone component
figma.connect(
  SectionLabel,
  "https://www.figma.com/design/2JOucEtocJMAUytbgt0tGK/Project-X---Rebranded-Unified-Components-Library?node-id=4106-1748",
  {
    props: {
      children: figma.string("Label"),
    },
    example: ({ children }) => (
      <SectionLabel variant="s2-section">
        {children}
      </SectionLabel>
    ),
  }
);
