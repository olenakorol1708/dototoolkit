import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { Button, Input,Col, Row } from 'antd';
import { enterText } from '../slices/TextSlice';
import { addTodos } from '../slices/TodoSlice';
import ItemBlock from './ItemBlock';

export const CustomInput = () => {
    const text = useSelector((state)=>state.text.value);
 
const dispatch = useDispatch();

const handleClick = ()=>{
  dispatch(addTodos(text))
  dispatch(enterText(''))
}
  

return (
    <div className='inputBlock'>
         <Row>
       <Col offset = {2}span={12} push = {2}>
       <Input placeholder="Enter yor task" value = {text} onChange={(e)=>dispatch(enterText(e.target.value))}/>   
    </Col>
    <Col span={6} >

 <Button type="primary" onClick = {()=>handleClick()}>Add todo</Button>
    </Col>
  </Row>
 
{/* {todo.map((item,index)=>(
  <p key = {index}>{item}</p>
))} */}
 <ItemBlock/>
    </div>
  )
}

export default CustomInput
