import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton ,IonIcon,  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { personCircle , search} from 'ionicons/icons';
import React, { useState, useEffect } from 'react';


const Tab3: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = [];
    for (let i = 1; i < 51; i++) {
      newItems.push(`Item ${items.length + i}`);
    }
    setItems([...items, ...newItems]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={search}></IonIcon>
          </IonButton> </IonButtons>
          <IonTitle class="ion-text-center">Followingg</IonTitle>
          <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only"  icon={personCircle}></IonIcon>
          </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem key={item}>
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' +  index} alt="avatar" />
            </IonAvatar>
            <IonLabel className="ion-margin-start">{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll>
        <IonInfiniteScrollContent loadingText="Please wait...." loadingSpinner="bubbles"></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
    </IonPage>
  );
};

export default Tab3;


