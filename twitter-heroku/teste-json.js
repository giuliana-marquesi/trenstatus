// versao para json

var _ = require('underscore');

var texto = [
  "@CPTM_oficial os trens da linha turquesa voltaram a funcionar?,",
  "Devido à greve, não há previsão de normalização da #L3 hoje. Linha segue paralisada. @grupo_diario #MetroSP | 17h04,",
  "RT @Linha3vermelha: Devido à greve, não há previsão de normalização da #L3 hoje. Linha segue paralisada. @grupo_diario #MetroSP | 17h04,",
  "Atualização [18:32] L1 Saúde x Luz (exceto Sé) L2 V. Madalena x A. Rosa L3 paralisada L4 normal L5 normal L15 paralisada #metrosp,",
  "Unhappily submitting to the Machine destroys your soul not all at once but over time,",
  "@metrosp_oficial: 28/04/2017 10:18: #metrosp : Linha 2-Verde: Operação Parcial. Mais informações em,",
  "Acompanhe todas as atualizações da circulação da #CPTM e #MetroSP através do link:,",
  "@CPTM_oficial A linha 9 esmeralda ta funcionando parcialmente?pessoal que foi até santo amaro tá reclamando que não tem trem...,",
  "@CPTM_oficial Bom dia....linha coral da Cptm funciona normal???,",
  "@scorses @cloowks olá, Victor! Por aqui vc poderá ter uma ideia 😁,",
  "@CPTM_oficial Vão abrir a estação jaragua?,",
  "#cptm #linha10 #turquesa em Mauá estação de trem fechada,",
  "@CPTM_oficial Bom dia, a linha 12 safira ainda está paralisada?,",
  "#CPTM - 10:22:01 - Linha 9-Esmeralda - Operação Normal,",
  "@Direto_da_CPTM: #CPTM - 10:22:01 - Linha 9-Esmeralda - Operação Normal,",
  "ATUALIZAÇÃO: L1 Luz x Paraíso L2 Clínicas x Paraíso L3 Paralisada L4 Normal L5 Normal #grevegeral #metrosp,",
  "@Diegoferraz2421: @DiariodaCPTM linha 8 funcionando entre Osasco até a Barra Funda.,",
  "@Direto_do_Metro: #MetroSP - 10:18:01 - Linha 2-Verde - Operação Parcial - Devido à greve dos Metroviários o Met…,",
  "@governosp @geraldoalckmin_ @CPTM_oficial @metrosp_oficial PRIVATIZA JÁ!!!,",
  "@DiariodaCPTM Linha 9 Coral está sem previsões ?,",
  "@Brasil_de_Fato: SÃO PAULO | Estação de trem @CPTM_oficial na Barra Funda completamente vazia. #BrasilemGreve ht…,",
  "@Diegoferraz2421: @DiariodaCPTM linha 8 funcionando entre Osasco até a Barra Funda.,",
  "@CPTM_oficial De póa a luz ainda não tem nada funcionando????,",
  "@CPTM_oficial A linha 9 esmeralda tá funcionando mesmo a partir da jurubatuba?,",
  "Em Itaquera só gente de bem querendo ir trabalhar e o vagabundo do metrô ferrando o pessoal. Vergonha @metrosp_oficial,",
  "@metrosp_oficial N tem graça em sp todo arrega .. ou para ou n para,",
  "ATUALIZAÇÃO: #L8 com operação parcial entre as estações Osasco e Barra Funda. @grupo_diario #CPTM | 10h24,",
  "@Linha8Diamante: ATUALIZAÇÃO: #L8 com operação parcial entre as estações Osasco e Barra Funda. @grupo_diario #CPTM | 10h24,",
  "@CPTM_oficial Sobre a L9, o trem já está partindo da estação Grajaú?,",
  "@metrosp_oficial: 28/04/2017 10:18: #metrosp : Linha 2-Verde: Operação Parcial. Mais informações em,",
  "@Linha8Diamante: ATUALIZAÇÃO: #L8 com operação parcial entre as estações Osasco e Barra Funda. @grupo_diario #CPTM | 10h24,",
  "@metrosp_oficial: 28/04/2017 10:18: #metrosp : Linha 2-Verde: Operação Parcial. Mais informações em,",
  "Linha 10 - turquesa da @CPTM_oficial indo apenas até o Brás e não até a Luz como foi noticiado. #GreveGeral,",
  "@cptmnoticiando: O comunicado que pode ser entregue como justificativa está disponível no link . #CPTM,",
  "@metrosp_oficial Linha azul tem possibilidade de voltat a funcionar normalmente hoje ainda?,",
  "@CPTM_oficial @sptrans_ Outra empresa que deveriam privatizar! A linha amarela do metro está lá, funcionando e atendendo o cidadão,",
  "@metrosp_oficial Amanha o metro funcionara normal?,",
  "@metrosp_oficial bom dia! A estacao vila prudente da linha verde esta funcionando?,",
  "Linha 8 acabou de abrir a catraca na Barra Funda até Osasco! 4 linhas da @CPTM_oficial começam a funcionar parcialmente,",
  "#L8 dá #CPTM só começou rodar agora, primeiro trem com destino à #Osasco,",
  "ATUALIZAÇÃO: #L9 com operação parcial entre as estações Jurubatuba e Pinheiros. @grupo_diario #CPTM | 10h28,",
  "@Wagner_Reid: #L8 dá #CPTM só começou rodar agora, primeiro trem com destino à #Osasco,",
  "@Linha9Esmeralda: ATUALIZAÇÃO: #L9 com operação parcial entre as estações Jurubatuba e Pinheiros. @grupo_diario #CPTM | 10h28,",
  "@CPTM_oficial Bom dia, linha 11 está funcionando de guaianazes até à luz?,",
  "@Linha9Esmeralda: ATUALIZAÇÃO: #L9 com operação parcial entre as estações Jurubatuba e Pinheiros. @grupo_diario #CPTM | 10h28,",
  "@UsuariosMetroSP Mudou, está indo só até o Brás! #CPTM,",
  "#CPTM - A @Linha8_CPTM operação parcial entre Osasco e Palmeiras Barra Funda.,",
  "#CPTM - 10:30:01 - Linha 7-Rubi - Operação Normal,",
  "@cptmnoticiando: #CPTM - A @Linha8_CPTM operação parcial entre Osasco e Palmeiras Barra Funda.,",
  "@Linha4Amarela: ⚠️ #L7 Rubi da #CPTM: Os trens estão circulando entre as estações Luz e Pirituba.,",
  "Até as 18h provavelmente já vai ter voltado ao normal.,",
  "Acabei de ler que o @metrosp_oficial está funcionando razoavelmente bem,",

];

var lines = [
  /azul/g,
  /verde/g,
  /amarela/g,
  /coral/g,
  /lilas/g,
  /linha7/g,
  /linha8/g,
  /linha9/g,
  /turquesa/g,
  /vermelha/g,
  /l1/g,
  /l3/g,
  /l2/g,
  /l4/g,
  /l5/g,
  /l7/g,
  /l8/g,
  /l9/g,
  /l10/g,
  /l11/g,
  /l12/g,
];

var QUEUE_SIZE = 10;
var insertIndex = 0;
var newText = [];
var mQueue = [
  "Unhappily submitting to the Machine destroys your soul not all at once but over time"
];

for(var i = 0; i < texto.length; i++) {
  var frase = texto[i];
  if(mQueue.length < QUEUE_SIZE) {
    console.log("a frase: " + frase);
    frase = frase.toLowerCase();
    mQueue.push(frase);
  } else {
    selectTrainLine(mQueue);
    mQueue[insertIndex] = texto[i];;
    insertIndex = (insertIndex + 1)%mQueue.length;
  }
}
console.log(mQueue);
JSON.parse(newText);
console.log(newText);

function selectTrainLine(mText) {
  console.log("texto dentro do selectTrainLine " + mText);
  _.each(lines, function(line) {
    console.log(line);
    newText.push("{linha: \"" + line + " \", frases: [\"");
    newText.push(_.filter(mQueue, function(tweet){
      if(tweet.match(line)){
        return tweet;
      }
    })+ "\"]}");
  });
};
