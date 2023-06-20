import { useNavigate } from "react-router-dom";

const Card = ({ barrio }) => {
  const navigate = useNavigate();

  const goToBarrio = (barrio) => {
    navigate(`/barrio/${barrio.id}`);
  };
  return (
    <div key={barrio.id}>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{barrio.nombre}</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <span className="btn" onClick={() => goToBarrio(barrio)}>
            Mas Info
          </span>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default Card;
