import produce from "immer";
import {
  COMPLETAR_AULA,
  COMPLETAR_CURSO,
  RESETAR_CURSO,
} from "../actions/actionTypes";

const initialState = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "React",
    completa: false,
  },
];

const aulasReducers = produce(
  (state, action) => {
    switch (action.type) {
      case COMPLETAR_AULA:
        const index = state.findIndex((x) => x.id === action.payload);
        if (!isNaN(index) && state[index]) state[index].completa = true;
        break;
      case COMPLETAR_CURSO:
        state.forEach((aula) => (aula.completa = true));
        break;
      case RESETAR_CURSO:
        state.forEach((aula) => (aula.completa = false));
        break;
      default:
        return state;
    }
  },
  [...initialState]
);

export default aulasReducers;
