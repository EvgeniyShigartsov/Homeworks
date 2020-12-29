import { useState } from 'react'
import './App.scss'
import Button from './Components/Button.jsx'
import Modal from './Components/Modal.jsx'
function App() {
    const modalOne = {
        header: 'Do you want to delete this file ?',
        text: `Once you delete this file, it won't be possible to undo this action. Are you sure want to delete it ?`,
        btnText: {
            ok: 'Ok',
            cancel: 'Cancel',
        },
    }
    const modalTwo = {
        header: 'Do you want to continue ?',
        text: `You didn't save your changes, do you sure want to continue ?`,
        btnText: {
            ok: `Don't save`,
            cancel: 'Back',
        },
    }
    const [active, setActive] = useState({ modalOne: false, modalTwo: false })
    return (
        <div>
            <div className="btn-wrapper">
                <Button classList="btn" backgroundColor="#007bff" text="Open first modal" onClick={() => setActive({ modalOne: true })} />
                <Button classList="btn" backgroundColor="#6c757d" text="Open second modal" onClick={() => setActive({ modalTwo: true })} />
            </div>
            <Modal closeButton={true} header={modalOne.header} text={modalOne.text} btnText={modalOne.btnText} active={active.modalOne} setActive={setActive} />
            <Modal closeButton={false} header={modalTwo.header} text={modalTwo.text} btnText={modalTwo.btnText} active={active.modalTwo} setActive={setActive} />
        </div>
    )
}

export default App
