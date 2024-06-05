import * as React from 'react';
import { Layout } from '../../ui/components/layout/Layout';
import { Form } from '../../ui/components/form/Form';

export const HomePage = () => {

  return (
    <Layout>
      <div>
        <Form></Form>
      </div>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </Layout>

  );
};
