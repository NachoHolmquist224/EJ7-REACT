const ItemEmpleado = ({ nombre, puesto, departamento }) => {
  return (
    <>
      <div className="d-flex align-items-center p-2">
        <div>
          <img
            src="https://images.pexels.com/photos/32703420/pexels-photo-32703420.jpeg"
            className="img"
          />
        </div>
        <div className="ms-2 d-flex flex-column column-gap-0 fs-3">
          <div>
            <p>{nombre}</p>
          </div>
          <div className="d-flex column-gap-1">
            <div>
              <p>{puesto}</p>
            </div>
            <div>
              <button className="btn btn-info">{departamento}</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ItemEmpleado;