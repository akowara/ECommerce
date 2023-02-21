import React from "react";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import DisplayInfo from "./DisplayInfo";

function Content() {

    let shirts = [
        {
            "id":1,
            "name": "Shirt 1",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":2,
            "name": "Shirt 2",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":3,
            "name": "Shirt 3",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":4,
            "name": "Shirt 4",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":5,
            "name": "Shirt 5",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":6,
            "name": "Shirt 6",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":7,
            "name": "Shirt 7",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":8,
            "name": "Shirt 8",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":9,
            "name": "Shirt 9",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },{
            "id":10,
            "name": "Shirt 10",
            "img": "./imgs/testShirt2.jpeg",
            "price": 12.99
        },
    ];

  return (
    <div className="content">
        <h2>Featured</h2>
        <Table>
            <TableRow>
            {
                shirts.map((shirt) => (
                    <td class ="table-content">
                        <DisplayInfo 
                            product={shirt}
                        />
                    </td>
                ))
            }
            </TableRow>
        </Table>
    </div>
  );
}

export default Content;