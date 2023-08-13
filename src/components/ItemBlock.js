import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Col, Row, List } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteTodos, editTodos } from "../slices/TodoSlice";
const ItemBlock = () => {
  const [ isEditing, setEditing ] = useState(false);
  const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
 
  return (
    <div>
     
      <Row>
        <Col offset={2} span={12} push={2}>
          <List
            bordered
            dataSource={todo}
            renderItem={(item) => (
              <List.Item className="list-item" key={item.id}>
                <div className="list-item-title"> {item.title} </div>
                <div>
                  {" "}
                  <DeleteOutlined onClick = {()=> dispatch(deleteTodos(item.id))} />
                  <EditOutlined onClick = {()=>dispatch(editTodos({id:item.id, title:setEditing}))}/>
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      
    </div>
  );
};

export default ItemBlock;
