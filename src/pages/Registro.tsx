import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { lockClosedOutline, lockOpenOutline, logoGoogle } from 'ionicons/icons';
import { useState } from 'react';
import '../css/Perfil.css';
import {registerUser} from '../firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Registro () {

  const[busy,setBusy]=useState<boolean>(false)
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[cpassword,setCPassword]=useState('');
  const[checkbox,setCheck]=useState(false);
  const [toast] = useIonToast()

  const RegistrarGoogle=async()=>{
    try{
      const auth=getAuth();
      const googleProvider=new GoogleAuthProvider();
      await signInWithPopup(auth,googleProvider);
      toast("Registro con Google completado.",2000)
    }catch(error){
      return false
    }
  }
  async function register(){
    //Validación
    if(password!==cpassword){
      return toast("Las contraseñas no coinciden.",2000)
    }

    if(username.trim()===''){
      return toast("Email requerido.",2000)
    }

    if(password.trim()===''){
      return toast("Contraseña requerida.",2000)
    }

    if(checkbox===false){
      return toast("Debes aceptar los términos y condiciones de uso.",2000)
    }
    setBusy(true)
    const res=await registerUser(username,password)
    if(!res){
      toast('Registro fallido.',2000)
    }else{
      toast('Registro completado con éxito.',2000)
    }
    setBusy(false)
  }
  
  return (
    <IonPage  id='contenido'>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonLoading message="Cargando..." duration={0} isOpen={busy}/>
        <IonLabel id='texto'>Registrarse</IonLabel>
        <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='email'>Email</IonLabel>
        <IonInput 
        placeholder="Introduce email" 
        id='email'
        onIonChange={(e: any)=>setUsername(e.target.value)}/>
      </IonItem>

      <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='pass'>Contraseña</IonLabel>
        <IonInput 
        type="password" 
        placeholder="Introduce tu contraseña" 
        id='pass'
        onIonChange={(e: any)=>setPassword(e.target.value)}/>
      </IonItem>

      <IonItem fill="outline" id='caja'>
        <IonLabel position="floating" id='pass'>Repetir contraseña</IonLabel>
        <IonInput 
        type='password'
        placeholder="Repite tu contraseña" 
        id='pass'
        onIonChange={(e: any)=>setCPassword(e.target.value)}/>
      </IonItem>

      <IonItem>
        <IonCheckbox slot="start"
        onIonChange={(e:any)=>setCheck(e.target.value)}></IonCheckbox>
        <IonLabel>Acepto los términos y condiciones de uso.</IonLabel>
      </IonItem>

      <IonButton id='botones' onClick={register}>
        Registrarse
        <IonIcon slot="end" icon={lockClosedOutline}></IonIcon>
      </IonButton>

      <IonButton color="danger" id='botones' onClick={RegistrarGoogle}>
        Registrarse con Google
        <IonIcon slot="end" icon={logoGoogle}></IonIcon>
      </IonButton>

      <IonLabel id='text'>¿Ya tienes una cuenta?</IonLabel>
      
      <IonButton id='botones' routerLink='/InicioSesion'>
        Iniciar sesión
        <IonIcon slot="end" icon={lockOpenOutline}></IonIcon>
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Registro;

