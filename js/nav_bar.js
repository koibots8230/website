directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length - 2)

var menuStr =
   `<li><a href="index.html">About Us</a></li>
    <li><a href="resources.html">Robotics Resources</a></li>
    <li><a href="https://koibots8230.cheddarup.com/" target="_blank">Donate<a/></li>
    <li><a href="contact.html">Contact</a></li>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;
