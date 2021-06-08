import React, { useState, useEffect, useContext } from 'react'
import Card from '../../Components/Card/Card'
import { AuthContext } from '../../Components/AuthContext/AuthContext'
import { useHistory, Link } from 'react-router-dom';
import './Auth.css'

export default function Auth() {

    const authContext = useContext(AuthContext);
    const history = useHistory();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [inputValues, setInputValues] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Password: '',
    });
    const [values, setValues] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isLoginMode) {
            setValues({
                Email: '',
                Password: '',
            })
        } else {
            setValues({
                Name: '',
                Surname: '',
                Email: '',
                Password: '',
            })
        }

    }, [isLoginMode])

    function switchModeHandler() {
        setIsLoginMode(prevMode => {
            return !prevMode
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        if (!isLoginMode && inputValues.Name && inputValues.Surname && inputValues.Email && inputValues.Password) {
            const valuesBackend = inputValues;
            console.log("USAO SAM OVDE")
            console.log("ovo se prosledjuje serveru" + JSON.stringify(valuesBackend));
            setValues(inputValues)
            //API call to server

            const response = {
                userID:"1",
                token: "ashnfioasjfoiasn"
            }

            authContext.login(response.token, response.userID);
            history.push("/");

        } else if (isLoginMode && inputValues.Email && inputValues.Password) {
            setValues(() => {
                return {
                    ...values,
                    Email: inputValues.Email,
                    Password: inputValues.Password
                }
            })

            const valuesBackend = {
                Email: inputValues.Email,
                Password: inputValues.Password
            };
            //API call to server

            const response = {
                userID:"1",
                token: "ashnfioasjfoiasn"
            }

            authContext.login(response.token, response.userID);
            history.push("/");
            console.log("ovo se prosledjuje serveru" + JSON.stringify(valuesBackend));
        }

    }
  

    return (
        <Card className="auth">
            <form className="auth-form" onSubmit={submitHandler}>
                <div className="auth-form__content">
                    <h2>Login Required</h2>
                    <hr />
                    {!isLoginMode && (
                        <>
                            <h4>Name:</h4>
                            <input value={inputValues.Name} onChange={e => {
                                setInputValues(() => {
                                    return {
                                        ...inputValues,
                                        Name: e.target.value
                                    }
                                })

                            }} placeholder="name" type="text"></input>
                            {isSubmitted && !inputValues.Name && <p style={{ color: "red", marginTop: "0px" }}>Molim Vas unesite ime</p>}
                        </>
                    )}
                    {!isLoginMode && (
                        <>
                            <h4>Surname:</h4>
                            <input value={inputValues.Surname} onChange={e => {
                                setInputValues(() => {
                                    return {
                                        ...inputValues,
                                        Surname: e.target.value
                                    }
                                })
                            }} placeholder="surname" type="text"></input>
                            {isSubmitted && !inputValues.Surname && <p style={{ color: "red", marginTop: "0px" }}>Molim Vas unesite prezime</p>}
                        </>
                    )}
                    <h4>Email:</h4>
                    <input value={inputValues.Email} onChange={e => {
                        setInputValues(() => {
                            return {
                                ...inputValues,
                                Email: e.target.value
                            }
                        })
                    }} placeholder="email" type="text"></input>
                    {isSubmitted && !inputValues.Email && <p style={{ color: "red", marginTop: "0px" }}>Molim Vas unesite email</p>}
                    <h4>Password:</h4>
                    <input value={inputValues.Password} onChange={e => {
                        setInputValues(() => {
                            return {
                                ...inputValues,
                                Password: e.target.value
                            }
                        })
                    }} placeholder="password" type="password"></input>
                    {isSubmitted && !inputValues.Email && <p style={{ color: "red", marginTop: "0px" }}>Molim Vas unesite sifru</p>}
                    <div>
                        <button onClick={() => {
                            setIsSubmitted(true);
                           
                        }} type="submit">{isLoginMode ? 'LOG IN' : 'SIGN UP'}</button>
                    </div>
                    <div>
                        <button type="button" onClick={() => { switchModeHandler(); setIsSubmitted(false) }}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</button>
                    </div>
                    <Link to="/reset_password"><button>RESET PASSWORD</button></Link>
                </div>
            </form>
        </Card>
    )
}
