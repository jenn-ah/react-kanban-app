import React from 'react';
import './FormModal.css';
import AddCard from '../AddCard';

const FormModal = (props) => {
  console.log('formModal props', props);
   const { isForming } = props;

  //const isLoading = true;

  if (isForming) {
    return (
      <div className="formModalDiv">
        <AddCard />
      </div>
    )
  } else {
    return null;
  }
}

export default FormModal;