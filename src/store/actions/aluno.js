import {
  INCREMENTAR_TEMPO,
  MODIFICAR_EMAIL,
  REDUZIR_TEMPO,
} from "./actionTypes";

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});
