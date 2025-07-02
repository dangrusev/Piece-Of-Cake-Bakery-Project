# Piece of Cake Bakery: A Full Stack Web App Project
Welcome to the official GitHub repository for the Piece of Cake Bakery project! This full-stack website, lets users customize and order their own cakes on our online website.


# Contributors
- Daniel Rusev 
- Biju Jacob 
- Daniel Grobla 


# Live Azure Links
- Frontend (Azure): https://kind-beach-07ad0841e.1.azurestaticapps.net/
- Backend (Azure): https://pieceofcakebakerybackend-agbkfxenccbbh5gg.centralus-01.azurewebsites.net/


# Installation/Local Deployment
- Please refer to the README.md for a detailed guide on how to run website locally, and how to use website.


# Technology Overview
- Frontend: React, HTML, CSS, JavaScript, Stripe (Payment processing), Axios (Http request handling)
- Backend: Node.js, Express.js, CORS Middleware, Bcrypt (Password hashing), JSON, mongoose (Database)
- Database: MongoDB 
- Version Control: Git and GitHub
- Deployment: Azure App Services (Backend), Azure Static Web Apps (Frontend)  


# Page Layout
- Home Page: First page users see
- Login Page: Accessed from the Home Page
- Registration Page: Accessed from the Login Page
- Custom Page: Accessed from the Home Page. Button to access this page will not appear until users register and logs in with website
- Payment Page: Accessed from the Home Page. Also is accessed from the Custom Page after users fully customize their cake and clicks on the button to redirect to the Payment Page.
- Confirmation Page: Accessed from the Payment Page after successfully placing an order


# Features
- Custom Cake Builder: Allows users to choose their own shape, size, flavor, frosting, text, and decorations for their cakes
- Custom Images: Allows users to submit images (jpeg or png) for cake designs
- Cake Option Images: Images dynamically updates based on user selection. Helps show users what their cake may look like
- Dynamic price calculation based on user input
- Stripe-based payment simulation
- Order confirmation page
- Login authorization system to store user order data 
- Fully responsive design for both desktop and mobile versions


# MongoDB Tables
- "users" table: Stores user registration data
- "orders" table: Stores user delivery addresses data
- "ordersummaries" table: Stores user cake customization data

Each table contains 5-10 example user records based on inputs for login/registration, cake order details, and delivery address details.

Screenshots of each data table showing at least three examples


# API Routes
- ordersRoute: Handles the user delivery address
- orderSummary: Handles the user cake customization 
- auth: Handles the user login/registration authorization
- Stripe: Handles the Stripe API


# Known Issues
- Stripe Payment Intent Issue: Does not push payment data to the BackEnd and does not continue to the confirmation page after submitting payment data. Used an alternative method in the CheckOutForm.jsx to let users submit a payment. Original CheckOutForm with Stripe code can still be viewed.
- User Images: All custom options are pushed to the BackEnd except user images. BackEnd wouldn't accept the user images.
- Improve Mobile Design: Text and buttons appear squished on mobile devices


# Academic Project
- This was a student project to create a full stack web app utilizing React and Node.js. 
- This is only for educational purposes and not for commercial use.


# Copyright
- July 2025
