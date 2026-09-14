/* =========================================
   DAILY MATE - MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

   function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("show");
}


function closeMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.remove("show");
}


/* =========================================
   TOOL SEARCH
   ========================================= */

function searchTools() {

    const searchInput = document.getElementById("toolSearch");

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    const tools = document.querySelectorAll(".tool-card");

    const noResults = document.getElementById("noResults");

    let found = false;


    tools.forEach(function(tool) {

        const toolName = tool
            .getAttribute("data-name")
            .toLowerCase();


        if (
            searchValue === "" ||
            toolName.includes(searchValue)
        ) {

            tool.style.display = "flex";

            found = true;

        } else {

            tool.style.display = "none";

        }

    });


    if (found) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }
}


/* =========================================
   TOOL BUTTON
   ========================================= */

function showTool(toolName) {

    showToast(
        toolName +
        " will be available in the next update."
    );
}


/* =========================================
   SUGGEST TOOL
   ========================================= */

function suggestTool() {

    const emailSubject =
        "DailyMate Tool Suggestion";

    const emailBody =
        "Hello DailyMate,%0A%0A" +
        "I would like to suggest this tool:%0A%0A";


    window.location.href =
        "mailto:?subject=" +
        encodeURIComponent(emailSubject) +
        "&body=" +
        emailBody;
}


/* =========================================
   TOAST MESSAGE
   ========================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");


    toastMessage.textContent = message;

    toast.style.display = "flex";


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(function() {

            closeToast();

        }, 3500);
}


function closeToast() {

    const toast =
        document.getElementById("toast");

    toast.style.display = "none";
}


/* =========================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================= */

document.addEventListener(
    "click",
    function(event) {

        const menu =
            document.getElementById("mobileMenu");

        const menuButton =
            document.querySelector(".menu-btn");


        if (
            menu.classList.contains("show") &&
            !menu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            menu.classList.remove("show");

        }

    }
);


/* =========================================
   PAGE LOADED
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "DailyMate loaded successfully."
        );

    }
);