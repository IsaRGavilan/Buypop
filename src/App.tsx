import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, heartOutline, homeOutline, mailOutline, personOutline } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { initializeApp } from "firebase/app";
import './theme/variables.css';
import Inicio from './pages/Inicio';
import Favoritos from './pages/Favoritos';
import Subir from './pages/Subir';
import Perfil from './pages/Perfil';
import Mensajes from './pages/Mensajes';
import { useEffect } from 'react';

setupIonicReact();

const firebaseConfig = {
  apiKey: "AIzaSyCHpA5h3HLhj6QJCXkJv68UNf_Xj1R7eYM",
  authDomain: "buypopionic-1.firebaseapp.com",
  projectId: "buypopionic-1",
  storageBucket: "buypopionic-1.appspot.com",
  messagingSenderId: "746368513604",
  appId: "1:746368513604:web:f6d6f196828890a3c9ee11"
};


const App: React.FC = () => {

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
  }, []);

  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/Inicio">
            <Inicio/>
          </Route>

          <Route exact path="/Perfil">
            <Perfil />
          </Route>

          <Route exact path="/Favoritos">
            <Favoritos />
          </Route>

          <Route path="/Subir">
            <Subir />
          </Route>

          <Route path="/Mensajes">
            <Mensajes />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="primary">
          <IonTabButton tab="Inicio" href="/Inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Favoritos" href="/Favoritos">
            <IonIcon icon={heartOutline} />
            <IonLabel>Favoritos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Subir" href="/Subir">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Subir</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Mensajes" href="/Mensajes">
            <IonIcon icon={mailOutline} />
            <IonLabel>Mensajes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Perfil" href="/Perfil">
            <IonIcon icon={personOutline} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
}
export default App;
