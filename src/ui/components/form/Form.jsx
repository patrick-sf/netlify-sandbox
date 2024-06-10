import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

// import React, { useState } from 'react';
// import { navigate } from 'gatsby-link'

// const encode = (data: { [x: string]: string | number | boolean; }) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&');
// };

// export const Form = () => {
//   const [state, setState] = useState({})

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setState({ ...state, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
//     e.preventDefault()
//     const form = e.target
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({
//         'form-name': form.getAttribute('name'),
//         ...state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute('action')))
//       .catch((error) => alert(error))
//   }

//   return (
//     <div>
//       <h1>Contact</h1>
//       <form
//         name="contact"
//         method="post"
//         action="/thanks/"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//         onSubmit={handleSubmit}
//       >
//         {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//         <input type="hidden" name="form-name" value="contact" />
//         <p hidden>
//           <label>
//             Don’t fill this out: <input name="bot-field" onChange={handleChange} />
//           </label>
//         </p>

//         <input type="radio" name="role" value="General Contractor" onChange={handleChange} /> General Contractor
//         <input type="radio" name="role" value="supplier" onChange={handleChange} /> Supplier
//         <input type="radio" name="role" value="subcontractor" onChange={handleChange} /> Sub Contractor
//         <input type="radio" name="role" value="projectexec" onChange={handleChange} /> Project Exec
//         <input type="radio" name="role" value="other" onChange={handleChange} /> Other

//         <p>
//           <label>
//             Your name:
//             <br />
//             <input type="text" name="name" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your business name:
//             <br />
//             <input type="text" name="businessname" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your email:
//             <br />
//             <input type="email" name="email" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your phone number:
//             <br />
//             <input type="text" name="phonenumber" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message:
//             <br />
//             <textarea name="message" onChange={handleChange} />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p>
//       </form>
//     </div>
//   )
// }

export const Form = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }

    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target
    if (name === 'name') {
      return setName(value)
    }
    if (name === 'email') {
      return setEmail(value)
    }
    if (name === 'message') {
      return setMessage(value)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} 
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={handleChange} />
          </label>
        </p>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <h3>{status}</h3>
    </div>
  );
}