import React, { useState } from 'react';
import { navigate } from 'gatsby-link'

const encode = (data: { [x: string]: string | number | boolean; }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const Form = () => {
  const [state, setState] = useState({})
  //   const [image, setImage] = useState<File | null>(null);

  //   const handleChange = (e: {
  //     target: {
  //       files: any; name: any; value: any;
  //     };
  //   }) => {
  //     if (e.target.files) {
  //       setImage(e.target.files[0]);
  //     } else {
  //       setState({ ...state, [e.target.name]: e.target.value })
  //     }
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
  //         <p>
  //           <label>
  //             Your name:
  //             <br />
  //             <input type="text" name="name" onChange={handleChange} />
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
  //             Message:
  //             <br />
  //             <textarea name="message" onChange={handleChange} />
  //           </label>
  //         </p>
  //         <p>
  //           <label>
  //             <span>Add file:</span>
  //             <input name="file" type="file" onChange={handleChange} />
  //           </label>
  //         </p>
  //         <p>
  //           <button type="submit">Send</button>
  //         </p>
  //       </form>
  //     </div>
  //   )
  // }

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleAttachment = (e: { target: { name: any; files: any[]; }; }) => {
    setState({ [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form
        name="file-upload"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="file-upload" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your name:<br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            File:<br />
            <input
              type="file"
              name="attachment"
              onChange={handleAttachment}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}