import Header from "../Componentes/Header/Header"
import Banner from "../Componentes/Banner/Banner"
import Button from "../Componentes/Button/Button"
import Footer from "../Componentes/Footer/Footer"

function Home () {
    return (
        <>
        <Header />
        <h1>Home</h1>
        <p>Subtitulo</p>
        <Banner title="Home" image="about.jpg"/>
        <Button buttonStyle="primary" arrow >Luis Gostoso</Button>
        <Footer />
        </>
    )
}

export default Home