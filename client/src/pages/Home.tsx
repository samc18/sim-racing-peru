import styled from 'styled-components'
import { colors } from '../styles/stylesVariables'
import Item from '../components/Item'

const StyledHome = styled.div`
    background-image: url(../../public/images/home/background.jpg);
    background-color: ${colors.background};
    background-blend-mode: multiply;
`

const ItemsContainer = styled.div`
    padding: 3em 0;
    display: grid;
    gap: 3em;
`

const Home = () => {
    return (
        <StyledHome>
            <ItemsContainer>
                <Item text='Competiciones' bgUrl='../../public/images/home/events.jpg' />
                <Item text='Herramientas' bgUrl='../../public/images/home/tools.png' />
                <Item text='Pilotos' bgUrl='../../public/images/home/drivers.png' />
                <Item text='Equipos' bgUrl='../../public/images/home/teams.png' />
                <Item text='Pits' bgUrl='../../public/images/home/pits.jpg' />
            </ItemsContainer>
        </StyledHome>
    )
}

export default Home