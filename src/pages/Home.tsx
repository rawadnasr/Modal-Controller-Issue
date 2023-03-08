import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';

const ModalContent: React.FC = () => {
  return (
      <IonContent>
        <div>Modal Content</div>
      </IonContent>
  )
}

const Home: React.FC = () => {
  const [presentIonicModal] = useIonModal(ModalContent)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton
        expand='block'
        className='ion-margin'
          onClick={() => presentIonicModal()}
        >
          Open
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
