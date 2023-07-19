import React, { useState } from 'react';

const ExemploComponente = () => {
  // Estado para armazenar o valor dinâmico
  const [contador, setContador] = useState(0);

  // Função para aumentar o contador quando o botão é clicado
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Exemplo de Contador</h1>
      <p>Valor do Contador: {contador}</p>
      <button onClick={aumentarContador}>Clique para aumentar</button>
    </div>
  );
};

export default ExemploComponente;