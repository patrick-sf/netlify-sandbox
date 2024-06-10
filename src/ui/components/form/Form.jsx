import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

// import { navigate } from 'gatsby-link'
// navigate(form.getAttribute('action'))

export const Form = () => {
  const [state, setState] = useState({});
  const [status, setStatus] = useState("");
  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // setFile(Object.assign({}, acceptedFiles));
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = {
      "form-name": form.getAttribute("name"),
      role: state.role,
      name: state.name,
      email: state.email,
      message: state.message,
      phonenumber: state.phonenumber,
      ...file,
    };

    fetch("/", {
      method: "POST",
      body: encode(data),
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch((error) => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>
          <input
            type="radio"
            name="role"
            value="General Contractor"
            onChange={handleChange}
          />{" "}
          General Contractor
          <input
            type="radio"
            name="role"
            value="supplier"
            onChange={handleChange}
          />{" "}
          Supplier
          <input
            type="radio"
            name="role"
            value="subcontractor"
            onChange={handleChange}
          />{" "}
          Sub Contractor
          <input
            type="radio"
            name="role"
            value="projectexec"
            onChange={handleChange}
          />{" "}
          Project Exec
          <input
            type="radio"
            name="role"
            value="other"
            onChange={handleChange}
          />{" "}
          Other
        </p>

        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your phone number:{" "}
            <input
              type="text"
              name="phonenumber"
              value={state.phonenumber}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={state.message}
              onChange={handleChange}
            />
          </label>
        </p>
        <div {...getRootProps()}>
          <input {...getInputProps()} type="file" name="file" multiple="true" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <h3>{status}</h3>
    </div>
  );
};
