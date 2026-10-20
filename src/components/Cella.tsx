interface CellaProps {
  vilagit: boolean;
  index: number;
  cellaKattintas: () => void;
}

export default function Cella({ vilagit, index, cellaKattintas }: CellaProps) {
  return (
    <div
      className={`cella ${vilagit ? "vilagit" : ""}`}
      onClick={cellaKattintas}
    >
      <p>{vilagit ? "true" : "false"}</p>
    </div>
  );
}
