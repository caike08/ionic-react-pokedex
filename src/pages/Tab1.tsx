import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton, } from '@ionic/react';
import Pokemon from '../components/Pokemon/Pokemon'
import './Tab1.scss';
import axios from 'axios';

const Tab1: React.FC = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.data)
      .then(data => setPokemon(data.results));
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Pokedex</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">React Pokedex</IonTitle>
          </IonToolbar>
        </IonHeader>
        { pokemon && pokemon.map((each, key) => {
          return <Pokemon key={key} pokemon={each} customOnClick={() => setShowModal(true)} />
        })}
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
