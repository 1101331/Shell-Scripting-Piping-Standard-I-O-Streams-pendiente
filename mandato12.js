var arr = [];
var temp;
process.stdin.on("data", function (o) {
    temp = parseInt(o.toString());
    if (isNaN(temp)) {
        if (o.toString().trim() == "") {
            console.log(sumarr(arr));
            process.exit(0);
        }
        else {
            console.error("Invalid input ", o.toString().trim());
        }
    }
    else {
        arr.push(temp);
    }
});
function sumarr(n) {
    var sum = 0;
    var i;
    for (i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}
