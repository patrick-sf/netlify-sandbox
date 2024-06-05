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
        <input type="hidden" name="form-name" value="contact"></input>
        <p>
          <label htmlFor="name">Your Name: </label>
          <input type="text" name="name" />
        </p>

        <p>
          <label htmlFor="email">Your Email: </label>
          <input type="email" name="email" />
        </p>

        <p>
          <label htmlFor="message">Message: </label><textarea name="message"></textarea>
        </p>

        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}