import Button from '../Button/Button'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Banner.css'

function Banner (props) {
    return (
        <div className="banner d-flex al-end" style={{ backgroundImage: `url(/${props.image})`}}>
            <div className="container">
                <div className="title-panel d-flex al-center jc-center">
                    <h1>{ props.title }</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner