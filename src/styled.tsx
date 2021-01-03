import { Grid } from '@material-ui/core';
import styled from 'styled-components';


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
`

export const ResourceValue = styled.span`
  display: block;
`