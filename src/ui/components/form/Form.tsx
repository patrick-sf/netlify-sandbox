import React, { useState } from 'react';

const encode = (data: { [x: string]: string | number | boolean; }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name.trim(),
        email: email,
        message: message.trim(),
      }),
    })
      .then(() => console.log('success'))
      .catch((error) => alert(error));
  };
  return (
    <div>
      <form name="contact" method="POST" onSubmit={handleSubmit} netlify>
        <input type="hidden" name="form-name" value="contact"></input>
        <p>
          <label htmlFor="name">Your Name: </label>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </p>

        <p>
          <label htmlFor="email">Your Email: </label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </p>

        <p>
          <label htmlFor="message">Message: </label>
          <textarea name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
        </p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}