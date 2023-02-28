import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar , IonItem, IonList, IonSelect, IonSelectOption , IonRange } from '@ionic/react';

const LibraryPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Library</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonList>
      <IonItem>
        <IonSelect placeholder="Select fruit">
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonRange pin={true} pinFormatter={(value: number) => `${value}%`}></IonRange>
    </IonContent>
  </>
);

export default LibraryPage;
