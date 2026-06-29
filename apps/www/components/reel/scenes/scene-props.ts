// Gemeinsamer Prop-Typ aller Szenen: jede Szene bekommt ihren Akzent.

import type { Accent } from "@/lib/reel/reel-colors"

export interface SceneProps {
    accent: Accent
}
