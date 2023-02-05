
let newadd = document.querySelector("#btnadd")
newadd.classList.add("newclass");

let removeclass = document.querySelector("#btnremove")
removeclass.classList.remove("textremove");

let replaceClass = document.querySelector("#btnreplace")
replaceClass.classList.replace("oldChange", "newChange");

function itemClass() {
    let itemClass = document.querySelector("#btnitem").classList;
    result= itemClass.item(0);
    alert("P elementinin içindeki ilk sınıf : " +result)
}

function containsClass(){
let containsclass = document.querySelector("p")
let result = containsclass.classList.contains("ClassList")
alert("P elementinin içerisinde ClassList adında bir sınıf var mı : "+result)
}
