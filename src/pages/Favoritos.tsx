import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import '../css/Favoritos.css';


  function Favoritos() {
    interface Product {
      id: number;
      title: string;
      image: string;
      category: string;
      description: string;
    }
    
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      async function fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      }
      fetchProducts();
    }, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="inset" id='lista'>
        {products.map((product) => (
        <IonItem>
          <IonCard id='carta'>
        <img alt="imagen" src={product.image} id='imagenes'/>
        <IonCardHeader>
          <IonCardTitle><h2 id='titulo'>{product.title}</h2></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <h2 id='categoria'>{product.category}</h2>
        </IonCardContent>
      </IonCard>
          </IonItem>
           ))}
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Favoritos;
