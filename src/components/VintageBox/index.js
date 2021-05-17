import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import Vintage1 from './blue3ddots.svg';
import Vintage2 from './orange3ddots.svg';
import Vintage3 from './grimmace3ddots.svg';
import Vintage4 from './blue3ddots.svg';


const BoxWrapper = styled.div`
    display:inline-block;
    position:relative;
    &:before{
        content: url(${Vintage2});
        position: absolute;
        bottom: -30px;
        opacity: 0.4;
        filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));
        -webkit-filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));
        -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')";
        filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')";
        ${props => props.vintageOne && css(
            {
                content: `url(${Vintage1})`
            }
        )}
        ${props => props.vintageTwo && css(
            {
                content: `url(${Vintage2})`
            }
        )}

        ${props => props.vintageThree && css(
            {
                content: `url(${Vintage3})`
            }
        )}
        
        ${props => props.vintageFour && css(
            {
                content: `url(${Vintage4})`
            }
        )}
        ${props => props.right && css(
            {
                right: '-45px',
                left: 'auto'
            }
        )}
        ${props => props.left && css(
            {
                left: '-45px',
                right: 'auto'
            }
        )}
    }
`

const VintageBox = ({ children, ...props }) => {
    const addAllClasses = ["vintage-box"];
    if(props.className){
        addAllClasses.push(props.className)
    }
    return (
        <BoxWrapper  { ...props} className={addAllClasses.join(" ")} > 
            {children} 
        </BoxWrapper>
    );
}



VintageBox.propTypes = {
    children: PropTypes.any.isRequired
}

export default VintageBox;

