import * as React from 'react';

export const Form = () => {
  const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => console.log('success'))
      .catch((error) => alert(error));
  };
  return (
    <div>
      <form name="contact" method="POST" netlify>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="contractor">Contractor</option>
            <option value="subcontractor">SubContractor</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit" onClick={handleSubmit}>Send</button>
        </p>
      </form>
    </div>
  );
}