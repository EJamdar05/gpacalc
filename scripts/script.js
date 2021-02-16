let submittedData = document.getElementById('generate');
submittedData.addEventListener("click", calculate);
function calculate(event){
    let grades = document.getElementById('text-field').value;
    let line = grades.split('\n');
    let letterGrades = [];
    let courseHours = [];
    for(let i = 0; i < line.length;i++){
        let splitGrade = line[i].split(' ');
        letterGrades[i] = splitGrade[1];
        if(splitGrade[2]!=""){
            courseHours[i] = parseInt(splitGrade[2]);
        }
    }
    let grade;
    for(let j = 0 ; j < letterGrades.length;j++){
        grade = letterGrades[j];
        if(grade == 'A' || grade == 'a'){
            letterGrades[j] = 4;
        }
        else if(grade == 'A-' || grade == 'a-'){
            letterGrades[j] = 3.67;
        }
        else if(grade == 'B+' || grade == 'b+'){
            letterGrades[j] = 3.33;
        }
        else if(grade == 'B' || grade == 'b'){
            letterGrades[j] = 3;
        }
        else if(grade == 'C+' || grade == 'c+'){
            letterGrades[j] = 2.33;
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
         gpa+=letterGrades[i]*courseHours[i];
     }
     for (let i = 0; i < courseHours.length;i++){
        hours+=courseHours[i];
    }
    console.log(gpa.toFixed(2));
    console.log(hours);
    postResults(gpa.toFixed(2),hours);
}

function postResults(gpa, hours){
    let overGPA = gpa/hours;
    document.getElementById("gpa-point").value = gpa; 
    document.getElementById("credit-hours").value = hours;
    document.getElementById("total-gpa").value = overGPA;
}