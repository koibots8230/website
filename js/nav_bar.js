directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length - 2)

var menuStr =
   `<li><a href="index.html">Home</a></li>
    <li><a href="donate.html">Donate</a></li>
    <li><a href="contact.html">Contact</a></li>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;
