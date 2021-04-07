import { createStore } from "redux";
import mockSintoma from "../mocks/mockSintoma";

const estadoInicial = mockSintoma;

function sintoma(state = estadoInicial, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(sintoma);
export default store;
