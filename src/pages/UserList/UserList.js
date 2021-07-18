import React,{useState,useEffect} from "react";
import { RouteComponentProps } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import { Table, Container, Row } from "react-bootstrap";
const UserList = (props) => {
  const history = useHistory();
  const [users,setusers]=useState([])
  const [loading,setloading]=useState(true)
  const [error,seterror]=useState(false)
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setusers(data.users)
      }).catch(e=>{
        seterror(true)
      }).finally(()=>{
        setloading(false)
      })
  }, [])
  if(error) return(
    <div>ریدی سنده</div>
  )
if(loading) return(
<div className="spinner-border text-primary text-center " role="status">
<span className="sr-only w-100"></span>
</div>)
          debugger
 return (
  <Container className="w-25 text-center">
      <Row className="d-flex align-items-center ">
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push(`/${index + 1}`)}
                >
                  {item.name} {item.family}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={()=>history.push('/Add')} className='btn btn-success m-0'>
          Create new user</button>
      </Row>
    </Container>
            
  );
};
export default UserList;
