import React from 'react'
import styles from '../styles/Modal.module.css'
import { useMoralis } from 'react-moralis';

function Modal({setShowModal}) {
const {logout} = useMoralis();

async function Logout(){
    setShowModal(false)
    logout()
}

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        {/* <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setShowModal(false);
            }}>
            X
          </button>
        </div> */}
        <div className={styles.body}>
          <h1>Do you want to disconnect your Metamask wallet?</h1>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            id={styles.cancelBtn}
          >
            Cancel
          </button>
          <button onClick={Logout}>Continue</button>
        </div>
      </div>
    </div>
    )
}

export default Modal