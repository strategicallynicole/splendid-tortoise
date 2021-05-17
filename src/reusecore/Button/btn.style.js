import styled, {css} from 'styled-components';
const ButtonStyle = styled.button` 
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center; 
    font-family: inherit; 
    font-size: 16px;
    text-decoration: none;
    text-transform: capitalize; 
    border: 0; 
    min-width: 170px;
    padding: 14px;
    border-radius: 3px;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    position: relative;
    z-index: 999;
    &:hover,
    &:focus {
        outline: none;
 
    }
    .icon-left{
        margin-right: 8px;
    }
    .icon-right{
        margin-left: 8px;
    }

    ${props => props.primary && css`
 

        &:hover{
         
        }
    `}
    ${props => props.secondary && css`
     

        &:hover{

        }
    `}
`
ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;