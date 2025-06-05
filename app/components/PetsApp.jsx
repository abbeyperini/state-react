import { PetProvider } from '../PetContext';
import { Pets } from './Pets';
import { Shiba } from './Shiba';

export function PetsApp() {
  // child components can be deeply nested and still access the context
  return (
    <PetProvider>
      <Pets />
      <Shiba />
    </PetProvider>
  );
}