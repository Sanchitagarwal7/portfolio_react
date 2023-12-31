#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while(t--)
    {
        int tot_minutes;
        cin >> tot_minutes;

        string log;
        cin >> log;

        unordered_map<char, int> suppose;
        int count = 1;
        for(char ch = 'a'; ch<='z'; ch++)
        {
            suppose[ch] = count;
            count++;
        }

        unordered_map<char, int> timeSpent;

        for(auto it: log)
        {
            timeSpent[it]++;
        }

        int solved = 0;

        for(auto prblm: timeSpent)
        {
            char problem = prblm.first;
            int timeSpent = prblm.second;

            if(timeSpent >= suppose[problem])
            {
                solved++;
            }
        }

        cout << solved << endl;
    }
    return 0;
}