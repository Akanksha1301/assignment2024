# E-Commerce Shipping Charge Estimator 
It uses Node.js, Express, and MongoDB to manage the backend and database. 
The project includes a combined API for seamless integration of functionalities.

### Features
1. Find the Nearest Warehouse: Retrieves the closest warehouse to a seller based on geographical location.
2. Calculate Shipping Charges: Calculates shipping costs between a warehouse and a customer, factoring in delivery speed.
3. Combined API: Combines nearest warehouse retrieval and shipping charge calculation.
Includes sample MongoDB data for quick setup and testing.

### Tech Stack
Backend: Node.js, Express.js
Database: MongoDB Compass
Tools: MongoDB Database Tools (mongodump)
### Setup Instructions

#### Prerequisites
1.  Install Node.js  https://nodejs.org/en/download/package-manager
2.  Install MongoDB Compass or use MongoDB Atlas (Cloud MongoDB).
3.  Install MongoDB Database Tools for mongodump and mongorestore if needed:
        Download MongoDB Tools.

#### Installation
1.  Clone the Repository:  
    ##
        git clone https://github.com/Akanksha1301/assignment2024.git
        cd assignment

2.  Install Dependencies
    ##
        npm install express,mongodb,mongoose
        npm install --save-dev nodemon

#### Import sample data
1.  Start MonoDB
    ##
        mongo

2.  Restore the dump
    ##
        mongorestore --db my-database dump/my-database

3.  Verify Data
    ##
        mongo
        use ecommerce
        db.warehouse.find().pretty()
        db.customer.find().pretty()

#### Run the Application
1.  Start the development server
    ##
        nodemon start
The server will run on http://localhost:8000.

        

### API Endpoints

1. **Nearest Warehouse API**
    - **Endpoint**: /api/v1/warehouse/nearest
    - **Method**: `GET`
    - **Description**: Finds the nearest warehouse for a seller.
    - **Query Parameters**:
    - `sellerId`: The ID of the seller (required).
    - `productId`: The ID of the product .
    - `deliverySpeed`: Delivery speed, either `standard` or `express` (required).
    
    - `http request`:   http://localhost:8000/api/v1/warehouse/nearest?sellerId=673f5aadc9065b3ab96a1cd7&productId=673f5b83c9065b3ab96a1cdf

2. **Shipping Charge API**
    - **Endpoint**: /api/v1/shipping-charge
    - **Method**: `GET`
    - **Description**: Calculates shipping charges for a customer.
    - **Query Parameters**:
    - `warehouseId`: The ID of the warehouse (required).
    - `customerId`: The ID of the customer (required)  .
    - `deliverySpeed`: Delivery speed, either `standard` or `express` (required).
    
    - `http request`:   http://localhost:8000/api/v1/shipping-charge?warehouseId=673f5925c9065b3ab96a1cc8&customerId=673f5963c9065b3ab96a1ccc&deliverySpeed=express

3. **Combined Shipping API**

    - **Endpoint**: /api/v1/shipping-charge/calculate
    - **Method**: `POST`
    - **Description**: Combines nearest warehouse retrieval and shipping charge calculation.
    - **Query Parameters**:
    - `warehouseId`: The ID of the warehouse (required).
    - `customerId`: The ID of the customer (required)  .
    - `deliverySpeed`: Delivery speed, either `standard` or `express` (required).
    
    - `http request`:   http://localhost:8000/api/v1/shipping-charge/calculate

### Testing the APIs
   Use Postman or Curl to test the APIs.

