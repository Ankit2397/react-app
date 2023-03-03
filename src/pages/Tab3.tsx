import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center  ion-text-uppercase" >Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
        <ExploreContainer name="Contact Us" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
