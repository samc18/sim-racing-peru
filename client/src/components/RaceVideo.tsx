
import styled from 'styled-components'
import {
    breakPoints,
} from '../styles/stylesVariables'

const StyledRaceVideo = styled.div`
    padding: 3em 0;
`

const Iframe = styled.iframe`
    display: block;
    width: 350px;
    height: 197px;
    margin-inline: auto;

    @media (min-width: ${breakPoints.tablet}) {
        width: 560px;
        height: 315px;
    }

    @media (min-width: ${breakPoints.desktop}) {
        width: 39vw;
        height: 55vh;
    }
`

interface RaceVideoProps {
    className?: string;
    url: string;
}

const RaceVideo = ({ className, url }: RaceVideoProps) => {
    return (
        <StyledRaceVideo className={className}>
            <Iframe
                src={ url }
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            >
            </Iframe>
        </StyledRaceVideo>
    )
}

export default RaceVideo
