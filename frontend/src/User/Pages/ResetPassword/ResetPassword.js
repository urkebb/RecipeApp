import React, { useState } from 'react'
import Card from '../../../Components/Card/Card'
import './ResetPassword.css'
import {useHistory} from 'react-router-dom'

export default function ResetPassword() {
    const history = useHistory();

    const [values, setValues] = useState({
        Email: '',
        Password: '',
    })
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    function emailChangeHandler(event) {
        setEmailInput(event.target.value);
    }

    function passwordChangeHandler(e) {
        setPasswordInput(e.target.value)
    }

    function confirmPasswordChangeHandler(e) {
        setConfirmPasswordInput(e.target.value)
    }
    function submitHandler() {
        if (emailInput && passwordInput && confirmPasswordInput && passwordInput === confirmPasswordInput) {
            setValues({
                Email: emailInput,
                Password: passwordInput,
            })
            const backEndData = {
                Email: emailInput,
                Password: passwordInput,
            };
            console.log("ovo se salje serveru " + JSON.stringify(backEndData));
            history.push("/auth")
        }
    }

    return (
        <Card className="reset-password__form">
            <h4>Email:</h4>
            <input value={emailInput} onChange={emailChangeHandler} placeholder="email" type="email"></input>
            {isSubmitted && !emailInput && <p style={{ color: "red", marginTop: "0" }}>Molim Vas unesite email</p>}
            <h4>New Password:</h4>
            <input value={passwordInput} onChange={passwordChangeHandler} placeholder="password" type="password"></input>
            {isSubmitted && !passwordInput && <p style={{ color: "red", marginTop: "0" }}>Molim Vas unesite novu sifru</p>}
            <h4>Confirm Password:</h4>
            <input value={confirmPasswordInput} onChange={confirmPasswordChangeHandler} placeholder="password" type="password"></input>
            {isSubmitted && !confirmPasswordInput && <p style={{ color: "red", marginTop: "0" }}>Molim Vas potvrdite sifru</p>}
            {isSubmitted && confirmPasswordInput !== passwordInput && <p style={{ color: "red", marginTop: "0" }}>Sifre se ne poklapaju</p>}
            <button onClick={() => {
                setIsSubmitted(true);
                submitHandler();
            }} type="button">RESETUJ LOZINKU</button>
        </Card>
    )
}
