const opcoesPecas = [
    { value: "", label: "Selecione uma peça processual", cabimento: "", prazo: "", preparo: "" },
    {
      value: "Apelação",
      label: "Apelação",
      cabimento: "Contra Sentença Terminativa ou Definitiva",
      prazo: "15",
      preparo: "há",
    },
    {
      value: "Embargos de Declaração",
      label: "Embargos de Declaração",
      cabimento: "Contra: Obscuridade; Contradição; e Omissão.",
      prazo: "5",
      preparo: "não há",
    },
    {
      value: "Agravo de Instrumento",
      label: "Agravo de Instrumento",
      cabimento: "Contra Decisões Interlocutórias - Hipóteses do art. 1.015 do CPC",
      prazo: "15",
      preparo: "há",
    },
    {
      value: "Agravo Interno",
      label: "Agravo Interno",
      cabimento: "Contra Decisão Proferida pelo Relator",
      prazo: "15",
      preparo: "em regra não há",
    },
    {
      value: "Recurso Ordinário",
      label: "Recurso Ordinário",
      cabimento: "Hipóteses do art. 1027 do CPC",
      prazo: "15",
      preparo: "há",
    },
    {
      value: "Recurso Especial e Extraordinário",
      label: "Recurso Especial e Extraordinário",
      cabimento:
        "Hipóteses Extraordinário - 102, II da CRFB, Especial 105,III, da CRFB",
      prazo: "15",
      preparo: "há",
    },
    {
      value: "Agravo em Recurso Especial e Extraordinário",
      label: "Agravo em Recurso Especial e Extraordinário",
      cabimento:
        "Contra Decisão de Presidente ou Vice de Tribunal, que inadimitir Recurso Especial ou Extraordinário",
      prazo: "15",
      preparo: "não há",
    },
    {
      value: "Embargos de Divergência",
      label: "Embargos de Divergência",
      cabimento:
        "Contra Acórdão Fracionário. Nos termos do artigo 1.043, I e III do CPC.",
      prazo: "15",
      preparo: "há",
    },
  ];
  
  export default opcoesPecas;
  