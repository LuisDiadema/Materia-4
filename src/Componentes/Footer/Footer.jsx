import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Assets
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import iconBrasil from '../../assets/icon-brasil.svg'
import iconUsa from '../../assets/icon-usa.svg'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconInstagram from '../../assets/icon-instagram.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconLinkedin from '../../assets/icon-linkedin.svg'

// Componentes
import Button from '../Button/Button'

// Context
import { AppContext } from '../../Contexts/AppContext'

function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={ Logo } className="footer-logo"/>
                        <p className="gray-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://www.facebook.com/profile.php?id=61573785916713&locale=pt_BR" target="_blank">
                                <img src={ iconFacebook } alt="" />
                            </a>
                            <a href="https://x.com/_Lzakinarchi" target="_blank">
                                <img src={ iconTwitter } alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/luis-sene/" target="_blank">
                                <img src={ iconLinkedin } alt="" />
                            </a>                            
                            <a href="https://www.instagram.com/thrsh.br/?hl=pt-br" target="_blank">
                                <img src={ iconInstagram } alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="About">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="Projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-000</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={ iconBrasil } height="29px" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={ iconUsa } height="29px" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer