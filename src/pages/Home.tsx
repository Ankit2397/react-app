import React from 'react';
import { IonContent, IonHeader, IonTitle,IonLabel, IonInput , IonCheckbox , IonButton , IonItem } from '@ionic/react';
import Alert from '../components/Alert';

const HomePage = () => (
  <>
    <IonHeader>
      <IonTitle>HOME</IonTitle>
    </IonHeader>
    <IonContent>
      <form className="ion-padding">
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" />
      </IonItem>
      <IonItem lines="none">
        <IonLabel>Remember me</IonLabel>
        <IonCheckbox defaultChecked={true} slot="start" />
      </IonItem>
      <IonButton className="ion-margin-top" type="submit" expand="block">
        Login
      </IonButton>
    </form>
      {/* <Alert/> */}
    </IonContent>
  </>
);

export default HomePage;