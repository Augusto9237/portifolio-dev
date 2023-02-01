import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Home } from './sections/home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
