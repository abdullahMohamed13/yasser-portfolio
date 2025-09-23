import HeaderSection from "@/components/HeaderSection";

export default function About() {
    return <section id="about">
        <HeaderSection text="Hey There!" icon={<span className="wave">👋</span>}/>
            
        <div className="mt-5">
            <p className="text-muted-foreground">
                I'm always looking for new and exciting opportunities. Let's connect.
                Here's what I do, it's a bla bla and when I finish I do hob la,
                Here's what I do, it's a bla bla and when I finish I do hob la
                Here's what I do, it's a bla bla and when I finish I do hob la
            </p>
            <p className="text-muted-foreground">
                Here's what I do, it's a finish I do hob la,
                Here's what I do, it's a bla bla and when I finish I do hob la
            </p>
            <p className="text-muted-foreground">
                Here's what I do, it's a bla bla and wash I finish I do hob la,
                Here's what I do, it's a bla bla and when I finish I do hob la
                Here's what I do I finish I do hob la
            </p>
        </div>
    </section>
}

// export default function SectionHeader(text: string) {
//     return <h1 className="mb-0 text-balance font-medium text-5xl tracking-tighter!">
//           {text}
//         </h1>
// }