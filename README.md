# password-manager-
# PassX – Your Personal Password Manager 🔐
PassX is a simple, clean, and browser-based Password Manager that lets you securely store, view, copy, and delete your passwords — all stored locally in your browser’s localStorage.
No backend, no database, no external server — your data stays on your device.
⭐ Features
🔹 Add Passwords
Save credentials for any website by entering:
Website name
Username
Password
🔹 Auto-Display Saved Passwords
All saved passwords appear in a table with masked values (****).
🔹 Copy Password to Clipboard
Click Copy to instantly copy any saved password securely.
🔹 Delete Any Saved Entry
Remove saved passwords with a single click.
🔹 Clean & Modern UI
Built using:
HTML
CSS (Poppins font, clean table layout, soft UI)
JavaScript (DOM + localStorage)
🔹 Local Storage (Offline Support)
All passwords are stored in localStorage, so:
No internet needed
No account login
Data stays 100% local

# 📂 Project Structure
PassX/
│
├── index.html       # Main UI structure
├── style.css        # Styling and layout
├── script.js        # Functionality and localStorage logic
└── screenshot.png   # UI preview image
🛠️ How It Works
1. Saving Passwords
When the user submits the form:
The script reads website, username, password
Creates an object
Stores it inside an array in localStorage (passwords key)
2. Displaying Passwords
On page load, the function showPasswords():
Fetches data from localStorage
Builds the table dynamically
Masks passwords with ****
3. Copy Function
The copyPassword() function:
navigator.clipboard.writeText(password)
Quick and safe password copying.
4. Delete Function
The deletePassword() function:
arr.filter(entry => entry.website !== websiteToDelete)
Removes a specific stored entry.
🚀 How to Run the Project
Download or clone the repository:
git clone https://github.com/<your-username>/PassX.git
Open index.html in any browser.
That’s it — no installations, no dependencies.
🔐 Security Note
PassX uses localStorage, which means:
Passwords remain only on your device
No server or database involved
However, for real-world password managers, encryption and secure storage are required.
This project is for learning and personal use.
