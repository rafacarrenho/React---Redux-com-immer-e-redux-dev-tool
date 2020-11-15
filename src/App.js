import "./App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
} from "./store/actions/aluno";
import {
  completarAula,
  completarCurso,
  resetarCurso,
} from "./store/actions/aulas";

function App({
  aluno,
  aulas,
  incrementarTempo,
  reduzirTempo,
  completarCurso,
  resetarCurso,
  modificarEmail,
}) {
  const [newEmail, setNewEmail] = useState("");
  return (
    <div className="App">
      <h1>{aluno.nome}</h1>
      <h2>{aluno.email}</h2>
      <label htmlFor="">
        Mudar E-mail:{" "}
        <input
          type="text"
          value={newEmail}
          onChange={({ target }) => setNewEmail(target.value)}
        />
      </label>
      <button onClick={() => modificarEmail(newEmail)}>Mudar email</button>
      <h3>Dias restantes: {aluno.diasRestantes}</h3>
      <button onClick={reduzirTempo}>Reduzir Tempo</button>
      <button onClick={incrementarTempo}>Adicionar Tempo</button>
      <h4>
        Cursos Completos:
        {aulas && aulas.filter((aula) => aula.completa === true).length}
      </h4>
      <button onClick={completarCurso}>Completar Curso</button>
      <button onClick={resetarCurso}>Resetar Curso</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    aulas: state.aulas,
    aluno: state.aluno,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementarTempo(payload) {
      const action = incrementarTempo(payload);
      dispatch(action);
    },
    reduzirTempo(payload) {
      const action = reduzirTempo(payload);
      dispatch(action);
    },
    completarCurso() {
      const action = completarCurso();
      dispatch(action);
    },
    resetarCurso() {
      const action = resetarCurso();
      dispatch(action);
    },
    modificarEmail(payload) {
      const action = modificarEmail(payload);
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
