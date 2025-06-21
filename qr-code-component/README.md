# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Added HTML elements then moved on to styling using CSS Flexbox. Hopefully, I didn’t miss any important details in Figma since I’m new to it and still figuring out where all the little details are in the UI. Feedback is always welcome.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

The biggest challenge was getting the paddings just right. Using flex-direction: column combined with justify-content: center gave me weird results, but switching to justify-content: flex-start solved the problem:

```css
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
```
I'll try to remember that for the future.

## Author

- Frontend Mentor - [@Akiz97](https://www.frontendmentor.io/profile/Akiz97)