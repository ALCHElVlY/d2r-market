// Built-in imports
import { useState, useRef } from 'react';

// External imports
import {
	faPatreon,
    faBattleNet,
	faXbox,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Internal imports
import LinkAccount from '../../components/Buttons/LinkAccount.jsx';

const LinkBlocks = () => {
    //Event handlers
    const handleBnetOauthLink = () => {
        // Open another tab and begin the bnet oauth flow
        window.open('/oauth/bnet', '_blank');
    };
    /*const handleXboxOauthLink = () => {
        // Open another tab and begin the xbox oauth flow
        window.open('/oauth/xbox', '_blank');
    };
    const handleDiscordOauthLink = () => {
        // Open another tab and begin the discord oauth flow
        window.open('/oauth/discord', '_blank');
    };*/


    return (
        <div className="settings_links col-12">
            <section className="link_block">
                <FontAwesomeIcon icon={faBattleNet} className="icon" />
                <h3>Battle.net</h3>
                <LinkAccount onClick={handleBnetOauthLink} />
                {/* <UnLinkAccount onClick={handleBnetOauthUnLink} /> */}
            </section>
            <section className="link_block">
                <FontAwesomeIcon icon={faXbox} className="icon" />
                <h3>Xbox</h3>
                <LinkAccount isDisabled={true} />
                {/* <UnLinkAccount /> */}
            </section>
            <section className="link_block">
                <FontAwesomeIcon icon={faDiscord} className="icon" />
                <h3>Discord</h3>
                <LinkAccount isDisabled={true} />
                {/* <UnLinkAccount /> */}
            </section>
            <section className="link_block">
                <FontAwesomeIcon icon={faPatreon} className="icon" />
                <h3>Patreon</h3>
                <LinkAccount isDisabled={true} />
                {/* <UnLinkAccount /> */}
            </section>
        </div>
    );
}

export default LinkBlocks;