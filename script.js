let boy=document.getElementById("hero")
let keys=[]
document.onkeydown=function(event){
    if (!keys.includes(event.key)) {
        keys.push(event.key)
    }
    console.log(keys);
}
document.onkeyup=function(event){
    keys.splice(keys.indexOf(event.key),1)
}