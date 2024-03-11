var orderSubmit = document.getElementById("orderSubmit");
var contentOrder = document.getElementById("ifOrderempty");
var orderInput = document.getElementById("orderIDinput");

orderSubmit.onclick = function(){
  if(orderInput.value.trim() != ""){
    window.location.href = "orderstatus2.html";
  }
  else{
    orderInput.placeholder = "Please input the ID";
  }
};

