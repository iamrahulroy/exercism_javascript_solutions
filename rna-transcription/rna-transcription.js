var DataTranscriber = function() {};

var dna_to_rna = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

DataTranscriber.prototype.toRna = function(dna){
  var output = '';
  for(var i = 0; i < dna.length; i++){
    output = output.concat(dna_to_rna[dna[i]]);
  }
  return output;
}

module.exports = DataTranscriber;
