import * as React from 'react';
import { type HeadFC } from 'gatsby';
import { HomePage } from '../app/homePage/HomePage';

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gatsby React Sandbox</title>;
