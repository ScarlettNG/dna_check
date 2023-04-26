// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.lenght);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase){
        newBase = returnRandBase();
      }
      this.dna[randIndex] == newBase;
      return this.dna;
    },
    compareDNA(otherOrganism) {
      let commonBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          commonBases++;
        }
      }
      const percentCommon = ((commonBases / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen ${this.specimenNum} and specimen ${otherOrganism.specimenNum} have ${percentCommon}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter((base) => base === 'C'|| base === 'G');
      return cOrG.length / this.dna.length >= 0.6;
    }
  };
};

const survivingOrganisms = [];

// Keep generating organisms until we have 30 that are likely to survive
while (survivingOrganisms.length < 30) {
  const organism = pAequorFactory(survivingOrganisms.length + 1, mockUpStrand());
  if (organism.willLikelySurvive()) {
    survivingOrganisms.push(organism);
  }
}
  









