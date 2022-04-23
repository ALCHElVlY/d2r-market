// External imports
import {
	faPatreon,
	faSteamSquare,
	faXbox,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Internal imports
import LinkAccount from '../../components/Buttons/LinkAccount.jsx';

const LinkBlocks = () => {
    return (
        <div className="settings_links col-12">
            <section className="link_block">
                <FontAwesomeIcon icon={faPatreon} className="icon" />
                <h3>Patreon</h3>
                <LinkAccount />
            </section>
            <section className="link_block">
                <FontAwesomeIcon icon={faSteamSquare} className="icon" />
                <h3>Steam</h3>
                <LinkAccount />
            </section>
            <section className="link_block">
                <FontAwesomeIcon icon={faXbox} className="icon" />
                <h3>Xbox</h3>
                <LinkAccount />
            </section>
            <section className="link_block">
                <FontAwesomeIcon icon={faDiscord} className="icon" />
                <h3>Discord</h3>
                <LinkAccount />
            </section>
        </div>
    );
}

export default LinkBlocks;