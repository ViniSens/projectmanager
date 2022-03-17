import "./Loading.css"
import loading from '../../../imgs/loading.svg'

function Loading() {
    return ( 
        <div className="loader-container">
            <img src={loading} alt="Loading" className="loader" />
        </div>
     );
}

export default Loading;