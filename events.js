function wholeSquare() {
    let a = document.getElementById("id1").value 
    let b = document.getElementById("id2").value
    let Square = (a * a) + (b * b) + (2*a*b)
    document.getElementById("div1").innerHTML = "Result: " + Square;    
    }