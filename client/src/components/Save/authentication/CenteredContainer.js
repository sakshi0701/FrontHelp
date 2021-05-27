import React from "react"
import { Container } from "react-bootstrap"

export default function CenteredContainer({ children }) {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "400px" }}>
        {children}
      </div>
    </Container>
  )
}
