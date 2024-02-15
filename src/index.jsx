import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { Episode } from './components/episode/Episode';
import { episodes } from './data/episodes';


// const episodes = [
//   { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
//   { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' }
// ];

const App = () => (
  <>
    <div className='episodes-list'>
      {episodes.map((episode) =>
        <Episode
          key={episode.num} 
          num={episode.num} 
          title={episode.title} 
          guest={episode.guest} 
        />
      )}
    </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);
