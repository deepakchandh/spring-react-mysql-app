import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><center>SignIn</center></Card.Header>
                    <Card.Body>
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                        </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>
                    </Card.Body>

                </Card>

            </div>
        )
    }
}

export default SignIn
