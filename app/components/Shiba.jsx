import { usePets } from '../PetContext.jsx';
import sadShiba from '../images/sad-shiba.jpg';
import happyShiba from '../images/happy-shiba.jpg';
import goodbyeShiba from '../images/goodbye-shiba.jpg';

export function Shiba() {
  const pets = usePets();

  if (pets < 1) return (
    <img src={sadShiba} alt="a shiba wet and sad in the rain" />
  )
  if (pets >= 1 && pets <= 10) return (
    <img src={happyShiba} alt="a smiling happy shiba in a bowtie" />
  )
  if (pets > 10) return (
    <img src={goodbyeShiba} alt="a shiba sitting and facing away from the camera" />
  )
}