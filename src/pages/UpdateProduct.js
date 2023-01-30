import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigation, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateProduct(){

    const {id} = useParams();
    const productName = useRef("");
    const productQuantity = useRef("");
    const productCost = useRef("");
    const productImageUrl = useRef("");
    const navigate = useNavigation();

    useEffect(() =>{
        axios.get(`http://localhost:4000/product/${id}`)
        .then((response) =>{
            productName.current.valueOf = response.data.name;
            productQuantity.current.valueOf = response.data.quantity;
            productCost.current.valueOf = response.data.cost;
            productImageUrl.current.valueOf = response.data.image;
        });
    },[id]);

    const updateProductHandler = () =>{
        var payload = {
            name: productName.current.valueOf,
            quantity: productQuantity.current.valueOf ? Number(productQuantity.current.valueOf) : 0,
            cost : productCost.current.valueOf ? Number(productCost.current.valueOf) : 0,
            imageUrl: productImageUrl.current.valueOf
        }
        axios.put(`http://localhost:4000/product/${id}`, payload).then((response) =>{
            navigate("/");
        }).catch((error) =>{
            console.log(error);
        })

    }
    return <>
    <legend>Edit</legend>
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
      <Button variant="primary" type="button" onClick={updateProductHandler}>
        Submit
      </Button>
    </Form>
    </>
}
export default UpdateProduct;