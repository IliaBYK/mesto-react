import PopupWithForm from "./PopupWithForm";

const PopupConfirm = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm name="confirm" title="Вы уверены?" textButton="Да" onClose={onClose} isOpen={isOpen}></PopupWithForm>
  )
}

export default PopupConfirm;