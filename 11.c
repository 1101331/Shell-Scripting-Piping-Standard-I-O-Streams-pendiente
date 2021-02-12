#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv)
{
	int n;
	
	if (argc == 2)
	{
		n = atoi(argv[1]);
		if (n != 0)
		{
			for (int i = 1; i < n+1; i++)
				fprintf(stdout, "%d\n", i);
			fputc('\n', stdout);
			return 0;
		}
		else
		{
			fprintf(stderr, "Invalid input %s\n", argv[1]);
			return 100;
		}
	}
	else
		return 100;
}