//import {webAppMainButtonPlugin} from './App-Interact'; 
const webAppMainButtonPlugin = {
    name: 'WebAppMainButton',
  
    create() {
      Telegram.WebApp.MainButton.onClick(() => this.emit('mainButton:click'));
    },
  
    instance: {
      MainButton: {
        setParams(params) {
          Telegram.WebApp.MainButton.setParams(params);
        },
      },
    },
  }
console.log("on script of cart")
//const webAppMainButtonPlugin=require('./MainBtnPlugIn');
 const pluginInstance = webAppMainButtonPlugin.create();
const buttonParams = {
  text: "payment",
      color: Telegram.WebApp.themeParams.button_color,
      text_color: Telegram.WebApp.button_text_color,
      is_active: true,
      is_visible: true,
};

pluginInstance.MainButton.setParams(buttonParams);

pluginInstance.on('mainButton:click', () => {
    // Code to execute when the main button is clicked
    console.log('Main button clicked!');
});
  