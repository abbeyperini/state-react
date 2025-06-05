import { usePets, usePetDispatch, actions } from '../PetContext.jsx';

export function Pets() {
  const pets = usePets();
  const petDispatch = usePetDispatch();
  return (
    <div>
      <p>{ pets }</p>
      <button onClick={() => petDispatch(actions.pet)} >Pet the Shiba</button>
    </div>
  )
}