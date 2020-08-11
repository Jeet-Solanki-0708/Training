let getGrade=function(totalScore,studentScore){
    let percent=(studentScore/totalScore)*100;
    let grade;
    if(percent>=90){
        grade='A'
    }
    else if(percent>=80 && percent<=89){
        grade='B'
    }
    else if(percent>=70 && percent<=79){
        grade='C'
    }
    else if(percent>=60 && percent<=69){
        grade='D'
    }
    else{
        grade='F'
    }
    return `You got ${grade}(${percent})`
}

let ans=getGrade(20,15)
console.log(ans)