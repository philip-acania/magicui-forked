"use client"

// Szene 5 — Reach: rotierender Globus + KPIs, die hochzählen
// (NumberTicker). Akzent: Blau.

import { useMemo } from "react"
import type { COBEOptions } from "cobe"

import { Globe } from "@/registry/magicui/globe"
import { NumberTicker } from "@/registry/magicui/number-ticker"

import type { SceneProps } from "./scene-props"

const KPIS = [
    { value: 120, suffix: "+", label: "Länder" },
    { value: 60, suffix: "+", label: "Komponenten" },
    { value: 1, suffix: "M+", label: "Downloads" },
]

// "#rrggbb" → cobe-Triplet [r, g, b] im Bereich 0..1.
function hexToTriplet(hex: string): [number, number, number] {
    const v = hex.replace("#", "")
    const r = parseInt(v.slice(0, 2), 16) / 255
    const g = parseInt(v.slice(2, 4), 16) / 255
    const b = parseInt(v.slice(4, 6), 16) / 255
    return [r, g, b]
}

export function SceneGlobe({ accent }: SceneProps) {
    const config = useMemo<COBEOptions>(
        () => ({
            width: 800,
            height: 800,
            onRender: () => {},
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 0.5,
            mapSamples: 16000,
            mapBrightness: 5,
            baseColor: [0.25, 0.25, 0.3],
            markerColor: hexToTriplet(accent.solid),
            glowColor: hexToTriplet(accent.solid),
            markers: [
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.08 },
                { location: [48.1351, 11.582], size: 0.07 },
                { location: [35.6762, 139.6503], size: 0.08 },
                { location: [-23.5505, -46.6333], size: 0.09 },
                { location: [1.3521, 103.8198], size: 0.06 },
            ],
        }),
        [accent.solid]
    )

    return (
        <div className="flex h-full w-full items-center justify-between gap-6 bg-neutral-950 px-14">
            <div className="flex flex-col gap-8">
                {KPIS.map((kpi) => (
                    <div key={kpi.label} className="flex flex-col">
                        <div
                            className="flex items-end text-5xl font-bold tracking-tighter md:text-7xl"
                            style={{ color: accent.solid }}
                        >
                            <NumberTicker
                                value={kpi.value}
                                className="text-5xl font-bold tracking-tighter md:text-7xl"
                                style={{ color: accent.solid }}
                            />
                            <span>{kpi.suffix}</span>
                        </div>
                        <span className="text-base text-white/55 md:text-xl">
                            {kpi.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="relative aspect-square h-full max-h-[460px] shrink-0">
                <Globe className="!top-0" config={config} />
            </div>
        </div>
    )
}
