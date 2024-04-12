import React from "react";
//INTERFACE CHAMA DicaSaude, que usaremos para tipar os objetos de dicas de saúde
interface ExibirFuncionalidades{
    id: number;
    title:string;
    description:string;
}
// array de objeto DicaSaude
// Aqui, cada objeto representa uma dica de saúde com um id, título e descrição.
const Fun: ExibirFuncionalidades[] = [
    { id:1, title:'Tela de Posts', description:'Exibe uma lista de posts consumidos da API. Cada post mostra o título e o corpo. Existe uma rota específica para acessar esta tela.'},
    { id:2,title:'Tela de Usuários', description:'Exibe uma lista de usuários consumidos da API. Tabela em HTML para organizar. Cada usuário mostra o nome, email e endereço em um formato amigável. Existe uma rota específica para acessar esta tela.'},
    { id: 3, title: 'Tela de Fotos', description: 'Exibe uma galeria de fotos consumidas da API. Cada foto é exibida com seu respectivo título. Existe uma rota específica para acessar esta tela. ' }
]
const Funcionalidades: React.FC = () => {
return(
    <div>
        <h2 className="text-lg font-bold">Funcionalidades</h2>
        {/* lista para exibir as dicas */}
        <ul>
            {/* mapear os itens da lista para cada elemento li */}
            {Fun.map((Fun) => 
            <li key={Fun.id} className="mt-2">
                {/* TITULO das dicas */}
                <h3 className="text-md font-bold">{Fun.title}</h3>
                {/* DESCRIÇÃO DA DICA*/}
                <p>{Fun.description}</p>
            </li>
            )}
        </ul>
    </div>
)
}
export default Funcionalidades;