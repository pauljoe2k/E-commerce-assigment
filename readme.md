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