import AboutPage from "./sub-component/About"
import Intro from "./sub-component/Intro"
import ContactPage from "./Contact-Components/ContactPage"

const Main = () => {
    return (
        <main className="bg-[##ffffff]">
            <Intro />
            <AboutPage />
            <ContactPage />
        </main >
    )
}

export default Main