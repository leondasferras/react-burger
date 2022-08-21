import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { ReactNode } from "react";



export const ProtectedRoute = ({ children, ...rest }:{children:ReactNode, path:string, exact:boolean}) => {
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
