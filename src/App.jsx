import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/header';
import Principal from './components/principal';
import Section from './components/section';
import { principalContent, principalContent2 } from './data/principalData';
import About1 from './components/about/about1';
import About2 from './components/about/about2';
import Footer from './components/footer/footer';
import Rewards_ from './components/rewards_';

function Home() {
  return (
    <div className="space-y-8">
      <Principal 
        image={principalContent.image}
        titleLine1={principalContent.titleLine1}
        titleLine2={principalContent.titleLine2}
        description={principalContent.description}
        backgroundColor={principalContent.backgroundColor}
        textColor={principalContent.textColor}
        reverse={principalContent.reverse}
      />
      <Section />
      <Principal 
        image={principalContent2.image}
        titleLine1={principalContent2.titleLine1}
        titleLine2={principalContent2.titleLine2}
        description={principalContent2.description}
        backgroundColor={principalContent2.backgroundColor}
        textColor={principalContent2.textColor}
        reverse={principalContent2.reverse}
      />
      <Rewards_ />
      <About1 />
      <About2 />
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h1>Menú</h1>
    </div>
  );
}

function Rewards() {
  return (
    <div>
      <h1>Rewards</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
