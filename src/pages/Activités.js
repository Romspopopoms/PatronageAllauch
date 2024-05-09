import Activités1 from "../components/Activités1"
import Footer from "../components/Footer"
const Activités = () => {
    return (
        <div className="flex flex-col h-auto w-auto">
            <Activités1 />
            <div className="h-auto w-full absolute bottom-[-2500px] xl:bottom-[-2200px]">
            <Footer />
            </div>
        </div>
    )
}

export default Activités