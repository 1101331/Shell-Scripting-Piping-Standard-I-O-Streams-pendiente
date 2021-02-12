#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int sum(int* n, int s);

int main()
{
	int counter = 0;
	
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
				arr[counter] = buffn;
				counter++;
			}
			else
				fprintf(stderr, "Invalid input %s\n", buff);
		}
		else
			breakout = 1;
	}
	fprintf(stdout, "%d\n\n", sum(arr, counter));
	
	return 0;
}

int sum(int* n, int s)
{
	int adder = 0;
	
	for (int i = 0; i < s; i++)
	{
		adder += n[i];
	}
	
	return adder;
}