"use client"

// Szene 2 — Claim: ein fester Vorsatz, danach morphen die Adjektive
// weich ineinander (MorphingText). Akzent: Cyan.

import { BlurFade } from "@/registry/magicui/blur-fade"
import { MorphingText } from "@/registry/magicui/morphing-text"

import type { SceneProps } from "./scene-props"

const WORDS = ["magisch.", "mühelos.", "lebendig.", "deins."]

export function SceneTextMontage({ accent }: SceneProps) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-950">
            <BlurFade delay={0.2} duration={0.7} inView>
                <p className="text-2xl font-medium text-white/70 md:text-4xl">
                    UI, die sich anfühlt
                </p>
            </BlurFade>

            <div style={{ color: accent.solid }}>
                <MorphingText
                    texts={WORDS}
                    className="h-24 text-6xl font-bold md:text-8xl"
                />
            </div>
        </div>
    )
}
