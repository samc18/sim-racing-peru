import styled from 'styled-components'
import Item from './Item'
import {
    margins,
    breakPoints,
} from '../styles/stylesVariables'

const StyledItem = styled(Item)``

const StyledMenuItems = styled.div`
    padding: 3em 0;
    display: grid;
    gap: 3em;
    grid-template-areas:
        "competiciones"
        "pilotos"
        "equipos"
        "herramientas"
        "pits";
    ${StyledItem}:nth-child(1) {
        grid-area: competiciones;
    }
    ${StyledItem}:nth-child(2) {
        grid-area: herramientas;
    }
    ${StyledItem}:nth-child(3) {
        grid-area: pilotos;
    }
    ${StyledItem}:nth-child(4) {
        grid-area: equipos;
    }
    ${StyledItem}:nth-child(5) {
        grid-area: pits;
    }

    @media (min-width: ${breakPoints.tablet}) {
        grid-template-areas:
            "competiciones competiciones"
            "pilotos equipos"
            "herramientas pits";
        gap: 1em;
        padding-inline: ${margins.desktop};
    }

    @media (min-width: ${breakPoints.desktop}) {
        grid-template-areas:
            "competiciones competiciones herramientas"
            "pilotos equipos pits";
        gap: 1em;
        padding-inline: ${margins.desktop};
`

const MenuItems = ({ className }: { className?: string }) => {
    return (
        <StyledMenuItems className={className}>
            <StyledItem text='Competiciones' bgUrl='/images/home/events.jpg' page='events' />
            <StyledItem text='Herramientas' bgUrl='/images/home/tools.png' page='tools' />
            <StyledItem text='Pilotos' bgUrl='/images/home/drivers.png' page='drivers' />
            <StyledItem text='Equipos' bgUrl='/images/home/teams.jpg' page='teams' />
            <StyledItem text='Pits' bgUrl='/images/home/pits.jpg' page='pits' />
        </StyledMenuItems>
    )
}

export default MenuItems
