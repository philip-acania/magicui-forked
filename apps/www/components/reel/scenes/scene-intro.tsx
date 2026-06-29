"use client"

// Szene 1 — Intro: großer AuroraText-Titel auf dezentem Partikel-Feld,
// Untertitel sanft eingeblendet (BlurFade). Akzent: Violett.

import { AuroraText } from "@/registry/magicui/aurora-text"
import { BlurFade } from "@/registry/magicui/blur-fade"
import { Particles } from "@/registry/magicui/particles"

import type { SceneProps } from "./scene-props"

export function SceneIntro({ accent }: SceneProps) {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-neutral-950">
            <Particles
                className="absolute inset-0"
                quantity={90}
                color={accent.soft}
                ease={70}
            />

            <BlurFade delay={0.2} duration={0.8} inView>
                <h1 className="text-center text-6xl font-bold tracking-tighter text-white md:text-8xl">
                    Magic <AuroraText colors={accent.gradient}>UI</AuroraText>
                </h1>
            </BlurFade>

            <BlurFade delay={0.9} duration={0.8} inView>
                <p className="text-center text-lg text-white/55 md:text-2xl">
                    Schöne Effekte. Null Aufwand.
                </p>
            </BlurFade>
        </div>
    )
}
