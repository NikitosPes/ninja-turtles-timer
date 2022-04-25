import CharacterDescriptionBlock from './CharacterDescriptionBlock/CharacterDescriptionBlock';
import { turtlesData } from '../../Utils/data';

import './SecondaryContent.scss'

const leoImg = require('../../Assets/Img/leonardo.jpg');
const mikyImg = require('../../Assets/Img/mikey.jpg');
const raphImg = require('../../Assets/Img/raphael.jpg');
const donImg = require('../../Assets/Img/donatelo.png');

const SecondaryContent:React.FC = () => {

    return(
        <div className='secondary-content'>
            <h1>Description about your stats</h1>
            <div className='description__container'>
                <CharacterDescriptionBlock character={turtlesData.leo} characterImg={leoImg}/>
                <CharacterDescriptionBlock character={turtlesData.miky} characterImg={mikyImg}/>
                <CharacterDescriptionBlock character={turtlesData.raph} characterImg={raphImg}/>
                <CharacterDescriptionBlock character={turtlesData.don} characterImg={donImg}/>
            </div>
        </div>
    )
}

export default SecondaryContent;