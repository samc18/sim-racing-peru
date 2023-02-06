import styled from 'styled-components'
import { colors, fontSizes } from '../styles/stylesVariables'

const StyledItem = styled.div<StyledItemProps>`
    width: 375px;
    height: 300px;
    margin-inline: auto;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    background-image: url(${({ bgUrl }) => bgUrl});
    background-color: gray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    cursor: pointer;
`

const Text = styled.p`
    padding-left: 3em;
    color: ${colors.text};
    font-size: ${fontSizes[300]};
`

interface ItemProps {
    text: string;
    bgUrl: string;
}

interface StyledItemProps {
    text: string;
    bgUrl: string;
}

const Item = ({ text, bgUrl }: ItemProps) => {
    return (
        <StyledItem text={text} bgUrl={bgUrl}>
            <Text>{ text }</Text>
        </StyledItem>
    )
}

export default Item