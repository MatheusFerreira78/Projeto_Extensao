var jogador_1 = 0;
var jogador_2 = 0;
var jogador_3 = 0;
var jogador_4 = 0;
var jogador_5 = 0;
var nome1, nome2, nome3, nome4, nome5;
var vez_jogador = 1;
var resposta_Certa = 0;
var contar_vez_rodar_dados = 0;

const btn_Iniciar = document.querySelector("#botao");
const btn_Verificar = document.querySelector("#botao_resposta");
const btn_botao_prox = document.querySelector("#botao_prox");
const btn_Rodar_dado = document.querySelector("#rodar_dado");


//função para gerar um numero aleatorio entre 1 e 6, representando as faces do dado e retornar o valor do dado
const Dado_aleatorio = () => {
	const random = Math.floor(Math.random() * 6) + 1;

	return random;
}

//função para gerar um numero aleatorio entre 1 e 4, representando as operações e retornar o valor da operação
const Operacao_aleatoria = () => {
	//numeros seguem a ordem: 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão
	//const operations = ['+', '-', '*', '/'];

	const operations = [1, 2, 3, 4];

	const randomIndex = Math.floor(Math.random() * 4);
	const operacao = operations[randomIndex];

	return operacao;
}

//função para rodar a operação 1 e verificar se a divisão é exata ou não e retornar o valor da operação
const Rodar_operacao_1 = (dado_1, dado_2) => {

	var dado_1 = dado_1;
	var dado_2 = dado_2;

	var random = Operacao_aleatoria();

	if (random == 4) {
		if (dado_1 % dado_2 != 0) {
			while (random == 4) {
				random = Operacao_aleatoria();
			}
		}
	}

	if (random == 1) {
		document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_soma.png'/>";
	}
	else if (random == 2) {
		document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_subtracao.png'/>";
	}
	else if (random == 3) {
		document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
	}
	else if (random == 4) {
		document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_divisao.png'/>";
	}

	return random;
}

//função para rodar a operação 2 e verificar se a divisão é exata ou não e retornar o valor da operação
const Rodar_operacao_2 = (resposta_1, dado_3) => {
	var resposta_1 = resposta_1;
	var dado_3 = dado_3;


	var random = Operacao_aleatoria();

	if (random == 4) {
		if (resposta_1 % dado_3 != 0) {
			while (random == 4) {
				random = Operacao_aleatoria();
			}
		}
	}

	if (random == 1) {
		document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_soma.png'/>";
	}
	else if (random == 2) {
		document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_subtracao.png'/>";
	}
	else if (random == 3) {
		document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
	}
	else if (random == 4) {
		document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_divisao.png'/>";
	}

	return random;
}

//função para rodar o dado 1 e mostrar a face correspondente e retornar o valor do dado
const Rodar_dado_1 = () => {
	var random = Dado_aleatorio();

	if (random == 1) {
		document.getElementById("dado_1").innerHTML = "<img src='face1.png'/>";
	}
	else if (random == 2) {
		document.getElementById("dado_1").innerHTML = "<img src='face2.png'/>";
	}
	else if (random == 3) {
		document.getElementById("dado_1").innerHTML = "<img src='face3.png'/>";
	}
	else if (random == 4) {
		document.getElementById("dado_1").innerHTML = "<img src='face4.png'/>";
	}
	else if (random == 5) {
		document.getElementById("dado_1").innerHTML = "<img src='face5.png'/>";
	}
	else if (random == 6) {
		document.getElementById("dado_1").innerHTML = "<img src='face6.png'/>";
	}

	return random;
}

//função para rodar o dado 2 e mostrar a face correspondente e retornar o valor do dado
const Rodar_dado_2 = () => {
	var random = Dado_aleatorio();

	if (random == 1) {
		document.getElementById("dado_2").innerHTML = "<img src='face1.png'/>";
	}
	else if (random == 2) {
		document.getElementById("dado_2").innerHTML = "<img src='face2.png'/>";
	}
	else if (random == 3) {
		document.getElementById("dado_2").innerHTML = "<img src='face3.png'/>";
	}
	else if (random == 4) {
		document.getElementById("dado_2").innerHTML = "<img src='face4.png'/>";
	}
	else if (random == 5) {
		document.getElementById("dado_2").innerHTML = "<img src='face5.png'/>";
	}
	else if (random == 6) {
		document.getElementById("dado_2").innerHTML = "<img src='face6.png'/>";
	}

	return random;
}

//função para rodar o dado 3 e mostrar a face correspondente e retornar o valor do dado
const Rodar_dado_3 = () => {
	var random = Dado_aleatorio();

	if (random == 1) {
		document.getElementById("dado_3").innerHTML = "<img src='face1.png'/>";
	}
	else if (random == 2) {
		document.getElementById("dado_3").innerHTML = "<img src='face2.png'/>";
	}
	else if (random == 3) {
		document.getElementById("dado_3").innerHTML = "<img src='face3.png'/>";
	}
	else if (random == 4) {
		document.getElementById("dado_3").innerHTML = "<img src='face4.png'/>";
	}
	else if (random == 5) {
		document.getElementById("dado_3").innerHTML = "<img src='face5.png'/>";
	}
	else if (random == 6) {
		document.getElementById("dado_3").innerHTML = "<img src='face6.png'/>";
	}

	return random;
}

//função para calcular o resultado das operações e retornar o resultado final (Resposta correta)
const calcular = (dado1, dado2, dado3, operacao1, operacao2) => {
	var dado_1 = dado1;
	var dado_2 = dado2;
	var dado_3 = dado3;
	var operacao_1 = operacao1;
	var operacao_2 = operacao2;
	var resultado_1_conta = 0;
	var reposta_correta = 0;

	if (operacao_1 == 1) {
		resultado_1_conta = dado_1 + dado_2;
	}
	else if (operacao_1 == 2) {
		resultado_1_conta = dado_1 - dado_2;
	}
	else if (operacao_1 == 3) {
		resultado_1_conta = dado_1 * dado_2;
	}
	else if (operacao_1 == 4) {
		resultado_1_conta = dado_1 / dado_2;
	}

	if (operacao_2 == 1) {
		reposta_correta = resultado_1_conta + dado_3;
	}
	else if (operacao_2 == 2) {
		reposta_correta = resultado_1_conta - dado_3;
	}
	else if (operacao_2 == 3) {
		reposta_correta = resultado_1_conta * dado_3;
	}
	else if (operacao_2 == 4) {
		reposta_correta = resultado_1_conta / dado_3;
	}

	console.log("Valor dado 1:", dado_1);
	console.log("Operação [1 = soma , 2 = subtração, 3 = multiplicação, 4 = divisão];", operacao_1);
	console.log("Valor dado 2:", dado_2);
	console.log("Resultado de dado 1 com dado 2: ", resultado_1_conta);
	console.log("Operação [1 = soma , 2 = subtração, 3 = multiplicação, 4 = divisão];", operacao_2);
	console.log("Valor dado 3:", dado_3);
	console.log("Resultado de dados 1,2 com dado 3: ", reposta_correta);

	return reposta_correta;
}

/*função para iniciar o jogo e chamar as funções Rodar_dado_1, Rodar_dado_2, Rodar_dado_3, 
Rodar_operacao_1, Rodar_operacao_2 e calcular e selecionar a tampa 1 caso seja a vez do jogador 1*/
const Iniciar_jogo = () => {
	var dado_1 = Rodar_dado_1();
	var dado_2 = Rodar_dado_2();
	var dado_3 = Rodar_dado_3();
	var operacao_1 = Rodar_operacao_1(dado_1, dado_2);
	var resposta_1 = 0;

	if (operacao_1 == 1) {
		resposta_1 = dado_1 + dado_2;
	}
	else if (operacao_1 == 2) {
		resposta_1 = dado_1 - dado_2;
	}
	else if (operacao_1 == 3) {
		resposta_1 = dado_1 * dado_2;
	}
	else if (operacao_1 == 4) {
		resposta_1 = dado_1 / dado_2;
	}


	var operacao_2 = Rodar_operacao_2(resposta_1, dado_3);

	resposta_Certa = calcular(dado_1, dado_2, dado_3, operacao_1, operacao_2);

	if (vez_jogador == 1) {
		document.querySelector("#tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
	}
}

/*função para verificar se a resposta digitada pelo usuario é igual a resposta correta e mostrar 
uma mensagem de resposta certa ou errada*/
const verifcar_resposta = () => {
	const resposta = document.querySelector("#resposta");

	var valor = resposta.value;
	console.log("Valor digitado pelo usuario: ", valor);

	const quantidade_jogadores = parseInt(document.getElementById("quantidade_j").innerHTML)

	switch (quantidade_jogadores) {

		case 1:
			if (valor == resposta_Certa) {
				console.log("Resposta certa");
				alert("Resposta certa");
				resposta.value = "";
				jogador_1 = jogador_1 + 1;
				movimentacao_tampinhas();
				Iniciar_jogo();
			} else {
				console.log("Resposta errada");
				alert("Resposta errada");
				resposta.value = "";
			}

			break;

		case 2:
			if (valor == resposta_Certa) {
				console.log("Resposta certa");
				alert("Resposta certa");
				resposta.value = "";
				if (vez_jogador == 1) {
					jogador_1 = jogador_1 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 2) {
					jogador_2 = jogador_2 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				}

			} else {
				console.log("Resposta errada");
				alert("Resposta errada");
				resposta.value = "";
			}

			break;

		case 3:
			if (valor == resposta_Certa) {
				console.log("Resposta certa");
				alert("Resposta certa");
				resposta.value = "";
				if (vez_jogador == 1) {
					jogador_1 = jogador_1 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 2) {
					jogador_2 = jogador_2 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 3) {
					jogador_3 = jogador_3 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				}

			} else {
				console.log("Resposta errada");
				alert("Resposta errada");
				resposta.value = "";
			}

			break;

		case 4:
			if (valor == resposta_Certa) {
				console.log("Resposta certa");
				alert("Resposta certa");
				resposta.value = "";
				if (vez_jogador == 1) {
					jogador_1 = jogador_1 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 2) {
					jogador_2 = jogador_2 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 3) {
					jogador_3 = jogador_3 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 4) {
					jogador_4 = jogador_4 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				}

			} else {
				console.log("Resposta errada");
				alert("Resposta errada");
				resposta.value = "";
			}

			break;

		case 5:
			if (valor == resposta_Certa) {
				console.log("Resposta certa");
				alert("Resposta certa");
				resposta.value = "";
				if (vez_jogador == 1) {
					jogador_1 = jogador_1 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 2) {
					jogador_2 = jogador_2 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 3) {
					jogador_3 = jogador_3 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 4) {
					jogador_4 = jogador_4 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				} else if (vez_jogador == 5) {
					jogador_5 = jogador_5 + 1;
					movimentacao_tampinhas();
					Iniciar_jogo();
				}

			} else {
				console.log("Resposta errada");
				alert("Resposta errada");
				resposta.value = "";
			}

			break;
	}
}

//função para verificar a vez do jogador e mostrar a tampa correspondente
const vez = () => {
	const quantidade_jogadores = parseInt(document.getElementById("quantidade_j").innerHTML)

	switch (quantidade_jogadores) {

		case 1:
			vez_jogador = 1;

			document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";

			const btn_nao_sei = document.querySelector("#botao_prox");
			btn_nao_sei.addEventListener("click", () => {
				Iniciar_jogo();
			})

			console.log("Vez do jogador: ", vez_jogador);

			break;

		case 2:
			if (vez_jogador == 1) {
				vez_jogador = 2;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-2.png'/>";
			} else if (vez_jogador == 2) {
				vez_jogador = 1;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
			}

			console.log("Vez do jogador: ", vez_jogador);

			break;

		case 3:
			if (vez_jogador == 1) {
				vez_jogador = 2;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-2.png'/>";
			} else if (vez_jogador == 2) {
				vez_jogador = 3;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-3.png'/>";
			} else if (vez_jogador == 3) {
				vez_jogador = 1;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
			}

			console.log("Vez do jogador: ", vez_jogador);

			break;

		case 4:
			if (vez_jogador == 1) {
				vez_jogador = 2;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-2.png'/>";
			} else if (vez_jogador == 2) {
				vez_jogador = 3;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-3.png'/>";
			} else if (vez_jogador == 3) {
				vez_jogador = 4;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-4.png'/>";
			} else if (vez_jogador == 4) {
				vez_jogador = 1;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
			}

			console.log("Vez do jogador: ", vez_jogador);

			break;

		case 5:
			if (vez_jogador == 1) {
				vez_jogador = 2;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-2.png'/>";
			} else if (vez_jogador == 2) {
				vez_jogador = 3;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-3.png'/>";
			} else if (vez_jogador == 3) {
				vez_jogador = 4;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-4.png'/>";
			} else if (vez_jogador == 4) {
				vez_jogador = 5;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-5.png'/>";
			} else if (vez_jogador == 5) {
				vez_jogador = 1;
				document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
			}

			console.log("Vez do jogador: ", vez_jogador);

			break;
	}
}

//função para coletar os nomes dos jogadores e mostrar no console
const pegarNOmes = () => {
	nome1 = document.querySelector("#nome1").value;
	nome2 = document.querySelector("#nome2").value;
	nome3 = document.querySelector("#nome3").value;
	nome4 = document.querySelector("#nome4").value;
	nome5 = document.querySelector("#nome5").value;

	console.log(nome2);
	console.log(nome3);
	console.log(nome4);
	console.log(nome5);
}

//função para mostrar os nomes dos jogadores na tela
const mostrarNOmes = () => {
	if (vez_jogador == 1) {
		document.getElementById("nome").textContent = nome1
		document.getElementById("nome").style.color = "#35b724"
	} else if (vez_jogador == 2) {
		document.getElementById("nome").textContent = nome2
		document.getElementById("nome").style.color = "#b22323"
	} else if (vez_jogador == 3) {
		document.getElementById("nome").textContent = nome3
		document.getElementById("nome").style.color = "#3b23b2"
	} else if (vez_jogador == 4) {
		document.getElementById("nome").textContent = nome4
		document.getElementById("nome").style.color = "#bb4708"
	} else if (vez_jogador == 5) {
		document.getElementById("nome").textContent = nome5
		document.getElementById("nome").style.color = "#a11896"
	}
}

//função para verificar se o campo de resposta está vazio ou não e habilitar o botão de verificar
const verificarCampo = () => {

	const meuInput = document.querySelector("#resposta");
	const btn_Verificar = document.querySelector("#botao_resposta");

	if (meuInput.value.trim() === '') {
		btn_Verificar.disabled = true;
	} else {
		btn_Verificar.disabled = false;
	}
}

//função com escutador de evento para verificar a cada meio segundo se o campo de resposta está vazio ou não
const verificar_constante = () => {
	// adicona um ouvinte de evento para o evento de entrada no campo de texto
	const meuInput = document.querySelector("#resposta");
	meuInput.addEventListener('input', verificarCampo);

	// Use um loop de verificação a cada 500 milissegundos (meio segundo)
	setInterval(verificarCampo, 500);
}
verificar_constante();

//função para mostrar a pontuação dos jogadores na tela
const mostrar_pontos_placar = () => {
	document.getElementById("nome_jogadores_1").textContent = nome1;
	document.getElementById("nome_placar_1").textContent = jogador_1

	document.getElementById("nome_jogadores_2").textContent = nome2;
	document.getElementById("nome_placar_2").textContent = jogador_2

	document.getElementById("nome_jogadores_3").textContent = nome3;
	document.getElementById("nome_placar_3").textContent = jogador_3

	document.getElementById("nome_jogadores_4").textContent = nome4;
	document.getElementById("nome_placar_4").textContent = jogador_4

	document.getElementById("nome_jogadores_5").textContent = nome5;
	document.getElementById("nome_placar_5").textContent = jogador_5;
}

//função para verificar se os campos de nome estão vazios ou não e habilitar o botão de iniciar
const verificador_de_preenchimento_tela_inicial = () => {
	const formulario = [...document.querySelector("#formulario")]

	var contador = 0

	formulario.map((elemento) => {
		elemento.addEventListener("change", () => {
			const novo_elemento = document.querySelector("#quantidade_j")

			if (elemento.value != "") {
				contador = contador + 1
			} else {
				contador = contador - 1
			}
			novo_elemento.innerHTML = contador
		})
	})
}
verificador_de_preenchimento_tela_inicial();

const escolha_quantidade_jogadores = (q_jogadores) => {

	const colunas_tabela_5 = [...document.getElementsByClassName("coluna 5")]
	const colunas_tabela_4 = [...document.getElementsByClassName("coluna 4")]
	const colunas_tabela_3 = [...document.getElementsByClassName("coluna 3")]
	const colunas_tabela_2 = [...document.getElementsByClassName("coluna 2")]

	const tampinha5 = document.querySelector("#tampinha_5")
	const tampinha4 = document.querySelector("#tampinha_4")
	const tampinha3 = document.querySelector("#tampinha_3")
	const tampinha2 = document.querySelector("#tampinha_2")

	switch (q_jogadores) {

		case 1:
			colunas_tabela_5.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha5.remove()

			colunas_tabela_4.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha4.remove()

			colunas_tabela_3.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha3.remove()

			colunas_tabela_2.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha2.remove()

			break;

		case 2:
			colunas_tabela_5.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha5.remove()

			colunas_tabela_4.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha4.remove()

			colunas_tabela_3.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha3.remove()

			break;

		case 3:
			colunas_tabela_5.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha5.remove()

			colunas_tabela_4.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha4.remove()

			break;

		case 4:
			colunas_tabela_5.map((elemento, indice) => {
				elemento.remove()
			})

			tampinha5.remove()

			break;

		default:
			break;
	}
}

const movimentacao_tampinhas = () => {

	const tampinha1 = document.querySelector("#tampinha_1")
	const tampinha2 = document.querySelector("#tampinha_2")
	const tampinha3 = document.querySelector("#tampinha_3")
	const tampinha4 = document.querySelector("#tampinha_4")
	const tampinha5 = document.querySelector("#tampinha_5")

	const quantidade_jogadores = parseInt(document.getElementById("quantidade_j").innerHTML)


	switch (quantidade_jogadores) {

		case 1:
			if (jogador_1 == 0) {
				tampinha1.style.marginTop = "0%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 1) {
				tampinha1.style.marginTop = "-4%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 2) {
				tampinha1.style.marginTop = "-8.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 3) {
				tampinha1.style.marginTop = "-12.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 4) {
				tampinha1.style.marginTop = "-16.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 5) {
				tampinha1.style.marginTop = "-20.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 6) {
				tampinha1.style.marginTop = "-24.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 7) {
				tampinha1.style.marginTop = "-28.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 8) {
				tampinha1.style.marginTop = "-32.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 9) {
				tampinha1.style.marginTop = "-36.2%";
				tampinha1.style.marginLeft = "12%";
			}
			else if (jogador_1 == 10) {
				tampinha1.style.marginTop = "-40.2%";
				tampinha1.style.marginLeft = "12%";
			}

			break;

		case 2:
			if (jogador_1 == 0) {
				tampinha1.style.marginTop = "0%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 1) {
				tampinha1.style.marginTop = "-4%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 2) {
				tampinha1.style.marginTop = "-8.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 3) {
				tampinha1.style.marginTop = "-12.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 4) {
				tampinha1.style.marginTop = "-16.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 5) {
				tampinha1.style.marginTop = "-20.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 6) {
				tampinha1.style.marginTop = "-24.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 7) {
				tampinha1.style.marginTop = "-28.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 8) {
				tampinha1.style.marginTop = "-32.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 9) {
				tampinha1.style.marginTop = "-36.2%";
				tampinha1.style.marginLeft = "4.5%";
			} else if (jogador_1 == 10) {
				tampinha1.style.marginTop = "-40.2%";
				tampinha1.style.marginLeft = "4.5%";
			}

			if (jogador_2 == 0) {
				tampinha2.style.marginTop = "0%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 1) {
				tampinha2.style.marginTop = "-4%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 2) {
				tampinha2.style.marginTop = "-8.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 3) {
				tampinha2.style.marginTop = "-12.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 4) {
				tampinha2.style.marginTop = "-16.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 5) {
				tampinha2.style.marginTop = "-20.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 6) {
				tampinha2.style.marginTop = "-24.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 7) {
				tampinha2.style.marginTop = "-28.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 8) {
				tampinha2.style.marginTop = "-32.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 9) {
				tampinha2.style.marginTop = "-36.2%";
				tampinha2.style.marginLeft = "14%";
			} else if (jogador_2 == 10) {
				tampinha2.style.marginTop = "-40.2%";
				tampinha2.style.marginLeft = "14%";
			}

			break;

		case 3:
			if (jogador_1 == 0) {
				tampinha1.style.marginTop = "0%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 1) {
				tampinha1.style.marginTop = "-4%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 2) {
				tampinha1.style.marginTop = "-8.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 3) {
				tampinha1.style.marginTop = "-12.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 4) {
				tampinha1.style.marginTop = "-16.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 5) {
				tampinha1.style.marginTop = "-20.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 6) {
				tampinha1.style.marginTop = "-24.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 7) {
				tampinha1.style.marginTop = "-28.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 8) {
				tampinha1.style.marginTop = "-32.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 9) {
				tampinha1.style.marginTop = "-36.2%";
				tampinha1.style.marginLeft = "2%";
			} else if (jogador_1 == 10) {
				tampinha1.style.marginTop = "-40.2%";
				tampinha1.style.marginLeft = "2%";
			}

			if (jogador_2 == 0) {
				tampinha2.style.marginTop = "0%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 1) {
				tampinha2.style.marginTop = "-4%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 2) {
				tampinha2.style.marginTop = "-8.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 3) {
				tampinha2.style.marginTop = "-12.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 4) {
				tampinha2.style.marginTop = "-16.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 5) {
				tampinha2.style.marginTop = "-20.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 6) {
				tampinha2.style.marginTop = "-24.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 7) {
				tampinha2.style.marginTop = "-28.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 8) {
				tampinha2.style.marginTop = "-32.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 9) {
				tampinha2.style.marginTop = "-36.2%";
				tampinha2.style.marginLeft = "6.2%";
			} else if (jogador_2 == 10) {
				tampinha2.style.marginTop = "-40.2%";
				tampinha2.style.marginLeft = "6.2%";
			}

			if (jogador_3 == 0) {
				tampinha3.style.marginTop = "0%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 1) {
				tampinha3.style.marginTop = "-4%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 2) {
				tampinha3.style.marginTop = "-8.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 3) {
				tampinha3.style.marginTop = "-12.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 4) {
				tampinha3.style.marginTop = "-16.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 5) {
				tampinha3.style.marginTop = "-20.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 6) {
				tampinha3.style.marginTop = "-24.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 7) {
				tampinha3.style.marginTop = "-28.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 8) {
				tampinha3.style.marginTop = "-32.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 9) {
				tampinha3.style.marginTop = "-36.2%";
				tampinha3.style.marginLeft = "10.5%";
			} else if (jogador_3 == 10) {
				tampinha3.style.marginTop = "-40.2%";
				tampinha3.style.marginLeft = "10.5%";
			}

			break;

			break;

		case 4:
			if (jogador_1 == 0) {
				tampinha1.style.marginTop = "0%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 1) {
				tampinha1.style.marginTop = "-4%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 2) {
				tampinha1.style.marginTop = "-8.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 3) {
				tampinha1.style.marginTop = "-12.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 4) {
				tampinha1.style.marginTop = "-16.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 5) {
				tampinha1.style.marginTop = "-20.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 6) {
				tampinha1.style.marginTop = "-24.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 7) {
				tampinha1.style.marginTop = "-28.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 8) {
				tampinha1.style.marginTop = "-32.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 9) {
				tampinha1.style.marginTop = "-36.2%";
				tampinha1.style.marginLeft = "0.6%";
			} else if (jogador_1 == 10) {
				tampinha1.style.marginTop = "-40.2%";
				tampinha1.style.marginLeft = "0.6%";
			}

			if (jogador_2 == 0) {
				tampinha2.style.marginTop = "0%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 1) {
				tampinha2.style.marginTop = "-4%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 2) {
				tampinha2.style.marginTop = "-8.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 3) {
				tampinha2.style.marginTop = "-12.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 4) {
				tampinha2.style.marginTop = "-16.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 5) {
				tampinha2.style.marginTop = "-20.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 6) {
				tampinha2.style.marginTop = "-24.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 7) {
				tampinha2.style.marginTop = "-28.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 8) {
				tampinha2.style.marginTop = "-32.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 9) {
				tampinha2.style.marginTop = "-36.2%";
				tampinha2.style.marginLeft = "2.3%";
			} else if (jogador_2 == 10) {
				tampinha2.style.marginTop = "-40.2%";
				tampinha2.style.marginLeft = "2.3%";
			}

			if (jogador_3 == 0) {
				tampinha3.style.marginTop = "0%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 1) {
				tampinha3.style.marginTop = "-4%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 2) {
				tampinha3.style.marginTop = "-8.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 3) {
				tampinha3.style.marginTop = "-12.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 4) {
				tampinha3.style.marginTop = "-16.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 5) {
				tampinha3.style.marginTop = "-20.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 6) {
				tampinha3.style.marginTop = "-24.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 7) {
				tampinha3.style.marginTop = "-28.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 8) {
				tampinha3.style.marginTop = "-32.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 9) {
				tampinha3.style.marginTop = "-36.2%";
				tampinha3.style.marginLeft = "3.8%";
			} else if (jogador_3 == 10) {
				tampinha3.style.marginTop = "-40.2%";
				tampinha3.style.marginLeft = "3.8%";
			}

			if (jogador_4 == 0) {
				tampinha4.style.marginTop = "0%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 1) {
				tampinha4.style.marginTop = "-4%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 2) {
				tampinha4.style.marginTop = "-8.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 3) {
				tampinha4.style.marginTop = "-12.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 4) {
				tampinha4.style.marginTop = "-16.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 5) {
				tampinha4.style.marginTop = "-20.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 6) {
				tampinha4.style.marginTop = "-24.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 7) {
				tampinha4.style.marginTop = "-28.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 8) {
				tampinha4.style.marginTop = "-32.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 9) {
				tampinha4.style.marginTop = "-36.2%";
				tampinha4.style.marginLeft = "5.6%";
			} else if (jogador_4 == 10) {
				tampinha4.style.marginTop = "-40.2%";
				tampinha4.style.marginLeft = "5.6%";
			}

			break;

		case 5:
			if (jogador_1 == 0) {
				tampinha1.style.marginTop = "0%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 1) {
				tampinha1.style.marginTop = "-4%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 2) {
				tampinha1.style.marginTop = "-8.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 3) {
				tampinha1.style.marginTop = "-12.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 4) {
				tampinha1.style.marginTop = "-16.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 5) {
				tampinha1.style.marginTop = "-20.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 6) {
				tampinha1.style.marginTop = "-24.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 7) {
				tampinha1.style.marginTop = "-28.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 8) {
				tampinha1.style.marginTop = "-32.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 9) {
				tampinha1.style.marginTop = "-36.2%";
				tampinha1.style.marginLeft = "0%";
			} else if (jogador_1 == 10) {
				tampinha1.style.marginTop = "-40.2%";
				tampinha1.style.marginLeft = "0%";
			}

			if (jogador_2 == 0) {
				tampinha2.style.marginTop = "0%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 1) {
				tampinha2.style.marginTop = "-4%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 2) {
				tampinha2.style.marginTop = "-8.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 3) {
				tampinha2.style.marginTop = "-12.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 4) {
				tampinha2.style.marginTop = "-16.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 5) {
				tampinha2.style.marginTop = "-20.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 6) {
				tampinha2.style.marginTop = "-24.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 7) {
				tampinha2.style.marginTop = "-28.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 8) {
				tampinha2.style.marginTop = "-32.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 9) {
				tampinha2.style.marginTop = "-36.2%";
				tampinha2.style.marginLeft = "0%";
			} else if (jogador_2 == 10) {
				tampinha2.style.marginTop = "-40.2%";
				tampinha2.style.marginLeft = "0%";
			}

			if (jogador_3 == 0) {
				tampinha3.style.marginTop = "0%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 1) {
				tampinha3.style.marginTop = "-4%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 2) {
				tampinha3.style.marginTop = "-8.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 3) {
				tampinha3.style.marginTop = "-12.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 4) {
				tampinha3.style.marginTop = "-16.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 5) {
				tampinha3.style.marginTop = "-20.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 6) {
				tampinha3.style.marginTop = "-24.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 7) {
				tampinha3.style.marginTop = "-28.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 8) {
				tampinha3.style.marginTop = "-32.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 9) {
				tampinha3.style.marginTop = "-36.2%";
				tampinha3.style.marginLeft = "0%";
			} else if (jogador_3 == 10) {
				tampinha3.style.marginTop = "-40.2%";
				tampinha3.style.marginLeft = "0%";
			}

			if (jogador_4 == 0) {
				tampinha4.style.marginTop = "0%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 1) {
				tampinha4.style.marginTop = "-4%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 2) {
				tampinha4.style.marginTop = "-8.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 3) {
				tampinha4.style.marginTop = "-12.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 4) {
				tampinha4.style.marginTop = "-16.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 5) {
				tampinha4.style.marginTop = "-20.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 6) {
				tampinha4.style.marginTop = "-24.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 7) {
				tampinha4.style.marginTop = "-28.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 8) {
				tampinha4.style.marginTop = "-32.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 9) {
				tampinha4.style.marginTop = "-36.2%";
				tampinha4.style.marginLeft = "0%";
			} else if (jogador_4 == 10) {
				tampinha4.style.marginTop = "-40.2%";
				tampinha4.style.marginLeft = "0%";
			}

			if (jogador_5 == 0) {
				tampinha5.style.marginTop = "0%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 1) {
				tampinha5.style.marginTop = "-4%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 2) {
				tampinha5.style.marginTop = "-8.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 3) {
				tampinha5.style.marginTop = "-12.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 4) {
				tampinha5.style.marginTop = "-16.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 5) {
				tampinha5.style.marginTop = "-20.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 6) {
				tampinha5.style.marginTop = "-24.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 7) {
				tampinha5.style.marginTop = "-28.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 8) {
				tampinha5.style.marginTop = "-32.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 9) {
				tampinha5.style.marginTop = "-36.2%";
				tampinha5.style.marginLeft = "0%";
			} else if (jogador_5 == 10) {
				tampinha5.style.marginTop = "-40.2%";
				tampinha5.style.marginLeft = "0%";
			}

			break;

		default:
			break;
	}
}

const movimentar_tampinhas_inicio = () => {
	const tampinha1 = document.querySelector("#tampinha_1")
	const tampinha2 = document.querySelector("#tampinha_2")
	const tampinha3 = document.querySelector("#tampinha_3")
	const tampinha4 = document.querySelector("#tampinha_4")
	const tampinha5 = document.querySelector("#tampinha_5")

	const quantidade_jogadores = parseInt(document.getElementById("quantidade_j").innerHTML)

	switch (quantidade_jogadores) {

		case 1:
			tampinha1.style.marginTop = "0%";
			tampinha1.style.marginLeft = "12%";

			break;

		case 2:
			tampinha1.style.marginTop = "0%";
			tampinha1.style.marginLeft = "4.5%";

			tampinha2.style.marginTop = "0%";
			tampinha2.style.marginLeft = "14%";

			break;

		case 3:
			tampinha1.style.marginTop = "0%";
			tampinha1.style.marginLeft = "2%";

			tampinha2.style.marginTop = "0%";
			tampinha2.style.marginLeft = "6.2%";

			tampinha3.style.marginTop = "0%";
			tampinha3.style.marginLeft = "10.5%";

			break;

		case 4:
			tampinha1.style.marginTop = "0%";
			tampinha1.style.marginLeft = "0.6%";

			tampinha2.style.marginTop = "0%";
			tampinha2.style.marginLeft = "2.3%";

			tampinha3.style.marginTop = "0%";
			tampinha3.style.marginLeft = "3.8%";

			tampinha4.style.marginTop = "0%";
			tampinha4.style.marginLeft = "5.6%";

			break;

		case 5:
			tampinha1.style.marginTop = "0%";
			tampinha1.style.marginLeft = "0%";

			tampinha2.style.marginTop = "0%";
			tampinha2.style.marginLeft = "0%";

			tampinha3.style.marginTop = "0%";
			tampinha3.style.marginLeft = "0%";

			tampinha4.style.marginTop = "0%";
			tampinha4.style.marginLeft = "0%";

			tampinha5.style.marginTop = "0%";
			tampinha5.style.marginLeft = "0%";

			break;
	}
}

btn_Iniciar.addEventListener("click", () => {
	
		const q_jogadores =	parseInt(document.getElementById("quantidade_j").innerHTML)

		if (q_jogadores == 0) {	
			alert("NÃO É POSSÍVEL JOGAR SEM PELO MENOS 1 JOGADOR!!!")
		} else {
			const titulo_1 = document.querySelector("#titulo_1");
			const titulo_2 = document.querySelector("#titulo_2");
			const formulario = document.querySelector("#formulario");
			const regras = document.querySelector("#regras");
			const q_jogadores = document.querySelector("#q_jogadores");
		
			titulo_1.hidden = true;
			titulo_2.hidden = true;
			formulario.hidden = true;
			regras.hidden = true;
			q_jogadores.hidden = true;
		
			const titulo = document.querySelector("#D_titulo_principal");
			const vez_jogadores = document.querySelector("#D_vez_jogadores");
			const dados_jogadores = document.querySelector("#D_dados_jogadores");
			const tabuleiro = document.querySelector("#D_tabuleiro_jogadores");
			const tampinhas_jogadores = document.querySelector("#D_tampinhas_jogadores");
			const btn_Verificar = document.querySelector("#D_botao_verificar");
			const meuInput = document.querySelector("#D_campo_resposta");
			const btn_botao_proximo = document.querySelector("#D_botao_proximo");
			const btn_Rodar_dado = document.querySelector("#D_rodar_dado");
			const nome_jogadores = document.querySelector("#D_nome_jogadores");
			const placar = document.querySelector("#D_placar");
		
			btn_Iniciar.hidden = true;
		
			titulo.hidden = false;
			vez_jogadores.hidden = false;
			dados_jogadores.hidden = false;
			tabuleiro.hidden = false;
			tampinhas_jogadores.hidden = false;
			btn_Verificar.hidden = false;
			meuInput.hidden = false;
			btn_botao_proximo.hidden = false;
			btn_Rodar_dado.hidden = false;
			nome_jogadores.hidden = false;
			placar.hidden = false;
		
		
			Iniciar_jogo();
			pegarNOmes();
			mostrarNOmes();
			mostrar_pontos_placar();
			escolha_quantidade_jogadores(q_jogadores);
			movimentar_tampinhas_inicio();
		}
})

btn_Verificar.addEventListener("click",  (event) => {
	event.preventDefault();
	verifcar_resposta();
	vez();
	mostrarNOmes();
	mostrar_pontos_placar();

	btn_Rodar_dado.hidden = false;
});

btn_botao_prox.addEventListener("click",  () => {
	vez();
	mostrarNOmes();

	btn_Rodar_dado.hidden = false;
})

btn_Rodar_dado.addEventListener("click",  () => {
	Iniciar_jogo();

	btn_Rodar_dado.hidden = true;
})