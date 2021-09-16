'use strict';

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script');
script.src = "test35.js";
script.async = false;
document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
script.src = src;
script.async = false;
document.body.append(script);
}

loadScript('test35.js');
loadScript('Some35.js');