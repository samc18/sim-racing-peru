import styled from 'styled-components'
import {
    FaInstagramSquare,
    FaFacebookSquare,
    FaYoutubeSquare,
} from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { colors } from '../styles/stylesVariables'

const StyledSocials = styled.div`
    grid-column: 2 / 3;
    display: flex;
    gap: 1.5em;
    padding: 3em 0;

    .icon {
        color: ${colors.icon};
        width: 40px;
        height: 40px;
    }
`
const Socials = ({ className }: { className?: string }) => {
    return (
        <StyledSocials className={className}>
            <a href='http://www.instagram.com/simracingperu_' target='_blank'>
                <FaInstagramSquare className='icon' />
            </a>
            <a href='http://www.facebook.com/simracingperu' target='_blank'>
                <FaFacebookSquare className='icon' />
            </a>
            <a href='http://www.youtube.com/@simracingperu' target='_blank'>
                <FaYoutubeSquare className='icon' />
            </a>
            <a href='https://discord.gg/uh4jsgcg' target='_blank'>
                <BsDiscord className='icon' />
            </a>
        </StyledSocials>
    )
}

export default Socials
