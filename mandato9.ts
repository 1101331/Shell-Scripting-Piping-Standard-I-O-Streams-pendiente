process.stdin.on("data", function(o) {
	var num: number = parseInt(o.toString())
	if (num < 1)
	{
		console.error("Invalid input", num)
	}
	else
	{
		console.log("Good one", num)
	}	
	process.exit(0)
})

