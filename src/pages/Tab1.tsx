import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton ,IonIcon,IonButtons ,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle} from '@ionic/react';
import './Tab1.css';
import { personCircle , search} from 'ionicons/icons';
import axios from "axios";
import React, { Component ,useState , useEffect } from 'react';




const ForYou: React.FC = () => {
  const [eventDetails, setEventDetails] = useState([])
function getEvents() {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9cf36048a4082b7fd3d85e644f863")
        .then(response => response.data)
        .then((data) => {
            setEventDetails(data)
            console.log(data)
            const FinalData = JSON.parse(data)
         
        });
}
useEffect(()=>{
    getEvents();
},[])
console.log(eventDetails)
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={search}></IonIcon>
          </IonButton> </IonButtons>
          <IonTitle class="ion-text-center">For You</IonTitle>
          <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only"  icon={personCircle}></IonIcon>
          </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="wrapper">
        <div className="links-container">
     <ul className="links-details">
     <li className="links-item"><a>BBC News</a></li>
     <li className="links-item"><a>CNN</a></li>
     <li className="links-item"><a>EONLINE</a></li>
     <li className="links-item"><a>CNBC</a></li>
   </ul>
 </div>


 <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less..
      </IonCardContent>
    </IonCard>




 </div>
      </IonContent>
    </IonPage>
  );
};

export default ForYou;



      
   