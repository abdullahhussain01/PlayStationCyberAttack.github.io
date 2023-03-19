// batter save mode function
document.addEventListener("DOMContentLoaded", function () {
    navigator.getBattery().then(function (battery) {
      var percentage = battery.level * 100;
  
      if (percentage <= 15) {
        optimizeForLowBattery();
      } else {
        optimizeForNormalBattery();
      }
    });
  });
  
  function optimizeForLowBattery() {
    console.log("batter is low")
    const root = document.documentElement;
    if (document.getElementById("toogledarkmodebtn").classList.contains("light-mode")){
        document.getElementById("toogledarkmodebtn").classList.remove("light-mode")
        root.style.setProperty('--color1', 'rgb(248, 239, 239, 0.5)');
        root.style.setProperty('--color2', 'white');
        root.style.setProperty('--color3', 'white');
        root.style.setProperty('--color4', '#eee');
        root.style.setProperty('--color5', '#888');
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');


        document.getElementById("imghide").classList.add("imghide")
        document.getElementById("imghide2").classList.add("imghide")
        document.getElementById("toogledarkmodebtn").textContent = "Light Mode"
        document.getElementById("text_mode").textContent = "Text Mode"
  }
}
  function optimizeForNormalBattery() {
    console.log("Battery is High");
  }


// change color function
function changeColor() {
    const root = document.documentElement;
    if (document.getElementById("toogledarkmodebtn").classList.contains("light-mode")){
        root.style.setProperty('--color1', 'rgb(248, 239, 239, 0.5)');
        root.style.setProperty('--color2', 'white');
        root.style.setProperty('--color3', 'white');
        root.style.setProperty('--color4', '#eee');
        root.style.setProperty('--color5', '#888');
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
        document.getElementById("toogledarkmodebtn").classList.remove("light-mode")
        document.getElementById("toogledarkmodebtn").textContent = "Light Mode"
    }
    else{
        document.getElementById("toogledarkmodebtn").classList.add("light-mode")
        root.style.setProperty('--color1', 'rgb(248, 239, 239, 0.5)');
        root.style.setProperty('--color2', 'rgba(255, 255, 255, 0)');
        root.style.setProperty('--color3', '#222');
        root.style.setProperty('--color4', '#eee');
        root.style.setProperty('--color5', '#888');
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--white', 'white');
        document.getElementById("toogledarkmodebtn").textContent = "Dark Mode"
    }
}


// set text mode function
function setTextMode() {
    const root = document.documentElement;
    if (document.getElementById("imghide").classList.contains("imghide")){
        document.getElementById("imghide").classList.remove("imghide")
        document.getElementById("text_mode").textContent = "Text Mode"
    }
    else{
        document.getElementById("text_mode").textContent = "Image Mode"
        document.getElementById("imghide").classList.add("imghide")
    }    
    if (document.getElementById("imghide2").classList.contains("imghide")){
        document.getElementById("imghide2").classList.remove("imghide")
    }
    else{
        document.getElementById("imghide2").classList.add("imghide")
    }
}

