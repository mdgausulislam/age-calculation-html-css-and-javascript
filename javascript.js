let userDate=document.getElementById("date");
userDate.max=new Date().toISOString().split("T")[0];

function calculatorAge(){
    let userAge=document.getElementById("age");
    userAge.innerHTML="";

    let birthDate=new Date(userDate.value);

    if(birthDate =="Invalid Date"){
        let userError=document.getElementById("error");
        userError.innerHTML="Date is Invalid*";
    }else{
        let userError=document.getElementById("error");
        userError.innerHTML="";

        let userDay=birthDate.getDate();
        let userMonth=birthDate.getMonth() +1;
        let userYear=birthDate.getFullYear();
        

        let todayDate=new Date();

        let todayDay=todayDate.getDate();
        let todayMonth=todayDate.getMonth() +1;
        let todayYear=todayDate.getFullYear();

        let ageDay,ageMonth,ageYear;


        ageYear=todayYear-userYear;

        if(todayMonth >= userMonth){
            ageMonth = todayMonth - userMonth;

        }else{
            ageYear--;
            ageMonth = 12 + todayMonth - userMonth;
        }

        if(todayDay>=userDay){
            ageDay=todayDay-userDay;

        }else{
            ageMonth--;
            ageDay=getDaysInMonth(userYear,userMonth)+todayDay-userDay;
        }
        if(ageMonth < 0){
            ageMonth=11;
            ageYear--;

         }

         userAge.innerHTML=`your age is: <span>${ageYear} 
         </span> years <span>${ageMonth}
         </span> months <span>${ageDay}</span> days;`

    }

    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();

    }
}