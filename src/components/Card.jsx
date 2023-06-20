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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Quieres conocer mas a nuestro barrio?</p>
          <span className="btn">Mas Info</span>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default Card;
