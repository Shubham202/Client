import axios from "axios";
import { useState } from "react";
import Card from "../components/Card";

const Dashboard = quotes => {
    const user = localStorage.getItem("author");

    const url = "https://quotes-jfuc.onrender.com/";
    const [data, setData] = useState({
        content: "",
        author: user
    });

    let handle = e => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    };

    let submit = e => {
        e.preventDefault();
        axios.post(url, {
            content: data.content,
            author: user
        });
        window.location.reload();
    };

    let selectedQuote = [];
    quotes.props.forEach(e => {
        if (e.author === user) selectedQuote.push(e);
    });

    return (
        <div className="container-1">
            <div className="welcome">Welcome! {user}</div>
            <form action="post">
                <label>Quote</label>
                <textarea
                    required
                    className="quote-content"
                    id="content"
                    onChange={e => handle(e)}
                    value={data.content}
                    type="text"
                />
                <button className="btn" type="submit" onClick={e => submit(e)}>
                    Add Quote
                </button>
            </form>
            <div className="container">
                <div className="cards">
                    {selectedQuote.map((quote, pos) => (
                        <Card props={quote} key={pos} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
