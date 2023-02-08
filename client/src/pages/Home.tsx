import styled from 'styled-components'
import { colors } from '../styles/stylesVariables'
import MenuItems from '../components/MenuItems'
import LastRace from '../components/LastRace'
import Sponsors from '../components/Sponsors'

const StyledHome = styled.div`
    background-image: url(/images/home/background.jpg);
    background-color: ${colors.background};
    background-blend-mode: multiply;
`

const Home = () => {
    return (
        <StyledHome>
            <MenuItems />
            <LastRace />
            <Sponsors />
        </StyledHome>
    )
}

export default Home
