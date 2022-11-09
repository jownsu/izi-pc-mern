import React from 'react'
import Nav from '../components/Nav'
import { SlTrash } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'

function Cart() {

    const shippingSchema = yup.object({
        first_name: yup.string().trim().required('First name cannot be empty'),
        last_name: yup.string().trim().required('Last name cannot be empty'),
        address: yup.string().trim().required('Address cannot be empty'),
        address_2: yup.string().trim(),
        city: yup.string().trim().required('City cannot be empty'),
        state: yup.string().trim().required('State cannot be empty'),
        zipcode: yup.string().trim().required('Zipcode cannot be empty')
    })
    const billingSchema = yup.object({
        first_name: yup.string().trim().required('First name cannot be empty'),
        last_name: yup.string().trim().required('Last name cannot be empty'),
        address: yup.string().trim().required('Address cannot be empty'),
        address_2: yup.string().trim(),
        city: yup.string().trim().required('City cannot be empty'),
        state: yup.string().trim().required('State cannot be empty'),
        zipcode: yup.string().trim().required('Zipcode cannot be empty'),
        card_no: yup.string().trim().required('Card number cannot be empty'),
        cvc: yup.string().trim().required('CVC number cannot be empty'),
        exp_month: yup.string().trim().required('Month cannot be empty'),
        exp_year: yup.string().trim().required('Year cannot be empty')
    })

    return (
        <div className="container cart">
            <Nav />
            <div className="cart__main">
                <div className='table'>
                    <table>
                        <thead className='table__heading'>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-left'>Rakk Illis</td>
                                <td>₱1575</td>
                                <td className='table__quantity'>
                                    <form>
                                        <input className='table__quantity-input' type="number" name="quantity" id="quantity" />
                                        <input type="submit" value="Update" className='btn-light' />
                                        <button className='btn-danger'><SlTrash /></button>
                                    </form>
                                </td>
                                <td>₱1575</td>
                            </tr>
                            <tr>
                                <td className='text-left'>Deepcool KG722 65%</td>
                                <td>₱1575</td>
                                <td className='table__quantity'>
                                    <form>
                                        <input className='table__quantity-input' type="number" name="quantity" id="quantity" />
                                        <input type="submit" value="Update" className='btn-light' />
                                        <button className='btn-danger'><SlTrash /></button>
                                    </form>
                                </td>
                                <td>₱1575</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
  
                <div className="cart__total-container">
                    <div>
                        <p className='cart__total-label'>Shipping Fee:</p>
                        <p className='cart__total-val'>₱50</p>
                    </div>
                    <div>
                        <p className='cart__total-label'>Total:</p>
                        <p className='cart__total-val'>₱14421</p>
                    </div>
                    <Link to='/' className='btn-light'>Continue Shopping</Link>
                </div>
            </div>

            <div className="cart__payment">
                <div className="cart__shipping">
                    <p className="heading-2">Shipping Information</p>
                        <Formik 
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                address: '',
                                address_2: '',
                                city: '',
                                state: '',
                                zipcode: ''
                            }}
                            validationSchema={shippingSchema}
                            onSubmit={values => {

                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="first_name">First Name*: </label>
                                        <input 
                                            type="text" 
                                            name='first_name' 
                                            id='first_name' 
                                            onChange={handleChange('first_name')}
                                            onBlur={handleBlur('first_name')}
                                            value={values.email}
                                        />
                                        <p className="error">
                                            {errors.first_name && touched.first_name && errors.first_name}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name">Last Name*: </label>
                                        <input 
                                            type="text" 
                                            name='last_name' 
                                            id='last_name' 
                                            onChange={handleChange('last_name')}
                                            onBlur={handleBlur('last_name')}
                                            value={values.last_name}
                                        />
                                        <p className="error">
                                            {errors.last_name && touched.last_name && errors.last_name}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="address">Address*: </label>
                                        <input 
                                            type="text" 
                                            name='address' 
                                            id='address' 
                                            onChange={handleChange('address')}
                                            onBlur={handleBlur('address')}
                                            value={values.address}
                                        />
                                        <p className="error">
                                            {errors.address && touched.address && errors.address}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="address_2">Address 2: </label>
                                        <input 
                                            type="text" 
                                            name='address_2' 
                                            id='address_2' 
                                            onChange={handleChange('address_2')}
                                            onBlur={handleBlur('address_2')}
                                            value={values.address_2}
                                        />
                                        <p className="error">
                                            {errors.address_2 && touched.address_2 && errors.address_2}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="city">City*: </label>
                                        <input 
                                            type="text" 
                                            name='city' 
                                            id='city' 
                                            onChange={handleChange('city')}
                                            onBlur={handleBlur('city')}
                                            value={values.city}
                                        />
                                        <p className="error">
                                            {errors.city && touched.city && errors.city}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="state">State*: </label>
                                        <input 
                                            type="text" 
                                            name='state' 
                                            id='state' 
                                            onChange={handleChange('state')}
                                            onBlur={handleBlur('state')}
                                            value={values.state}
                                        />
                                        <p className="error">
                                            {errors.state && touched.state && errors.state}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="zipcode">Zipcode*: </label>
                                        <input 
                                            type="text" 
                                            name='zipcode' 
                                            id='zipcode' 
                                            onChange={handleChange('zipcode')}
                                            onBlur={handleBlur('zipcode')}
                                            value={values.zipcode}
                                        />
                                        <p className="error">
                                            {errors.zipcode && touched.zipcode && errors.zipcode}
                                        </p>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    
                </div>

                <div className="cart__billing">
                    <p className="heading-2">Biilling Information</p>
                    <Formik 
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                address: '',
                                address_2: '',
                                city: '',
                                state: '',
                                zipcode: '',
                                card_no: '',
                                cvc: '',
                                exp_month: '',
                                exp_year: ''
                            }}
                            validationSchema={billingSchema}
                            onSubmit={values => {

                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="first_name">First Name*: </label>
                                        <input 
                                            type="text" 
                                            name='first_name' 
                                            id='first_name' 
                                            onChange={handleChange('first_name')}
                                            onBlur={handleBlur('first_name')}
                                            value={values.email}
                                        />
                                        <p className="error">
                                            {errors.first_name && touched.first_name && errors.first_name}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name">Last Name*: </label>
                                        <input 
                                            type="text" 
                                            name='last_name' 
                                            id='last_name' 
                                            onChange={handleChange('last_name')}
                                            onBlur={handleBlur('last_name')}
                                            value={values.last_name}
                                        />
                                        <p className="error">
                                            {errors.last_name && touched.last_name && errors.last_name}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="address">Address*: </label>
                                        <input 
                                            type="text" 
                                            name='address' 
                                            id='address' 
                                            onChange={handleChange('address')}
                                            onBlur={handleBlur('address')}
                                            value={values.address}
                                        />
                                        <p className="error">
                                            {errors.address && touched.address && errors.address}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="address_2">Address 2: </label>
                                        <input 
                                            type="text" 
                                            name='address_2' 
                                            id='address_2' 
                                            onChange={handleChange('address_2')}
                                            onBlur={handleBlur('address_2')}
                                            value={values.address_2}
                                        />
                                        <p className="error">
                                            {errors.address_2 && touched.address_2 && errors.address_2}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="city">City*: </label>
                                        <input 
                                            type="text" 
                                            name='city' 
                                            id='city' 
                                            onChange={handleChange('city')}
                                            onBlur={handleBlur('city')}
                                            value={values.city}
                                        />
                                        <p className="error">
                                            {errors.city && touched.city && errors.city}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="state">State*: </label>
                                        <input 
                                            type="text" 
                                            name='state' 
                                            id='state' 
                                            onChange={handleChange('state')}
                                            onBlur={handleBlur('state')}
                                            value={values.state}
                                        />
                                        <p className="error">
                                            {errors.state && touched.state && errors.state}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="zipcode">Zipcode*: </label>
                                        <input 
                                            type="text" 
                                            name='zipcode' 
                                            id='zipcode' 
                                            onChange={handleChange('zipcode')}
                                            onBlur={handleBlur('zipcode')}
                                            value={values.zipcode}
                                        />
                                        <p className="error">
                                            {errors.zipcode && touched.zipcode && errors.zipcode}
                                        </p>
                                    </div>
                                    <div className='mt-3'>
                                        <label htmlFor="card_no">Card*: </label>
                                        <input 
                                            type="text" 
                                            name='card_no' 
                                            id='card_no' 
                                            onChange={handleChange('card_no')}
                                            onBlur={handleBlur('card_no')}
                                            value={values.card_no}
                                        />
                                        <p className="error">
                                            {errors.card_no && touched.card_no && errors.card_no}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="cvc">Cvc*: </label>
                                        <input 
                                            type="text" 
                                            name='cvc' 
                                            id='cvc' 
                                            onChange={handleChange('cvc')}
                                            onBlur={handleBlur('cvc')}
                                            value={values.cvc}
                                        />
                                        <p className="error">
                                            {errors.cvc && touched.cvc && errors.cvc}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="exp_month">Expiration*: </label>
                                        <input 
                                            type="text" 
                                            name='exp_month' 
                                            id='exp_month' 
                                            onChange={handleChange('exp_month')}
                                            onBlur={handleBlur('exp_month')}
                                            value={values.exp_month}
                                            placeholder="MM"
                                        />
                                         / 
                                        <input 
                                            type="text" 
                                            name='exp_year' 
                                            id='exp_year' 
                                            onChange={handleChange('exp_year')}
                                            onBlur={handleBlur('exp_year')}
                                            value={values.exp_year}
                                            placeholder="YYYY"
                                        />
                                        <p className="error">
                                            {errors.exp_year && touched.exp_year && errors.exp_year}
                                        </p>
                                        <p className="error">
                                            {errors.exp_month && touched.exp_month && errors.exp_month}
                                        </p>
                                    </div>
                                    <input type="submit" value="Pay" className='btn-primary' />
                                </form>
                            )}
                        </Formik>
                </div>
            </div>

        </div>
    )
}

export default Cart