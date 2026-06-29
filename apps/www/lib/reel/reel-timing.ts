// Zentrale Timing-Datei des Showcase-Reels.
// ALLE Dauern/Delays als benannte ms-Konstanten — eine Tuning-Stelle.
// Bewusst langsames, lesbares Pacing (Szenen 5-8s).

import type { SceneId } from "./reel-scenes"

// Dauer jeder Szene auf der Bühne (ms).
export const SCENE_DURATIONS_MS: Record<SceneId, number> = {
    intro: 6000,
    text: 6000,
    bento: 7000,
    beam: 7000,
    globe: 7000,
    marquee: 5000,
    finale: 8000,
}

// Sanfter Crossfade zwischen zwei Szenen (s — für motion/react).
export const CROSSFADE_S = 0.7

// Kurze Ruhe nach dem Laden, bevor das Reel automatisch startet (ms).
export const AUTO_START_DELAY_MS = 600

// Gesamtlaufzeit (abgeleitet) — nur informativ.
export const TOTAL_RUNTIME_MS = Object.values(SCENE_DURATIONS_MS).reduce(
    (sum, ms) => sum + ms,
    0
)
