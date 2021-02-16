let submittedData = document.getElementById('generate');
submittedData.addEventListener("click", calculate);
function calculate(event){
    let grades = document.getElementById('text-field').value;
    let line = grades.split('\n');
    let letterGrades = [];
    let courseHours = [];
    for(let i = 0; i < line.length;i++){
        if(line != '\n'){
            let splitGrade = line[i].split(' ');
            letterGrades[i] = splitGrade[1];
            if(splitGrade[2]!=""){
                courseHours[i] = parseInt(splitGrade[2]);
            }
        }
    }
    let grade;
    for(let j = 0 ; j < letterGrades.length;j++){
        grade = letterGrades[j];
        if(grade == 'A' || grade == 'a'){
            letterGrades[j] = 4;
        }
        else if(grade == 'B+' || grade == 'b+'){
            letterGrades[j] = 3.5;
        }
        else if(grade == 'B' || grade == 'b'){
            letterGrades[j] = 3;
        }
        else if(grade == 'C+' || grade == 'c+'){
            letterGrades[j] = 2.5;
        }
        else if(grade == 'C' || grade == 'c'){
            letterGrades[j] = 2;
        }
        else if(grade == 'D' || grade == 'd'){
            letterGrades[j] = 1;
        }
        else{
            letterGrades[j] = 0;
        }
     }
     let gpa = 0;
     let hours = 0;
     for (let i = 0; i < letterGrades.length;i++){
        if(isNaN(courseHours[i])){
            courseHours[i] = 0;
        }
        hours+=courseHours[i];
        gpa+=letterGrades[i]*courseHours[i];
     }

    console.log(gpa.toFixed(2));
    console.log(hours);
    postResults(gpa.toFixed(2),hours);
    console.log(courseHours);
    console.log(letterGrades);
}

function postResults(gpa, hours){
    let overGPA = gpa/hours;
    document.getElementById("gpa-point").value = gpa; 
    document.getElementById("credit-hours").value = hours;
    document.getElementById("total-gpa").value = overGPA.toFixed(2);
}