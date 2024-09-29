function gradeGenerator(marks){
    // check if marks meet criteria 
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    };
    if (marks > 79){
        grade = "A"
    } 
    //checks if marks is between 60 to 79
    else if (marks >= 60){
        grade = "B"
    } 
    // checks if marks is between 49 to 59
    else if (marks >= 49){
        grade = "C"
    } 
    // check if marks is between 40 to 49
    else if (marks >=40 ){
        grade = "D"
    } 
    // Check if marks is less than 40
    else{
        grade = "E";
    }
    console.log(`The grade is: ${grade}`);
}