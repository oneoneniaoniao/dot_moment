(()=>{
  'use strict';
  const button = document.querySelector("button");
  const p = document.querySelector("p");

 function getResult() {
   const bday = moment(document.querySelector("input").value);
   if(!bday.isValid()) {
    return "Invalid date!"
   }

   const now = moment();
   const age = now.diff(bday, "year");
   const days = now.diff(bday, "day");

   const thisBirthday = bday.clone().year(now.year());
   let nextBirthday;

   if (now.isSameOrAfter(thisBirthday)){
     nextBirthday = thisBirthday.clone().add(1, 'year');
   }else{
     nextBirthday = thisBirthday;
   }

   let left = Math.ceil(nextBirthday.diff(now, "day", true));
   nextBirthday.locale = 'en';
   console.log(nextBirthday);
   console.log(nextBirthday.format("LLLL"));

   return `You're ${age} year-old now! ${days} days has passed since you've born! Your next birthday is ${nextBirthday.format("LL")}. It is ${left} days away.`
 }

button.addEventListener("click",()=>{
  p.textContent = getResult();
});

  // const d = moment("2020-02-30");
  // console.log(d.isValid());
  // const d = moment("2020-02-01");
  // const d2 = moment("2020-02-04");
  // const d3 = moment("2020-02-06");
  // console.log(d.isBefore(d2));
  // console.log(d.isAfter(d2));
  // console.log(d.isSame(d2));
  // console.log(d2.isBetween(d, d3));
  // console.log(d2.isLeapYear(d));
  // const start = moment("2020-04-06 08:00:00");
  // const end = moment("2020-04-06 20:30:00");
  // console.log(end.diff(start));
  // console.log(end.diff(start, "hour"));
  // console.log(end.diff(start, "hour", true));
  // const posted = moment("2021-06-14 09:00:00")
  // console.log(posted.fromNow());

// const d = moment([new Date(2020, 0,10)]);
// const d = moment('2021-01-02');
// console.log(d.format('MMMM Do,dddd'));

// const d = moment("2020-02-20 14:43:43");

// console.log(d.clone().subtract(3,"year").format("LLLL"));
// console.log(d.clone().add(3,"year").add(4,'month').format("LLLL"));
// console.log(d.clone().add({y:3, M:4}).format("LLLL"));

// console.log(d.set("year",2021).format("LLLL"));
// console.log(d.get("year"));

// console.log(d.clone().set("year",2021).format("LLLL"));
// console.log(d.get("year"));
// d.month(11);
// d.hour(1).minute(1);
// d.day("土曜日")
// d.locale = 'en';
// d.month("March");

// console.log(d.format('LLLL'));

// console.log(d.get("y"));
// console.log(d.get("M"));
// console.log(d.get("D"));
// console.log(d.get("d"));
// console.log(d.get("h"));
// console.log(d.get("m"));
// console.log(d.get("s"));
// console.log(d.year());
// console.log(d.month());
// console.log(d.day());
// console.log(d.hour());
// d.locale('en')
// console.log(d.format('HH:mm:ss'))
// console.log(d.format('hh:mm:ss'))
// console.log(d.format('hh:mm:ss a'))
// console.log(d.format('l'))
// console.log(d.format('ll'))
// console.log(d.format('lll'))
// console.log(d.format('llll'))
// console.log(d.format('LLLL'))
// console.log(d.format('LLL'))
// console.log(d.format('LL'))
// console.log(d.format('L'))
// console.log(moment("2020-11").daysInMonth())
// console.log(moment("2020-12").daysInMonth())
// console.log(d.toArray());
// console.log(d.toObject());
// console.log(d.format("[today]:L"))

  })();


