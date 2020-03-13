const PORT=5000;

function authenticate(){
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let userName=document.getElementById("userName").value;
    let email=document.getElementById("email").value;
    let gender="M";
    if(document.getElementById("2").checked)
        gender="F";
    let password=document.getElementById("password").value;
    let confirm=document.getElementById("confirm").value;
    let file=document.getElementById("myfile").value;
    // console.log(firstName+"\n"+lastName+"\n"+userName+"\n"+email+"\n"+gender+"\n"+password+"\n"+confirm+"\n"+file);

    if(password != confirm)
        alert("Password not Matching");
    else{
        let Http = new XMLHttpRequest();
        const url="http://localhost:"+PORT+"/signup/add-user";
        console.log(url);
        Http.open("GET",url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
        }
    }

}