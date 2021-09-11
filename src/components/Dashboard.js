import React, {useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContexts'
import { useHistory } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

export default function Dashboard() {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogOut(){
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('failed to log out')
        }
    }
    return (
        <>
        {
            !currentUser.displayName ? <Redirect to='/updateUser'/> : null
        }
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: {currentUser.email}</strong><br/>
                    <strong>Nick Name: {currentUser.displayName}</strong>
                </Card.Body>
            </Card>
            <div className = 'w-100 text-center mt-2'>
                <Button type='submit' onClick={handleLogOut}>Log Out</Button>
            </div>
        </>
    )
}
