import {Button,Form} from 'react-bootstrap'
import React, { useState } from 'react'
import axios from 'axios';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();

        //Set configuration
        const configuration = {
            method: 'post',
            url: 'http://localhost:8080/login',
            data: {
                email,
                password,
            },
        };

        axios(configuration).then(
            (response)=>{
                setLoginSuccess(true)
                console.log('response' + response);
            }
        ).catch(
            (error)=>{
                error = new Error()
            }
        )
    }
    return(
              <div>
            <h2>LogIN</h2>
            <Form onSubmit={handleSubmit}>
                {/* eamil */}
                <Form.Group>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type='email' value={email} name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                {/* password */}
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type='password' value={password} name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant='primary' type='submit'>LogIn</Button>

                {/* Display success or message */}

                {
                    loginSuccess ? (
                        <p className='text-success'>LogIn Successful</p>
                        ):(
                            <p className='text-failed'>You aren't logged in</p>
                        )
                }

            </Form>
        </div>
    )
}

export default Login;