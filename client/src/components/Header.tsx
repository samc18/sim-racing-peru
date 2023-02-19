import styled from 'styled-components'
import {
    colors,
    fontSizes,
    mediaQueryMargins,
} from '../styles/stylesVariables'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    background-color: ${colors.background};
    ${mediaQueryMargins}
`

const Container = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 220px;
`

const Account = styled.span`
    font-size: ${fontSizes[300]};
    color: ${colors.text};
`

const Header = ({ className }: { className?: string }) => {
    return (
        <StyledHeader className={className}>
            <Container>
                <Link to='/'>
                    <Logo src='/images/srp/srp_white.png' alt='Sim Racing Peru logo' />
                </Link>
                <Link to='account'>
                    <Account>Mi Cuenta</Account>
                </Link>
            </Container>
        </StyledHeader>
    )
}

export default Header
