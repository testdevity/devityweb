var $ = function(id) {
  return document.getElementById(id);
};
var inc = 0;
var out = 0;
var str = 'coming soon';
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
var t;

var anim = function() {
  inc++;
  if (inc % 20 === 0 && out < str.length) {
    $('anim').appendChild(document.createTextNode(str[out]));
    out++;
  } else if (out >= str.length) {
    $('shuffle').innerHTML = '';
    removeInterval(t);
  }
  $('shuffle').innerHTML =
    chars[Math.floor(Math.random() * chars.length)];
};
t = setInterval(anim, 10);
$('anim').innerHTML = '';


