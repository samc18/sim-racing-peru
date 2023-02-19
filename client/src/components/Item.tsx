import styled from 'styled-components'
import {
    colors,
    fontSizes,
    breakPoints,
} from '../styles/stylesVariables'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)<StyledLinkProps>`
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);

    &:hover,
    &:focus {
        transform: scale(1.1);
        transition: all 0.4s;
    }

    @media (min-width: ${breakPoints.tablet}) {
        clip-path: ${({ text }) => text === 'Competiciones' ?
            'polygon(7.5% 0%, 100% 0, 92.5% 100%, 0% 100%)' :
            'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'};
    }
`

const Container = styled.div<ContainerProps>`
    width: 330px;
    height: 330px;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    background-image: url(${({ bgUrl }) => bgUrl});
    background-color: gray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;

    @media (min-width: ${breakPoints.tablet}) {
        width: ${({ text }) => text === 'Competiciones' ? '660px' : '330px'};
        clip-path: ${({ text }) => text === 'Competiciones' ?
            'polygon(7.5% 0%, 100% 0, 92.5% 100%, 0% 100%)' :
            'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'};
    }

    @media (min-width: ${breakPoints.desktop}) {
        width: ${({ text }) => text === 'Competiciones' ? '56vw' : '28vw'};
        height: 50vh;
    }
`

const Text = styled.p`
    padding-left: 3em;
    color: ${colors.text};
    font-size: ${fontSizes[300]};

    @media (min-width: ${breakPoints.desktop}) {
        padding-left: 4.5vw;
    }
`

interface ItemProps {
    text: string;
    bgUrl: string;
    className?: string;
    page: string;
}

interface StyledLinkProps {
    text: string;
}

interface ContainerProps {
    text: string;
    bgUrl: string;
}

const Item = ({ text, bgUrl, className, page }: ItemProps) => {
    return (
        <StyledLink to={page} className={className} text={text}>
            <Container text={text} bgUrl={bgUrl}>
                    <Text>{ text }</Text>
            </Container>
        </StyledLink>
    )
}

export default Item
