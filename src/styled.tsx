import { createMuiTheme, Grid, List, ListItem } from '@material-ui/core';
import styled from 'styled-components';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#63ace5",
    },
    secondary: {
      main: "#565656"
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  }
});

export const ResourceTitle = styled.div`
  padding: 10px 30px;
  font-family: ${props => props.theme ? props.theme?.typography?.fontFamily : 'sans-serif'};
  color: ${props => props.theme ? props.theme?.palette?.secondary?.main : 'black'};
  font-size: 26px;
`

export const ResourceGrid = styled((props) => (
  <Grid {...props} />
))`
  padding: 0 30px;
  max-height: 300px;
`

export const ResourceValue = styled.span`
  display: block;
`

export const ResourceList = styled(List)`
  display: flex;
  flex-wrap: wrap;
`;

export const ResourceListItem = styled(({button, ...rest}) => (
  <ListItem {...rest} />
))`
  flex-basis: 49%;
`

export const ResourcesNotFound = styled.div`
font-family: ${props => props.theme ? props.theme?.typography?.fontFamily : 'sans-serif'};
`;

export const GrayBackground = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
  margin-bottom: 20px;
`