import { useContext } from 'react'

import Header from '../Componentes/Header/Header'
import Banner from '../Componentes/Banner/Banner'
import Footer from '../Componentes/Footer/Footer'
import ContactForm from '../Componentes/ContactForm/ContactForm'

// Contexts
import { AppContext } from '../Contexts/AppContext'

function Contact () {
    const appContext = useContext(AppContext)

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg" />

        <div className="container">
            <ContactForm />
        </div>
        
        <Footer />
        </>
    )
}

export default Contact