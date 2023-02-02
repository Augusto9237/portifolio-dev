import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { AboutMe } from './sections/AboutMe';
import { Experience } from './sections/Experience';
import { Home } from './sections/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Home />
      <Experience />
      <AboutMe />
    </Container>
  );
}

export default App;
