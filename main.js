

document.getElementById("Mybtn").onclick = function(){
    var subscribe = document.getElementById("Sub").value; 
   console.log(subscribe);
}

function logInput() {
   let name, email, msg;
    name = document.getElementById("name").value; 
    email = document.getElementById("email").value;
    msg = document.getElementById("msg").value;
   console.log(name,"\n",email,"\n",msg);
//    console.log(email);
//    console.log(msg);
}

