import React from 'react';
import './App.css';
import { PageLayout } from '../PageLayout/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { UserHome } from '../UserHome/UserHome';
import { SpellItDrawing } from '../SpellItDrawing/SpellItDrawing';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <AuthenticatedTemplate>
          <UserHome />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          < SpellItDrawing />
        </UnauthenticatedTemplate> 
      </PageLayout>
    </div>
  );
}

export default App;
