import styled from 'styled-components'
import {
    colors,
    margins,
    breakPoints,
} from '../styles/stylesVariables'
import Slider from './Slider'

const StyledLastEvents = styled.div`
    padding: 3em 0;
`

const Title = styled.h1`
    color: ${colors.text};
    margin-left: ${margins.mobile};
    margin-bottom: 2em;
    @media (min-width: ${breakPoints.tablet}) {
        margin-left: ${margins.desktop};
    }
`

const LastEvents = ({ className }: { className?: string }) => {
    return (
        <StyledLastEvents className={className}>
            <Title>Últimos Eventos</Title>
            <Slider />
        </StyledLastEvents>
    )
}

export default LastEvents
