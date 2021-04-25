import React, { useState } from "react";
import './AppLista.css';

function AppLista() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="AppLista">
      <form>
        <div>
          <p>
            Digite o nome:
          </p>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome Completo"
          />
        </div>
        <div>
          <p>
            Digite o telefone:
          </p>
          <input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="00-00000-0000"
          />
        </div>
      </form>
      <div className="Centralizar">
        <div className="Result">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>
    </div>
  );
}

export default AppLista;
