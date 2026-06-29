"use client"

// Szene 3 — Features: vier Kacheln staggern herein (BlurFade), jede mit
// wanderndem Lichtrand (BorderBeam). Akzent: Emerald.

import { Blocks, Copy, Sparkles, Wand2 } from "lucide-react"

import { BlurFade } from "@/registry/magicui/blur-fade"
import { BorderBeam } from "@/registry/magicui/border-beam"

import type { SceneProps } from "./scene-props"

const FEATURES = [
    { Icon: Blocks, title: "60+ Komponenten", desc: "Sofort einsatzbereit" },
    { Icon: Copy, title: "Copy & Paste", desc: "Kein Setup nötig" },
    { Icon: Wand2, title: "Tailwind v4", desc: "Voll anpassbar" },
    { Icon: Sparkles, title: "Motion-Animationen", desc: "Flüssig & schön" },
]

export function SceneBento({ accent }: SceneProps) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-neutral-950 px-10">
            <BlurFade delay={0.1} duration={0.6} inView>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Alles dabei.
                </h2>
            </BlurFade>

            <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
                {FEATURES.map((feature, i) => (
                    <BlurFade
                        key={feature.title}
                        delay={0.4 + i * 0.2}
                        duration={0.6}
                        inView
                    >
                        <div className="relative flex h-32 flex-col justify-center gap-1 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-6">
                            <feature.Icon
                                className="size-7"
                                style={{ color: accent.solid }}
                            />
                            <p className="mt-1 text-lg font-semibold text-white md:text-xl">
                                {feature.title}
                            </p>
                            <p className="text-sm text-white/50">
                                {feature.desc}
                            </p>
                            <BorderBeam
                                size={70}
                                duration={6}
                                delay={i * 1.5}
                                colorFrom={accent.gradient[0]}
                                colorTo={accent.gradient[2]}
                            />
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
