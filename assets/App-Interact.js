 const AppInteract = {
   testLog(){
console.log(" log in js");
   },
    requestLocation(el) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                document.getElementById('address_1').value='(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
                // el.nextElementSibling.innerHTML = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
                // el.nextElementSibling.className = 'ok';
            });
        } else {
            el.nextElementSibling.innerHTML = 'Geolocation is not supported in this browser.';
            el.nextElementSibling.className = 'err';
        }
        return false;
    },
}
function myfunction(params1, params2) {
    console.log('param1', params1);
    console.log('param2', params2);
}