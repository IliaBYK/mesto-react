import {useState, memo} from "react";
import PopupWithForm from "./PopupWithForm";

const PopupConfirm = ({ isOpen, onClose, onSubmit }) => {

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    onSubmit().finally(() => setIsLoading(false));
  }
  return (
    <PopupWithForm name="confirm" title="Вы уверены?" textButton={isLoading ? "Сохранение" : "Да"} onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit}></PopupWithForm>
  )
}

export default memo(PopupConfirm);