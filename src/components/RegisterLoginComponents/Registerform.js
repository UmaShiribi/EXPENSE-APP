import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Form } from "react-bootstrap"

import { useDispatch } from "react-redux"
import { startUserRegister } from "../../redux/actions/userAction"
import { startBudgetCreate } from "../../redux/actions/budgetAction"

import "../../assets/css/userRegister.css"
import regisetImage from "../../assets/images/register-img.png"

const Registerform = (props) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            mobile: ""
        },
        validationSchema: Yup.object({
            userName: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(8, "Min 8 character").max(128, "Maximum 128 character").required(),
            mobile: Yup.string().min(10, "Min 10 character").max(10, "Maximum 10 character").required()

        }),
        onSubmit: function (values, { resetForm }) {
            //console.log(values)
            const redirect = (_id) => {
                props.history.push("/login")
                dispatch(startBudgetCreate(_id))
                //console.log(_id)
            }
            dispatch(startUserRegister(values, resetForm, redirect))

        }
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="form-container">
                        <div className="img-container">
                            <img src={regisetImage} alt="regisetImage" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form-container">
                        <h5>User Register</h5>
                        <form onSubmit={formik.handleSubmit}>
                            <Form.Group>
                                <Form.Label>
                                    User Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formik.values.userName}
                                    name="userName"
                                    onChange={formik.handleChange}
                                    placeholder="Enter user name"
                                />
                            </Form.Group>
                            {
                                formik.touched.userName && formik.errors.userName && (
                                    <span style={{ color: "red" }}>{formik.errors.userName}</span>
                                )
                            }
                            <Form.Group>
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            {
                                formik.touched.email && formik.errors.email && (
                                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                                )
                            }
                            <Form.Group>
                                <Form.Label>
                                    Mobile
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formik.values.mobile}
                                    name="mobile"
                                    onChange={formik.handleChange}
                                    placeholder="Enter your mobile number"
                                />
                            </Form.Group>
                            {
                                formik.touched.mobile && formik.errors.mobile && (
                                    <span style={{ color: "red" }}>{formik.errors.mobile}</span>
                                )
                            }
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formik.values.password}
                                    name="password"
                                    onChange={formik.handleChange}
                                    placeholder="Enter your password"
                                />
                            </Form.Group>
                            {
                                formik.touched.password && formik.errors.password && (
                                    <span style={{ color: "red" }}>{formik.errors.password}</span>
                                )
                            }
                            <input type="submit" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Registerform