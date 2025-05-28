console.log("script.js initializing")


function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    document.getElementById("vName").textContent = title;
    document.getElementById("cName").textContent = cName;
    document.getElementById("views").textContent = views;
    document.getElementById("month").textContent = monthsOld ;
    document.getElementById("duratn").textContent = duration ;
    document.getElementById("myImage").src = thumbnail;
}
    


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "560000", "7", "31:22", "thumbnail.jpeg" )

