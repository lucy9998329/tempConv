let title = document.querySelector("#title")
let contentField = document.querySelector("#content")

let testing = () => {
    console.log("Test");
}
{
    function convert(){
        var far = document.getElementById("Fahrenheit").value;
        var cel = (far - 32) / (1.8);
        document.getElementById("Celsius").innerHTML = cel

        var cel = document.getElementById("Celsius").value;
        var far = (cel * 1.8) + 32;
        document.getElementById("Fahrenheit").innerHTML = far

    }
    
    document.getElementById("button")
    addEventListener("click", convert, false);

}

