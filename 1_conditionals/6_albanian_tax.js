///// albanian taxes are calculated as below

//// 400  0% taxes
//// 400 - 500  10 % of part over 400
//// 500 - 1500  10 + 12% of part over 500
//// >1500 130 + 23% of part over 1500

/// create a function that calculates taxes of salary

function calculateTax(salary) {
  if(salary <= 400){
    return 0;
  }else if(salary < 500 ){
    return (salary - 400) * 0.1;
  }else if( salary < 1500 ) { 
    return( (salary - 500) * 0.12) + 10;
  }else{
    return( (salary - 1500) * 0.23) + 130;
  }
}
