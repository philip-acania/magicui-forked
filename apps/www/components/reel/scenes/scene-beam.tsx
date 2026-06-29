"use client"

// Szene 4 — Connect: vier Werkzeuge fließen über Lichtlinien in ein
// Zentrum (AnimatedBeam). Akzent: Amber.

import { forwardRef, useRef } from "react"
import { Code, Figma, Palette, Sparkles, Wand2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/registry/magicui/animated-beam"

import type { SceneProps } from "./scene-props"

const Node = forwardRef<
    HTMLDivElement,
    {
        className?: string
        style?: React.CSSProperties
        children: React.ReactNode
    }
>(({ className, style, children }, ref) => (
    <div
        ref={ref}
        style={style}
        className={cn(
            "z-10 flex size-16 items-center justify-center rounded-full border border-white/15 bg-neutral-900 text-white shadow-lg",
            className
        )}
    >
        {children}
    </div>
))
Node.displayName = "Node"

export function SceneBeam({ accent }: SceneProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const centerRef = useRef<HTMLDivElement>(null)
    const topLeftRef = useRef<HTMLDivElement>(null)
    const bottomLeftRef = useRef<HTMLDivElement>(null)
    const topRightRef = useRef<HTMLDivElement>(null)
    const bottomRightRef = useRef<HTMLDivElement>(null)

    const outer = [topLeftRef, bottomLeftRef, topRightRef, bottomRightRef]

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-neutral-950 px-12">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Alles fließt zusammen.
            </h2>

            <div
                ref={containerRef}
                className="relative flex w-full max-w-2xl items-center justify-between"
            >
                <div className="flex flex-col gap-16">
                    <Node ref={topLeftRef}>
                        <Figma className="size-7" />
                    </Node>
                    <Node ref={bottomLeftRef}>
                        <Palette className="size-7" />
                    </Node>
                </div>

                <Node
                    ref={centerRef}
                    className="size-20"
                    style={{ boxShadow: `0 0 40px -6px ${accent.solid}` }}
                >
                    <Sparkles
                        className="size-9"
                        style={{ color: accent.solid }}
                    />
                </Node>

                <div className="flex flex-col gap-16">
                    <Node ref={topRightRef}>
                        <Code className="size-7" />
                    </Node>
                    <Node ref={bottomRightRef}>
                        <Wand2 className="size-7" />
                    </Node>
                </div>

                {outer.map((ref, i) => (
                    <AnimatedBeam
                        key={i}
                        containerRef={containerRef}
                        fromRef={ref}
                        toRef={centerRef}
                        duration={3}
                        delay={i * 0.6}
                        curvature={i % 2 === 0 ? 20 : -20}
                        gradientStartColor={accent.gradient[0]}
                        gradientStopColor={accent.gradient[2]}
                        reverse={i >= 2}
                    />
                ))}
            </div>
        </div>
    )
}
