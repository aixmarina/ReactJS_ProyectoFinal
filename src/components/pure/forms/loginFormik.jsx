import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // *** Yup validation schema
                validationSchema={loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                    //we save the data in the localstorage
                    localStorage.setItem('credentials', values)
                }}
            >

                {/* We obtain props from Formik */}

                {({ errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' placeholder='example@email.com'></Field>
                        {/* email errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor='password'>Password</label>
                        <Field
                            id='password'
                            name='password'
                            placeholder='password'
                            type='password'
                        ></Field>

                        {/* password errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }
                        <button type='submit'>Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>

                )
                }



            </Formik>
        </div>
    );
}

export default LoginFormik;
