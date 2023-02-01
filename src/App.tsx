import { useState } from 'react';
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
