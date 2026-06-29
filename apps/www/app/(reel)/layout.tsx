// Minimal-Layout der Reel-Bühne: Vollbild, dunkel, kein Scrollen,
// keine Doku-Navigation. Das Root-Layout liefert html/body/Provider;
// hier nur der dunkle Vollbild-Rahmen. `dark`-Klasse erzwingt lokal
// die Dark-Varianten der MagicUI-Komponenten (Theme-Default ist hell).

export default function ReelLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dark flex h-dvh w-screen items-center justify-center overflow-hidden bg-black">
            {children}
        </div>
    )
}
