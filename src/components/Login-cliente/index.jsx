import React from "react";
import Input from "../Input-form";
import "./style.css";

export function LoginCliente() {
    return (
        <header>
            <img width={400} src="./logo.svg" alt="Roomie" />

            <form>
                <span>Login</span>
                <Input type="email" size="70" />

                <span>Senha</span>
                <Input type="password" size="70" />
                <div><a href="*">Esqueci minha senha</a></div>
                <button type="submit" value="Submit" className="Login-button">Entrar</button>
            </form>


            <button type="google" value="Submit" className="Login-Google">Entrar com Google</button>
            <button type="google" value="Submit" className="Login-Facebook">Entrar com Facebook</button>
        </header>
    );
}


