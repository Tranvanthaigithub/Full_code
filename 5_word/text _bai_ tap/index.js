var $ = function(id){
    return document.getElementById(id);

};
var joinList = function(){
     var emailAddress1 = $("email_address1").value;
     var emailAddress2 = $("email_address2").value;
     var isValid = true;

     if (emailAddress1 ==""){
        $("email_address1_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
     } else { $("email_address1_error").firstChild.nodeValue ="";}
     if($("first_name").value == ""){
        $("first")
     }
}