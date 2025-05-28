console.log("script.js initializing")

// let vname = document.getElementsByClassName(".vName")
// let cname = document.getElementsByClassName(".cName")
// let viewNo = document.getElementsByClassName(".views")
// let mon = document.getElementsByClassName(".month")
// let thumb = document.getElementsByClassName(".thumbnail")

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    document.getElementById("vName").textContent = title;
    document.getElementById("cName").textContent = cName;
    document.getElementById("views").textContent = views;
    document.getElementById("month").textContent = monthsOld ;
    document.getElementById("duratn").textContent = duration ;
    document.getElementById("myImage").src = thumbnail;
}
    // document.getElementById("myImage").src = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "560000", "7", "31:22", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" )

