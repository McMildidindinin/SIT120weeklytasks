function getFullDate() {
    const d = new Date();
    document.getElementById("demo").innerHTML = 
    "Number of milliseconds since Jan 1 1970: " + d.getTime() 
    + "<br>Current Year: " + d.getFullYear()
    + "<br>Full date: " + d.toLocaleString();
}