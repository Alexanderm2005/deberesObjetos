Leap
Define una función isLeap que determina si un año dado es bisiesto o no. Utiliza las reglas estándar para identificar años bisiestos.
  Un año es bisiesto si es divisible exactamente entre 4.
  Los años que son exactamente divisibles entre 100 no son bisiestos, a menos que también sean exactamente divisibles entre 400.
  La primera sentencia if comprueba si el año es divisible entre 4 y no divisible entre 100. Si se cumplen ambas condiciones, el año se considera bisiesto.
  La sentencia else maneja la excepción para los siglos. Comprueba si el año es divisible entre 400. Si es así, anula la comprobación anterior y marca el año como bisiesto.
  Para identificar años bisiestos y devuelve un valor booleano (true para años bisiestos y false para años no bisiestos).

  RNA
  Define una función toRna que convierte una cadena de ADN a su correspondiente cadena de ARN (ácido ribonucleico).
Se crea un objeto llamado dnaToRnaMap que funciona como un diccionario. Este diccionario contiene pares clave-valor, donde la clave es un nucleótido del ADN (G, C, T o A) y el valor es su correspondiente nucleótido del ARN (C, G, A y U).
Se declara una variable rna como una cadena vacía. Esta variable almacenará la secuencia del ARN que se construirá a partir de la secuencia del ADN.
La función utiliza un bucle for...of para iterar sobre cada nucleótido individual (nucleotide) en la cadena de ADN de entrada.
Dentro del bucle, se verifica si el nucleótido actual del ADN (nucleotide) existe como una clave en el diccionario dnaToRnaMap. El método hasOwnProperty se utiliza para comprobar si la clave está presente en el propio objeto y no heredada de la cadena del prototipo.
Si el nucleótido del ADN no es válido (no existe en el diccionario)
Se lanza una excepción (throw new Error('Invalid input DNA.')) para indicar un error en la entrada de ADN. La cadena contiene un nucleótido no válido para la conversión.
Una vez que el bucle ha terminado de iterar sobre todos los nucleótidos del ADN, la función devuelve la cadena rna que contiene la secuencia de ARN convertida.
