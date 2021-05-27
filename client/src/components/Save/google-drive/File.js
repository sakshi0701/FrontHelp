import { AiFillFile } from "react-icons/ai"
import React from "react"

export default function File({ file }) {
  return (
    <a href={file.url} target="_blank" >
      <AiFillFile style={{fontSize:"20px"}} />
      {file.name}
    </a>
  )
}
