import React from "react";
import HEAD from "../head.json";
import { Helmet } from 'react-helmet-async';

const Head = () => {
  // If url is set to 'glitch-default', we use the hostname for the current page
  // Otherwise we use the value set in HEAD.json
  const url = HEAD.url === 'glitch-default' ? window.location.hostname : HEAD.url

  // React Helmet manages the content of the page head such as meta tags
  // We use the async package https://github.com/staylor/react-helmet-async
  return <Helmet>
    <title>{HEAD.title}</title>
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={HEAD.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary" />
  </Helmet>
};

export default Head;
