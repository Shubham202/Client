import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [data, setData] = useState({
        name: "",
        password: ""
    })

    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const url = "https://quotes-mern-website.herokuapp.com/api/users";
            const url = "https://quotes-jfuc.onrender.com/api/users";
            const {data: res} = await axios.post(url, data);
            navigate('/login')
            console.log(res.message);
        } catch (err) {
            if (err.response.status === 409) {
                setError(err.response.data.message)
            }
            if (err.response.status === 400) {
                setError(err.response.data.message)
            }
        }
    }

    return (
        <div className="container-1">
            <div className="welcome">Welcome To Quotes!</div>
            <form method="post" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    onChange={handleChange}
                    id="name"
                    name="name"
                    value={data.name}
                    required
                    type="text"
                />
                <label>Create Password</label>
                <input
                    onChange={handleChange}
                    id="password"
                    name="password"
                    value={data.password}
                    required
                    type="password"
                />
                {error && <div className='error'>{error}</div>}
                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;