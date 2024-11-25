#include <bits/stdc++.h>

using namespace std;

int main(){
    double num1, num2;
    cin >> num1;
    cin >> num2;
    if ( num2 == 0 ){
        cout << "Error: Division by zero" << endl;
    } else {
        cout << num1 / num2 << endl;        
    }
}