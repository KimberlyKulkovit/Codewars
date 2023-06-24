/*Beginner Series #4 Cockroach 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */ 

const cockroachSpeed = s => Math.floor(s/0.036); 

//0.036 because it takes 3600 seconds to reach 1 hour and there is 100,000 cm to reach 1 km so it the conversion would be 3600/100000 = .036 s/cm
