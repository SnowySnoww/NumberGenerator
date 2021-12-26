//declare random number variable so I can use it everywhere
let ranNum = 0;
//declare amount of numbers desired
let repsNum = document.querySelector("#inNum");
//declare variable for resolution field
let res = document.querySelector("#res");
//declare variable for max number
let maxNum = document.querySelector("#maxNum")
//create empty array (list) that will store the numbers
let list = [];
//create variable for string version of the array
let strList;

let validNum = function(n){
    if(n > 0){
        return true;
    }else{
        return false;
    }
}

//Checks if number is inside list
function isInList(n, l){
    //if number is inside list, return true, otherwise return false
    if(l.indexOf(n) != -1){
        return true;
    }else{
        return false;
    }
}

function gerarNumeros(){
    if(Number(repsNum.value) > Number(maxNum.value)){
        alert("The number of generated numbers can't be bigger than the max possible number!");
        repsNum.value = "";
        maxNum.value= "";
        repsNum.focus();  
    }else if(validNum(Number(repsNum.value)) == true && repsNum.value != "" && validNum(Number(maxNum.value)) == true && maxNum.value != ""){
        //loop that will generate numbers until the list has the amount of items desired
        while(list.length < Number(repsNum.value)){
            //generates random number without decimals
            ranNum = Math.floor(Math.random()*Number(maxNum.value));
            //if random number is not already in the list
            if(isInList(ranNum, list) == false){
                //adds number to the list
                list.push(ranNum);
            }
        }
        repsNum.focus();  
        strList = list.join(" - ");
        res.innerHTML = ""
        res.innerHTML += `<p>The selected numbers are ${strList}</p>`
        list = [];
    }else{
        res.innerHTML = "";
        res.innerHTML += `<p>The results will appear here</p>`
        alert("Type a valid number in both fields!");
        maxNum.value = "";
        repsNum.value = "";
        repsNum.focus();  
    }
}

//Says what were the chosen numbers
console.log(`The selected numbers are ${strList}`)


