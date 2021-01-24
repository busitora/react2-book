import { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export type Character = {
  id: number;
  name?: string;
  grade: number;
  height?: number;
  // 身長要素は省略できる
};

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<Props> = ({ school, characters }) => (
  <>
    {/* ↑はフラグメント、不要なdivの生成を防ぐ */}
    <Header as="h2">{school}</Header>
    {/* <Header>, <Item>, <Icon> は Semantic UI React のコンポーネント */}
    <Item.Group>
      {characters.map((character) => (
        <Item key={character.id}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{character.name ?? '不明'}</Item.Header>
            <Item.Meta>{character.grade}年生</Item.Meta>
            <Item.Meta>
              {character.height ?? '???'}
              cm
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default CharacterList;
