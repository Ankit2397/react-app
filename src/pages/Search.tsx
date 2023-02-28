import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar , IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';

function SearchPage (){
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  return(
  <>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Pull to Refresh</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <p>Pull this content down to trigger the refresh.</p>
      </IonContent>
  </>
);
  }

export default SearchPage;