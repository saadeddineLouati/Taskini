import { action } from "../";

export const setModal = action(
  ({ active, content, width }) => ({ modalContent, modalWidth }) => ({
    modalActive: active,
    modalContent: content || modalContent,
    modalWidth: width || modalWidth
  })
);
