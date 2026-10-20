import Cella from "./Cella";

interface SorProps {
  sor: boolean[];
  sorIndex: number;
  cellaKattintas: (sor: number, oszlop: number) => void;
}

export default function Sor({ sor, sorIndex, cellaKattintas }: SorProps) {
  return (
    <div className="sor">
      {sor.map((e, oszlopIndex) => (
        <Cella
          vilagit={e}
          index={oszlopIndex}
          key={oszlopIndex}
          cellaKattintas={() => cellaKattintas(sorIndex, oszlopIndex)}
        />
      ))}
    </div>
  );
}
