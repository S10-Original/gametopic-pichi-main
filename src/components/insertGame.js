function Insertgame() {
    const [imagen, setImagen] = useState("");
    return(
        //str = `
        <div className="container">
            <div className="row">
                <div className="col">
                <img className="img-thumbnail" src="images/2.png"/>
                <form onSubmit={ev => {
                    ev.preventDefault();
                }}>
                    <input 
                    className="mt-3" 
                    value={imagen}
                    onChange={ev => setImagen(ev.target.value)}
                    name="imagen" 
                    type="file" 
                    accept=".jpg, .jpeg, .png" 
                    required>Insertar Imagen</input>
                </form>
            </div>
            <div className="col">
                <form>
                    <label for="titulo">Titulo del juego</label><br></br>
                    <input type="text" name="titulo" id=""></input>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Insertgame;