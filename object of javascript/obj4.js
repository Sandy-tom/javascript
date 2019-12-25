// it will display the object property in the html page
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>
        javascript object
    </h1>
    <p id="demo"></p>
    <script>
        var page = {
            name : "hindu",
            languge :"english",
            country :"india",
            demo : function(){

                document.write(this.name);
                
            },
            // get lang method will return the object property to the outer scope of the object 
            get lang(){
               return this.languge;// it will return the object property

            }
        };
        // display the data from the object by the method
       page.demo()
       document.getElementById("demo").innerHTML = page.lang;
       
       
    </script>
</body>
</html>
