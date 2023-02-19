import styled from 'styled-components'
import {
    colors,
    mediaQueryMargins,
} from '../styles/stylesVariables'
import MenuItems from '../components/MenuItems'
import Socials from '../components/Socials'
import LastEvents from '../components/LastEvents'
import Sponsors from '../components/Sponsors'

const StyledHome = styled.div`
    background-image: url(/images/home/background.jpg);
    background-color: ${colors.background};
    background-blend-mode: multiply;
    ${mediaQueryMargins}
`

const Home = () => {
    return (
        <StyledHome>
            <MenuItems />
            <Socials />
            <LastEvents />
            <Sponsors />
        </StyledHome>
    )
}

export default Home
