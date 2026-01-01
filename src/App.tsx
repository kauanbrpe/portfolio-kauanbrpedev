import Header from "./core-components/header.tsx";
import Baseboard from "./core-components/baseboard.tsx";
import Hero from "./core-components/hero.tsx";
import About from "./core-components/about.tsx";
import Projects from "./core-components/projects.tsx";
import Stacks from "./core-components/stacks.tsx";
import Links from "./core-components/links.tsx";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Stacks />
            <Links />
            <Baseboard />
        </>
    )
}