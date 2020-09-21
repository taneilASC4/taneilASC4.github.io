// code river gave me
var subtitles= ["Entrepreneur", "Hustler","Young Coder","Lifelong Learner"]
var count = 0;

$(document).ready(function (){
   changeSubtitle();
});

function changeSubtitle() {
   setInterval(function () {
       if (count < subtitles.length - 1) {
           $("#subtitle").html(subtitles[count]);
           count++;
       } else {
           $("#subtitle").html(subtitles[subtitles.length - 1]);
           count = 0;
      }
   }, 1500);
}
// end of river code