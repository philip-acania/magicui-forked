"use client"

// Szene 7 — Finale: großer Claim (AuroraText), CTA-Button und ein
// Konfetti-Schuss beim Erscheinen. Akzent: Rainbow.

import { useEffect, useRef } from "react"

import { AuroraText } from "@/registry/magicui/aurora-text"
import { Confetti, type ConfettiRef } from "@/registry/magicui/confetti"
import { RainbowButton } from "@/registry/magicui/rainbow-button"

import type { SceneProps } from "./scene-props"

export function SceneFinale({ accent }: SceneProps) {
    const confettiRef = useRef<ConfettiRef>(null)

    // Beim Mount (Szene wird sichtbar) zwei sanfte Schüsse.
    useEffect(() => {
        const first = setTimeout(() => {
            confettiRef.current?.fire({
                particleCount: 90,
                spread: 80,
                startVelocity: 38,
                origin: { y: 0.7 },
            })
        }, 400)
        const second = setTimeout(() => {
            confettiRef.current?.fire({
                particleCount: 60,
                spread: 110,
                startVelocity: 30,
                origin: { y: 0.65 },
            })
        }, 1100)
        return () => {
            clearTimeout(first)
            clearTimeout(second)
        }
    }, [])

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 bg-neutral-950">
            <Confetti
                ref={confettiRef}
                manualstart
                className="pointer-events-none absolute inset-0 z-0 size-full"
            />

            <h1 className="z-10 text-center text-5xl font-bold tracking-tighter text-white md:text-7xl">
                Bau etwas <AuroraText colors={accent.gradient}>Schönes</AuroraText>.
            </h1>

            <RainbowButton size="lg" className="z-10 text-base">
                Jetzt starten →
            </RainbowButton>
        </div>
    )
}
