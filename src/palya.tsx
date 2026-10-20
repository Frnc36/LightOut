/* Tipp: méret állítása
Ha nagyobb/rácsosabb táblát szeretnél (pl. 5×5), csak a PALYA-t bővíted — a CSS automatikusan igazodik, mert a gap és a fix cellaméret gondoskodik róla.

Ha a cellákban a true/false helyett 💡/⚫ jelet szeretnél, csak írd át a Cella-ban:
{vilagit ? "💡" : "⚫"}
és növeld a font-size-t pl. 24px-re
*/
export const PALYA = [
  [true, false, true],
  [false, true, false],
  [true, true, false],
];
