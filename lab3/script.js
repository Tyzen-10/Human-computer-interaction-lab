console.log("works");
displayEl = document.getElementById("display-el")
console.log(displayEl)
inputEl = document.getElementById("input-el");
console.log(inputEl)
let arr = []
console.log(arr);
addBtn = document.getElementById("add-btn")
sortBtn = document.getElementById("sort-btn")
addBtn.addEventListener("click",function(){
    let ass=parseInt(inputEl.value);
    arr.push(ass);
    //arr.push(inputEl.value);
    console.log(arr);
    inputEl.value = ""
})
function sort(){
    
    console.log("Sort btn works")
    console.log(arr + "array works inside sort")
    let newarr = arr.sort()
    console.log(newarr + "new array printed")
    for(let i=0; i<newarr.length;i++){
        displayEl.textContent += newarr[i] + " "
        
    }
    newarr = []
    arr = []
    
    
}
function add(){

}