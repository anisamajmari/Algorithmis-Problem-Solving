//// calculate the bmi for user using variables below
/// know that bmi is equal to BMI = m / (h*h) where m is mass in kg and h is length in meter

/// if bmi is between 0-19 person is underweight
/// if bmi is between 19-24 person is normal
/// if bmi is between 24-29 person is overweight
/// if bmi is over 29 then person is obeze,
/// print nesesary message based on person weight

var m = 120; /// in kg

var h = 1.9; /// in meter

/// calculate bmi
const calculateBMI = function(m, h){
    const bmi = m / (h*h);

    if( bmi < 19){
        console.log('You are underweight');
    }else if(bmi < 24){
        console.log('You are normal');
    }else if(bmi < 29){
        console.log('Nikolin is overweight');
    }else {
        console.log('Nikolin is obezeeeeeeee, he is a sphere');
    }
}

/// print nesesary message
