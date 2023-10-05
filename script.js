const ntc = require('@yatiac/name-that-color');

let getColor = ntc('#9fa632');

let res = document.querySelector("#result");
res.textContent = getColor.colorName;