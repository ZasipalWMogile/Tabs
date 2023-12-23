    /*const numbers = [1,2,3,4,5]

numbers.forEach(function(number){
    console.log("number", number)
})

numbers.forEach(number=>console.log("number-2", number));
console.log(numbers)*/

const btn = document.querySelectorAll(".btn");
const tabs_item = document.querySelectorAll(".tabs_item");

btn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        //console.log("currentBtn", currentBtn);

        let tabId= item.getAttribute("data-tab");
        //console.log("tabId", tabId);
       

        let currentTab = document.querySelector(tabId);
        //console.log("currentTab", currentTab);

        tabs_item.forEach(function(item){
         item.classList.remove("active-tab");
        })
        
        currentTab.classList.add("active-tab");
        currentBtn.classList.add("active-btn");

       
    })
})

