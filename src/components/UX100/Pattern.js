import React, {useState} from 'react'
import Modal from '../UX100/Modal'

const Pattern = ({ pattern }) => {
    
    const [visibleModal, setVisibleModal] = useState(false)

    const toggleModal = () => {
        setVisibleModal(!visibleModal)
    }

    return (
        <section
        className="pattern"
        style={{ background: `${pattern.maincolor}` }}
        >
        <div>
            <h1
                style={{ color: `${pattern.seccolor}` }}
            >{pattern.id}</h1>
        </div>
        <h4
            className="title"
            style={{ color: `${pattern.seccolor}` }}
        >{pattern.title}</h4>
        <div
            className="expand-btn"
            style={{ background: `${pattern.seccolor}`,color: `${pattern.maincolor}` }}
            onClick={toggleModal}
        >+</div>
        {visibleModal && (
            <Modal pattern={pattern} />
        )}
    </section>
    )
}

export default Pattern
