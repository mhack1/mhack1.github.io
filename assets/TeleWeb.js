//import {webAppMainButtonPlugin} from './App-Interact'; 

console.log("on script of cart")
//const webAppMainButtonPlugin=require('./MainBtnPlugIn');

TeleMainButton = document.getElementById("TeleMainButton");
if (TeleMainButton) {
  //TeleMainButtonStr=TeleMainButton.innerText;
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
  Telegram.WebApp.onEvent('mainButtonClicked', function () {
    console.log('Main button clicked!');
    navigateToSubpage();
    // tg.sendData("some string that we need to send"); 
    //при клике на основную кнопку отправляем данные в строковом виде
  });
}
// pluginInstance.on('mainButton:click', () => {
//     // Code to execute when the main button is clicked
//     console.log('Main button clicked!');
// });
