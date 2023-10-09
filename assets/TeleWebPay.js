//import {webAppMainButtonPlugin} from './App-Interact'; 

console.log("on script of cart")
//const webAppMainButtonPlugin=require('./MainBtnPlugIn');

TeleMainButton = document.getElementById("TeleMainButton");
if (TeleMainButton) {
//     <button id="myButton" disabled>Click me!</button>

// <script>
  // Get the button element
  const button = TeleMainButton;//document.getElementById('myButton');

  // Create a MutationObserver to watch for attribute changes
  const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
      if (mutation.attributeName === 'disabled') {
        // The disabled attribute has changed
        if (button.disabled) {
          // Button is disabled, perform your action here
          console.log('Button is disabled');
          // Add your code to execute when the button is disabled
        } else {
          // Button is enabled, perform your action here
          console.log('Button is enabled');
          TeleMainButtonStr = TeleMainButton.title;
    buttonParams = {
        text: TeleMainButtonStr,
        color: Telegram.WebApp.themeParams.button_color,
        text_color: Telegram.WebApp.button_text_color,
        is_active: true,
        is_visible: true,
    };
    console.log("buttonParams", buttonParams);
    pluginInstance.MainButton.setParams(buttonParams);
          // Add your code to execute when the button is enabled
        }
      }
    }
  });

  // Start observing the button for attribute changes
  observer.observe(button, { attributes: true });

  // Simulate changing the disabled status after a delay (for demonstration purposes)
//   setTimeout(() => {
//     button.disabled = false; // Change the disabled status after 3 seconds
//   }, 3000);
// </script>

    //TeleMainButtonStr=TeleMainButton.innerText;
    TeleMainButtonStr = TeleMainButton.title;
    buttonParams = {
        text: TeleMainButtonStr,
        color: Telegram.WebApp.themeParams.hint_color,
        text_color: Telegram.WebApp.button_text_color,
        is_active: false,
        is_visible: true,
    };
    console.log("buttonParams", buttonParams);
    pluginInstance.MainButton.setParams(buttonParams);
    Telegram.WebApp.onEvent('mainButtonClicked', function () {
        console.log('Main button clicked!');
        TeleMainButton.click();
        //processClient();
        // navigateToSubpage();
        // tg.sendData("some string that we need to send"); 
        //при клике на основную кнопку отправляем данные в строковом виде
    });
}
// pluginInstance.on('mainButton:click', () => {
//     // Code to execute when the main button is clicked
//     console.log('Main button clicked!');
// });
