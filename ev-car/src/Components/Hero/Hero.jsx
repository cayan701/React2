import './Hero.css';

import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';


const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    let a = () => {
        setHeroCount(0);
    }

    let b = () => {
        setHeroCount(1);
    }

    let c = () => {
        setHeroCount(2);
    }
    
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className='hero-explore'>
                <p>Explore now</p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className='hero-dot-play'>
                <ul className='hero-dots'>
                    <li onClick={() => a()} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={() => b()} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={() => c()} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;