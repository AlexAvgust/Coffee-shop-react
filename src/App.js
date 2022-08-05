import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FirstPage from './Component/FirstPage/FirstPage';
import BodyText from './Component/BodyText/BodyText';
import ThirdSection from './Component/ThirdSection/ThirdSection.jsx';
import Footer from './Component/Footer/Footer';
import SecondPage from './Component/SecondPage/SecondPage.jsx'
import WhiteLineWithBeans from './Component/FirstPage/WhiteLineWithBeans';
import ThirdPage from './Component/ThirdPage/ThirdPage';
import CardDetails from './Component/Card/CardDetails';



 let TextOnFirstPage = ['About Us',`Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.
 Afraid at highly months do things on at. Situation recommend objection do intention
 so questions. As greatly removed calling pleased improve an. Last ask him cold feel
 met spot shy want. Children me laughing we prospect answered followed. At it went
 is song that held help face.`,`Now residence dagwood's she excellent you. Shade being under his bed her, Much
 read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
 horrible but confined day end marriage. Eagerness furniture set preserved far
 recommend. Did even but nor are most gave hope. Secure active living depend son
 repair day ladies now.`]

 let headline = 'Everything You Love About Coffee'
let headlineSecondPage = 'Our Coffee'
let headlineThirdPage = 'For your pleasure'

function App() {
  return <Router>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/SecondPage' element={<SecondPage headlineSecondPage={headlineSecondPage}/>}/>
  <Route path='/ThirdPage' element={<ThirdPage headlineThirdPage={headlineThirdPage}/>}/>

  <Route path='/ThirdPage/CardDetails' element={<CardDetails headlineSecondPage={headlineSecondPage}/>}/>
  <Route path='/SecondPage/CardDetails' element={<CardDetails headlineSecondPage={headlineSecondPage}/>}/>
  <Route path='/CardDetails' element={<CardDetails headlineSecondPage={headlineSecondPage}/>}/>
    </Routes>

  </Router>
}
const Home = () => {
  return (
   <div className='App'>
    <div className='after-nav'>
    <FirstPage headline={headline}/>
   <WhiteLineWithBeans />
    </div>

    <BodyText image='' Text={JSON.stringify(TextOnFirstPage)}/>
    <ThirdSection/>
    <Footer/>
   </div>
  );
}

export default App;
