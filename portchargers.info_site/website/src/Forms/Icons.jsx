import { useEffect, useState } from "react"
import './Icons.css'

const Icons = ({ icons }) => {
    const [iconIndex, setIconIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const outsideClick = (event) => {
            if (event.target.id === "iconModal") {
                setModalOpen(false);
            }
        };
        window.addEventListener('click', outsideClick);

        return () => {
            window.removeEventListener('click', outsideClick);
        }
    }, []);

    // open modal
    const openModal = (index) => {
        console.log("Opening modal, index: ", index);
        setIconIndex(index);
        setModalOpen(true);
    }

    // clsoe modal
    const closeModal = () => {
        setModalOpen(false);
    }

    const leftBtnClick = () => {
        // reset to last
        const updateIndex = iconIndex > 0 ? iconIndex - 1 : icons.length - 1;
        setIconIndex(updateIndex);
    }

    const rightBtnClick = () => {
        // reset to first
        const updateIndex = iconIndex < icons.length - 1 ? iconIndex + 1 : 0;
        setIconIndex(updateIndex);
    }

    return (
        <>
            <div className="icons">
                <div className="targetedSectorsBody">
                    <h1 className="targetedSectorsHeading">Delivering the best and most convenient portable charging solution
                    </h1>
                    <div className="targetedSectorsIcons">
                        {icons.map((icon, index) => (
                            <img
                                key={icon.alt}
                                src={icon.src}
                                alt={icon.alt}
                                className="iconImage"
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </div>
                    {modalOpen && (
                        <div id="iconModal" className="modal" style={{ display: modalOpen ? 'block' : 'none' }} >
                            <div className="iconModalContent">
                                <span className="closeBtnIcon" onClick={closeModal} >&times;</span>
                                <span className="leftBtn" id="leftBtnIcon" onClick={leftBtnClick} >&#x003C;</span>
                                <span className="rightBtn" id="rightBtnIcon" onClick={rightBtnClick} >&#x003E;</span>
                                <img src={icons[iconIndex].src} alt="modal placeholder img" className="modalIconImage"
                                id="iconPlaceHolderImg" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Icons;