import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // DM Mono Font
    <link
      key="dm-mono-latin-300-italic"
      rel="preload"
      href="/DM-mono-font/dm-mono-latin-300-italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dm-mono-latin-300-normal"
      rel="preload"
      href="/DM-mono-font/dm-mono-latin-300-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dm-mono-latin-400-italic"
      rel="preload"
      href="/DM-mono-font/dm-mono-latin-400-italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dm-mono-latin-400-normal"
      rel="preload"
      href="/DM-mono-font/dm-mono-latin-400-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dm-mono-latin-500-italic"
      rel="preload"
      href="/DM-mono-font/dm-mono-latin-500-italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dm-mono-latin-500-normal"
      rel="preload"
      href="/DM-mono-font/dm-mono-latin-500-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    // Indivisible Font
    <link
      key="indivisible-black"
      rel="preload"
      href="/Indivisible-font/Indivisible-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-black-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-BlackItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-bold"
      rel="preload"
      href="/Indivisible-font/Indivisible-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-bold-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-BoldItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-light"
      rel="preload"
      href="/Indivisible-font/Indivisible-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-light-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-LightItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-medium"
      rel="preload"
      href="/Indivisible-font/Indivisible-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-medium-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-MediumItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-regular"
      rel="preload"
      href="/Indivisible-font/Indivisible-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-regular-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-RegularItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-semi-bold"
      rel="preload"
      href="/Indivisible-font/Indivisible-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-semi-bold-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-SemiBoldItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-thin"
      rel="preload"
      href="/Indivisible-font/Indivisible-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="indivisible-thin-italic"
      rel="preload"
      href="/Indivisible-font/Indivisible-ThinItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    // Sora Font
    <link
      key="sora-bold"
      rel="preload"
      href="/sora-font/Sora-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-extra-bold"
      rel="preload"
      href="/sora-font/Sora-ExtraBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-extra-light"
      rel="preload"
      href="/sora-font/Sora-ExtraLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-light"
      rel="preload"
      href="/sora-font/Sora-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-regular"
      rel="preload"
      href="/sora-font/Sora-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-semi-bold"
      rel="preload"
      href="/sora-font/Sora-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-thin"
      rel="preload"
      href="/sora-font/Sora-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="sora-wght"
      rel="preload"
      href="/sora-font/Sora[wght].woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
