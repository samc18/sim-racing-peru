import styled from 'styled-components'
import {
    colors,
    margins,
    breakPoints,
} from '../styles/stylesVariables'

const StyledSponsors = styled.div`
    padding: 3em 0;
`

const StyledTitle = styled.h1`
    color: ${colors.text};
    margin-left: ${margins.mobile};
    @media (min-width: ${breakPoints.tablet}) {
        margin-left: ${margins.desktop};
    }
`

const StyledImg = styled.img`
    width: 200px;
    margin-inline: auto;
`

const StyledImgContainer = styled.div`
    marin-top: 3em; 
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
    ${StyledImg}:nth-child(1) {
        grid-area: simula;
    }
    ${StyledImg}:nth-child(2) {
        grid-area: intel;
    }
    ${StyledImg}:nth-child(3) {
        grid-area: legion;
    }
    ${StyledImg}:nth-child(4) {
        grid-area: autotvperu;
    }
    ${StyledImg}:nth-child(5) {
        grid-area: autoexpress;
    }

    @media (min-width: ${breakPoints.tablet}) {
        grid-template-areas: 
            'intel intel'
            'simula legion'
            'autotvperu autoexpress';
        gap: 3em;
    }

    @media (min-width: ${breakPoints.desktop}) {
        grid-template-areas:
            'autotvperu simula intel legion autoexpress';
        gap: 3em;
`

const Sponsors = ({ className }: { className?: string }) => {
    return (
        <StyledSponsors>
            <StyledTitle>Auspiciadores</StyledTitle>
            <StyledImgContainer>
                <StyledImg src='/images/sponsors/simula.png' alt='' />
                <StyledImg src='/images/sponsors/intel.png' alt='' />
                <StyledImg src='/images/sponsors/legion.png' alt='' />
                <StyledImg src='/images/sponsors/autotvperu.png' alt='' />
                <StyledImg src='/images/sponsors/autoexpress_2.png' alt='' />
            </StyledImgContainer>
        </StyledSponsors>
    )
}

export default Sponsors
