# Fullstack project

AI companion is a image manipulation app built in Next JS 14 and tailwind css. It uses cloudinary api for the handling the backend and image manipulation. The authentication is handle by clerk and there is also features to buy credit as using the application will spend some of the credit available to the user. The payment is handle by stripe.



## Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Tailwind Css](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


## Table of contents
- [Packages] (#packages)
- [Getting Started](#getting-started)
- [Deployments](#deployment)

## Packages
Clerk:This is the foundational JavaScript library for building user management and authentication with Clerk. It enables you to register, sign in, verify and manage users for your application using highly customizable flows.
Stripe:This is the official Stripe Node.js library that provides convenient access to the Stripe API from server-side JavaScript applications. It allows you to create and manage Stripe resources, such as customers, payment methods, charges, subscriptions, invoices, and more.
Shadcn:It is a service that provides a collection of UI components for web development, based on Tailwind CSS and Radix UI. shadcn offers various npm packages to help developers use these components in their projects

## Getting Started
User can login in the system using their own email and password or use third pary authentication. Then after logging user are preovided with 5 credit to use. Every transformation uses one credit and it will be deducted from theit total credit. They can also but the creit using payment system which is handle by stripe. The payment features is in development phase so the user can use dummy input to buy the credit.

### Transformation availabe
Image Restore:  Refines images by removing noise and imperfections.
Generative fill: Enhance and Image dimensions using AI inputs.
Object remove: Identify and remove objects from the image.
Background remove: Remove background of the image.


## Deployments
The project is live at (https://ai-sass-henna.vercel.app/)
