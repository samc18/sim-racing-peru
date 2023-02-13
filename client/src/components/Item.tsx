import styled from 'styled-components'
import {
    colors,
    fontSizes,
    breakPoints,
} from '../styles/stylesVariables'
import { Link } from 'react-router-dom'

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

    @media (min-width: ${breakPoints.tablet}) {
        width: ${({ text }) => text === 'Competiciones' ? '720px' : '375px'};
    }
`

const Text = styled.p<StyledTextProps>`
    padding-left: 3em;
    color: ${colors.text};
    font-size: ${fontSizes[300]};

    @media (min-width: ${breakPoints.tablet}) {
        padding-left: ${({ text }) => text === 'Competiciones' ? '5em' : '3em'}};
    }
`

interface ItemProps {
    text: string;
    bgUrl: string;
    className?: string;
    page: string;
}

interface StyledItemProps {
    text: string;
    bgUrl: string;
}

interface StyledTextProps {
    text: string;
}

const Item = ({ text, bgUrl, className, page }: ItemProps) => {
    return (
        <StyledItem text={text} bgUrl={bgUrl} className={className}>
            <Link to={page}>
                <Text text={text}>{ text }</Text>
            </Link>
        </StyledItem>
    )
}

export default Item
