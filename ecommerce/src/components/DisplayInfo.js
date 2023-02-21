import React from "react";
import image from "./imgs/testShirt2.jpeg";
import Button from 'react-bootstrap/Button';

function DisplayInfo({product}) {
  return (
    <div className="display-info">
        <center><img class="table-img"src = {image}></img></center>
        <div class='quick-info'>
            <div>{product.name}</div>
            <div class="product-id">{product.id}</div>
            CAD ${product.price}
            
        </div>
        <Button
            className="view-btn"
            variant="primary"
            size="lg"
        >
            View
        </Button>
    </div>
  );
}

export default DisplayInfo;