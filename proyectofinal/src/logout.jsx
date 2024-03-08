import React from "react";

const Logout = () => {
    sessionStorage.setItem('user', '')
    sessionStorage.setItem('email', '')
    sessionStorage.setItem('token', '')
    return (
        window.location.href = '/'
    )
}

export default Logout;