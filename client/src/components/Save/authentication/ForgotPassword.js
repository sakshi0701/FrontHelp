import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import { Cards } from "../../PageStyles/Cards"
import { FormInput, FormLayout, FormTitle } from "../../PageStyles/Forms"
import { AuthOption, ButtonElement } from "../../PageStyles/Button"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer>
      <Cards>
        <FormLayout onSubmit={handleSubmit}>
          <FormTitle>Password Reset</FormTitle>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form.Group id="email">
            <FormInput placeholder="Email" type="email" ref={emailRef} required />
          </Form.Group>
          <ButtonElement disabled={loading} type="submit">
            Reset Password
            </ButtonElement>
          <AuthOption>
            <Link to="/login">Login</Link>
          </AuthOption>
          <AuthOption>
            Need an account? <Link to="/signup">Sign Up</Link>
          </AuthOption>
        </FormLayout>
      </Cards>
    </CenteredContainer>
  )
}
