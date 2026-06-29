"use client"

// Bühne des Showcase-Reels: zentrierter 16:9-Frame, Crossfade der
// aktiven Szene, Control-Bar (Start/Pause/Reset) und Fortschrittsleiste.
// Liest den Ablauf aus useReel(); ordnet Szenen-id → Komponente zu.

import { AnimatePresence, motion } from "motion/react"
import { Pause, Play, RotateCcw } from "lucide-react"

import { ACCENTS } from "@/lib/reel/reel-colors"
import { accentOf, type SceneId } from "@/lib/reel/reel-scenes"
import { CROSSFADE_S } from "@/lib/reel/reel-timing"
import { useReel } from "@/lib/reel/use-reel"

import { SceneBento } from "./scenes/scene-bento"
import { SceneBeam } from "./scenes/scene-beam"
import { SceneFinale } from "./scenes/scene-finale"
import { SceneGlobe } from "./scenes/scene-globe"
import { SceneIntro } from "./scenes/scene-intro"
import { SceneMarquee } from "./scenes/scene-marquee"
import { SceneTextMontage } from "./scenes/scene-text-montage"
import type { SceneProps } from "./scenes/scene-props"

const SCENE_COMPONENTS: Record<SceneId, React.ComponentType<SceneProps>> = {
    intro: SceneIntro,
    text: SceneTextMontage,
    bento: SceneBento,
    beam: SceneBeam,
    globe: SceneGlobe,
    marquee: SceneMarquee,
    finale: SceneFinale,
}

export function ReelStage() {
    const { status, index, scene, scenes, start, pause, reset } = useReel()
    const accent = accentOf(scene)
    const Scene = SCENE_COMPONENTS[scene.id]
    const isRunning = status === "running"

    return (
        <div className="flex w-full max-w-[1280px] flex-col gap-4 px-4">
            {/* 16:9-Bühne */}
            <div
                className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl"
                style={{ boxShadow: `0 0 120px -40px ${accent.solid}` }}
            >
                <AnimatePresence>
                    <motion.div
                        key={scene.id}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: CROSSFADE_S, ease: "easeInOut" }}
                    >
                        <Scene accent={accent} />
                    </motion.div>
                </AnimatePresence>

                {/* Sehr feine Vignette für Tiefe, deckt nie den Inhalt. */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5))]" />
            </div>

            {/* Fortschrittsleiste */}
            <div className="flex gap-1.5">
                {scenes.map((s, i) => {
                    const isActive = i === index
                    const isPast = i < index
                    const c = ACCENTS[s.accent].solid
                    return (
                        <div
                            key={s.id}
                            className="h-1 flex-1 overflow-hidden rounded-full bg-white/10"
                            title={s.label}
                        >
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    width: isPast || isActive ? "100%" : "0%",
                                    background: c,
                                    opacity: isActive ? 1 : isPast ? 0.4 : 0,
                                }}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Control-Bar */}
            <div className="flex items-center justify-center gap-3">
                <button
                    type="button"
                    onClick={isRunning ? pause : start}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                >
                    {isRunning ? (
                        <Pause className="size-4" />
                    ) : (
                        <Play className="size-4" />
                    )}
                    {isRunning ? "Pause" : status === "complete" ? "Neu" : "Start"}
                </button>
                <button
                    type="button"
                    onClick={reset}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10"
                >
                    <RotateCcw className="size-4" />
                    Reset
                </button>
            </div>
        </div>
    )
}
