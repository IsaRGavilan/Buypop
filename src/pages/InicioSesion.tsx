import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { lockClosedOutline, lockOpenOutline, logoGoogle } from 'ionicons/icons';
import { loginUser } from '../firebaseConfig';
import '../css/Inicio.css';
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


function InicioSesion () {

  const[busy,setBusy]=useState<boolean>(false)
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');

  function PantallaPrincipal(){
    window.open("/Categorias","_self");
  }
  const [toast] = useIonToast()

  const iniciarGoogle=async()=>{
    try{
      const auth=getAuth();
      const googleProvider=new GoogleAuthProvider();
      await signInWithPopup(auth,googleProvider);
      toast("Inicio de sesión correcto.",2000)
      PantallaPrincipal();
    }catch(error){
      return false
    }
  }
  async function login() {
    setBusy(true)
    const res = await loginUser(username, password);
    if(!res){
      toast("El email o contraseña proporcionados no existen.", 3000)
    } else {
      toast("Inicio de sesión correcto", 2000)
    }
    setBusy(false)
  }

  function resetPass(){
    window.open("/ResetPass","_self");
  }
  return (
    <IonPage  id='contenido'>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Cargando..." duration={0} isOpen={busy}/>
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

      <IonButton id='botones' onClick={login}>
        Iniciar sesión
        <IonIcon slot="end" icon={lockOpenOutline}></IonIcon>
      </IonButton>

      <IonButton id='botones' onClick={resetPass}>
        He olvidado mi contraseña 
        <IonIcon slot="end" icon={lockOpenOutline}></IonIcon>
      </IonButton>

      <IonButton color="danger" id='botones' onClick={iniciarGoogle}>
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
