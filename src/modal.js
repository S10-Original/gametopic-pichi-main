import React, { Component } from 'react';
import './assests/styles/navbar.css';

class Modal extends Component {
    render(){
        return(
            <div className='modal' id='myModal'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        
                        <div className='modal-header'>
                            <h5 className='modal-title col-11 text-center'>Iniciar Sesión</h5>
                            <button type='button' className='close' data-dismiss='modal'>&times;</button>
                        </div>

                        <div className='d-flex flex-column text-center'>
                            <form>

                                <div className='form-outline mb-4'>
                                    <input type='email' id='form2Example1' className='form-control' />
                                    <label className='form-label' for='form2Example1'>Nombre de Usuario</label>
                                </div>

                                <div className='form-outline mb4'>
                                    <input type="password" id="form2Example2" className="form-control" />
                                    <label className="form-label" for="form2Example2">Contraseña</label>
                                </div>

                                <button className="btn btn-info btn-lg btn-block" type="button" id="login-btn">Ingresar</button>

                            </form>
                        </div>

                        <div className='modal-footer modal-footer-centered'>
                            <p>¿Olvidaste tu contraseña?</p>
                            <a href='/registro.html'><p>¿No tienes una cuenta? Regístrate aquí</p></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;




/*const str = `
<!-- Modal -->
   <div class="modal" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content"
        >

            <!-- Modal header -->
            <div class="modal-header">
                <h5 class="modal-title col-11 text-center">Iniciar Sesión</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="d-flex flex-column text-center">
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Nombre de usuario</label>
                      </div>
                    
                      <!-- Password input -->
                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Contraseña</label>
                      </div>
                      <button class="btn btn-info btn-lg btn-block" type="button" id="login-btn">Ingresar</button>
                    </form>
            </div>
            <!-- Modal footer -->
            <!----><div class="modal-footer modal-footer-centered">
                    <a href="recup-pass.html"><p>¿Olvidaste tu contraseña?</p></a>
                    <a href="registro.html"><p>¿No tienes una cuenta? Regístrate aquí</p></a>
                    </div>

        </div>
    </div>
</div>


`
document.body.insertAdjacentHTML("afterend", str);*/
