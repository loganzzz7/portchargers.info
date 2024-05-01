import './Content.css' 
import mainPageImage from '../images/mainPageImage.png'
import photoOfInterface from '../images/photoOfInterface.png'

function Content() {
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
                <div className="whoWeAreBody">
                    <div className="whoWeAreTxt">
                        <div className="whoWeAreHeadingAndP">
                            <h1 className="whoWeAreHeading">Who We Are</h1>
                            <p>POR+ is focused on delivering a seamless portable charging experience in our tech driven
                                world. Our expansive network of portable charging stations will ensure that your phone is as
                                charged as your ambition! Together, we'll keep New York City powered up and moving forward.
                            </p>
                        </div>
                    </div>
                    <div className="whoWeArePhoto">
                        <img src={photoOfInterface} alt="photoOfUserInterface" />
                    </div>
                </div>
            </section>
            <section className="targetedSectorsSect" id="targetSectors">
                <div className="targetedSectorsBody">
                    <h1 className="targetedSectorsHeading">Delivering the best and most convenient portable charging solution
                    </h1>
                    <div className="targetedSectorsIcons">
                        <img src="../../../iconImages/nightlife.png" alt="night life icon" className="iconImage" />
                        <img src="../../../iconImages/events.png" alt="event icon" className="iconImage" />
                        <img src="../../../iconImages/restaurants.png" alt="restaurant icon" className="iconImage" />
                        <img src="../../../iconImages/shoppingcenters.png" alt="shopping center icon" className="iconImage" />
                        <img src="../../../iconImages/universities.png" alt="university icon" className="iconImage" />
                        <img src="../../../iconImages/more.png" alt="more icon" className="iconImage" />
                    </div>
                    <div id="iconModal" className="modal">
                        <div className="iconModalContent">
                            <span className="closeBtnIcon">&times;</span>
                            <span className="leftBtn" id="leftBtnIcon">&#x003C;</span>
                            <span className="rightBtn" id="rightBtnIcon">&#x003E;</span>
                            <img src="iconImages/" alt="modal placeholder img" className="iconImage" id="iconPlaceHolderImg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;