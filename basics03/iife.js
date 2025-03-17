// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //name iife because function has name chai()
    console.log(`DB CONNECTED`);
})();
//(here we will write function)(this is execution)

((name)=>{
    console.log(`DB Connected ${name}`)
})('samm')