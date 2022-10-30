import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "../../services/hooks";



export const ProtectedRoute = ({ children, ...rest }:RouteProps) => {
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
