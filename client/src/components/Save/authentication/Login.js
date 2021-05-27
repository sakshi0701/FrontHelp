import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import { AuthOption, ButtonElement } from "../../PageStyles/Button"
import { Cards } from "../../PageStyles/Cards"
import { FormInput, FormLayout, FormTitle } from "../../PageStyles/Forms"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/save")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer>
      <Cards>
          <FormLayout onSubmit={handleSubmit}>
            <FormTitle>Log In</FormTitle>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group id="email">
              <FormInput placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <FormInput placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            <ButtonElement disabled={loading} type="submit">
              Log In
            </ButtonElement>
            <AuthOption>
              <Link to="/forgot-password">Forgot Password?</Link>
            </AuthOption>
            <AuthOption>
              Need an account? <Link to="/signup">Sign Up</Link>
            </AuthOption>
          </FormLayout>
      </Cards>
    </CenteredContainer>
  )
}
