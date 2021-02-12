var len = process.argv.length;
if (len == 3) {
    console.log("Hola", process.argv[2]);
}
else {
    process.exit(100);
}
process.exit(0);
