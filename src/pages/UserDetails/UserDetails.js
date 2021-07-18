import React ,{useState,useEffect}from 'react'
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Skeleton from '../../components/Skeleton/Skeleton'
import './style.css'
const UserDetails=()=> {
    const {id}=useParams()
    const [oneuser,setoneuser]=useState({})
    const [loading,setloading]=useState(true)

    useEffect(() => {
      debugger
      fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setoneuser(data.user)
          console.log(data.user);
        }).catch(e=>{
          console.log("sdf");
        }).finally(()=>{
          setloading(false)
        })
    }, [id])
    return (
        <div>
              <Card
    bg={"warning"}
    style={{ width: '18rem',margin:'15% auto' }}
    className="mb-2"
  >
        { (loading) ? <Skeleton/>:
          
          <>
    <Card.Header>{oneuser.name}</Card.Header>
    <Card.Body>
      <Card.Title> {oneuser.family} </Card.Title>
      <Card.Text>
       {oneuser.age} {oneuser.city}
      </Card.Text>
    </Card.Body>
        </>
        }
      
  </Card>
        </div>
    )
}
export default UserDetails