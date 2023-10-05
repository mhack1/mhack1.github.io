//import {webAppMainButtonPlugin} from './App-Interact'; 
const webAppMainButtonPlugin = {
    name: 'WebAppMainButton',
  
    create() {
      Telegram.WebApp.MainButton.onClick(() => this.emit('mainButton:click'));
    },
  
    
    // instance: {
        MainButton: {
          setParams(params) {
            Telegram.WebApp.MainButton.setParams(params);
          },
        },
    //  },
    on(event, callback) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(callback);
    },
    
    emit(event, data) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach(callback => callback(data));
        }
    }
  }
console.log("on script of cart")
//const webAppMainButtonPlugin=require('./MainBtnPlugIn');
 const pluginInstance = webAppMainButtonPlugin;
 pluginInstance.create();

const buttonParams = {
  text: "payment",
      color: Telegram.WebApp.themeParams.button_color,
      text_color: Telegram.WebApp.button_text_color,
      is_active: true,
      is_visible: true,
};

pluginInstance.MainButton.setParams(buttonParams);
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    console.log('Main button clicked!');
    navigateToSubpage();
    // tg.sendData("some string that we need to send"); 
    //при клике на основную кнопку отправляем данные в строковом виде
 });
// pluginInstance.on('mainButton:click', () => {
//     // Code to execute when the main button is clicked
//     console.log('Main button clicked!');
// });
  