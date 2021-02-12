var arr: number[] = []
var temp: number

process.stdin.on("data", function(o) {
	temp = parseInt(o.toString())
	
	if (isNaN(temp))
	{
		if (o.toString().trim() == "")
		{
			console.log(sumarr(arr))
			process.exit(0)
		}
		else
		{
			console.error("Invalid input ", o.toString().trim())
		}
	}
	else
	{
		arr.push(temp)
	}
})

function sumarr(n: number[]):number
{
	var sum: number = 0
	var i: number
	for (i = 0; i < n.length; i++)
	{
		sum += n[i]
	}
	return sum
}