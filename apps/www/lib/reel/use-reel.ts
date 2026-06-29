"use client"

// Timeline-Hook des Reels: schaltet die aktive Szene per Timer weiter.
// Mechanik aus Demo 1 übernommen (Phasen + sauberes Pause/Reset),
// aber linear vereinfacht: ein Effect pro "Szene aktiv" plant den
// nächsten Übergang; Cleanup stoppt den Timer bei Pause/Unmount.

import { useCallback, useEffect, useRef, useState } from "react"

import { REEL_SCENES } from "./reel-scenes"
import { AUTO_START_DELAY_MS } from "./reel-timing"

export type ReelStatus = "idle" | "running" | "paused" | "complete"

export function useReel() {
    const [status, setStatus] = useState<ReelStatus>("idle")
    const [index, setIndex] = useState(0)

    // Stets aktueller Status für Guards außerhalb des Renders.
    const statusRef = useRef<ReelStatus>(status)
    statusRef.current = status

    const start = useCallback(() => {
        if (statusRef.current === "complete") {
            setIndex(0)
        }
        setStatus("running")
    }, [])

    const pause = useCallback(() => {
        setStatus((prev) => (prev === "running" ? "paused" : prev))
    }, [])

    const reset = useCallback(() => {
        setStatus("idle")
        setIndex(0)
    }, [])

    // Plant den Übergang zur nächsten Szene, solange "running".
    // Reagiert auf index → schaltet sich nach jeder Szene neu.
    useEffect(() => {
        if (status !== "running") {
            return
        }

        const timer = setTimeout(() => {
            setIndex((prev) => {
                if (prev >= REEL_SCENES.length - 1) {
                    setStatus("complete")
                    return prev
                }
                return prev + 1
            })
        }, REEL_SCENES[index].durationMs)

        return () => clearTimeout(timer)
    }, [status, index])

    // Automatischer Start nach kurzer Ruhe (gut für die Aufnahme).
    useEffect(() => {
        const timer = setTimeout(start, AUTO_START_DELAY_MS)
        return () => clearTimeout(timer)
    }, [start])

    return {
        status,
        index,
        scene: REEL_SCENES[index],
        scenes: REEL_SCENES,
        start,
        pause,
        reset,
    }
}
