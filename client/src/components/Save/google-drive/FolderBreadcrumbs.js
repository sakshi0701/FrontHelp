import React from "react"
import { Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ROOT_FOLDER } from "../hooks/useFolder"

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER]
  if (currentFolder) path = [...path, ...currentFolder.path]

  return (
    <Breadcrumb listProps={{ className: "bg-white pl-0 m-0" }} >
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/folder/${folder.id}` : "/",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
          style={{ maxWidth: "150px" }}
        >
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {currentFolder && (
        <Breadcrumb.Item
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}
