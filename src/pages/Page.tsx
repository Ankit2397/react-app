import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,IonTitle, IonToolbar,IonToggle, IonLabel,IonItem ,IonIcon } from '@ionic/react';
import { useParams } from 'react-router';
import { moon } from "ionicons/icons";
import react from "react"

import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import React from 'react';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
            {/* <IonIcon
              slot="start" icon={moon} className="component-icon component-icon-dark" /> */}
            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>

           
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
