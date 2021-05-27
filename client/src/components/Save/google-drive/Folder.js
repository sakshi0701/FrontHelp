import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { AiFillFolder } from "react-icons/ai"

export default function Folder({ folder }) {
  return (
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
      variant="outline-dark"
      as={Link}
    >
      <AiFillFolder style={{fontSize:"20px"}} />
      {folder.name}
    </Button>
  )
}
