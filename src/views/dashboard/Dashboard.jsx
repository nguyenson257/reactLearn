import React from "react";

export const Dashboard = (props) => {
    const handleSubmit = () => {
            props.onFormSwitch("login");
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Dashboard</label>
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}