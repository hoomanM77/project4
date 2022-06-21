const body=document.body;
const titleTag=document.getElementById('title');
const CardGroupTag=document.querySelector('.card-group');
const keyCodeShow=document.querySelector('.keyCodeShow');
const key=document.getElementById('key');
const keycode=document.getElementById('keycode');
let code=document.getElementById('code');
let loc=document.getElementById('location')
let mobileShow=document.getElementById('mobileShow')
let mobileShow2=document.getElementById('mobileShow2')
mobileShow.value=''
body.addEventListener('keydown',show_details)
mobileShow.addEventListener('keydown',show_details)
function show_details(event) {
    mobileShow2.value=''
    titleTag.style.display='none'
    CardGroupTag.style.display='flex'
    keyCodeShow.style.display='block'
    keycode.innerHTML=event.keyCode
    keyCodeShow.innerHTML=event.keyCode
    key.innerHTML=event.key
    code.innerHTML=event.code
    switch (event.location) {
        case 0:
            loc.innerHTML=`General Keys(${event.location})`
            break
        case 1:
            loc.innerHTML=`Left-side modifier Keys(${event.location})`
            break
        case 2:
            loc.innerHTML=`Right-side modifier Keys(${event.location})`
            break
        case 3:
            loc.innerHTML=`Numpad(${event.location})`
            break
    }}








