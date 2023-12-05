import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Userfront, { SignupForm, LoginForm } from "@userfront/toolkit/react";
import CustomModal from "../../CustomModal";

export function Auth() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

export function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export function Dashboard() {
  const [modalShow, setModalShow] = useState(false);

  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <div className="d-flex">
        <Button
          variant="warning"
          className="mt-5 ms-3"
          onClick={Userfront.logout}
        >
          Logout
        </Button>
        <CustomModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // перенаправление страницы
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
