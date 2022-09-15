import { FC, ReactElement, useState } from "react";

import { useDropzone } from "react-dropzone";
import { toast } from 'react-toastify';

import api from "../../../api/api";

interface IProps {
  setFileUrl: (link: string) => void;
  file: string;
}

const FileDropZone: FC<IProps> = ({ setFileUrl, file }): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDrop = (acceptedFiles: any) => {
    setIsLoading(true);
    const data = new FormData();
    // data.append('file', name);
    data.append("image", acceptedFiles[0]);
    api
      .post("/api/file/upload", data)
      .then((response) => {
        setFileUrl(response.data.path);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`);
        setIsLoading(false);
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isLoading ? (
        <>
          <p>isLoading</p>
        </>
      ) :file ? (<>
        <img className="sm:w-52 w-28" src={file} />
      </>) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileDropZone;
