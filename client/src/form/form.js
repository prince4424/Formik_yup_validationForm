import React from 'react'
import { useFormik } from "formik"
import { adressSchema } from '../schemas/adressSchema'
import axios from "axios"
const initialValues = {
  name: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  mobileno: "",
  email: ""

}

const Nine = () => {

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: adressSchema,
    onSubmit: (values, action) => {
      axios.post("http://localhost:4000/address", {
      name:values.name,
      street:values.street,
      city:values.city,
      state:values.state,
      zip:values.zip,
      country:values.country,
      mobileno:values.mobileno,
      email:values.email
     
      }).then((res) =>
        console.log(res)


      )
        .catch((error) => console.log(error));

      console.log(values)
      // action.resetForm()

    }
  })




  return (
    <div className='row'>
      <div className='col-md-2'></div>
      <div className='col-md-8'>

      <form onSubmit={handleSubmit} >
        <div class="container bg-white text-center text-secondary fullform ">
          <h3 class="text-center deldel "> Delivery Details</h3>
          <div class="contact-form">

            <div class="first p-3">
              {errors.name && touched.name ? (<p className='form-error bounce'>{errors.name}</p>) : null}
              <label htmlFor='name' className='input-label'>what is your name?</label><br/>
              <input
                type="name"
                autoComplete='off'
                name='name'
                id='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {/* <hr> */}
            <div class="row p-3">
              <p>Delivery Address</p>

              <div class="col-md-6">
                {errors.street && touched.street ? (<p className='form-error'>{errors.street}</p>) : null}
                <label htmlFor='street' className='input-label'>Street</label>
                <input type="text"
                  autoComplete='off'
                  name='street'
                  id='street'
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur} />

              </div>
              <div class="col-md-6">
                {errors.city && touched.city ? (<p className='form-error'>{errors.city}</p>) : null}
                <label htmlFor='city' className='input-label'>City/Suburb</label>
                <input type="text"
                  autoComplete='off'
                  name='city'
                  id='city'
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur} />

              </div>

              <div class="col-md-6">
                {errors.state && touched.state ? (<p className='form-error'>{errors.state}</p>) : null}
                <label htmlFor='state' className='input-label'>State</label>
                <input type="text"
                  autoComplete='off'
                  name='state'
                  id='state'
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur} />




              </div>
              <div class="col-md-6">
                {errors.zip && touched.zip ? (<p className='form-error'>{errors.zip}</p>) : null}
                <label htmlFor='city' className='input-label'>Zip/postcode</label>
                <input type="text"
                  autoComplete='off'
                  name='zip'
                  id='zip'
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur} />

              </div>

            </div>
            <div class="p-3">
              {errors.country && touched.country ? (<p className='form-error'>{errors.country}</p>) : null}
              <label htmlFor='country' className='input-label'>Country</label>

              <input type="text"
                autoComplete='off'
                name='country'
                id='country'
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur} />
              {/* <hr/> */}
<div className='mobem'>   <div className='contactno'>   {errors.mobileno && touched.mobileno ? (<p className='form-error'>{errors.mobileno}</p>) : null}
              <label htmlFor='mobileno' className='input-label'>Delivery Contact Phone Number</label>

              <input type="tel"
                name='mobileno'
                id='mobileno'
                autoComplete='off'

                value={values.mobileno}
                onChange={handleChange}
                onBlur={handleBlur} /></div>

              {/* <hr> */}<div className='email'>
              {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
              <label htmlFor='email' className='input-label'>Delivery Contact Email Adrress*</label>
              <input type="email"
                name='email'
                autoComplete='off'

                id='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
               </div> </div>        
              <div id="but">
                <button className='input-button   butsend ' type="submit"
                >
                  Submit</button>
              </div>

            </div>

          </div>
        </div>
      </form></div>
      <div className='col-md-2'></div>
    </div>

  )
}

export default Nine;