document.addEventListener("DOMContentLoaded", function() {
    const homeScreen = document.getElementById("home-screen");
    const chatScreen = document.getElementById("chat-screen");
    const callScreen = document.getElementById("call-screen");
    const navItems = document.querySelectorAll(".nav-item");

    homeScreen.classList.add("active");


    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetScreen = item.getAttribute("data-screen");

            document.querySelectorAll(".screen").forEach((screen) => {
                screen.classList.remove("active");
            });

            document.getElementById(`${targetScreen}-screen`).classList.add("active");

            navItems.forEach((navItem) => {
                navItem.classList.remove("active");
            });
            item.classList.add("active");
        });
    });

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    }

    function insertTodayDate() {
        const calendarDiv = document.getElementById('calendar');
        const todayDate = getTodayDate();
        calendarDiv.innerText = todayDate;
    }

    window.onload = function() {
        insertTodayDate();
    };


    const friends = document.querySelectorAll(".friend");
    friends.forEach((friend) => {
        friend.addEventListener("click", () => {
            const friendName = friend.getAttribute("data-friend");
            const chats = document.querySelectorAll(".chat");

            chats.forEach((chat) => {
                chat.style.display = "none";
            });

            document.getElementById(`${friendName}-chat`).style.display = "block";
        });
    });
});
