function isLogged(){
    var req = new XMLHttpRequest();
    req.open( "GET", "/islogged" ); // false for synchronous request
    req.send( null );
    return Number(xmlHttp.responseText);
}


function submit_form(){
    alert("hello");
    document.getElementById("register1").submit();
}