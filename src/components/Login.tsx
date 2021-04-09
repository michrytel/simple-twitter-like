import {FormikErrors, Form, Formik} from 'formik';
import React from "react";

interface Values {
    username: string,
    password: string
}

interface Props {
    onSubmit: (values: Values) => void
}

export const Login: React.FC<Props> = ({onSubmit}) => {
    return (
        <section className="login__container">
            <div className="login">
                <h2 className="login__title">Sign Up!</h2>
                <Formik initialValues={{username: "", password: ""}}
                        onSubmit={values => {
                            onSubmit(values)
                        }}
                        validate={values => {
                            let errors: FormikErrors<Values> = {};
                            if (!values.username || values.username.length < 5) {
                                errors.username = 'Username needs to be at least 5 characters long';
                            }
                            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/i.test(values.password)) {
                                errors.password = 'Password must contain 8 characters, and at least one small letter, one capital letter, one number, one special character';
                            }
                            return errors
                        }}>
                    {({values, handleChange, handleBlur, errors, touched}) => {
                        return (
                            <Form className="login__form">
                                <div className='form__inputs'>
                                    <label><p>Username</p>
                                        {touched.username && errors.username ?
                                            <div className='error__user'>{errors.username} </div> : null}
                                        <input id='username' type='text' name="username" value={values.username}
                                               onChange={handleChange} onBlur={handleBlur} placeholder="username"/>
                                    </label>
                                    <label><p>Password</p>
                                        {touched.password && errors.password ?
                                            <div className='error__user'>{errors.password} </div> : null}
                                        <input id='password' type='text' name="password" value={values.password}
                                               onChange={handleChange} onBlur={handleBlur} placeholder="password"/>
                                    </label>
                                </div>
                                <button type="submit">Sign Up!</button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </section>
    )
}

