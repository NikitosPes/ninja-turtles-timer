import Header from '../Header/Header';
import ProgressContent from '../ProgressContent/ProgressContent';

import './PrimaryContent.scss'

const PrimaryContent = () => {
    return(
        <div className='primary-content'>
            <Header/>
            <ProgressContent/>
            <h1 className='primary-content__motivation-phrase'>Keep calm stay focus</h1>
        </div>
    )
}

export default PrimaryContent;