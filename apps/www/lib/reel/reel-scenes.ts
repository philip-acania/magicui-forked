// Szenen-Liste als Single Source of Truth für den Ablauf.
// Reine Metadaten (datengetrieben) — die UI-Komponenten werden in
// components/reel/reel-stage.tsx per id zugeordnet.

import { ACCENTS, type AccentKey } from "./reel-colors"
import { SCENE_DURATIONS_MS } from "./reel-timing"

export type SceneId =
    | "intro"
    | "text"
    | "bento"
    | "beam"
    | "globe"
    | "marquee"
    | "finale"

export interface SceneMeta {
    id: SceneId
    // Kurzlabel für die Fortschrittsleiste.
    label: string
    durationMs: number
    accent: AccentKey
}

// Reihenfolge = Ablauf des Reels.
export const REEL_SCENES: SceneMeta[] = [
    scene("intro", "Intro", "violet"),
    scene("text", "Claim", "cyan"),
    scene("bento", "Features", "emerald"),
    scene("beam", "Connect", "amber"),
    scene("globe", "Reach", "blue"),
    scene("marquee", "Love", "pink"),
    scene("finale", "Finale", "rainbow"),
]

function scene(id: SceneId, label: string, accent: AccentKey): SceneMeta {
    return { id, label, durationMs: SCENE_DURATIONS_MS[id], accent }
}

// Bequemer Zugriff auf die Akzent-Objekte je Szene.
export function accentOf(scene: SceneMeta) {
    return ACCENTS[scene.accent]
}
