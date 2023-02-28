import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonSlides, IonSlide} from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const RadioPage: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Radio</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Slide 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
  </>
);

export default RadioPage;
