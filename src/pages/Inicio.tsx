import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { lockClosedOutline, lockOpenOutline, logoGoogle } from 'ionicons/icons';
import '../css/Inicio.css';


function Inicio () {
 
  return (
    <IonPage  id='contenido'>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel id='texto'>Iniciar sesión</IonLabel>
        <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='email'>Email</IonLabel>
        <IonInput placeholder="Introduce email" id='email'></IonInput>
      </IonItem>

      <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='pass'>Contraseña</IonLabel>
        <IonInput placeholder="Introduce tu contraseña" id='pass'></IonInput>
      </IonItem>

      <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='pass'>Repetir contraseña</IonLabel>
        <IonInput placeholder="Repite tu contraseña" id='pass'></IonInput>
      </IonItem>

      <IonItem>
        <IonCheckbox slot="start"></IonCheckbox>
        <IonLabel>Acepto los términos y condiciones de uso.</IonLabel>
      </IonItem>
      <IonButton id='botones'>
        Iniciar sesión
        <IonIcon slot="end" icon={lockOpenOutline}></IonIcon>
      </IonButton>

      <IonButton id='botones'>
        Registrarse
        <IonIcon slot="end" icon={lockClosedOutline}></IonIcon>
      </IonButton>

      <IonButton color="danger" id='botones'>
        Iniciar con Google
        <IonIcon slot="end" icon={logoGoogle}></IonIcon>
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
