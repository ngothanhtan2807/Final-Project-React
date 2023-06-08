
import styled from 'styled-components'

const StyleButton = styled.button`
        :hover{
        background-color:#FF6F61;
     }
     text-align: center;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: 1px solid ${props => props.borderColor};
    border-radius: ${props => `${props.bradius}px`};
    font-weight: 500;
    font-family:${props => props.ffamily};
    font-size: ${props => `${props.fontSize}px`};
    line-height: 21px;
    color: ${props => props.textColor};
     background: ${props => props.bgColor};
     justify-content: center;
    align-items: center;
    display: flex;
    img {
    margin-right: 8px;
    width: ${props=>`${props.widthIcon}px`}
     }
     
`;

export const Button = ({ percent, label, icon, widthIcon, ffamily, children, width, height, textColor, bgColor, borderColor, bradius, fontSize, ...res }) => {


    return <StyleButton
        percent={percent}
        label={label}
        width={width}
        height={height}
        textColor={textColor}
        bgColor={bgColor}
        borderColor={borderColor}
        bradius={bradius}
        fontSize={fontSize}
        ffamily={ffamily}
        // children={children}
        icon={icon}
        widthIcon={widthIcon}
        {...res} >

        <img src={icon} /> {label}
    </StyleButton>
}
Button.defaultProps = {
    bgColor: '#FFFFFF',
    textColor: '#5429FF',
    width: 100,
    height: 46,
    fontSize: 16,
    bradius: 12,
    borderColor: 'black',
    
};