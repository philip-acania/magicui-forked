// Akzentfarbe pro Szene — konsequent durchgezogen, keine
// panel-weiten Farbeffekte. Jede Szene erhält genau einen Akzent.

export interface Accent {
    // Anzeigename (Debug / Tooltips).
    name: string
    // Kräftiger Primärton (Buttons, Beams, Glow).
    solid: string
    // Hellere Variante (Text, feine Highlights).
    soft: string
    // Verlauf für AuroraText / Beams (mind. 3 Stops).
    gradient: string[]
}

export const ACCENTS = {
    violet: {
        name: "Violett",
        solid: "#7c3aed",
        soft: "#c4b5fd",
        gradient: ["#7928ca", "#a855f7", "#38bdf8"],
    },
    cyan: {
        name: "Cyan",
        solid: "#06b6d4",
        soft: "#a5f3fc",
        gradient: ["#22d3ee", "#06b6d4", "#3b82f6"],
    },
    emerald: {
        name: "Emerald",
        solid: "#10b981",
        soft: "#a7f3d0",
        gradient: ["#34d399", "#10b981", "#22d3ee"],
    },
    amber: {
        name: "Amber",
        solid: "#f59e0b",
        soft: "#fde68a",
        gradient: ["#fbbf24", "#f59e0b", "#fb7185"],
    },
    blue: {
        name: "Blau",
        solid: "#3b82f6",
        soft: "#bfdbfe",
        gradient: ["#60a5fa", "#3b82f6", "#22d3ee"],
    },
    pink: {
        name: "Pink",
        solid: "#ec4899",
        soft: "#fbcfe8",
        gradient: ["#f472b6", "#ec4899", "#a855f7"],
    },
    rainbow: {
        name: "Rainbow",
        solid: "#a855f7",
        soft: "#e9d5ff",
        gradient: ["#ff0080", "#f59e0b", "#34d399", "#3b82f6", "#a855f7"],
    },
} satisfies Record<string, Accent>

export type AccentKey = keyof typeof ACCENTS
