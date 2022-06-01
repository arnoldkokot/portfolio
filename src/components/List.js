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

export default function Component() {
  return (
    <List>
      <Item>
        <p>League tracker</p>
        <Label>website, api</Label>
      </Item>
      <Item>
        <p>Daiji</p>
        <Label>bot, api</Label>
      </Item>
      <Item>
        <p>Recruitment Calculator</p>
        <Label>website</Label>
      </Item>
    </List>
  );
}
