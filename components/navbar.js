document.getElementById("navbar").innerHTML = `
    <link rel="stylesheet" href="../css/navbar.css" />

    <i class="toggle-open fa-solid fa-bars fa-2x" style="color: #1b1b1b; position: fixed; right: 40px; top: 20px" onclick="openNavBar()"></i>
    <i class="toggle-close fa-solid fa-x fa-2x hidden" style="color: #ff97ae; position: fixed; right: 40px; top: 20px" onclick="closeNavBar()"></i>
    <div class="navigation dflex align-items-center justify-content-center text-gray sm-sz" style="gap: 30px">
        <a href="index.html" class="btn active">Home</a>
        <a href="education.html" class="btn">Education</a>
        <a href="experience.html" class="btn">Experience</a>
        <a href="projects.html" class="btn">Projects</a>
        <a href="skills.html" class="btn">Skills</a>
        <a href="about.html" class="btn">About</a>
    </div>
`
const url = window.location.href
const navbar = document.querySelector('.navigation')
const item = navbar.getElementsByTagName("a")

for (i = 0; i < item.length; i++) {
    if (url.includes(item[i].innerHTML.toLowerCase()) || 
        (url.includes('.html') == false && item[i].innerText == "Home") || 
        (url.includes('index') && item[i].innerHTML == "Home")) {
            item[i].classList.add("active");
            console.log(url + ": true")
        }
        
    else item[i].classList.remove("active")
}

const openNavBar = () => {
    document.querySelector(".toggle-open").classList.add("hidden");
    document.querySelector(".toggle-close").classList.remove("hidden");
    document.querySelector(".navigation").classList.add("open");
} 

const closeNavBar = () => {
    document.querySelector(".toggle-open").classList.remove("hidden");
    document.querySelector(".toggle-close").classList.add("hidden");
    document.querySelector(".navigation").classList.remove("open");
} 