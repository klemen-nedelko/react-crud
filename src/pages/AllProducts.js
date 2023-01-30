import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../component/Shared/DeleteConfirmation";

function AllProducts(){
    const [allProducts, setAllProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [itemIdToDelete, setItemIdToDelete] = useState(0);

    const navigation = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:4000/product").then((response) =>{
            setAllProducts(response.data);
        });
    },[]);

    const openDeleteConfirmation = (id) =>{
        setShowModal(true);
        setItemIdToDelete(id);
    }
    const closeDeleteConfirmation =() =>{
        setShowModal(false);
        setItemIdToDelete(0);
    }
    const confirmDeleteConfirmation = () => {
        axios.delete(`http://localhost:4000/product/${itemIdToDelete}`).then(() =>{
            setAllProducts((previusState) =>{
                return previusState.filter(_ => _.id !== itemIdToDelete);
            });
        });
        setItemIdToDelete(0);
        setShowModal(false);
    }


    
    return<>
    <DeleteConfirmation 
        showModal ={showModal}
        title = "Delete warning!"
        body = "Are you sure to delte this item?"
        closeModalHandler ={closeDeleteConfirmation}
        confirmDelteHandler = {confirmDeleteConfirmation}
    >
    </DeleteConfirmation>
     <Row xs={1} md={2} className="g-4">
      {allProducts.length ? allProducts.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Quantity - {item.quantity}
              </Card.Text>
              <Card.Text>
                Cost - {item.cost}
              </Card.Text>
              <Button 
                variant="primary" 
                type="button" 
                onClick={() => navigation(`/edit-product/${item.id}`)}>
                Edit product
            </Button>
            <Button 
                variant="danger" 
                type="button" 
                onClick={() => {openDeleteConfirmation(item.id)}}>
                Delete product
            </Button>
            </Card.Body>
          </Card>
        </Col>
      )): 
        <div class="d-flex justify-content-center align-items-center">
            <div>
                <h2>No products</h2>
            </div>
        </div>
      }
    </Row>
    </>
}
export default AllProducts;