const AppInteract = {
    initData: Telegram.WebApp.initData || '',
    initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
    MainButton: Telegram.WebApp.MainButton,
    

   
    testLog() {
        console.log(" log in js initData",AppInteract.initData);
        console.log(" log in js initDataUnsafe",AppInteract.initDataUnsafe);

    },
    sendDataToBot(data)
    {
        console.log("in sendData ",data);
        Telegram.WebApp.sendData(data);
    }
    ,
    requestLocation(el) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                document.getElementById('address_1').value = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
                // el.nextElementSibling.innerHTML = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
                // el.nextElementSibling.className = 'ok';
            });
        } else {
            el.nextElementSibling.innerHTML = 'Geolocation is not supported in this browser.';
            el.nextElementSibling.className = 'err';
        }
        return false;
    },
    sendMessage(msg_id, with_webview) {
        if (!AppInteract.initDataUnsafe.query_id) {
            alert('WebViewQueryId not defined');
            return;
        }

        document.querySelectorAll('button').forEach((btn) => btn.disabled = true);

        const btn = document.querySelector('#btn_status');
        btn.textContent = 'Sending...';

        AppInteract.apiRequest('sendMessage', {
            msg_id: msg_id || '',
            with_webview: !AppInteract.initDataUnsafe.receiver && with_webview ? 1 : 0
        }, function (result) {
            document.querySelectorAll('button').forEach((btn) => btn.disabled = false);

            if (result.response) {
                if (result.response.ok) {
                    btn.textContent = 'Message sent successfully!';
                    btn.className = 'ok';
                    btn.style.display = 'block';
                } else {
                    btn.textContent = result.response.description;
                    btn.className = 'err';
                    btn.style.display = 'block';
                    alert(result.response.description);
                }
            } else if (result.error) {
                btn.textContent = result.error;
                btn.className = 'err';
                btn.style.display = 'block';
                alert(result.error);
            } else {
                btn.textContent = 'Unknown error';
                btn.className = 'err';
                btn.style.display = 'block';
                alert('Unknown error');
            }
        });
    },
    // Other
    apiRequest(method, data, onCallback) {
        // DISABLE BACKEND FOR FRONTEND DEMO
        // YOU CAN USE YOUR OWN REQUESTS TO YOUR OWN BACKEND
        // CHANGE THIS CODE TO YOUR OWN
        return onCallback && onCallback({ error: 'This function (' + method + ') should send requests to your backend. Please, change this code to your own.' });

        const authData = AppInteract.initData || '';
        fetch('/demo/api', {
            method: 'POST',
            body: JSON.stringify(Object.assign(data, {
                _auth: authData,
                method: method,
            })),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            onCallback && onCallback(result);
        }).catch(function (error) {
            onCallback && onCallback({ error: 'Server error' });
        });
    }
}

 
function myfunction(params1, params2) {
    console.log('param1', params1);
    console.log('param2', params2);
}
function processClient() {
    console.log("on js processClient ");
     const clientObj=document.getElementById("hiddenObjectData").value;
   // Your JavaScript logic here to process the 'clientObj'
   AppInteract.testLog();
   AppInteract.sendDataToBot(clientObj);
 }
  
