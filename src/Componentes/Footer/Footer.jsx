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

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={ Logo }/>
                        <p className="gray-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho</p>
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
                </div>

            </div>
        </footer>
    )
}

export default Footer