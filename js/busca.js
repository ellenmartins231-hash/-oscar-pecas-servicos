function processarBusca() {
  const parametros = new URLSearchParams(window.location.search);
  const veiculoId = parametros.get("veiculo");
  const ano = parametros.get("ano");
  const categoriaId = parametros.get("categoria");

  const secaoResultado = document.querySelector("#resultado-busca");
  const resumo = document.querySelector("#resumo-busca");
  const itensResultado = document.querySelector("#itens-resultado");
  const linkContato = document.querySelector("#link-contato-busca");

  if (!secaoResultado || !resumo || !itensResultado) {
    return;
  }

  if (!veiculoId && !ano && !categoriaId) {
    return;
  }

  secaoResultado.hidden = false;
  resumo.replaceChildren();
  itensResultado.replaceChildren();

  const veiculo = veiculos.find(([id]) => id === veiculoId);
  const categoria = categorias.find(({ id }) => id === categoriaId);

  if (!veiculo) {
    resumo.append(
      criarElemento(
        "p",
        "Não foi possível identificar o veículo. Volte à página de veículos e selecione um modelo válido."
      )
    );
    return;
  }

  if (
    ano &&
    (!Number.isInteger(Number(ano)) ||
      Number(ano) < 1950 ||
      Number(ano) > new Date().getFullYear())
  ) {
    resumo.append(
      criarElemento(
        "p",
        `O ano informado não é válido. Informe um ano entre 1950 e ${new Date().getFullYear()}.`
      )
    );
    return;
  }

  resumo.append(
    criarElemento(
      "h3",
      ano ? `Chevrolet ${veiculo[1]} — ${ano}` : `Chevrolet ${veiculo[1]}`
    )
  );

  if (!categoriaId) {
    resumo.append(
      criarElemento(
        "p",
        ano
          ? "Selecione uma categoria para consultar exemplos de componentes."
          : "Escolha uma categoria para conhecer exemplos de peças. Para confirmar a aplicação correta, informe também o ano do veículo."
      )
    );

    const listaCategorias = document.createElement("div");
    listaCategorias.className = "grade-categorias";

    categorias.forEach((item) => {
      const card = document.createElement("article");
      const titulo = criarElemento("h3", item.nome);
      const descricao = criarElemento(
        "p",
        item.pecas.slice(0, 3).join(", ") + "."
      );
      const link = criarElemento("a", "Ver exemplos de peças");

      link.href =
        `./pecas.html?veiculo=${encodeURIComponent(veiculoId)}` +
        (ano ? `&ano=${encodeURIComponent(ano)}` : "") +
        `&categoria=${encodeURIComponent(item.id)}#resultado-busca`;

      card.append(titulo, descricao, link);
      listaCategorias.append(card);
    });

    itensResultado.append(listaCategorias);
  } else if (categoria) {
    resumo.append(
      criarElemento("p", `Categoria selecionada: ${categoria.nome}.`)
    );

    const listaPecas = document.createElement("ul");

    categoria.pecas.forEach((peca) => {
      listaPecas.append(criarElemento("li", peca));
    });

    itensResultado.append(
      criarElemento(
        "p",
        "Os componentes abaixo são exemplos demonstrativos. A compatibilidade e a disponibilidade devem ser confirmadas com a empresa."
      ),
      listaPecas
    );
  } else {
    resumo.append(
      criarElemento(
        "p",
        "A categoria informada não foi encontrada. Volte ao catálogo e escolha uma categoria válida."
      )
    );
  }

  if (linkContato) {
    linkContato.href =
      `./contato.html?veiculo=${encodeURIComponent(veiculoId)}` +
      (ano ? `&ano=${encodeURIComponent(ano)}` : "") +
      (categoriaId ? `&categoria=${encodeURIComponent(categoriaId)}` : "");
  }

  secaoResultado.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}