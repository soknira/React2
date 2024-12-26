// // server.js (Node.js with Express and Nodemailer)
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json()); // Parse JSON request body

// // Create a Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail", // Use Gmail, or another email service of your choice
//   auth: {
//     user: "dsoknira99@gmail.com", // Your email
//     pass: "Ra@010529953", // Your email password or app-specific password
//   },
// });

// app.post("/api/send-email", (req, res) => {
//   const { email, name, totalAmount, cart } = req.body;

//   const cartDetails = cart
//     .map(
//       (product) =>
//         `${product.title} (x${product.quantity}) - $${(product.price * product.quantity).toFixed(2)}`
//     )
//     .join("\n");

//   // Email content
//   const mailOptions = {
//     from: "soknirad@gmail.com", // Sender address
//     to: email, // Recipient email
//     subject: "Order Confirmation", // Subject line
//     text: `
//       Hello ${name},

//       Thank you for your order!

//       Order Details:
//       Total Amount: $${totalAmount.toFixed(2)}

//       Cart:
//       ${cartDetails}

//       We will process your order shortly.

//       Best regards,
//       Your Store
//     `,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ message: "Error sending email" });
//     }
//     res.status(200).json({ message: "Email sent successfully", info });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
