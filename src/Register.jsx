import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import axios from 'axios'
function Register(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [register,setRegister] =useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        //set configuration

        const configuration = {
            method:"post",
            url:"http://loacalhost:8080/register",
            data:{
                email,
                password
            }
        }
        //make api call
        axios(configuration).then(
            (result)=>{
                setRegister(true)
                console.log('result',result)
            }
        ).catch(
            (error)=>{
                error = new Error()
            }
        )
    }
    return 
    (
        <div>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* eamil */}
                <Form.Group>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control value={email} type='email' name='email' placeholder='Enter Email' onChange={ (e)=> setEmail(e.target.value)}/>
                </Form.Group>

                {/* password */}
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control value={password} type='password' name='password' placeholder='Enter Password' onChange={ (e)=> setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant='primary'>Register</Button>
                {/* Display success or error message */}

                {
                    register ? (
                        <p className='text-success'>Registered Successfully</p>
                        ):(
                            <p className='text-failed'>You aren't registered</p>
                        )
                }
                    
                
            </Form>
        </div>
    )
}
export default Register