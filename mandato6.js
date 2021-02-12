if (process.argv.length != 3) {
    process.exit(100);
}
var num = parseInt(process.argv[2]);
if (num < 1) {
    console.error("Invalid input", num);
}
else {
    console.log("Good one", num);
}
process.exit(0);
