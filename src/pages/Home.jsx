import Header from "../Componentes/Header/Header"
import Button from "../Componentes/Button/Button"
import Footer from "../Componentes/Footer/Footer"

function Home () {
    return (
        <>
        <Header />
        <h1>Home</h1>
        <p>Subtitulo</p>
        <Button buttonStyle="primary">Luis Gostoso</Button>
        <Footer />
        </>
    )
}

export default Home