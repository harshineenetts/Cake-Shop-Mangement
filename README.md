# 🍰 Cake Shop Management System

A user-friendly desktop application to manage the day-to-day operations of a cake shop. This system helps in handling cake inventory, customer orders, billing, and sales reporting, providing a smooth digital experience for both shopkeepers and customers.

---

## 🎯 Features

- 🧾 **Cake Management**  
  Add, update, and delete cake details such as name, price, flavor, and quantity.

- 📦 **Inventory Control**  
  Tracks cake stock levels and alerts when items run low.

- 🛒 **Customer Order Management**  
  Process and track customer orders with real-time inventory updates.

- 💵 **Billing System**  
  Generates bills based on selected cakes and quantities.

- 📊 **Sales Reporting**  
  Summarizes daily/weekly sales for business insights.

---

## 🛠️ Tech Stack

| Component       | Technology            |
|----------------|------------------------|
| Frontend        | JavaFX (Java GUI)      |
| Backend         | Java                   |
| Database        | PostgreSQL or MySQL    |
| Tools Used      | pgAdmin, JDBC          |
| IDE             | IntelliJ / Eclipse     |

---

## 📂 Folder Structure

cake-shop-management/
│
├── src/
│ ├── controllers/
│ ├── database/
│ ├── models/
│ └── views/
│ └── *.fxml
├── assets/
│ └── images/
├── database/
│ └── cake_shop_schema.sql
├── README.md
└── requirements.txt


## ⚙️ Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/cake-shop-management.git
   cd cake-shop-management
Import into your Java IDE

Configure Database

Create a PostgreSQL/MySQL database

Run cake_shop_schema.sql to initialize tables

Update JDBC connection string in database/DBConnection.java

Run the Application

Launch from Main.java in your IDE

