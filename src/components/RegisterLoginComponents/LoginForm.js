import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { startUserLogin } from "../../redux/actions/userAction"
import { withRouter } from "react-router-dom"
import "../../assets/css/userRegister.css"

const LoginForm = (props) => {
    const { handleIsLoggedIn } = props

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8, 'Min 8 character').max(128, 'Maximum 128 character')
        }),
        onSubmit: function (values, { resetForm }) {
            //console.log(values)
            const redirect = () => {
                props.history.push("/dashboard")
                window.alert("Successfully logged in")
                handleIsLoggedIn()
            }
            dispatch(startUserLogin(values, resetForm, redirect))
        }
    })

    return (
        <>
            <h5>User Login</h5>
            <form onSubmit={formik.handleSubmit} className="form-register">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        placeholder="Enter password"
                    />
                </Form.Group>
                {
                    formik.touched.password && formik.errors.password && (
                        <span style={{ color: "red" }}>{formik.errors.password}</span>
                    )
                }
                <input type="submit" className="btn btn-primary" />
            </form>

        </>
    )
}

export default withRouter(LoginForm)