import Sor from "./Sor";

interface JatekTerProps {
  lista: boolean[][];
  cellaKattintas: (sor: number, oszlop: number) => void;
}

export default function JatekTer({ lista, cellaKattintas }: JatekTerProps) {
  return (
    <div className="jatekTer">
      {lista.map((e, i) => {
        return (
          <Sor sor={e} sorIndex={i} key={i} cellaKattintas={cellaKattintas} />
        );
      })}
    </div>
  );
}
