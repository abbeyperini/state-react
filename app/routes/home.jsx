import { PetsApp } from '../components/PetsApp';
import { ShibaCounter } from '../components/ShibaCounter';

export function meta({}) {
  return [
    { title: "React State Examples" },
    { name: "description", content: "React Context and Redux examples" },
  ];
}

export default function Home() {
  // return <PetsApp />;
  return <ShibaCounter />;
}
