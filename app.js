function getData(){
    let name = document.getElementById("namedata").value;
    if(name === ""){
        alert("Name cannot be empty");
        return;
    }
    let email = document.getElementById("emaildata").value;
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    if(email !="" ){
        if(validateEmail === false){
            alert("Invalid Email Please provide a correct email id");
        }
    }else{
        alert("Email cannot be empty");
        return;
    }
    let subject = document.getElementById("subjectdata").value;
    if(subject === ""){
        alert("Subject cannot be empty");
        return;
    }
    let message = document.getElementById("messagedata").value;
    if(message === ""){
        alert("Message cannot be empty");
        return;
    }
    let jsonData = JSON.parse(`{"name":"${name}","email":"${email}","subject":"${subject}","message":"${message}"}`);
   // console.log(typeof(jsonData));
    fetch('http://127.0.0.1:5000/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:jsonData
    }).then((response)=>{alert(response);console.log(response)});
}
