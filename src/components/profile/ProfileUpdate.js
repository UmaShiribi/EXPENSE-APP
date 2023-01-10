import React,{useState} from "react"
import {Form} from "react-bootstrap"
import { useDispatch } from "react-redux"
import {startUserUpdate} from "../../redux/actions/userAction"

const ProfileUpdate =(props)=>{
    const {
        userNameToggle,
        handleUserNameToggle,
        mobileToggle,
        handleMobileToggle,
        lableName,
        userData:profileKey,
    } = props
    const dispatch = useDispatch()

    const [userData, setUserData] = useState(profileKey?profileKey:"")
    const [formErrors, setFormErrors] = useState ({})
    const formErr = {}

    const handleFormError = () => {
        if(userData.trim().length === 0){
            formErr.userDataError = "User name should not be empty"
        }
    }
    const handleInputChange = (e) =>{
        const inputName = e.target.name
        if(inputName==="userData"){
        setUserData(e.target.value)
    }
    setFormErrors({})
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    handleFormError()
    if(Object.keys(formErr).length > 0){
        setFormErrors(formErr)
    }else{
        const requestData = {
            [lableName] : userData
        }
        const resolve = () =>{
            setUserData("")
            setFormErrors({})
            window.alert("Successfully updated")
            userNameToggle && handleUserNameToggle()
            mobileToggle && handleMobileToggle()
        }
        dispatch(startUserUpdate(requestData, resolve))
    }
}
    return(
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>{lableName}</Form.Label>
                    <Form.Control type="text" value={userData} name="userData" onChange={handleInputChange}/>
                    {
                        formErrors.userDataError && <Form.Text>{formErrors.userDataError}</Form.Text>
                    }
                </Form.Group>
                <input type="submit" value="submit" className="btn btn-primary mt-3"/>
                {
                    userNameToggle && <button onClick={handleUserNameToggle} className="btn btn-secondary mt-3 ms-3">Cancel</button>
                }
                {
                    mobileToggle && <button onClick={handleMobileToggle} className="btn btn-secondary mt-3 ms-3">Cancel</button>
                }
            </Form>
        </div>
    )
}

export default ProfileUpdate