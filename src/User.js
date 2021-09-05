import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const User = (props) => {
    const user = props.user;
    const name = user.name;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    const { email, picture: { large: img }, cell } = user;
    const addToTeam = props.addToTeam;
    return (
        <div>
            <Row className="justify-content-center">
                <Col md={6} className="shadow mt-3 rounded-md p-5" >
                    <div>
                        <div className="d-flex justify-content-center"><img className="rounded-circle text-center" src={img} alt="" /></div>
                        <h1>{fullName}</h1>
                        <p>{email}</p>
                        <p>{cell}</p>
                        <Button variant="primary" onClick={() => addToTeam(fullName)} >Add Me To Team</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default User;