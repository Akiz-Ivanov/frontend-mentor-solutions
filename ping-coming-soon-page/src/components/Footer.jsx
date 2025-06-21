import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="mt-20 flex flex-col items-center gap-6 pb-6">

            <div className='flex justify-center gap-10'>
                <a href="https://facebook.com/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://x.com/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>

            <span className='text-center text-gray text-xs'>
                &copy; Copyright Ping. All rights reserved.
            </span>

        </footer>
    )
}