import './Content.css'
import mainPageImage from '../images/mainPageImage.png'
import photoOfInterface from '../images/photoOfInterface.png'
import Icons from './Forms/Icons';
import { useState, useEffect, useRef } from 'react';

function Content() {
    const iconsList = [
        { src: "iconImages/nightlife.png", alt: "night life icon" },
        { src: "iconImages/events.png", alt: "event icon" },
        { src: "iconImages/restaurants.png", alt: "restaurant icon" },
        { src: "iconImages/shoppingcenters.png", alt: "shopping center icon" },
        { src: "iconImages/universities.png", alt: "university icon" },
        { src: "iconImages/more.png", alt: "more icon" },
    ]

    const [visible, setVisible] = useState(false);
    const whoWeAreRef = useRef(null);

    // obersver tut: https://dev.to/producthackers/intersection-observer-using-react-49ko
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // update when observer
                setVisible(entry.isIntersecting);
            });
        }, {
            root: null, // doc viewport
            threshold: 0.5 // visible amount
        });

        // observe when whoweare section comes into view
        const currentWhoWeAre = whoWeAreRef.current;
        if (currentWhoWeAre) {
            observer.observe(currentWhoWeAre);
        }

        // end observer
        return () => {
            if (currentWhoWeAre) {
                observer.unobserve(currentWhoWeAre);
            }
        };
    }, []);

    return (
        <>
            <section className="mainBackground">
                <div className="motto">
                    <p>Easy.</p>
                    <p>Efficient.</p>
                    <p><span id="expensiveStrikeOut">Expensive.</span></p>
                </div>
                <img src={mainPageImage} alt="mainPageBackground" />
            </section>
            <section className="whoWeAre" id="about">
                <div className="whoWeAreBody" ref={whoWeAreRef} style={{ opacity: visible ? 1 : 0 }}>
                    <div className={`whoWeAreTxt ${visible ? 'slideIn' : ''}`}>
                        <div className="whoWeAreHeadingAndP">
                            <h1 className="whoWeAreHeading">Who We Are</h1>
                            <p>POR+ is focused on delivering a seamless portable charging experience in our tech driven
                                world. Our expansive network of portable charging stations will ensure that your phone is as
                                charged as your ambition! Together, we'll keep New York City powered up and moving forward.
                            </p>
                        </div>
                    </div>
                    <div className="whoWeArePhoto">
                        <img src={photoOfInterface} alt="photoOfUserInterface" 
                        className={`${visible ? 'fadeIn' : ''}`} id="photoOfUserInterface"/>
                    </div>
                </div>
            </section>
            <section className="targetedSectors" id="targetSectors">
                <Icons icons={iconsList} />
            </section>
        </>
    );
}

export default Content;