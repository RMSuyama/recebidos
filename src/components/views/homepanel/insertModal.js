    import React from 'react';

    const InsertModal = () => {
      return (
        <>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Inserir novo registro
          </button>
    
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Inserir Novo Registro
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>
                <div className="modal-body">Nessa seção inserimos novos recebimentos ou novas despesas</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                    Inserir novo recebimento
                  </button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                    Inserir nova despesa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );  
    };
    
    export default InsertModal;
    

