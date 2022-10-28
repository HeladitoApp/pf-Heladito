import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import HeaderComponent from "../../componentes/chatBot/Header";
import steps from '../../config/steps';
import chat_styles from '../../config/chatstyles'
import botAvatar from '../../assets/bot.jpg'
import botUsuario from '../../assets/usuario.png'



 const Chat = () => {
  
    return (
      <div className="App">
        <div className="container content">
          <div className="row justify-content-md-center">
            <div className="col">
              <ThemeProvider theme={chat_styles}>
                
                <ChatBot  steps={steps}
                  userAvatar={botUsuario}
                  /* headerComponent={<HeaderComponent />} */
                  headerTitle="Boty-Heladito"
                  placeholder="Escribe algo..."
                  customDelay="500"
                  botAvatar={botAvatar}
                  floating="true"
                  width="700px">
                 
                  </ChatBot>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default Chat; 