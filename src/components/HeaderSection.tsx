export default function HeaderSection({text, icon}: {text: string, icon?: React.ReactNode}) {
    return <h2 className="bg-muted font-medium w-fit p-2 rounded-lg text-2xl md:text-4xl tracking-tighter!">
                {text} {icon}
            </h2>
}
