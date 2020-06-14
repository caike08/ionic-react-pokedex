import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import './Pokemon.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: any;
  customOnClick?: () => void;
}

const Pokemon: React.FC<ContainerProps> = ({ pokemon, customOnClick }) => {
  return (
    <IonList>
      <IonItem onClick={customOnClick}>
        <IonLabel className='pokemon-name'>{pokemon.name}</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Pokemon;