import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const updateUser = async () => {
        if (!email || !name) {
            setStatusMessage('Please provide both email and name.');
            return;
        }

        try {
            const response = await axios.put(
                `http://localhost:4001/edituser/${email}`,
                { name },
                { headers: { 'Content-Type': 'application/json' } }
            );

            // Check if the response status is 200 (OK)
            if (response.status === 200) {
                setStatusMessage('User updated successfully');
            } else {
                setStatusMessage('Failed to update user');
            }
        } catch (error) {
            console.error(error);
            setStatusMessage('Failed to update user');
        }
    };

    return (
        <div>
            <h2>Update User</h2>
            <input
                type="text"
                placeholder="Enter user email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter new name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={updateUser}>Update</button>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
}

export default UpdateUser;
