const Card = () => {
  return (
    <div>
      <button className="btn" onClick={() => window.my_modal_2.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
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
