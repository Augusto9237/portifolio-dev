import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Experience } from './sections/Experience';
import { Home } from './sections/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Home />
      <Experience />
    </Container>
  );
}

export default App;
