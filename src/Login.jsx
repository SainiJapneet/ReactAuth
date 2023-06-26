import {Button,Form} from 'react-bootstrap'
import React from 'react'

function Login(){
    return(
              <div>
            <h2>LogIN</h2>
            <Form>
                {/* eamil */}
                <Form.Group>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter Email'/>
                </Form.Group>

                {/* password */}
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter Password'/>
                </Form.Group>

                <Button variant='primary'>LogIn</Button>
            </Form>
        </div>
    )
}

export default Login