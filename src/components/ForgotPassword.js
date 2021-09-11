import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContexts'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)



    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email for further instructions')  
        } catch {
            setError('failed to reset password')
        }

        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Password Recovery</h2>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control required type='email' ref={emailRef}/>
                        </Form.Group><br/>

                        <Button disabled = {loading} className="w-100" type="submit">Submit</Button><br/>
                    </Form><br/>
                    <div className = 'w-100 text-center mt-2'>
                        <Link to='/login'>Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className = 'w-100 text-center mt-2'>
                Don't have an account? <Link to = '/signup'>Sign up</Link>
            </div>
        </div>
    )
}
