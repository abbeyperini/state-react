import { createContext, useReducer, useContext } from 'react';

// create the store
export const PetContext = createContext(null);

// create the dispatch
export const PetDispatchContext = createContext(null);

export const actions = {
  pet: "PET",
}

// create a wrapper component to combine both providers, connect the reducer, and provide initial values
export function PetProvider({children}) {
  const [pets, dispatch] = useReducer(petsReducer, 0);

  return (
    <PetContext value={pets}>
      <PetDispatchContext value={dispatch}>
        { children }
      </PetDispatchContext>
    </PetContext>
  ) 
}

export function usePets() {
  return useContext(PetContext);
}

export function usePetDispatch() {
  return useContext(PetDispatchContext);
}

// create the reducer
function petsReducer(pets, action) {
  if (action === actions.pet) return ++pets;
}