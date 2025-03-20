import { useState } from "react";

import "../assets/Contact.css"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState("");

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(name, value);

        if(!value.trim()) {
            const errorMessage = name[0].toUpperCase() + name.slice(1) + " is required"
            setError(errorMessage);
        } else if (name === "email" && !emailRegex.test(value)) {
            setError("Email is invalid format");
        } else {
            setError("")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <h2 id="contactHeader">Contact</h2>
            <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="pure-input-1"
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="pure-input-1"
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="pure-input-1"
                        rows="8"
                        required
                    />
                    {error ? <p>{error}</p> : <br />}
                    <button className="pure-button pure-button-primary" type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    );
}

export default Contact