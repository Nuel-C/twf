import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContexts'
import { Redirect, useHistory } from 'react-router-dom'

export default function UpdateUser() {
    const textRef = useRef()
    const { updateUser, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()



    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await updateUser(currentUser, textRef.current.value)
            setMessage('Sucessfully updated')
            history.push('/')  
        } catch {
            setError('failed to update')
        }

        setLoading(false)
    }

    return (
        <div>
            {
              currentUser.displayName ? <Redirect to='/'/> : null
            }
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Complete Profile</h2>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>
                                Nick Name
                            </Form.Label>
                            <Form.Control required type='text' ref={textRef}/>
                        </Form.Group><br/>

                        <Button disabled = {loading} className="w-100" type="submit">Submit</Button><br/>
                    </Form><br/>
                </Card.Body>
            </Card>
        </div>
    )
}
