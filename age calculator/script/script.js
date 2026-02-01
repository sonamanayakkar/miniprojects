
//values get from html

let calender = document.getElementById("date")
let year = document.getElementById("year")
let month = document.getElementById("Month")
let days = document.getElementById("days")
let details = document.querySelector(".details")

let totalmonts = document.getElementById("totalmonts")
let days2 = document.getElementById("days2")
let totaldays = document.getElementById("totaldays")
let totalhours = document.getElementById("totalhours")
let totalminutes = document.getElementById("totalminutes")
let totalseconds = document.getElementById("totalseconds")


//button action

details.style.display = "none";

let action = () => {

    if (calender.value != "") {


        setInterval(() => {
            details.style.display = "flex";

            let dob = new Date(calender.value)
            let live = new Date();


            //year

            let year1 = live.getFullYear() - dob.getFullYear()


            //mont

            // let dmonth = 12;
            let month1 = live.getMonth() - dob.getMonth()


            //date

            let date1 = live.getDate() - dob.getDate()


            function remaindays(date1) {
                if (date1 < 0) {
                    month1--;
                    let prevMonth = new Date(live.getFullYear(), live.getMonth(), 0);
                    console.log(prevMonth.getMonth());
                    date1 += prevMonth.getDate()
                    days.innerText = date1 + " Days"
                    days2.innerText = date1 + " Days"
                }
            }

            remaindays(date1)
            console.log(date1);

            if (month1 < 0) {
                year1--;
                month1 += 12
                console.log(month1 + " Months");


                month.innerText = month1 + " Months "


            }

            year.innerText = year1 + " years old";
            //total months
            totalmonts.innerText = "or " + ((year1 * 12) + month1 + " Months ")




            function totalhoursdifferent() {
                let diff = live - dob;
                let commondays = diff / (1000 * 60 * 60 * 24);
                let commonhours = diff / (1000 * 60 * 60);
                let commonminutes = diff / (1000 * 60);
                let commonseconds = diff / (1000);

                totaldays.innerHTML = "or " + Math.trunc(commondays) + " Days"
                totalhours.innerHTML = "or " + Math.trunc(commonhours) + " Hours"
                totalminutes.innerHTML = "or " + Math.trunc(commonminutes) + " Minutes"
                totalseconds.innerHTML = "or " + Math.trunc(commonseconds) + " seconds"

            }

            totalhoursdifferent()


        }, 1000)
    }

    else {
        alert("Please Enter your Date of Birth")
    }





}




