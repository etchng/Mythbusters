var info = ['Patients with AA report they are generally not satisfied with camouflage (eg, topical concealer, wigs) and do not consider it sufficient treatment.', 'The amount of hair loss is the only way to define the severity of AA.', 'AA can be difficult to differentiate from other types of alopecia.'];
var i = 0;
var intervalId = setInterval(function() {
  document.querySelector('.shuffle-body p').innerHTML = info[i];
  if (i == (info.length - 1)) {
    i = 0;
 
  } else {
    i++;
  }
}, 12000)

let start= document.querySelector('.cta');

start.addEventListener('click', function() {
document.querySelector('.wrapper').classList.add('background2');
document.querySelector('#tree-pulse').classList.add('fade-out');
document.querySelector('.left').classList.add('text-fade');
document.querySelector('.right').classList.add('text-fade');
});