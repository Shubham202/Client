import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [data, setData] = useState({
        name: "",
        password: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const author = data.name;
            // const url = "https://quotes-mern-website.herokuapp.com/api/auth";
            const url = "https://quotes-jfuc.onrender.com/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem('token',res.data);
            localStorage.setItem('author',author);
            navigate('/dashboard');
            // window.location = "https://quotes-client.onrender.com/dashboard";
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="container-1">
            <div className="welcome">Let's Login</div>
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
                <label>Password</label>
                <input
                    onChange={handleChange}
                    id="password"
                    name="password"
                    value={data.password}
                    required
                    type="password"
                />
                {error && <div className="error">{error}</div>}
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;