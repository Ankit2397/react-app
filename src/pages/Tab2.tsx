import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton ,IonIcon,IonButtons,IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { personCircle , search} from 'ionicons/icons';
import React from 'react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={search}></IonIcon>
          </IonButton> </IonButtons>
          <IonTitle class="ion-text-center">Headliness</IonTitle>
          <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only"  icon={personCircle}></IonIcon>
          </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader>
      <IonTitle class="ion-text-center ion-padding-vertical">Contact Form</IonTitle>
        </IonHeader>
      <IonList>
      <IonItem>
        <IonLabel>Text</IonLabel>
        <IonInput placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Number</IonLabel>
        <IonInput type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Password</IonLabel>
        <IonInput type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Email</IonLabel>
        <IonInput type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Telephone</IonLabel>
        <IonInput type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
    </IonList>

    
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

// class MyClass {
//   constructor(public storage: Storage) {}

//   async setData(key, value) {
//     const res = await this.storage.set(key, value);
//     console.log(res);
//   }

//   async getData(key) {
//     const keyVal = await this.storage.get(key);
//     console.log('Key is', keyVal);
//   }
// }


