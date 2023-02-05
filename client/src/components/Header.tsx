import styled from 'styled-components'
import {
    colors,
    margins,
    fontSizes
} from '../styles/stylesVariables'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: ${margins.mobile};
    background-color: ${colors.background};

    @media (min-width: 768px) {
        padding-inline: ${margins.desktop};
    }
`
const Logo = styled.img`
    width: 220px;
`

const Account = styled.span`
    font-size: ${fontSizes[300]};
    color: ${colors.font};
`

const Header = () => {
    return (
        <StyledHeader>
            <Logo src="/images/srp/srp_white.png" alt="Sim Racing Peru logo" />
            <Account>Mi Cuenta</Account>
        </StyledHeader>
    )
}

export default Header