import React, { Fragment } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const Formulaire = () => {
    return (
        <Fragment>
            <div className="container">
                <Formik
                    initialValues={{
                        firstName:'',
                        lastName:'',
                        email:'',
                        password:''
                    }}
                    validationSchema= {
                        Yup.object({
                            firstName: Yup.string()
                                            .required('The first name is required')
                                            .max(15,'Max caracters is 15')
                                            .min(3,'Min caracters is 3'),
                            lastName: Yup.string()
                                            .required('The last name is required')
                                            .max(15,'Max caracters is 15')
                                            .min(3,'Min caracters is 3'),
                            email: Yup.string()
                                            .required('Every user must have a email adress')
                                            .email('Set a valid email form'),
                            password: Yup.string()
                                            .required('Password is required to get login')
                                            .max(15,'Max caracters is 15')
                                            .min(3,'Min caracters is 3')
                        })
                    }
                    onSubmit={ values => console.log(values) }
                >
                    { (formik)=> (
                        <Form>
                        <label 
                            className="form-label" 
                            htmlFor="firstName">
                                First name :
                        </label>
                        <Field 
                            type="text"
                            name ="firstName"
                            id ="firstName"
                            className="form-control"
                        />
                        <span className="form-text text-danger" style={{display:'block'}}><ErrorMessage name="firstName" /></span>
                        
                        <label 
                            className="form-label" 
                            htmlFor="lastName">
                                Last name :
                        </label>
                        <Field 
                            type="text"
                            name ="lastName"
                            id ="lastName"
                            className="form-control"
                        />
                        <span className="form-text text-danger" style={{display:'block'}}><ErrorMessage name="lastName" /></span>
                        
                        <label 
                            className="form-label" 
                            htmlFor="email">
                                Email :
                        </label>
                        <Field 
                            type="email"
                            name ="email"
                            id ="email"
                            className="form-control"
                        />
                        <span className="form-text text-danger" style={{display:'block'}}><ErrorMessage name="email" /></span>
                        
                        <label 
                            className="form-label" 
                            htmlFor="password">Password :</label>
                        <Field 
                            type="password"
                            name ="password"
                            id="password"
                            className="form-control"
                        />
                        <span className="form-text text-danger" style={{display:'block'}}><ErrorMessage name="password" /></span>
                        
                        <button type="submit"  disabled={!(formik.isValid && formik.dirty)} className="btn btn-primary">Submit</button>
                        <button type="rest" onClick={formik.handleReset} className="btn btn-secondary" style={{float:'right'}}>Reset</button>
        
                        </Form>
                        
                    )}
                </Formik>
            </div>
        </Fragment>
    )
}

export default Formulaire 
