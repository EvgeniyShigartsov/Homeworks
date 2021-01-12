import './App.scss'
import Modal from './Components/Modal.jsx'
function App() {
    const modalOne = {
        header: 'Do you want to delete this file ?',
        text: `Once you delete this file, it won't be possible to undo this action. Are you sure want to delete it ?`,
        openBtn: {
            text: 'Open first modal',
            backgroundColor: '#007bff',
        },
        btnText: {
            ok: 'Ok',
            cancel: 'Cancel',
        },
    }
    const modalTwo = {
        header: 'Do you want to continue ?',
        text: `You didn't save your changes, do you sure want to continue ?`,
        openBtn: {
            text: 'Open second modal',
            backgroundColor: '#6c757d',
        },
        btnText: {
            ok: `Don't save`,
            cancel: 'Back',
        },
    }
    return (
        <div className="btn-modal">
            <Modal closeButton={true} header={modalOne.header} text={modalOne.text} btnText={modalOne.btnText} btnToOpen={modalOne.openBtn.text} openBtnBackground={modalOne.openBtn.backgroundColor} />
            <Modal
                closeButton={false}
                header={modalTwo.header}
                text={modalTwo.text}
                btnText={modalTwo.btnText}
                btnToOpen={modalTwo.openBtn.text}
                openBtnBackground={modalTwo.openBtn.backgroundColor}
            />
        </div>
    )
}

export default App
