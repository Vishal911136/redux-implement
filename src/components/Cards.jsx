import Cardsdata from './Cardsdata';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ADD } from '../redux/action.js/action';


const Cards = () => {
    const [data,setData] = useState(Cardsdata);
    // const carts = useSelector((state) => state.cartreducer.carts)
    const dispatch = useDispatch()
    // console.log(carts);

    
    const send = (e) =>{
        // console.log(e)
        dispatch(ADD(e))
    }
  return (
    <>
    <div className="container">
      <h2 className="text-center mt-4">Products</h2>
      <div className="row d-flex align-items-center justify-content-center overflow-hidden">

        {
            data.map((items) =>{
                return(
                    <>
                        <Card key={items.id} className='mx-2 my-2 card' style={{ width: "20rem",border:'none' }} >
                            <Card.Img variant="top" 
                                src={items.imgdata}
                                style={{height:'240px'}}
                            />
                            <Card.Body>
                                <Card.Title>{items.rname}</Card.Title>
                                <Card.Text>
                                    Price: {items.price}
                                </Card.Text>
                                <Button variant="dark" onClick={() => send(items)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </>
                )
            })
        }

      </div>
    </div>
    </>
  );
};
export default Cards;
