var info = ['Patients with AA report they are generally not satisfied with camouflage (eg, topical concealer, wigs) and do not consider it sufficient treatment.', 'The amount of hair loss is the only way to define the severity of AA.', 'AA can be difficult to differentiate from other types of alopecia.'];
var i = 0;
var intervalId = setInterval(function() {
  document.querySelector('.shuffle-body p').innerHTML = info[i];
  if (i == (info.length - 1)) {
    i = 0;
    //you can even clear interval here to make heading stay as last one in array
    //cleanInterval(intervalId);

  } else {
    i++;
  }
}, 10000)