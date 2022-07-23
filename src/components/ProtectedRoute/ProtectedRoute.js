import { Redirect, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../services/reducers/auth";

export const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthorized = useSelector((store) => store.auth.isAutorized);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location.pathname } }}
          />
        )
      }
    />
  );
};
