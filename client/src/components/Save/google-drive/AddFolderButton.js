import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { AiFillFolderAdd } from "react-icons/ai"
import { database } from "../firebase"
import { useAuth } from "../contexts/AuthContext"
import { ROOT_FOLDER } from "../hooks/useFolder"
import { ButtonElement } from '../../PageStyles/Button'
import { FormInput, FormLayout } from '../../PageStyles/Forms'

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const { currentUser } = useAuth()

  function openForm() {
    setOpen(true)
  }

  function closeForm() {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (currentFolder == null) return

    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }

    database.folders.add({
      name: name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeForm()
  }

  return (
    <>
      <ButtonElement onClick={openForm} style={{width:"95%"}}>
        <AiFillFolderAdd />
      </ButtonElement>
      <FormLayout show={open} onHide={closeForm}>
        <FormLayout onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <FormInput
              placeholder="Name of Folder"
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <ButtonElement onClick={closeForm} style={{background:"orange", width:"50%"}}>
              Close
            </ButtonElement>
            <ButtonElement type="submit">
              Add Folder
            </ButtonElement>
        </FormLayout>
      </FormLayout>
    </>
  )
}
