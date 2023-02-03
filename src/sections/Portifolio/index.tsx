import { WorkCard } from '../../components/WorkCard';
import { Greetings } from '../Home/styles';
import { Content, WorkAndProjects } from '../Portifolio/styles';

export function Portifolio() {
  return (
    <Content>
      <Greetings>🔗 Portfólio</Greetings>
      <h1>Trabalhos e projetos</h1>
      <WorkAndProjects>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
      </WorkAndProjects>
    </Content>
  );
}
