import '../css/ResetPass.css';
import { useState } from 'react';
import { useIonToast, IonPage, IonHeader, IonToolbar, IonTitle, IonLoading, IonContent, IonLabel, IonItem, IonInput, IonButton, IonIcon } from '@ionic/react';
import {sendOutline } from 'ionicons/icons';


function ResetPass () {

  const[busy,setBusy]=useState<boolean>(false)
  const[username,setUsername]=useState('');
  const [toast] = useIonToast()

  function reset(){
    toast("Se le ha enviado un correo de recuperación a su email.",2000)
  }

  return (
    <IonPage  id='contenido'>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Cambio de contraseña</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Cargando..." duration={0} isOpen={busy}/>
      <IonContent fullscreen>
        <IonLabel id='texto'>Cambio de contraseña</IonLabel>
        <IonLabel id='texto2'>Si su email está registrado en la aplicación se le enviará un correo de recuperación.</IonLabel>
        <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='email'>Email</IonLabel>
        <IonInput placeholder="Introduce email" id='email'
        onIonChange={(e: any)=>setUsername(e.target.value)}/>
      </IonItem>

      <IonButton id='botones' onClick={reset}>
        Enviar
        <IonIcon slot="end" icon={sendOutline}></IonIcon>
      </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default ResetPass;
