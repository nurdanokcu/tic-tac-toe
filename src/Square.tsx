type PropsSquare = {
  value: string | null;
  onSquareClick: () => void;
};
export const Square:React.FC<PropsSquare> = ({ value, onSquareClick }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
