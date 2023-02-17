import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { lockClosedOutline, lockOpenOutline, logoGoogle } from 'ionicons/icons';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import '../css/Inicio.css';
import { useState } from 'react';

function InicioSesion () {

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');

  function loginUser(){
    console.log(username,password);
  }

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
        <IonInput placeholder="Introduce email" id='email'
        onIonChange={(e: any)=>setUsername(e.target.value)}/>
      </IonItem>

      <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='pass'>Contraseña</IonLabel>
        <IonInput type="password" 
        placeholder="Introduce tu contraseña" 
        id='pass'
        onIonChange={(e: any)=>setPassword(e.target.value)}/>
      </IonItem>

      <IonButton id='botones' onClick={loginUser}>
        Iniciar sesión
        <IonIcon slot="end" icon={lockOpenOutline}></IonIcon>
      </IonButton>

      <IonButton color="danger" id='botones'>
        Iniciar con Google
        <IonIcon slot="end" icon={logoGoogle}></IonIcon>
      </IonButton>

      <IonLabel id='text'>¿Aún no tienes una cuenta?</IonLabel>

      <IonButton id='botones' routerLink='/Registro'>
        Registrarse
        <IonIcon slot="end" icon={lockClosedOutline}></IonIcon>
      </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default InicioSesion;
