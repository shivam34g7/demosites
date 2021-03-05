function myFunction() {
    var x, y, z;
    x = 50;
    y = 36;
    x += y;
    z = x + y * x;
    document.getElementById("demo").innerHTML = `The Value of z is ${z}.`;
}