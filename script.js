// Delete a password
const deletePassword = (websiteToDelete) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data) || [];

    // Filter out the entry with the matching website
    let arrUpdated = arr.filter((entry) => entry.website !== websiteToDelete);

    localStorage.setItem("passwords", JSON.stringify(arrUpdated));
    alert(`Successfully deleted ${websiteToDelete}'s password`);
    showPasswords(); 
};

// Copy password to clipboard
const copyPassword = (password) => {
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch((err) => {
        console.error("Could not copy password:", err);
    });
};

// Show all passwords in the table
const showPasswords = () => {
    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords");

    if (!data) {
        tb.innerHTML = "No Data to show.";
    } else {
        tb.innerHTML = `<tr>
            <th>Website</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
        </tr>`;

        let arr = JSON.parse(data);
        let str = "";
        arr.forEach((element) => {
            str += `<tr>
                <td>${element.website}</td>
                <td>${element.username}</td>
                <td>****</td>
                <td>
                    <button class="btnsm" onclick="copyPassword('${element.password}')">Copy</button>
                    <button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button>
                </td>
            </tr>`;
        });
        tb.innerHTML += str;
    }

    // Clear form fields
    document.getElementById("website").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
};

// Run once on page load
console.log("Working");
showPasswords();

// Handle form submission
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const websiteInput = document.getElementById("website"); 
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const website = websiteInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log("Clicked..");
    console.log(username, password);

    let storedPasswords = localStorage.getItem("passwords");
    if (!storedPasswords) {
        let json = [];
        json.push({ website, username, password });
        alert("Password Saved.");
        localStorage.setItem("passwords", JSON.stringify(json));
    } else {
        let json = JSON.parse(storedPasswords);
        json.push({ website, username, password });
        alert("Password Saved.");
        localStorage.setItem("passwords", JSON.stringify(json));
    }

    showPasswords();
});
