const today = new Date();

document.getElementById("currentyear").textContent =
    today.getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${new Intl.DateTimeFormat(
        "en-US",
        {
            dateStyle: "medium",
            timeStyle: "medium"
        }
    ).format(today)}`;

document.getElementById("lastModified").innerHTML = document.lastModified;