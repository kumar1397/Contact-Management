
# **Contact Management App with Next.js**

## **Overview**
The **Contact Management App** is a full-stack application for managing contact information. It demonstrates CRUD (Create, Read, Update, Delete) operations with a clean and responsive interface.  
- **Next.js**: Preferred for its built-in SSR, routing, and performance optimizations.  
- **Tailwind CSS**: Enables fast, consistent styling with its utility-first approach.  
- **MongoDB**: Chosen for its flexibility, scalability, and JSON-like dynamic data handling.

---

## **Features**
- Add, update, view, and delete contact details.  
- Responsive design for seamless interaction across devices.  
- Dynamic routing and server-side rendering for enhanced performance and SEO.  
- Integration with a backend API for efficient data handling.  
- Persistent data storage using MongoDB.

---

## **Technology Stack**
- **Frontend**: Next.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  

---

## **Setup Instructions**
### **Frontend**
1. Open the terminal and navigate to the project root.  
2. Run `npm install` to install dependencies.  
3. Start the development server with `npm run dev`.  

### **Backend**
1. Open the terminal and navigate to the `server` directory.  
2. Run `npm install` to install dependencies.  
3. Start the server with `npm run dev`.  

## **Database Schema Script**

{
  "collection": "contacts",
  "fields": {
    "fname": "string",
    "lname": "string",
    "phone": "string",
    "email": "string",
    "company": "string",
    "jobtitle": "string"
  }
}
