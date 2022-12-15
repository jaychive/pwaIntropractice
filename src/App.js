import Header from './component/Header';
import MainSwiper from './component/MainSwiper';
import Preinterview from './component/Preinterview';
import Footer from './component/Footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function App() {
  return (
    <div className="App">
      <Header />
      <MainSwiper />
      <Preinterview></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
