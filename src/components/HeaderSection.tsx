export default function HeaderSection({text, icon, className}: {text: string, icon?: React.ReactNode, className?: string}) {
    return <h2 className={`
	            bg-card font-bold w-fit px-4 py-2.5 rounded-lg 
	            text-2xl md:text-3xl lg:text-4xl
	            mx-auto uppercase
	            text-center md:text-left
	            ${className}
	        `}
          >
            {text} {icon}
          </h2>
}
