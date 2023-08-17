/* CRIANDO A FUNÇÃO MENU */

function menu() {

opcao = parseInt(prompt(
    "------Menu Principal------\n\n"+
    "1 - Cadastro de Cliente \n" +
    "2 - Cadastro de Colaborador \n" +
    "3 - Cadastro de Produto \n" +
    "4 - Sair do Sistema"

    ));


    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        
    default:
        alert("Finalizando o Sistema de Cadastro");
        document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>"        
         
    }

};

/* FUNCAO CADASTRAR CLIENTE */

function cadastrar_cliente(){
    let x = "n";
    relatorio = "*- Relatório de Clientes -* <br><br> "


    while(x.toUpperCase() !="S"){
        id = parseInt(prompt("Digite o ID do Cliente"));
        nome = prompt("Digite o Nome do Cliente");
        endereco = prompt("Digite o Endereço do Cliente");

        relatorio = relatorio +  "ID: " + id + "<br>" + 
                                 "NOME: " + nome.toUpperCase() + "<br>"+
                                 "ENDEREÇO: " + endereco.toUpperCase() +
                                 "<br>+---------------------------------------+<br>"
    
    confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")
    
    if(confirme.toUpperCase() == "S"){
        x = "S";
    };

document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";




    }
}

function cadastrar_colaborador(){
    let x = "n";
    relatorio = "*- Relatório de Colaboradores -* <br><br> "


    while(x.toUpperCase() !="S"){
        id = parseInt(prompt("Digite o ID do Colaborador"));
        nome = prompt("Digite o Nome do Colaborador");
        funcao = prompt("Digite a função do Colaborador");
        setor = prompt("Digite o seu setor");

        relatorio = relatorio +  "ID: " + id + "<br>" + 
                                 "NOME: " + nome.toUpperCase() + "<br>"+
                                 "FUNÇÃO: " + funcao.toUpperCase() +
                                 "SETOR " + setor.toUpperCase() +
                                 "<br>+---------------------------------------+<br>"
    
    confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")
    
    if(confirme.toUpperCase() == "S"){
        x = "S";
    };

document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";




    }
}

function cadastrar_produto(){
    let x = "n";
    relatorio = "*- Relatório de Produtos -* <br><br> "


    while(x.toUpperCase() !="S"){
        codigo = parseInt(prompt("Digite o Código do Produto"));
        produto = prompt("Digite o Nome do Produto");
        cor = prompt("Digite a Cor do Produto");
        tamanho = prompt("Digite o Tamanho do Produto (P/M ou G)");

        relatorio = relatorio +  "CÓDIGO: " + codigo + "<br>" + 
                                 "PRODUTO: " + produto.toUpperCase() + "<br>"+
                                 "COR: " + cor.toUpperCase() + "<br>" +
                                 "TAMANHO " + tamanho.toUpperCase() + "<br>" +
                                 "<br>+---------------------------------------+<br>"
    
    confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")
    
    if(confirme.toUpperCase() == "S"){
        x = "S";
    };

document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";




    }
}


