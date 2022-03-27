import React from 'react';
import './App.css';
import { PageLayout } from '../PageLayout/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { UserHome } from '../UserHome/UserHome';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <AuthenticatedTemplate>
          <UserHome />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <h2 style={{backgroundColor:'pink'}}>
          Spell It is an application that allows you to enter in words
          that you would like to practice how to spell, and will train 
          you on spelling these words in an efficient manner. To move forward,
          please sign in!
          </h2>
        </UnauthenticatedTemplate> 
      </PageLayout>
    </div>
  );
}

export default App;
