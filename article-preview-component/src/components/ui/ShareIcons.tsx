import facebookIcon from '../../assets/images/icon-facebook.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'
import pinterestIcon from '../../assets/images/icon-pinterest.svg'

type Props = {
    isPopoverOpen: boolean
};

export default function ShareIcons({ isPopoverOpen }: Props) {
    return (
        <>
            <a href="#" tabIndex={isPopoverOpen ? 0 : -1} aria-hidden={!isPopoverOpen} className='group'>
                <img
                    src={facebookIcon}
                    alt="Facebook"
                    className='group-hover:scale-125 group-hover:-translate-y-1 group-active:scale-110 group-active:translate-y-0.5' />
            </a>
            <a href="#" tabIndex={isPopoverOpen ? 0 : -1} aria-hidden={!isPopoverOpen} className='group'>
                <img
                    src={twitterIcon}
                    alt="Twitter"
                    className='group-hover:scale-125 group-hover:-translate-y-1 group-active:scale-110 group-active:translate-y-0.5' />
            </a>
            <a href="#" tabIndex={isPopoverOpen ? 0 : -1} aria-hidden={!isPopoverOpen} className='group'>
                <img
                    src={pinterestIcon}
                    alt="Pinterest"
                    className='group-hover:scale-125 group-hover:-translate-y-1 group-active:scale-110 group-active:translate-y-0.5' />
            </a>
        </>
    );
};