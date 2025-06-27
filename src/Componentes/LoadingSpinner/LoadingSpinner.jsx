import './LoadingSpinner.css'
import loadingSpinnerGif from '../../assets/loadingSpinner.gif'

function LoadingSpinner () {
    return (
        <div className="d-flex al-center jc-center loading-overlay-container">
            <img src={loadingSpinnerGif} alt="Loading" height="80px" />
        </div>
    )
}

export default LoadingSpinner