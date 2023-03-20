import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { Store } from "./../Store";
import { toast } from "react-toastify";
import { getError } from "./../utils";

export default function SignInScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    document.addEventListener("checksubmit", submitHandler);
    return () => {
      document.removeEventListener("checksubmit", submitHandler);
    };
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/signin", {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate.apply(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className='small-container'>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className='my-3'>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>password</Form.Label>
          <Form.Control
            type='password'
            required
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <div className='mb-3'>
          <Button className='fui-button-shiny-2' type='submit'>
            Sign In
          </Button>
        </div>
        <div className='mb-3'>
          New customer?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Creat your account</Link>
        </div>
      </Form>
    </Container>
  );
}
