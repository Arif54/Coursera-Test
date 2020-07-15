(function(window){
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker = function (names) {
  console.log(speakWord + " " + names);
};
window.helloSpeaker = helloSpeaker;
})(window);