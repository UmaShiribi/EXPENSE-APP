import React, { useState } from "react"
import { Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import "../../assets/css/profile.css"
import ProfileUpdate from "./ProfileUpdate"
import editData from "../../assets/images/editData.png"

const ProfileShow = (props) => {
    const [userNameToggle, setUserNameToggle] = useState(false)
    const [mobileToggle, setMobileToggle] = useState(false)

    const handleUserNameToggle = () => {
        setUserNameToggle(!userNameToggle)
    }
    const handleMobileToggle = () => {
        return setMobileToggle(!mobileToggle)
    }
    const users = useSelector((state) => {
        return state.users
    })

    return (
        <Row>
            <div className="col-md-6">
                <div className="user-data-sub-container">
                    {
                        userNameToggle ? (
                            <>
                                <ProfileUpdate
                                    userNameToggle={userNameToggle}
                                    handleUserNameToggle={handleUserNameToggle}
                                    lableName="userName"
                                    userData={users.userName}
                                />
                            </>
                        ) : (
                            <div className="form-data">
                                <span>User Name: </span>
                                <h6>{users.userName}</h6>
                                <img src={editData} alt="editData" onClick={handleUserNameToggle} />
                            </div>
                        )
                    }
                    <div className="second-data form-data">
                        <span>Email : </span>
                        <h6>{users.email}</h6>
                    </div>
                </div>
                <div className="user-data-sub-container">
                    {
                        mobileToggle ? (
                            <>
                                <ProfileUpdate
                                    handleMobileToggle={handleMobileToggle}
                                    mobileToggle={mobileToggle}
                                    lableName="mobile"
                                    userData={users.mobile}
                                />
                            </>
                        ) : (
                            <div className="form-data">
                                <span>Mobile: </span>
                                <h6>+91 {users.mobile}</h6>
                                <img src={editData} alt="editData" onClick={handleMobileToggle} />
                            </div>
                        )
                    }
                    <div className="second-data-sub form-data">
                        <span>Role: </span>
                        <h6>{users.role}</h6>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default ProfileShow