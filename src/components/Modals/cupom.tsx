//CSS
import button from "../../styles/buttons.module.scss";
//Interfaces
import { PriceListItem } from "../Interfaces/GamePrice";

type propsGame = {
  data: PriceListItem;
};

export default function Cupom({ data }: propsGame) {
  const openModal = () => {
    const cupomModal = document.getElementById("cupom") as HTMLDialogElement;
    if (cupomModal) {
      cupomModal.showModal();
    }
  };

  return (
    <>
      <div className="end">
        <button className={`${button.cupom}`} onClick={openModal}>
          coupon
        </button>
      </div>

      <dialog id="cupom" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{data.coupon.code}</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
