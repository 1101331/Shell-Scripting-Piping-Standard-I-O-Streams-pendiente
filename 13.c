#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char* buff = malloc(256);
	int buffn;
	int* arr = malloc(sizeof(int) * 256);
	int breakout = 0;
	
	while(!breakout)
	{
		fgets(buff, 256, stdin);
		buffn = atoi(buff);
		if (strncmp(buff, "\n", 1) != 0)
		{
			if (buffn != 0)
			{
				fprintf(stdout, "%d\n", buffn * buffn);
			}
			else
				fprintf(stderr, "Invalid input %s\n", buff);
		}
		else
			breakout = 1;
	}
	fputc('\n', stdout);
	
	return 0;
}