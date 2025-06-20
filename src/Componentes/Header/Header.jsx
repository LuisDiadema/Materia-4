import { useState } from 'react'
import { Link } from 'react-router-dom'

// Assets
import './Header.css'
import Logo from '../../assets/dnc-logo.svg'

// Components
import Button from '../Button/Button'

function Header () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={ Logo }/></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={() => setIsOpen(!isOpen)}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="close-btn">X</Button>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="About">About</Link></li>
                            <li><Link to="Projects">Projects</Link></li>
                            <li><Link to="Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header