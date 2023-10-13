#include<iostream>
#include<algorithm>
using namespace std;

int main()
{
    int m = 4, n = 4;

    int matrix[m][n] = {{1, 2, 3, 4}, {5, 6, 7, 8,}, {9, 10, 11, 12}, {13, 14, 15, 16}};

    for(int i = 0; i<m; i++)
    {
        int col = 0;
        int row = i;

        while(row>=0 && col<n)
        {
            cout << matrix[row][col] << " ";
            row--;
            col++;
        }
        cout << endl;
    }

    for(int j = 1; j<n; j++)
    {
        int col = j;
        int row = m-1;

        while(row>=0 && col<n)
        {
            cout << matrix[row][col] << " ";
            row--;
            col++;
        }
    }
    cout << endl;

    return 0;
}