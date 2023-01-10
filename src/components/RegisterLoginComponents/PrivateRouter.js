import { Route, Redirect } from "react-router-dom"

const PrivateRouter = ({ component: PrivateComponent, ...reset }) => {
    return <Route {...reset} render={(props) => {
      return  localStorage.getItem("tokenExp") ? (
            <PrivateComponent {...props} />
        ) : (
            <Redirect to={{ pathname: "/login" }} />
        )
    }}
    />
}

export default PrivateRouter