import Header from "../Componentes/Header/Header"
import Button from "../Componentes/Button/Button"
import Hero from "../Componentes/Hero/Hero"
import Footer from "../Componentes/Footer/Footer"

function Home () {
    return (
        <>
        <Header />
        <h1>Home</h1>
        <p>Subtitulo</p>
        <div className="container">
            <Hero />
        </div>
        <Button buttonStyle="primary" arrow >Luis Gostoso</Button>
        <Footer />
        </>
    )
}

export default Home