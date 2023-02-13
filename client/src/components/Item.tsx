import styled from 'styled-components'
import {
    colors,
    fontSizes,
    breakPoints,
} from '../styles/stylesVariables'
import { Link } from 'react-router-dom'

const Container = styled.div<ContainerProps>`
    width: 375px;
    height: 300px;
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

const Text = styled.p<TextProps>`
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

interface ContainerProps {
    text: string;
    bgUrl: string;
}

interface TextProps {
    text: string;
}

const linkStyles = {
    clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
}

const Item = ({ text, bgUrl, className, page }: ItemProps) => {
    return (
        <Link to={page} className={className} style={linkStyles}>
            <Container text={text} bgUrl={bgUrl}>
                    <Text text={text}>{ text }</Text>
            </Container>
        </Link>
    )
}

export default Item
