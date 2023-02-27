import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Alert from '../components/Alert';

const HomePage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Listen now</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Listen now content
      </div>
      <Alert/>
    </IonContent>
  </>
);

export default HomePage;