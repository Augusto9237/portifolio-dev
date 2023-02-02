import { BsCodeSlash } from 'react-icons/bs';
import { AboutMeDescription, CircleImg, Content } from '../AboutMe/styles';
import { Greetings } from '../Home/styles';

export function AboutMe() {
  return (
    <Content>
      <CircleImg />
      <AboutMeDescription>
        <Greetings>🧐 Sobre mim</Greetings>
        <h1>your name</h1>
        <p>
          <code>
            👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me
            chamar apenas de Henrique. Prazer!
          </code>
          <code>
            👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
            JavaScript, React JS e Typescript.
          </code>
          <code>
            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
            São José dos Campos.
          </code>
          <code>
            💡 Interesses em desenvolvimento Front-end com React, React Native,
            VueJS e UX/UI Design.
          </code>
          <code>
            🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
          </code>
        </p>
      </AboutMeDescription>
    </Content>
  );
}
