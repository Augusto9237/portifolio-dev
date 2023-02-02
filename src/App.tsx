import { useState } from 'react';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutMe } from './sections/AboutMe';
import { Experience } from './sections/Experience';
import { Home } from './sections/Home';
import { Portifolio } from './sections/Portifolio';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Home />
      <Experience />
      <AboutMe />
      <Portifolio/>
      <Footer />
    </Container>
  );
}

export default App;
