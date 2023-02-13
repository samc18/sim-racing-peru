import styled from 'styled-components'
import {
    colors,
    margins,
    fontSizes,
    breakPoints,
} from '../styles/stylesVariables'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.background};
`
const Logo = styled.img`
    width: 220px;
    margin-left :${margins.mobile};

    @media (min-width: ${breakPoints.tablet}) {
        margin-left: ${margins.desktop};
    }
`

const Account = styled.span`
    font-size: ${fontSizes[300]};
    color: ${colors.text};
    margin-right: ${margins.mobile};

    @media (min-width: ${breakPoints.tablet}) {
        margin-right: ${margins.desktop};
    }
`

const Header = ({ className }: { className?: string }) => {
    return (
        <StyledHeader className={className}>
            <Link to='/'>
                <Logo src='/images/srp/srp_white.png' alt='Sim Racing Peru logo' />
            </Link>
            <Link to='account'>
                <Account>Mi Cuenta</Account>
            </Link>
        </StyledHeader>
    )
}

export default Header
