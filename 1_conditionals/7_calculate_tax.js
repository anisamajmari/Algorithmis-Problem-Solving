//// write a function that calculates tax of a person
/// given
/// 1. salary
/// 2. supose salary if has any

//// defined slaary levels
//// Level 1 (0-17000)
//// Level 2 (17001-21000)
//// Level 3 (21001-24000)
//// Level 4 (24001-28000)
//// Level 5 (28001-31000)
//// Level 6 (31001-34000)
//// Level 7 (34001-38000)
//// Level 8 (38001-43000)
//// Level 9 (43001-46000)
//// Level 10(46001-54000)
//// Level 11(>54000)

//// Taxes
//// CLASS A tax
//// ----- 20% for salaries until 20 000.
//// ----- 35% (20 000 - 45 000) where tax is calculated as 35% of the part over 20 000 + 4000
//// ----- 45% (>45 0000) where tax is calculated as 12750 + 45% of the salary part over 45 000
////
//// CLASS B tax
//// ----- 18% for salaries until 20 000.
//// ----- 32% (20 000 - 45 000) where tax is calculated as 35% of the part over 20 000 + 4000
//// ----- 41% (>45 0000) where tax is calculated as 12750 + 45% of the salary part over 45 000
////
//// CLASS C tax
//// ----- 23% for salaries until 20 000.
//// ----- 37% (20 000 - 45 000) where tax is calculated as 35% of the part over 20 000 + 4000
//// ----- 48% (>45 0000) where tax is calculated as 12750 + 45% of the salary part over 45 000

///// groups of people
`GROUP 1
All people whoose status is maried and their supose 
is unemployed or employed with a salary lower or into
level 8 and lower than their supose are subject of 
tax B 
`;

`GROUP 2
All people whoose status is maried and their supose is employed in 
a job with salary higher than their supose or higher than level 8
Tax c
``GROUP 3
All people whoose status is maried and their supose has a higher salary no more 
than two levels up their salary. 
Tax a
``GROUP 4
All people whose status is maried and their salary is lower than their 
supose by 3 or more levels 
tax b
``GROUP 5
All unmaried people are subject of tax a
`;
/// in case salary of supose is undefined than person is not married

function calculateTaxes(mySalary, suposeSalary) {
  /// your code here

  return 0;
}
