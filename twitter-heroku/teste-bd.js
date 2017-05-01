// versao para bd

var _ = require('underscore');

var texto = [
  "@CPTM_oficial os trens da linha turquesa voltaram a funcionar?,",
  "Devido à greve, não há previsão de normalização da #L3 hoje. Linha segue paralisada. @grupo_diario #MetroSP | 17h04,",
  "RT @Linha3vermelha: Devido à greve, não há previsão de normalização da #L3 hoje. Linha segue paralisada. @grupo_diario #MetroSP | 17h04,",
  "Atualização [18:32] L1 Saúde x Luz (exceto Sé) L2 V. Madalena x A. Rosa L3 paralisada L4 normal L5 normal L15 paralisada #metrosp,",
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

var mQueue = [
  "Unhappily submitting to the Machine destroys your soul not all at once but over time"
];

for(var i = 0; i < texto.length; i++) {
  console.log("Texto antes da chamada no for" + texto[i]);
  var text = selectTrainLine(texto[i]);
  if(text) {
    console.log('tem texto');
    mQueue.push(text);
  }
}
console.log(mQueue);

function selectTrainLine(mText) {
  //console.log("texto dentro do selectTrainLine " + mText);
  mText = mText.toLowerCase();
  //console.log("texto depois do lowercase" + mText);
  _.each(lines, function(line) {
    //console.log("texto no each: " + mText);
    if(mText.match(line)){
      console.log("encontrado o termo " + line);
      return mText;
    }
    else{
      console.log("ERR:Nao encontrado o termo " + line);
      return mText;
    }
  });
};
