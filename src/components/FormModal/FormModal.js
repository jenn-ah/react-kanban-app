import React from 'react';
import './FormModal.css';
import AddCard from '../AddCard';

const FormModal = (props) => {
  //console.log('formModal props', props);
   const { isForming, hideFormHandler } = props;

  //const isLoading = true;

  if (isForming) {
    return (
      <div className="formModalDiv">
        <div className="closeModalBtn">
        <button onClick={hideFormHandler} className="close-modal">&times;</button>
        </div>
        <br />
        <AddCard />
      </div>
    )
  } else {
    return null;
  }
}

export default FormModal;