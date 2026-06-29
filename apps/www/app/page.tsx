// Startseite = das Showcase-Reel. Die dunkle Vollbild-Bühne (vormals im
// (reel)/layout) liegt hier direkt; das Root-Layout liefert html/body.

import { ReelStage } from "@/components/reel/reel-stage"

export default function Page() {
    return (
        <div className="dark flex h-dvh w-screen items-center justify-center overflow-hidden bg-black">
            <ReelStage />
        </div>
    )
}
