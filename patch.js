var t = document.getElementById("titleBar");
var m = document.getElementById("main-tab");
var tl = document.createElement("div");

t.style.position = "fixed";
t.style.height = "68px";
t.style.opacity = 0;
m.style.width = "68px";
tl.style.height = "18px";
m.children[0].insertAdjacentElement("afterbegin", tl);
m.children[1].style.paddingBottom = "6px";

document.getElementById("chatOnboard").style.webkitAppRegion = "drag";

