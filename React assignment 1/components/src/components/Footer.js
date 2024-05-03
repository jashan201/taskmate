import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
    return (
        <footer>
        <div className='icons'>
            <i><FontAwesomeIcon icon={props.Instagram} /></i>
            <i><FontAwesomeIcon icon={props.Facebook} /></i>
            <i><FontAwesomeIcon icon={props.Twitter} /></i>
            <i><FontAwesomeIcon icon={props.Youtube} /></i>
        </div>
        <ul className='list'>
            {props.contents.map(footerContent => (
                <li key={footerContent.index}>
                <a href="footerContent.url">{footerContent.name}</a>
                </li>
            ))}
        </ul>
        <p>{props.companyName}</p>
        </footer>
    );
}

export default Footer;