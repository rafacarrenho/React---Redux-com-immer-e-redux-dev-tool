import { createStore, combineReducers } from "redux";
import alunoReducers from "./reducers/aluno";
import aulasReducers from "./reducers/aulas";

const reducers = combineReducers({
  aluno: alunoReducers,
  aulas: aulasReducers,
});

const storeConfig = () => {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default storeConfig;
