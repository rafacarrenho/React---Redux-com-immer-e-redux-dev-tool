import produce from "immer";

import {
  INCREMENTAR_TEMPO,
  MODIFICAR_EMAIL,
  REDUZIR_TEMPO,
} from "../actions/actionTypes";

const initialState = {
  nome: "Rafael Carrenho",
  email: "rafael.carrenho@hotmail.com",
  diasRestantes: 120,
};

const alunoReducers = produce(
  (state, action) => {
    switch (action.type) {
      case INCREMENTAR_TEMPO:
        state.diasRestantes++;
        break;
      case REDUZIR_TEMPO:
        state.diasRestantes--;
        break;
      case MODIFICAR_EMAIL:
        state.email = action.payload;
        break;
      default:
        return state;
    }
  },
  { ...initialState }
);

export default alunoReducers;
