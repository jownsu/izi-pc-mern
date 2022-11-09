import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

function AdminLogin() {
    const navigate = useNavigate();

    const loginSchema = yup.object({
        email: yup.string().trim().email('Invalid Email').required('Email cannot be empty'),
        password: yup.string().trim().required('Password is required')
    })

    const onLoginSubmit = (values) => {
        navigate('/orders')
    }

    return (
        <div className='sm-container login'>
            <h1 className='heading-1'>Admin Login</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}
                onSubmit={onLoginSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}    
                            />
                            <p className="error">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <p className="error">
                                {errors.password && touched.password && errors.password}
                            </p>
                        </div>
 
                        <button type="submit" className='btn-primary'>
                            Login
                        </button>
                        <p>Don't have an account yet? <Link to={'/'}>Register</Link></p>
                    </form>
                )}



            </Formik>
        </div>
  )
}

export default AdminLogin