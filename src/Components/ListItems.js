import Data from '../Data'
import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ListItems = () => {
    return (
        <div className='p-4'>
            <hr />
            <h1 className='text-center mt-2'>OUR MENU</h1>
            <hr />
            <div style={{ margin: "20px auto" }} className='d-flex flex-wrap gap-2 justify-content-between p-3'>
                {
                    Data.map((data) => (

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    ₹ {data.price}
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    ))
                }

            </div>
        </div>
    );
}

export default ListItems;
