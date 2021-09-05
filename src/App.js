import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import User from './User';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results))
  }, []);
  const addToTeam = (user) => {
    setTeam([...team, user]);
  }
  return (
    <Container>
      <h1 className="text-primary">Team Builder</h1>
      {team.map((team, idx) =>
        <Row Row className="shadow m-2 p-2 rounded" >
          <Col md={4} >
            <p key={idx}>{team}</p>
          </Col>
        </Row>
      )}
      {users.map(user => <User user={user} key={user.phone} addToTeam={addToTeam}></User>)}
    </Container >
  );
}
export default App;
