import React, { useEffect } from "react";
import TaskList from "./lists/TaskList";
import Settings from "./settings/Settings";

/**
 * Función anónima para crear un componente principal
 * @returns {React.Component} Componentente principal de la aplicación
 */
const App = () => {
  const [dark, setDark] = React.useState(false);
  /**
   * Documentación del useEffect
   * Se crea una variable de estado donde se almacena el valor de la configuración en localStorage
   */

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem("config"));
    setDark(config.theme);
  }, []);

  /**
   * Función para intercambiar la variable de estado light <-> dark
   */

  const toggleDark = () => setDark(!dark);

  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <TaskList />
      <hr style={{ marginTop: 20, marginBottom: 20 }} />
      <Settings toggleDark={toggleDark} />
    </div>
  );
}

export default App;
