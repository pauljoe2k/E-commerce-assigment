# E-commerce-Website






## Milestone-1

* **Project overview**:  
1. Authentication: Login Logout Signup
2. Product page: All the products
3. Orders Page: show orders for each user.
4. Payment Gateway

## Milestone-2
1. Setting up frontend:

 1. Tailwindcss(from the website)

 2. React ( npm create vite@latest frontend)
  
2. Setting up dependencies

 1. installing package.json using npm init -y

 2. Express(npm i express)
  
 3. Cors(npm i cors)
  
 4. Mongoose(npm i mongoose)
  
 5. Nodemon(npm i nodemon)

3. Created 2 folders frontend and backend

 1. Created the Login page using react

 2. upgraded the page with toggle dark & light mode

 3. Used gitignore to remove all extra files while pushing


## Milestone 3: Backend Setup and Configuration

### 1. Organized Folder Structure
The project structure is designed for scalability and maintainability

### 2. Node.js Server Initialization
We used **Express** to set up the backend server, which listens to and handles incoming API requests.

#### Steps:
1. **Install Dependencies:**
   ```bash
   npm init -y
   npm install express mongoose dotenv

## Milestone 4
1. User Model for our database,
2. Setting up controllers to handle user related data
3. enabling file using Multer.

        ACID
    A - Atomicity
    C - Consistency
    I - Isolation
    D - Durability

## Milestone 5
Created a signup page
Created validation Object using RegEx
Setup React-Router for the Present Pages

## Milestone 7
Created two routes signup and login

For Signup:

Take the data sent by the user
const {name, email, password} = req.body
check if user is already present in the DB
if Yes-> return saying user is already present , Direct Login
If No->
Hash the password (Bcrypt.js, argon2.js)
Create a user and store the name, email, password in DB
For Login:

Take the data sent const {email, password} = req.body
check if the user entry is present in DB also compare the password.
If Yes-> create a token and send that as cookies
If No-> return saying Signup first

## Milestone 8
Card Componet
Display of all the products with dummy data in Home page.

## Milestone 9
Created Product Entry Form
Used form data to send the data over the network call.

## MileStone 10

Product Schema
cerate end point to wirte the data into DB.
Cloudinary, multer



## Project Milestone 11
Product Schema and Endpoints

Define a schema for products, including necessary fields such as title, description, rating, discountedPrice, originalPrice, quantity, category, and images.
Creating Endpoint to Display All Products
Created a new API endpoint to retrieve and display all the products from the database.

// product.router.js
router.get("/get-products", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).send({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error retrieving products",
      error: error.message,
    });
  }
});
Integrating the New Route
Added the /get-products route in product.router.js to handle the retrieval of all product data. This route queries the database and returns a list of products.

const express = require("express");
const router = express.Router();
const ProductModel = require("./models/ProductModel");

// Endpoint to fetch all products
router.get("/get-products", async (req, res) => {
  // Logic to fetch products
});

module.exports = router;
Integration with Server
Ensure the product.router.js file is properly imported and used in the main server file:

const productRoutes = require("./routes/product.router");
app.use("/api/products", productRoutes);

## Project Milestone 12
Implement Product Routes
Create Product Router:

Define routes for handling product-related requests (e.g., fetching product list, product details).
Integrate Product Routes:

Import the productRoutes in your main server file.
Use the productRoutes with the /api/products endpoint.
Test Product Routes:

Ensure that the product routes are working correctly by making requests to the endpoints.
Verify that the responses are as expected.
Update Documentation:

Document the new product routes in the README file.
Include examples of how to use the endpoints.
Deploy and Verify:

Deploy the updated application to your development/staging environment.
Verify that the product routes are functioning correctly in the deployed environment.

## Project Milestone 13
Implemented Update Option for Existing data
Created an end point for Updating

Defined Route for updating existing data
Implemented Update Logic

Updated the controller logic to handle update requests
Tested Update End Point

Made requests to the update endpoint to verify functionality
Implemented FrontEnd to Update Existing Data
Created a Form to Update Existing Data

Created a form to update existing data
Integrated Form with Backend End Point

Integrated the form with the update endpoint
Tested Update Functionality

Tested the update functionality to ensure it works as expected

## Project Milestone 14
Implemented Delete Option for Existing Data
Created an end point for Deleting

Defined Route for deleting existing data
Implemented Delete Logic

Updated the controller logic to handle delete requests
Tested Delete End Point

Made requests to the delete endpoint to verify functionality
Updated Frontend Logic to Delete Existing Data

Updated the frontend logic to include a delete option


## Project Milestone 15
Implemented Navbar for the Application
Created a navbar for the application
Implemented Responsive Design for the Application
Implemented a responsive design for the application

Ensured the application works well on different screen sizes and devices

## Project Milestone 16
Implemented singleProduct page
Created a single product page to display a single product

Implemented the logic to fetch a single product from the database

Add quantity to cart functionality
Implemented the logic to add quantity to cart functionality

Implemented the logic to update the quantity in the cart
