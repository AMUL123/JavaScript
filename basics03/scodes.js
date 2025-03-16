//var c=300 // what ever we declear inside {} is called global scode 

if(true){ // what ever we declear inside {} is called blocked scode 
    let a = 10;
    const b =20
    //var c=30;
}
//console.log(a); // this will not print
//console.log(b);
 // this will not print
//console.log(c);// this will print because var can use out of the scope because var previously decleared but it will override 

function one(){
    const username = "samm"

    function two(){
        const website = "youtube"
        console.log(username)
;    }
two()
}
//one()

if(true){
    const username="sam"
    if(username==="sam"){
        const website = " youtube";
        //console.log(username + website);
    }
}

// +++++++++++++++++++++++++++ interesting +++++++++++++++

function addone(num){ //this is called function
return num + 1
}
//console.log(addone(5)) this can be used before delaration

const addTwo = function(num){ //sometime this is called expresion
    return num+2;
}
//console.log(addTwo(5)) // this can't be used before declaration
