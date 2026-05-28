import { useEffect, useState } from "react";
import "./App.css";

function App() {

    const API =
        "https://localhost:7223/api/gastos";

    const [gastos, setGastos] = useState([]);

    const [nome, setNome] = useState("");

    const [valor, setValor] = useState("");

    const [categoria, setCategoria] = useState("");

    async function carregarGastos() {

        const resposta =
            await fetch(API);

        const dados =
            await resposta.json();

        setGastos(dados);
    }

    async function adicionarGasto() {

        const gasto = {
            nome,
            valor: parseFloat(valor),
            categoria
        };

        await fetch(API, {

            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify(gasto)
        });

        carregarGastos();

        setNome("");
        setValor("");
        setCategoria("");
    }

    useEffect(() => {

        carregarGastos();

    }, []);

    return (

        <div className="container">

            <h1>ExpenseQuickSort</h1>

            <input
                placeholder="Nome"
                value={nome}
                onChange={(e) =>
                    setNome(e.target.value)}
            />

            <input
                placeholder="Valor"
                type="number"
                value={valor}
                onChange={(e) =>
                    setValor(e.target.value)}
            />

            <input
                placeholder="Categoria"
                value={categoria}
                onChange={(e) =>
                    setCategoria(e.target.value)}
            />

            <button onClick={adicionarGasto}>
                Adicionar
            </button>

            <h2>Ranking de Gastos</h2>

            {
                gastos.map((gasto, index) => (

                    <div
                        className="card"
                        key={index}
                    >

                        <h3>{gasto.nome}</h3>

                        <p>
                            R$ {gasto.valor}
                        </p>

                        <span>
                            {gasto.categoria}
                        </span>

                    </div>
                ))
            }

        </div>
    );
}

export default App;