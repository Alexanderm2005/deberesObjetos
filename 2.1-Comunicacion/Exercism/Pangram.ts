export function isPangram(sentence: string): boolean {
    // Crea un conjunto para almacenar las letras del alfabeto que aparecen en la oración
    const lettersSet = new Set<string>();

    // Convierte la oración a minúsculas para hacer una comparación insensible a mayúsculas y minúsculas
    const lowerSentence = sentence.toLowerCase();

    // Itera a través de cada carácter de la oración
    for (const char of lowerSentence) {
        // Si el carácter es una letra, añádelo al conjunto
        if (char >= 'a' && char <= 'z') {
            lettersSet.add(char);
        }
    }

    // Verifica si el conjunto tiene 26 letras (todas las letras del alfabeto inglés)
    return lettersSet.size === 26;
}
  
  