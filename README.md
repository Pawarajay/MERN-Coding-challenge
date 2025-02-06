# MERN-Coding-challenge

Product Transactions API
A Node.js (Express) and MongoDB-based backend service for handling product transactions. This API fetches data from a third-party source, seeds the database, and provides various endpoints for transactions, statistics, and visualizations.

Features:
Initialize Database: Fetches data from a third-party API and seeds the database.
List Transactions: Supports search and pagination.
Monthly Statistics: Total sales amount, total sold and unsold items for a selected month.
Bar Chart Data: Price range and count of items sold in the selected month.
Pie Chart Data: Unique categories and item count in the selected month.
Combined API: Returns combined responses from multiple APIs.

Installation:
Clone the repository:

bash
Copy
git clone https://github.com/username/repository-name.git
cd repository-name
Install dependencies:

bash
Copy
npm install
Run the server:

bash
Copy
node index.js
MongoDB should be running locally on mongodb://localhost:27017/transactions.

API Endpoints:
Initialize Database
GET /api/initialize
Fetch and seed the database with third-party data.

List Transactions
GET /api/transactions?search=&page=1&perPage=10

Supports search and pagination.
Search by title, description, or price.
Statistics
GET /api/statistics?month=January
Provides total sales, total sold items, and total unsold items for the given month.

Bar Chart Data
GET /api/bar-chart?month=January
Returns price ranges and count of items sold in the selected month.

Pie Chart Data
GET /api/pie-chart?month=January
Returns unique categories and the count of items in each category.

Combined API
GET /api/combined?month=January
Combines responses from statistics, bar chart, and pie chart APIs.

Example Response:
json
Copy
{
  "statistics": {
    "totalSaleAmount": 5000,
    "totalSoldItems": 50,
    "totalNotSoldItems": 20
  },
  "barChart": [
    { "range": "0-100", "count": 5 },
    { "range": "101-200", "count": 10 }
  ],
  "pieChart": [
    { "category": "Electronics", "count": 20 },
    { "category": "Clothing", "count": 15 }
  ]
}
Contributing:
Feel free to submit pull requests or open issues for improvement.

License:
MIT License

How to Add This to Your GitHub:
Create a new GitHub repository.
Push your local project to GitHub:
bash
Copy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
