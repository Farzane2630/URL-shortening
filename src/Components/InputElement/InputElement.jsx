import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { saveLink } from '../../redux/savedLinks';

import "./InputElement.scss"
import axios from 'axios';

// const apiURL = "https://api.rebrandly.com/v1/links"

export default function InputElement() {

   const dispatch = useDispatch()
   // const savedLinks = useSelector(state => state)
   return (
      <Formik
         initialValues={{ link: '' }}
         onSubmit={async (values) => {
            try {
               const encodedUrl = encodeURIComponent(values.link.trim());
               const response = await axios.post(
                  "https://cleanuri.com/api/v1/shorten",
                  `url=${encodedUrl}`,
                  {
                     headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                     },
                  }
               );

               dispatch(saveLink({
                  id: uuidv4(),
                  originalLink: values.link,
                  createdLink: response.data.result_url
               }));

               values.link = ""

            } catch (error) {
               console.error("URL shortening failed:", error.response?.data || error.message);
            }
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
         {({ values, handleChange, handleSubmit, errors, touched, isSubmitting, resetForm }) => (
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
                     type='submit'
                     disabled={isSubmitting} >
                     {isSubmitting ? "Shortening ..." : "Shorten It!"} </button>
               </div>
            </Form>
         )}
      </Formik>
   )
}
