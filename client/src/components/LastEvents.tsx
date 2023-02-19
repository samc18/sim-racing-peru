import styled from 'styled-components'
import { colors } from '../styles/stylesVariables'
import Slider from './Slider'

const StyledLastEvents = styled.div`
    grid-column: 2 / 3;
    padding: 3em 0;
    // Fix for slider going to wide
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    min-height: 0;
    min-width: 0;
`

const Title = styled.h1`
    color: ${colors.text};
    margin-bottom: 2em;
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
