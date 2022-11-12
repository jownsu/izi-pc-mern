import React, { useState } from 'react'
import Nav from '../components/Nav'
import { SlTrash } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'

function Cart() {

    const [same, setSame] = useState(false)

    const billingSchema = yup.object({
        s_first_name: yup.string().trim().required('First name cannot be empty'),
        s_last_name: yup.string().trim().required('Last name cannot be empty'),
        s_address: yup.string().trim().required('Address cannot be empty'),
        s_address_2: yup.string().trim(),
        s_city: yup.string().trim().required('City cannot be empty'),
        s_state: yup.string().trim().required('State cannot be empty'),
        s_zipcode: yup.string().trim().required('Zipcode cannot be empty'),
        b_first_name: yup.string().trim().required('First name cannot be empty'),
        b_last_name: yup.string().trim().required('Last name cannot be empty'),
        b_address: yup.string().trim().required('Address cannot be empty'),
        b_address_2: yup.string().trim(),
        b_city: yup.string().trim().required('City cannot be empty'),
        b_state: yup.string().trim().required('State cannot be empty'),
        b_zipcode: yup.string().trim().required('Zipcode cannot be empty'),
        b_card_no: yup.string().trim().required('Card number cannot be empty'),
        b_cvc: yup.string().trim().required('CVC number cannot be empty'),
        b_exp_month: yup.string().trim().required('Month cannot be empty'),
        b_exp_year: yup.string().trim().required('Year cannot be empty')
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
                <Formik 
                    initialValues={{
                        s_first_name: '',
                        s_last_name: '',
                        s_address: '',
                        s_address_2: '',
                        s_city: '',
                        s_state: '',
                        s_zipcode: '',
                        b_first_name: '',
                        b_last_name: '',
                        b_address: '',
                        b_address_2: '',
                        b_city: '',
                        b_state: '',
                        b_zipcode: '',
                        b_card_no: '',
                        b_cvc: '',
                        b_exp_month: '',
                        b_exp_year: '',
                    }}
                    validationSchema={billingSchema}
                    onSubmit={values => {

                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="cart__shipping">
                                <p className="heading-2">Shipping Information</p>
                                    <div>
                                        <label htmlFor="s_first_name">First Name*: </label>
                                        <input 
                                            type="text" 
                                            name='s_first_name' 
                                            id='s_first_name' 
                                            onChange={handleChange('s_first_name')}
                                            onBlur={handleBlur('s_first_name')}
                                            value={values.s_first_name}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_first_name && touched.s_first_name && errors.s_first_name}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="s_last_name">Last Name*: </label>
                                        <input 
                                            type="text" 
                                            name='s_last_name' 
                                            id='s_last_name' 
                                            onChange={handleChange('s_last_name')}
                                            onBlur={handleBlur('s_last_name')}
                                            value={values.s_last_name}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_last_name && touched.s_last_name && errors.s_last_name}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="s_address">Address*: </label>
                                        <input 
                                            type="text" 
                                            name='s_address' 
                                            id='s_address' 
                                            onChange={handleChange('s_address')}
                                            onBlur={handleBlur('s_address')}
                                            value={values.s_address}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_address && touched.s_address && errors.s_address}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="s_address_2">Address 2: </label>
                                        <input 
                                            type="text" 
                                            name='s_address_2' 
                                            id='s_address_2' 
                                            onChange={handleChange('s_address_2')}
                                            onBlur={handleBlur('s_address_2')}
                                            value={values.s_address_2}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_address_2 && touched.s_address_2 && errors.s_address_2}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="s_city">City*: </label>
                                        <input 
                                            type="text" 
                                            name='s_city' 
                                            id='s_city' 
                                            onChange={handleChange('s_city')}
                                            onBlur={handleBlur('s_city')}
                                            value={values.s_city}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_city && touched.s_city && errors.s_city}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="s_state">State*: </label>
                                        <input 
                                            type="text" 
                                            name='s_state' 
                                            id='s_state' 
                                            onChange={handleChange('s_state')}
                                            onBlur={handleBlur('s_state')}
                                            value={values.s_state}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_state && touched.s_state && errors.s_state}
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="s_zipcode">Zipcode*: </label>
                                        <input 
                                            type="text" 
                                            name='s_zipcode' 
                                            id='s_zipcode' 
                                            onChange={handleChange('s_zipcode')}
                                            onBlur={handleBlur('s_zipcode')}
                                            value={values.s_zipcode}
                                            disabled={same}
                                        />
                                        <p className="error">
                                            {errors.s_zipcode && touched.s_zipcode && errors.s_zipcode}
                                        </p>
                                    </div>
                            </div>
                            
                            <div className="cart__billing">
                                <p className="heading-2">Biilling Information</p>
                                <label htmlFor="same" className='same'>
                                    <input 
                                        type="checkbox" 
                                        name="same" 
                                        id="same" 
                                        onChange={(e) => setSame(e.target.checked)} 
                                    />
                                    Same as shipping
                                </label>
                                <div>
                                    <label htmlFor="b_first_name">First Name*: </label>
                                    <input 
                                        type="text" 
                                        name='b_first_name' 
                                        id='b_first_name' 
                                        onChange={handleChange('b_first_name')}
                                        onBlur={handleBlur('b_first_name')}
                                        value={same ? values.s_first_name : values.b_first_name}
                                    />
                                    <p className="error">
                                        {errors.b_first_name && touched.b_first_name && errors.b_first_name}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_last_name">Last Name*: </label>
                                    <input 
                                        type="text" 
                                        name='b_last_name' 
                                        id='b_last_name' 
                                        onChange={handleChange('b_last_name')}
                                        onBlur={handleBlur('b_last_name')}
                                        value={same ? values.s_last_name : values.b_last_name}
                                    />
                                    <p className="error">
                                        {errors.b_last_name && touched.b_last_name && errors.b_last_name}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_address">Address*: </label>
                                    <input 
                                        type="text" 
                                        name='b_address' 
                                        id='b_address' 
                                        onChange={handleChange('b_address')}
                                        onBlur={handleBlur('b_address')}
                                        value={same ? values.s_address : values.b_address}
                                    />
                                    <p className="error">
                                        {errors.b_address && touched.b_address && errors.b_address}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_address_2">Address 2: </label>
                                    <input 
                                        type="text" 
                                        name='b_address_2' 
                                        id='b_address_2' 
                                        onChange={handleChange('b_address_2')}
                                        onBlur={handleBlur('b_address_2')}
                                        value={same ? values.s_address_2 : values.b_address_2}
                                    />
                                    <p className="error">
                                        {errors.b_address_2 && touched.b_address_2 && errors.b_address_2}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_city">City*: </label>
                                    <input 
                                        type="text" 
                                        name='b_city' 
                                        id='b_city' 
                                        onChange={handleChange('b_city')}
                                        onBlur={handleBlur('b_city')}
                                        value={same ? values.s_city : values.b_city}
                                    />
                                    <p className="error">
                                        {errors.b_city && touched.b_city && errors.b_city}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_state">State*: </label>
                                    <input 
                                        type="text" 
                                        name='b_state' 
                                        id='b_state' 
                                        onChange={handleChange('b_state')}
                                        onBlur={handleBlur('b_state')}
                                        value={same ? values.s_state : values.b_state}
                                    />
                                    <p className="error">
                                        {errors.b_state && touched.b_state && errors.b_state}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_zipcode">Zipcode*: </label>
                                    <input 
                                        type="text" 
                                        name='b_zipcode' 
                                        id='b_zipcode' 
                                        onChange={handleChange('b_zipcode')}
                                        onBlur={handleBlur('b_zipcode')}
                                        value={same ? values.s_zipcode : values.b_zipcode}
                                    />
                                    <p className="error">
                                        {errors.b_zipcode && touched.b_zipcode && errors.b_zipcode}
                                    </p>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="b_card_no">Card*: </label>
                                    <input 
                                        type="text" 
                                        name='b_card_no' 
                                        id='b_card_no' 
                                        onChange={handleChange('b_card_no')}
                                        onBlur={handleBlur('b_card_no')}
                                        value={values.b_card_no}
                                    />
                                    <p className="error">
                                        {errors.b_card_no && touched.b_card_no && errors.b_card_no}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_cvc">Cvc*: </label>
                                    <input 
                                        type="text" 
                                        name='b_cvc' 
                                        id='b_cvc' 
                                        onChange={handleChange('b_cvc')}
                                        onBlur={handleBlur('b_cvc')}
                                        value={values.b_cvc}
                                    />
                                    <p className="error">
                                        {errors.b_cvc && touched.b_cvc && errors.b_cvc}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="b_exp_month">Expiration*: </label>
                                    <input 
                                        type="text" 
                                        name='b_exp_month' 
                                        id='b_exp_month' 
                                        onChange={handleChange('b_exp_month')}
                                        onBlur={handleBlur('b_exp_month')}
                                        value={values.b_exp_month}
                                        placeholder="MM"
                                    />
                                    
                                    <input 
                                        type="text" 
                                        name='b_exp_year' 
                                        id='b_exp_year' 
                                        onChange={handleChange('b_exp_year')}
                                        onBlur={handleBlur('b_exp_year')}
                                        value={values.b_exp_year}
                                        placeholder="YYYY"
                                    />
                                    <p className="error">
                                        {errors.b_exp_year && touched.b_exp_year && errors.b_exp_year}
                                    </p>
                                    <p className="error">
                                        {errors.b_exp_month && touched.b_exp_month && errors.b_exp_month}
                                    </p>
                                </div>
                                <input type="submit" value="Pay" className='btn-primary' />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Cart