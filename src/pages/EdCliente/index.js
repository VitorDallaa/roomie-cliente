import React from "react";
import { Menucima } from "../../components/Menu-cima";
//import Navbar from "../../components/NavBar";
import { ModalCadastro } from "../../components/ModalCadastro";
import "./style.css";

function Edicao(){

 return (
    
<main>

<div className="menu">
<section className="menucima">
    <Menucima />
    </section> 
</div>



   {/*  <div class="form-image">
    <img src="../../../public/perfil.jpg" alt="Minha Figura"  />
    </div> */}


    <div id="main-container">
        <h1>Editar Cadastro</h1>
        <br/>
        <div class="half-box spacing">
        <label for="telefone">Telefone</label>
        <input type="text" name="telefone" id="telefone"></input>
      </div>

        <div class="dados">
            <div class="container"> 
                <div class="half-box">
                    <label for="name">CEP</label>
                    <input type="text" name="cep" id="cep"></input>
                </div>
                <div class="half-box">
                    <label for="numero">Numero</label>
                    <input type="text" name="numero" id="numero"></input>
                </div>
            </div>
            <div class="container">
                <div class="half-box spacing">
                <label for="lastname">Rua</label>
                <input type="text" name="rua" id="rua"></input>
             </div>
                <div class="half-box spacing">
                <label for="lastname">Bairro</label>
                <input type="text" name="bairro" id="bairro"></input>
                 </div>
            </div>
        </div>
      
      <div class="full-box">
        <label for="lastname">Senha</label>
        <input type="password" name="password" id="senha" ></input>
      </div>
      


      <div class="button-atualizar">
        <input id="btn-submit" type="buttonatualizar" value="Atualizar"></input>
      </div>

      <div class="button-cancelar">
      <input id="buttoncancelar" type="buttoncancelar" value="Cancelar"></input>
        </div>
     
     
    </div>


  </main>  
  

 
        

 );
}


export default Edicao;