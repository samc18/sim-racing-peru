import styled from 'styled-components'
import {
    colors,
    margins,
    breakPoints,
} from '../styles/stylesVariables'

const StyledSponsors = styled.div`
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

const Logo = styled.img`
    width: 180px;
    margin-inline: auto;
`

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2em;
    grid-template-areas:
        'simula'
        'intel'
        'legion'
        'autotvperu'
        'autoexpress';
    ${Logo}:nth-child(1) {
        grid-area: simula;
    }
    ${Logo}:nth-child(2) {
        grid-area: intel;
    }
    ${Logo}:nth-child(3) {
        grid-area: legion;
    }
    ${Logo}:nth-child(4) {
        grid-area: autotvperu;
    }
    ${Logo}:nth-child(5) {
        grid-area: autoexpress;
    }

    @media (min-width: ${breakPoints.tablet}) {
        grid-template-areas: 
            'intel intel'
            'simula legion'
            'autotvperu autoexpress';
        gap: 3em 9em;
    }

    @media (min-width: ${breakPoints.desktop}) {
        grid-template-areas:
            'autotvperu simula intel legion autoexpress';
        gap: 3em;
`

const Sponsors = ({ className }: { className?: string }) => {
    return (
        <StyledSponsors>
            <Title>Auspiciadores</Title>
            <Container>
                <Logo src='/images/sponsors/simula.png' alt='' />
                <Logo src='/images/sponsors/intel.png' alt='' />
                <Logo src='/images/sponsors/legion.png' alt='' />
                <Logo src='/images/sponsors/autotvperu.png' alt='' />
                <Logo src='/images/sponsors/autoexpress_2.png' alt='' />
            </Container>
        </StyledSponsors>
    )
}

export default Sponsors
