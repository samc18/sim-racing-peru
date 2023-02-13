import styled from 'styled-components'
import {
    colors,
    margins,
    breakPoints,
} from '../styles/stylesVariables'

const StyledLastRace = styled.div`
    padding: 3em 0;
`

const StyledTitle = styled.h1`
    color: ${colors.text};
    margin-left: ${margins.mobile};
    @media (min-width: ${breakPoints.tablet}) {
        margin-left: ${margins.desktop};
    }
`

const StylediFrame = styled.iframe`
    display: block;
    width: 350px;
    height: 315px;
    margin-top: 3em;
    margin-inline: auto;

    @media (min-width: ${breakPoints.tablet}) {
        width: 560px;
    }

    @media (min-width: ${breakPoints.desktop}) {
        width: 640px;
        height: 360px;
    }
`

const LastRace = ({ className }: { className?: string }) => {
    return (
        <StyledLastRace>
            <StyledTitle>Último Evento</StyledTitle>
            <StylediFrame
                src='https://www.youtube.com/embed/MBFP6ecnQv4'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            >
            </StylediFrame>
        </StyledLastRace>
    )
}

export default LastRace
