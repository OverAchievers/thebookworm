import React from 'react';
import BookBrowseModal from "../../components/BookBrowseModal";
import BookManageModal from "../../components/BookManageModal";

const ModalConductor = props => {
  switch (props.currentModal){
    case 'BOOK_BROWSE':
    return <BookBrowseModal {...props}/>;

    case 'BOOK_MANAGE':
    return <BookManageModal {...props}/>;

    default:
    return null;
  };


  export default ModalConductor;
