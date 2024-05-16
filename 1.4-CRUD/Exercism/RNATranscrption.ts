export function toRna(dna: string): string {
    const dnaToRnaMap: { [key: string]: string } = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    let rna = '';
    for (const nucleotide of dna) {
        if (dnaToRnaMap.hasOwnProperty(nucleotide)) {
            rna += dnaToRnaMap[nucleotide];
        } else {
            throw new Error('Invalid input DNA.');
        }
    }
    return rna;
}