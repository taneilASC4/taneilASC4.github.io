// code river gave me
var subtitles= ["an Entrepreneur", "a Hustler","a Young Coder","a Cross-Country runner", "a Track and Feild Long distance runner","a Lifelong Learner", "Taneil Knowles"]
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
