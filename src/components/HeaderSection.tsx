export default function HeaderSection({text, icon, className}: {text: string, icon?: React.ReactNode, className?: string}) {
    return <h2 className={`
            bg-muted font-medium w-fit p-2 rounded-lg 
            text-2xl md:text-4xl 
            mx-auto md:mx-0
            text-center md:text-left
            ${className}
        `}
                    
            >
                {text} {icon}
            </h2>
}
