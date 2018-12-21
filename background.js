//change background-color depending on hour
//original code derived from computerhope
var now = new Date();
var hours = now.getHours();

//document.write('It\'s now: ', hours, '<br><br>');
document.bgColor="#ffffff";

//6-7pm night
if (hours > 17 && hours < 20){
  document.write ('<body style="background-color: #eeeeee">');
}
//7-9pm night
else if (hours > 19 && hours < 21){
  document.write ('<body style="background-color: #333333">');
}
//9pm-5am night
else if (hours > 20 || hours < 5){
  document.write ('<body style="background-color: #000000">');
}
//9am-6pm day
else if (hours > 8 && hours < 18){
  document.write ('<body style="background-color: #ffffff">');
}
//7-8am day
else if (hours > 6 && hours < 9){
  document.write ('<body style="background-color: #eeeeee">');
}
//5-6am day
else if (hours > 4 && hours < 7){
  document.write ('<body style="background-color: #333333">');
}
else {
  document.write ('<body style="background-color: #ffffff">');
}
