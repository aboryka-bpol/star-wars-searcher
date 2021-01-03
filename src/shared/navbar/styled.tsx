import styled from 'styled-components';

const Title = styled.div`
    padding: 20px 0;
    font-size: 40px;
    color: ${props => props.theme ? props.theme.palette?.secondary?.main : "palevioletred"};
    font-family: ${props => props.theme ? props.theme?.typography?.fontFamily : 'sans-serif'};
`

export default Title;