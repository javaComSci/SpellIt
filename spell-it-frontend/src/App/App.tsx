import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { PageLayout } from '../PageLayout/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { UserHome } from '../UserHome/UserHome';
import { SpellItDrawing } from '../SpellItDrawing/SpellItDrawing';
import { EditWords } from '../EditWords/EditWords';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <AuthenticatedTemplate>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<UserHome/>} />
              <Route path="/editwords" element={<EditWords/>} />
            </Routes>
            </BrowserRouter>
            
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          < SpellItDrawing />
        </UnauthenticatedTemplate> 
      </PageLayout>
    </div>
  );
}

export default App;
