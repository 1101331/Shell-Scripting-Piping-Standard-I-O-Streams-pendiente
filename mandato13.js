var temp;
process.stdin.on("data", function (o) {
    temp = parseInt(o.toString());
    if (isNaN(temp)) {
        if (o.toString().trim() == "") {
            process.exit(0);
        }
        else {
            console.error("Invalid input", o.toString().trim());
        }
    }
    else {
        console.log(temp * temp);
    }
});
