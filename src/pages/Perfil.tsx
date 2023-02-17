
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { lockClosedOutline, logoGoogle } from 'ionicons/icons';
import '../css/Perfil.css';

function Perfil () {

  return (
    <IonPage  id='contenido'>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
   

      <IonButton id='botones'>
        Registrarse
        <IonIcon slot="end" icon={lockClosedOutline}></IonIcon>
      </IonButton>

      <IonButton color="danger" id='botones'>
        Registrarse con Google
        <IonIcon slot="end" icon={logoGoogle}></IonIcon>
      </IonButton>

      <IonLabel id='text'>¿Ya tienes una cuenta?</IonLabel>
      
      
      </IonContent>
    </IonPage>
  );
};

export default Perfil;

