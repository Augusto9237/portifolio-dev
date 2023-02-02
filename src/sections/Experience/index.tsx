import { Card, Content } from '../Experience/styles';
import { BsCodeSlash } from 'react-icons/bs';

export function Experience() {
  return (
    <Content>
      <Card>
        <BsCodeSlash size={60} color="#7B4AE2" />
        <span>3 anos como</span>
        <strong>Programador</strong>
      </Card>

      <Card>
        <BsCodeSlash size={60} color="#7B4AE2" />
        <span>3 anos como</span>
        <strong>Programador</strong>
      </Card>

      <Card>
        <BsCodeSlash size={60} color="#7B4AE2" />
        <span>3 anos como</span>
        <strong>Programador</strong>
      </Card>
    </Content>
  );
}
