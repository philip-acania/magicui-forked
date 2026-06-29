"use client"

// Szene 6 — Love: zwei gegenläufige Marquee-Reihen mit Stimmen.
// Akzent: Pink.

import { Marquee } from "@/registry/magicui/marquee"

import type { SceneProps } from "./scene-props"

const REVIEWS = [
    { name: "Lena", handle: "@lena", body: "Sieht einfach magisch aus." },
    { name: "Tom", handle: "@tom", body: "In Minuten produktionsreif." },
    { name: "Mara", handle: "@mara", body: "Schönste Library, die ich kenne." },
    { name: "Jan", handle: "@jan", body: "Copy, paste, fertig. Wahnsinn." },
    { name: "Ada", handle: "@ada", body: "Meine Landing-Page glänzt jetzt." },
    { name: "Nils", handle: "@nils", body: "Animationen ohne Kopfschmerzen." },
]

function ReviewCard({
    review,
    accent,
}: {
    review: (typeof REVIEWS)[number]
    accent: SceneProps["accent"]
}) {
    return (
        <figure
            className="flex w-72 flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-4"
            style={{ borderColor: `${accent.solid}33` }}
        >
            <div className="flex items-center gap-2">
                <img
                    className="size-9 rounded-full"
                    alt={review.name}
                    src={`https://avatar.vercel.sh/${review.handle}`}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {review.name}
                    </figcaption>
                    <span className="text-xs text-white/45">
                        {review.handle}
                    </span>
                </div>
            </div>
            <blockquote className="text-sm text-white/70">
                {review.body}
            </blockquote>
        </figure>
    )
}

export function SceneMarquee({ accent }: SceneProps) {
    const half = Math.ceil(REVIEWS.length / 2)
    const firstRow = REVIEWS.slice(0, half)
    const secondRow = REVIEWS.slice(half)

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-neutral-950">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Geliebt von Tausenden.
            </h2>

            <div className="relative flex w-full flex-col gap-4 overflow-hidden">
                <Marquee className="[--duration:24s]">
                    {firstRow.map((review) => (
                        <ReviewCard
                            key={review.handle}
                            review={review}
                            accent={accent}
                        />
                    ))}
                </Marquee>
                <Marquee reverse className="[--duration:24s]">
                    {secondRow.map((review) => (
                        <ReviewCard
                            key={review.handle}
                            review={review}
                            accent={accent}
                        />
                    ))}
                </Marquee>

                {/* Seitliche Verläufe, decken den Inhalt nie ganz ab. */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-950" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-950" />
            </div>
        </div>
    )
}
