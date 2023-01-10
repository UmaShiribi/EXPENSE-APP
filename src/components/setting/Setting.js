import React from "react"
import { Container } from "react-bootstrap"
import Budget from "./budget/Budget"
import Category from "./category/Category"
import AddCategory from "./category/AddCategory"

const Setting = ((props) => {
    return (
        <Container style={{ marginTop: "90px" }}>
            <h5>Setting</h5>
            <div className="row my-4">
                <div className="col-md-6 col-sm-12">
                    <Budget />
                </div>
                <div className="col-md-6 col-sm-12">
                    <AddCategory />
                </div>
            </div>
            <Category />
        </Container>
    )
})

export default Setting