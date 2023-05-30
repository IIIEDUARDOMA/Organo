import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
   const times = [
      "",
      "Programação",
      "Front-End",
      "Data Science",
      "Devops",
      "UX e Design",
      "Mobile",
      "Inovação e Gestão",
   ];

   const [nome, setNome] = useState("");
   const [cargo, setCargo] = useState("");
   const [imagem, setImagem] = useState("");
   const [time, setTime] = useState("");

   const aoSalvar = (evento) => {
      evento.preventDefault();
      console.log("O formulario foi submetido =>", nome, cargo, imagem, time);
   };

   return (
      <section className="formulario">
         <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto
               required={true}
               label="Nome"
               placeholder="Digite seu nome"
               valor={nome}
               aoAlterado={(valor) => setNome(valor)}
            />
            <CampoTexto
               required={true}
               label="Cargo"
               placeholder="Digite seu cargo"
               valor={cargo}
               aoAlterado={(valor) => setCargo(valor)}
            />
            <CampoTexto
               label="Imagem"
               placeholder="Informe o endereço da imagem"
               valor={imagem}
               aoAlterado={(valor) => setImagem(valor)}
            />
            <ListaSuspensa
               required={true}
               label="Time"
               itens={times}
               valor={time}
               aoAlterado={(valor) => setTime(valor)}
            />
            <Botao>Criar Card</Botao>
         </form>
      </section>
   );
};

export default Formulario;
