import styled from 'styled-components'
import Item from './Item'

const StyledMenuItems = styled.div`
    padding: 3em 0;
    display: grid;
    gap: 3em;
`

const MenuItems = () => {
    return (
        <StyledMenuItems>
            <Item text='Competiciones' bgUrl='../../public/images/home/events.jpg' />
            <Item text='Herramientas' bgUrl='../../public/images/home/tools.png' />
            <Item text='Pilotos' bgUrl='../../public/images/home/drivers.png' />
            <Item text='Equipos' bgUrl='../../public/images/home/teams.jpg' />
            <Item text='Pits' bgUrl='../../public/images/home/pits.jpg' />
        </StyledMenuItems>
    )
}

export default MenuItems