import React from 'react';
import './App.scss';
import { TopSection } from './components/TopSection/TopSection';
import { SecondSection } from './components/SecondSection/SecondSection';
import { ThirdSection } from './components/ThirdSection/ThirdSection';
import { FourthSection } from './components/FourthSection/FourthSection';
import { FifthSection } from './components/FifthSection/FifthSection';
import { GreenImpactSection } from './components/GreenImpactSection/GreenImpactSection';
import { BottomSection } from './components/BottomSection/BottomSection';

const App = () => (
  <>
    <TopSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <GreenImpactSection />
    <BottomSection />
  </>
);

export default App;
