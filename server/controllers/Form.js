
require("dotenv").config();
const User = require('../models/User');
const mongoose = require('mongoose');

exports.uploadContact = async (req, res) => {
  try {
    console.log("Entered fileUpload Backend");
    const { fname, lname, phone, email, company, jobtitle } = req.body;
    console.log("got everything from body");
    console.log("heyy")
    console.log(fname);
    console.log(typeof (fname))
    const productdata = await User.create({
      fname,
      lname,
      phone,
      email,
      company,
      jobtitle,
    });


    console.log("Created product data:", productdata);  // Log created product data

    res.json({
      success: true,
      productdata
    });
  } catch (error) {
    console.error("Error during file upload:", error.stack);  // Log stack trace
    res.status(400).json({
      success: false,
      message: "Something went wrong in Form.js :)",
      error: error.message  // Include error message in response
    });
  }
};

exports.getSingleContact = async (req, res) => {
  try {
    const { id } = req.params;
    const singleProduct = await User.findById(Id);
    res.status(200).json({
      success: true,
      data: singleProduct,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getAllContact = async (req, res) => {
  try {
    const allProducts = await User.find();
    return res.status(200).json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Can't Fetch Product Data",
      error: error.message,
    });
  }
};


exports.updateContact = async (req, res) => {
  try {
    console.log("Entered updateContact handler");

    const { id } = req.params; 
    const { fname, lname, phone, email, company, jobtitle } = req.body;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid ID:", id);
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID",
      });
    }
    // Find and update the contact
    const contactData = await User.findByIdAndUpdate(
      id,
      { fname, lname, phone, email, company, jobtitle },
      { new: true } // Return the updated document
    );

    // Handle case where contact is not found
    if (!contactData) {
      console.error("Contact not found for ID:", id);
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    console.log("Contact updated successfully:", contactData);
    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: contactData,
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};



exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) { // Corrected variable name
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format",
      });
    }

    // Find and delete the user
    const deletedUser = await User.findByIdAndDelete(id);

    // Handle case where user does not exist
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

