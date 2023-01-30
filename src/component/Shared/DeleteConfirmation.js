import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteConfirmation(props){

    return<>
    <Modal show={props.showModal} onHide={() => {props.closeModalHandler()}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {props.closeModalHandler()}}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {props.confirmDelteHandler()}}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}
export default DeleteConfirmation;