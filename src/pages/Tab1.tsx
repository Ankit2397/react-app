import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DarkMode from '../components/DarkMode';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="Toolbar">
       
          <IonTitle className="Toolbar-title ion-text-center  ion-text-uppercase">Home </IonTitle>
       
        </IonToolbar>
    
      </IonHeader>
      <IonContent>
    
        <ExploreContainer name="Home" />
        <DarkMode/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
