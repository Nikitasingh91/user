import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
// UserForm.jsx


const ViewUser = () => {
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Admin",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4001/adduser", formData);
            alert("User added successfully!");
        } catch (error) {
            console.error("Error", error);
        }
    };
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        try {
            const response = await axios.get("http://localhost:4001/users")
            setUsers(response.data)
        } catch (error) {
            setError(error.message)
        }
    }

    const deleteUser = async (email) => {
        try {
            await axios.delete(`http://localhost:4001/deleteuser/${email}`);
            alert("User deleted successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to delete user");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option>Admin</option>
                    <option>User</option>
                </select>
                <button type="submit">Add User</button>
            </form>

            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            error ? (
                                <tr>
                                    <td colSpan="5" style={{ color: 'red' }}>Error: {error}</td>
                                </tr>
                            ) : (
                                users.map((users, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>{users.role}</td>
                                        <td>   <Link to={`/update/${users.email}`}>
                                            <button>Update User</button>
                                        </Link>&nbsp;<button onClick={() => deleteUser(users.email)}>Delete</button></td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewUser
