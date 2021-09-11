import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContexts'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('failed to log in')
        }

        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control required type='email' ref={emailRef}/>
                        </Form.Group><br/>

                        <Form.Group id='password'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control required type='password' ref={passwordRef}/>
                        </Form.Group><br/>

                        <Button disabled = {loading} className="w-100" type="submit">Log In</Button><br/>
                    </Form><br/>
                    <div className = 'w-100 text-center mt-2'>
                        <Link to='/forgotPassword'>Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className = 'w-100 text-center mt-2'>
                Don't have an account? <Link to = '/signup'>Sign up</Link>
            </div>
        </div>
    )
}
