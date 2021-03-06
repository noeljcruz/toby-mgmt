import React from "react";
import cuid from "cuid";
import Dropzone from "../Dropzone";
import DocList from "../DocList";
import API from "../../utils/API";
import "./style.css";

function DocumentInfo(props) {

  const onDrop = acceptedFiles => {

    console.log(acceptedFiles);

    API.uploadFile(acceptedFiles).then(r => {
      props.updateDocuments({ id: cuid(), src: r.url, name: acceptedFiles[0].name });
    })
      .then(console.log(props.state.documents))
      .catch(err => console.error(err))

    // acceptedFiles.map(file => {
    //   const reader = new FileReader();
    //   reader.onload = function (e) {
    //     setDocs(prevState => [
    //       ...prevState,
    //       { id: cuid(), src: e.target.result, name: file.name}
    //     ]);
    //   }
    //   reader.readAsDataURL(file);
    //   console.log(file);
    //   return file;
    // });
  };

  return (
    <main className="drop-area">
      <legend>Employee Documents</legend>
      <Dropzone onDrop={onDrop} accept={"application/pdf"} />
      <DocList docs={props.documents} />
    </main>
  );
}

export default DocumentInfo;