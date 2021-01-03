import { Button } from "@material-ui/core";
import styled from "styled-components";
import { ListItem, List } from "@material-ui/core";

export const StyledList =  styled(List)`
&& {
  width: 100%;
}
`;

export const StyledListItem = styled(({button, ...rest}) => (
  <ListItem className='list-item' {...rest} />
))`
  .list-item {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }  
`

export const StyledButton = styled(Button)`
&& {
  color: white;
}
`;