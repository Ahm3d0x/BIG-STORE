# BIG STORE

## 🛍️ Overview
**BIG STORE** is a simple web application designed for an e-commerce platform. It includes an interactive user interface, dynamic JavaScript functionality, and responsive styling. The application also utilizes **Local Storage** and **JSON** for data persistence.

## 📂 Project Structure
```
BIG STORE/
│-- index.html    # Main HTML file
│-- styles.css    # Styling file (CSS)
│-- main.js       # JavaScript file
```

## 🚀 Features
- Responsive design using **CSS**
- Interactive UI with **JavaScript**
- Organized structure for easy scalability
- User-friendly interface for browsing products
- **Local Storage** integration for storing user preferences and cart data
- **JSON** used for product data management
- Simple and clean code structure for easy customization


## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Ahm3d0x/big-store.git
   ```
2. Navigate to the project folder:
   ```sh
   cd big-store
   ```
3. Open `index.html` in your browser:
   ```sh
   start index.html
   ```
   Or manually open it in your preferred browser.

## 🛠️ Technologies Used
- **HTML** - Structure
- **CSS** - Styling & Responsiveness
- **JavaScript** - Dynamic Behavior
- **Local Storage** - Data Persistence
- **JSON** - Data Management

## 🎯 Usage
Modify the **HTML, CSS, and JS** files to customize the store.

## 🛠️ Setup Requirements
No additional dependencies are required. Just open the `index.html` file in a browser to run the project.

## 🛒 Local Storage & JSON Integration
- **Local Storage** is used to store user cart items and preferences persistently.
- **JSON** format is used to store and retrieve product data dynamically.
- Example of using Local Storage:
  ```js
  localStorage.setItem("cart", JSON.stringify(cartItems));
  ```
- Example of retrieving JSON data:
  ```js
  fetch("products.json")
    .then(response => response.json())
    .then(data => console.log(data));
  ```

## 🔧 Future Enhancements
- Add a backend for user authentication and product management
- Implement a shopping cart feature with Local Storage
- Improve UI design with animations and better responsiveness
- Add product filtering and search functionality
- Client and admin panel for better management

## 📝 License
This project is **MIT Licensed**.

## 📞 Contact
For any inquiries, feel free to reach out:
- **GitHub**: [Ahm3d0x](https://github.com/Ahm3d0x)
- **Email**: ah2005211@gmail.com
- **LinkedIn**: [Ahmed M Attia](https://www.linkedin.com/in/ahmed-m-attia-757aa6292/)
