

const baselineComp = document.querySelector("#baseline-comp");
const leadingComp = document.querySelector("#leading-comp");
const stackedComp = document.querySelector("#stacked-comp");


const baselineBtn = document.querySelector("#baseline-btn");
const leadingBtn = document.querySelector("#leading-btn");
const stackedBtn = document.querySelector("#stacked-btn");

const baselineClose = document.querySelector("#baseline-close");
const leadingClose = document.querySelector("#leading-close")
const stackedClose = document.querySelector("#stacked-close")


baselineBtn.addEventListener('click',()=>baselineComp.classList.remove("hidden"));
baselineClose.addEventListener('click',()=>baselineComp.classList.add("hidden"));





leadingBtn.addEventListener('click',()=>leadingComp.classList.remove("hidden"));
leadingClose.addEventListener('click',()=>leadingComp.classList.add("hidden"));


stackedBtn.addEventListener('click',()=>stackedComp.classList.remove("hidden"));
stackedClose.addEventListener('click',()=>stackedComp.classList.add("hidden"));
