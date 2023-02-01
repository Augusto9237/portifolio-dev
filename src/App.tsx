import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Container } from './components/Container';
import { Header } from './components/header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
