
import '../styles/a-propos.css';
import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';
import Data from "../data/APropos";
import Image from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"

function APropos() {

    return (
        <div className='body'>            
            <Banner img={Image} origin="about" />

            <div className="collapse-container">
                { Data.map((item) =>
                    <Collapse key={item.title} title={item.title} description={item.description} />
                )}   
            </div>

        </div>
    )
}

export default APropos;