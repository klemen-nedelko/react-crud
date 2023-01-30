import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct(){

    const productName = useRef("");
    const productQuantity = useRef("");
    const productCost = useRef("");
    const productImageUrl = useRef("");
    const navigation = useNavigate();

    const addProductHandler = () =>{
        var payload = {
            name: productName.current.value,
            quantity: productQuantity.current.value ? Number(productQuantity.current.value) : 0,
            cost : productCost.current.value ? Number(productCost.current.value) : 0,
            imageUrl: productImageUrl.current.value
        }
        axios.post("http://localhost:4000/product", payload).then((response) =>{
            navigation("/");
        })
    }

    return <>
    <legend>Create</legend>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" ref={productName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="1" ref={productQuantity}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCost">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="text" placeholder="200$" ref={productCost}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImageUrl">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="www.example.com" ref={productImageUrl}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={addProductHandler}>
        Submit
      </Button>
    </Form>
    </>;
}

export default AddProduct;