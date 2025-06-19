import Header from '../Componentes/Header/Header'
import Banner from '../Componentes/Banner/Banner'
import Footer from '../Componentes/Footer/Footer'
import ContactForm from '../Componentes/ContactForm/ContactForm'

function Contact () {
    return (
        <>
        <Header />
        <Banner title="Contact" image="contact.jpg" />
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}

export default Contact