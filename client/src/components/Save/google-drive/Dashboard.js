import React from "react"
import { useFolder } from "../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"
import { Cards } from '../../PageStyles/Cards'

export default function SaveMain() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <Cards>
      <div style={{color:"white"}}>
        <div>
          <FolderBreadcrumbs currentFolder={folder} />
            <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div>
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div>
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Cards>
  )
}