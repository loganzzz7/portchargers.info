import { useState, useEffect } from 'react';
import './Navbar.css'
import portlogowhite from '../images/portlogowhite.png'

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 82;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <header style={{ top: visible ? '0' : '-82px' }}>
                <div className="headerBar" id="headerBarForJS">
                    <div className="Logo">
                        <a href="#frontPage"><img src={portlogowhite} alt="port logo"
                            id="portLogo" /></a>
                    </div>
                    <div className="navigationLinks">
                        <nav>
                            <ul>
                                <li><a href="#about" id="aboutHeader">About Us</a></li>
                                <li><a href="#userGuide" id="userGuideHeader">Become a Partner</a></li>
                                <li><a href="#targetSectors" id="targetSectorsHeader">Targeted Sectors</a></li>
                                {/* <!-- <li><a href="#videoDemo">Video Demo</a></li> --> */}
                                {/* <!-- <li><a href="productAndPricing">Product &amp; Pricing</a></li> --> */}
                                <li><a href="#newsLetter" id="newsLetterHeader">Stay Updated</a></li>
                                <li><a href="#contact" id="contactHeader">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;