if (process.argv.length != 3) {
    process.exit(100);
}
var n = parseInt(process.argv[2]);
var i;
if (isNaN(n)) {
    console.error("Invalid input", process.argv[2]);
    process.exit(100);
}
for (i = 1; i < n + 1; i++) {
    console.log(i);
}
