import PrimaryContent from '../PrimaryContent/PrimaryContent';
import SecondaryContent from '../SecondaryContent/SecondaryContent';

import './App.scss';


const App:React.FC = () => {
  return (
    <div className='app'>
      <PrimaryContent />
      <SecondaryContent />
    </div>
  );
}

export default App;
