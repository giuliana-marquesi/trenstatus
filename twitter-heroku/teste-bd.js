// versao para bd

var _ = require('underscore');
var pg = require('pg');
var express = require('express');
var dotenv = require('dotenv');

var app = express();

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
  "ATUALIZAÇÃO: #L1 Luz x Paraíso L2 Clínicas x Paraíso L3 Paralisada L4 Normal L5 Normal #grevegeral #metrosp,",
  "@Diegoferraz2421: @DiariodaCPTM linha 8 funcionando entre Osasco até a Barra Funda.,",
  "@Direto_do_Metro: #MetroSP - 10:18:01 - Linha 2-Verde - Operação Parcial - Devido à greve dos Metroviários o Met…,",
  "@governosp @geraldoalckmin_ @CPTM_oficial @metrosp_oficial PRIVATIZA JÁ!!!,",
  "@DiariodaCPTM Linha 9 Coral está sem previsões ?,",
  "@Brasil_de_Fato: SÃO PAULO | Estação de trem @CPTM_oficial na Barra Funda completamente vazia. #BrasilemGreve ht…,",
  "@Diegoferraz2421: @DiariodaCPTM linha 8 funcionando entre Osasco até a Barra Funda.,",
  "@CPTM_oficial De póa a luz ainda não tem nada funcionando????,",
  "@CPTM_oficial A linha 9 esmeralda tá funcionando mesmo a partir da jurubatuba?,",
  "Em Itaquera l11 só gente de bem querendo ir trabalhar e o vagabundo do metrô ferrando o pessoal. Vergonha @metrosp_oficial,",
  "@metrosp_oficial N tem graça em sp todo arrega .. ou para ou n para,",
  "ATUALIZAÇÃO: #L8 com operação parcial entre as estações Osasco e Barra Funda. @grupo_diario #CPTM | 10h24,",
  "@Linha8Diamante: ATUALIZAÇÃO: #L8 com operação parcial entre as estações Osasco e Barra Funda. @grupo_diario #CPTM | 10h24,",
  "@CPTM_oficial Sobre a L9, o trem já está partindo da estação Grajaú?,",
  "@metrosp_oficial: 28/04/2017 10:18: #metrosp : Linha 2-Verde: Operação Parcial. Mais informações em,",
  "@Linha8Diamante: ATUALIZAÇÃO: #L8 com operação parcial entre as estações Osasco e Barra Funda. @grupo_diario #CPTM | 10h24,",
  "@metrosp_oficial: 28/04/2017 10:18: #metrosp : Linha 2-Verde: Operação Parcial. Mais informações em,",
  "Linha10 - turquesa da @CPTM_oficial indo apenas até o Brás e não até a Luz como foi noticiado. #GreveGeral,",
  "@cptmnoticiando: O comunicado que pode ser entregue como justificativa está disponível no link . #CPTM,",
  "@metrosp_oficial Linha azul tem possibilidade de voltat a funcionar normalmente hoje ainda?,",
  "@CPTM_oficial @sptrans_ Outra empresa que deveriam privatizar! A linha amarela do metro está lá, funcionando e atendendo o cidadão,",
  "@metrosp_oficial Amanha o metro funcionara normal?,",
  "@metrosp_oficial bom dia! A estacao vila prudente da linha verde esta funcionando?,",
  "Linha 8 acabou de abrir a catraca na Barra Funda até Osasco! 4 linhas da @CPTM_oficial começam a funcionar parcialmente,",
  "#L11 dá #CPTM só começou rodar agora, primeiro trem com destino à #Osasco,",
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

var linha = {
  azul: [/azul/g,"linha1 ", "l1 "],
  verde: [/verde/g, /linha2/g, /l2/g,],
  vermelha: [/vermelha/g, /linha3/g, /l3/g,],
  amarela: [/amarela/g, /linha4/g, /l4/g,],
  lilas: [/lilas/g, /linha5/g, /l5/g],
  rubi: [/rubi/g, /linha7/g, /l7/g],
  diamante: [/diamante/g, /linha8/g, /l8/g],
  esmeralda: [/esmeralda/g, /linha9/g, /l9/g],
  turquesa: [/turquesa/g, /linha10/g, /l10/g],
  coral: [/coral/g, /linha11/g, /l11/g],
  safira: [/safira/g, /linha12/g, /l12/g],
  prata: [/prata/g, /linha15/g, /l15/g],
};

var mQueue = [
  "Unhappily submitting to the Machine destroys your soul not all at once but over time"
];

for(var i = 0; i < texto.length; i++) {
  console.log("Texto antes da chamada no for " + texto[i]);
  var text = arranjaTwittesPelaLinha(texto[i]);
  if(text) {
    mQueue.push(text);
  }
}

//console.log(mQueue);

function arranjaTwittesPelaLinha(tuite) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    tuite = tuite.toLowerCase();
    for(var nome_linha in linha) {
      valores = linha[nome_linha];
      console.log(nome_linha);
      for(var i in valores){
        var valor = valores[i];
        if(tuite.match(valor)){
          console.log("dentro do if: ", nome_linha);
          var tuiteLimpo = limpaTuite(tuite);
          client.query('insert into teste (frase, data_postagem, linha) values ($1, $2, $3)', [tuiteLimpo, 'now()', nome_linha], function(err, result) {
            done();
            if (err)
             { console.error(err) }
          });
        }
      };
    };
  });
};

function limpaTuite(tuite) {
  var tuiteLimpo = tuite.replace(/RT /g, "");
    tuiteLimpo = tuiteLimpo.replace(/["{}<>().!,;|\-]/g, "");
    tuiteLimpo = tuiteLimpo.replace(/[#@]\S+/g, "");
    tuiteLimpo = tuiteLimpo.replace(/http(s?):\/\/\S+/g, "");
    tuiteLimpo = tuiteLimpo.replace(/b\/c/g, "because");
    tuiteLimpo = tuiteLimpo.replace(/([a-zA-Z]+)\/([a-zA-Z]+)/g, "$1 $2");
    tuiteLimpo = tuiteLimpo.replace(/\S+…/g, "");
    tuiteLimpo = tuiteLimpo.replace(/\s+/g, " ");
    tuiteLimpo = tuiteLimpo.trim();
    return tuiteLimpo;
}
