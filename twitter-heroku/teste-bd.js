// versao para bd

var _ = require('underscore');

var texto = [
  "@CPTM_oficial os trens da linha turquesa voltaram a funcionar?,",
  "Devido à greve, não há previsão de normalização da #L3 hoje. Linha segue paralisada. @grupo_diario #MetroSP | 17h04,",
  "RT @Linha3vermelha: Devido à greve, não há previsão de normalização da #L3 hoje. Linha segue paralisada. @grupo_diario #MetroSP | 17h04,",
  "Atualização [18:32] L1 Saúde x Luz (exceto Sé) L2 V. Madalena x A. Rosa L3 paralisada L4 normal L5 normal L15 paralisada #metrosp,",
];

var linha = {
  azul: [/azul/g,/linha1/g, /l1/g],
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
  console.log("Texto antes da chamada no for" + texto[i]);
  var text = arranjaTwittesPelaLinha(texto[i]);
  if(text) {
    console.log('tem texto');
    mQueue.push(text);
  }
}

console.log(mQueue);

function arranjaTwittesPelaLinha(tuite) {
  //console.log("texto dentro do selectTrainLine " + mText);
  tuite = tuite.toLowerCase();
  //console.log("texto depois do lowercase" + mText);
  _.each(linha, function(line) {
    //console.log("texto no each: " + mText);
    if(tuite.match(line[0])){
      console.log("encontrado o termo " + line);
      return tuite;
    }
    else{
      console.log("ERR:Nao encontrado o termo " + line);
      return tuite;
    }
  });
};
