# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Audiophile e-commerce website solution](#frontend-mentor---audiophile-e-commerce-website-solution)
  - [Table of contents](#table-of-contents)
    - [The challenge](#the-challenge)
    - [Preview](#preview)
    - [Links](#links)
    - [How to run](#how-to-run)
    - [Built with](#built-with)
      - [Javascript main stack](#javascript-main-stack)
      - [Styling](#styling)
      - [Utils](#utils)
    - [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Preview

![](./preview.jpg)

### Links

- Solution [URL](https://audiophile-ecommerce-black.vercel.app/)

### How to run

- Download [Node.js](https://nodejs.org/en/download/)
- Download [pnpm](https://pnpm.io/installation)
- Clone the repo
- Run `pnpm install` to install dependencies
- Run `pnpm dev` to start the development server
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Built with

#### Javascript main stack

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Typescript](https://www.typescriptlang.org/) - For type checking

#### Styling

- [Tailwind] (https://tailwindcss.com/) - For page styles
- SCSS custom properties for ui components
- [classnames] (https://www.npmjs.com/package/classnames) for conditional styling
- [aos] (https://michalsnik.github.io/aos/) for animations

#### Utils

- [Zustand] (https://docs.pmnd.rs/zustand/) - For cart state management
- [Formik] (https://formik.org/) - For checkout form management
- [Zod] (https://zod.dev/) - For validation

### Author

- LinkedIn - [Donato Di Zenzo](https://www.linkedin.com/in/donato-di-zenzo/)
- Frontend Mentor - [@dodiz](https://www.frontendmentor.io/profile/dodiz)
