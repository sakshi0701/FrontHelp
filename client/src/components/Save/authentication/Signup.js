import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import { Cards } from "../../PageStyles/Cards"
import { FormInput, FormLayout, FormTitle } from "../../PageStyles/Forms"
import { AuthOption, ButtonElement } from "../../PageStyles/Button"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer>
      <Cards>
        <FormLayout onSubmit={handleSubmit}>
          <FormTitle>Sign Up</FormTitle>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group id="email">
            <FormInput placeholder="Email" type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <FormInput placeholder="Password" type="password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group id="password-confirm">
            <FormInput placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required />
          </Form.Group>
          <ButtonElement disabled={loading} type="submit">
            Sign Up
            </ButtonElement>
          <AuthOption>
            Already have an account? <Link to="/login">Log In</Link>
          </AuthOption>
        </FormLayout>
      </Cards>
    </CenteredContainer>
  )
}
