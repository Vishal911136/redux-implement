import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DLT,ADD, REMOVE } from '../redux/action.js/action';
import { useState } from 'react';
import { useEffect } from 'react';

const CartPage = () =>{
    const [totalPrice, setTotalPrice] = useState(0);
    
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartreducer.carts);
        
        const removeItem = (id) =>{
            dispatch(DLT(id))
        }
    
    const totalCartAmount = () =>{
        let total = 0;
        carts.map((value) =>{
            total += value.price;
        })
        setTotalPrice(total);
    }

    const send = (e) =>{
        // console.log(e)
        dispatch(ADD(e))
    }
    
    const remove = (item) =>{
        dispatch(REMOVE(item))
    }
    useEffect(() =>{
        totalCartAmount();
    },[totalPrice,CartPage])
    
    //!___________________________!\\
    if(carts.length<1){
        return(
            <div>
                <h1 className="text-center">No Items</h1>
            </div>
        )
    }
    return(
        <>
        <h2 className="text-center">Item Details Page</h2>
            <div className="container">
        <Row>
                <Col xs={8} className="col-md-8 shadow col-12">
                {   
                    carts.map((value) => {
                        return(
                    <div key={value.id} className="my-2 d-flex align-items-center justify-content-between border rounded p-2">
                        <div className="product_img">
                            <img className='rounded' style={{width:'160px',height:'140px'}} src={value.imgdata} alt="" />
                        </div>
                        <div className="product_detail" style={{marginLeft:'10px'}}>
                            <h6 className="title">{value.rname}</h6>
                            <p>${value.price * value.qnty}</p>
                            <p className="product_info" style={{margin:'-13px 0 0 0'}}> {value.somedata}</p>
                            <div className="quantity_div">
                                <button className='rounded border' varient="danger" onClick={value.qnty <= 1 ? () => removeItem(value.id) : () => remove(value )}> - </button>
                                <input value={value.qnty} min="0" className='text-center border rounded' type="text" style={{width:'25px', height: '23px',margin: '0 5px'}} disabled/>
                                <button className='rounded border' varient="danger" onClick={() => send(value)}> + </button>
                            </div>
                        </div>
                        <div className="product_price">
                            <MdDelete onClick={() => removeItem(value.id)} style={{color: 'red', fontSize:'22px',cursor:'pointer'}}/>
                        </div>
                    </div>
                        )
                     })  
                }
                </Col>
                
                <Col className='pt-2'>
                <div className="cart_calculation shadow rounded-0">
                  <Card style={{ border:'none' }}>
                        <Card.Body>
                            <Card.Title>Price Detail</Card.Title><hr></hr>
                            <div className="d-flex justify-content-between">
                                <h5>Price:</h5>
                                <h5>${totalPrice}</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>Delivery Charges:</h5>
                                <h5>$40</h5>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h3>Total: </h3>
                                <h3> ${totalPrice + 40} </h3>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                </Col>
                
        </Row>
            </div>
        </>
    )
}

export default CartPage;