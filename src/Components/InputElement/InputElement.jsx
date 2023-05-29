import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { saveLink } from '../../redux/savedLinks';

import "./InputElement.scss"
import axios from 'axios';

const apiURL = "https://api.rebrandly.com/v1/links"

export default function InputElement() {

   const dispatch = useDispatch()
   const savedLinks = useSelector(state => state)
   return (
      <Formik
         initialValues={{ link: '' }}
         onSubmit={async (values) => {

            // create shorter link from brandly API
            const response = await axios.post(apiURL, {
               //user`s link
               destination: values.link,
               domain: { fullName: "rebrand.ly" },
            }, {
               headers: {
                  "Content-Type": "application/json",
                  "apikey": "bc0212ddff4943cbb345acfea65aeddc",
               },
            })
            dispatch(saveLink({ id: uuidv4(), originalLink: values.link, createdLink: response.data.shortUrl }))
         }}
         validate={(values) => {
            const errors = {};

            if (!values.link.length) {
               errors.link = "Please add a link"

            } else if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/i.test(values.link)) {
               errors.link = "Please add a valid URL link"
            }

            return errors
         }}
      >
         {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form className='input-wrapper'>
               <div id="input">
                  <Field
                     type="text"
                     name='link'
                     placeholder='Shorten a link here...'
                     className="link-input" />
                  {
                     errors.link && touched.link && (
                        <span className="error-txt red">{errors.link}</span>
                     )
                  }
               </div>
               <div className="input">
                  <button
                     className="blue-btn shorten-btn"
                     type='submit'>Shorten It!</button>
               </div>
            </Form>
         )}
      </Formik>
   )
}
