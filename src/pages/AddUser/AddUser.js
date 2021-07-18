import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const AddUser = () => {
const history=useHistory()
const [newUser,setnewUser]=useState({
    name:'',
    family:'',
    age:'',
    city:'',
    email:''
})
const handlechange=(e)=>{

    setnewUser({...newUser,[e.target.name]:e.target.value})
    console.log(newUser)
}
    const handlesubmit=()=>{
      debugger
        fetch('/api/users',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)

        }).then(res=>res.json()
        ).then(data=>{
            console.log(data);
             history.push('/')
        })
    }
    return (
        <Form className="w-50 mx-auto mt-5" >
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" onChange={handlechange} value={newUser.setnewUser}/>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={handlechange} value={newUser.setnewUser} name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>family</Form.Label>
        <Form.Control type="text" placeholder="family" onChange={handlechange} value={newUser.setnewUser} name="family"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>age</Form.Label>
        <Form.Control type="text" placeholder="age" name="age" onChange={handlechange} value={newUser.setnewUser}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>city</Form.Label>
        <Form.Control type="text" placeholder="city" name="city" onChange={handlechange} value={newUser.setnewUser}/>
      </Form.Group>

      <Button variant="primary"
       onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default AddUser;
