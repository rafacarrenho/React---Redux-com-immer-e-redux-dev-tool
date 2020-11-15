import { COMPLETAR_AULA, COMPLETAR_CURSO, RESETAR_CURSO } from "./actionTypes";

export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });
