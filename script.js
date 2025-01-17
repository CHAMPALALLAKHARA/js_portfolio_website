// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// bootstrap progress circular bar 
let bootstrapProgress = document.querySelector(".bootstrap"),
  bootstrapValue = document.querySelector(".bootstrap-progress");

let bootstrapStartValue = 0,
  bootstrapEndValue = 50,
  bootstrapspeed = 30;

let progressbootstrap = setInterval(() => {
  bootstrapStartValue++;

  bootstrapValue.textContent = `${bootstrapStartValue}%`;
  bootstrapProgress.style.background = `conic-gradient(#F7DF1E ${
    bootstrapStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (bootstrapStartValue == bootstrapEndValue) {
    clearInterval(progressbootstrap);
  }
}, bootstrapspeed);


// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

//figma  progress circular bar //
let figmaProgress = document.querySelector(".figma"),
  figmaValue = document.querySelector(".figma-progress");

let figmaStartValue = 0,
  figmaEndValue = 90,
  figmaspeed = 30;

let progressfigma = setInterval(() => {
  figmaStartValue++;

  figmaValue.textContent = `${figmaStartValue}%`;
  figmaProgress.style.background = `conic-gradient(#21A1F1 ${
    figmaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (figmaStartValue == figmaEndValue) {
    clearInterval(progressfigma);
  }
}, figmaspeed);



var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {

  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  
  document.getElementById(tabname).classList.add("active-tab");
  event.currentTarget.classList.add("active-links");
}



// function dm() {
//   var navigation = document.querySelector('.navigation');
//   // Toggle 'active' class to show/hide the navigation links
//   navigation.classList.toggle('active');
//   navigation.classList.remove('active');
// }




