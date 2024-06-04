import './Background.css';



const Background = ({ heroCount, playVideo }) => {

    if(playVideo) {
        return (
            <video className='background'  >
                <source src={} />
            </video>
        )
    }
}

export default Background;