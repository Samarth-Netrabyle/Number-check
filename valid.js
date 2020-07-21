function myFunction() {
            var inpObj = document.getElementById("1");
            if (!inpObj.checkValidity()) {
                document.getElementById("test").innerHTML = inpObj.validationMessage;
            } else {
                document.getElementById("test").innerHTML = "OK";
            }
        }
		
		myFunction();