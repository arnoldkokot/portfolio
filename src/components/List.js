import styled from "styled-components";
import { Link, Label } from ".";

const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

const Item = styled(Link)`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  min-height: 84px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Component({ elements }) {
  return (
    <List>
      {elements.map(({ name, tags, url }) => (
        <Item external href={url} key={name}>
          <p>{name}</p>
          <Label>{tags.join(", ")}</Label>
        </Item>
      ))}
    </List>
  );
}
