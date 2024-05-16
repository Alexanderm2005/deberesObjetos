resistor color duo
export function decodedValue(colors: string[]): number {
    const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
    return COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1])
  }
export: Esta palabra clave indica que la función decodedValue puede ser utilizada desde otros archivos de código.
function decodedValue(colors: string[]): number : Se define una función llamada decodedValue que recibe un argumento llamado colors el cual es una lista de cadenas de texto (strings) y devuelve un número.
const COLORS: Se crea una constante llamada COLORS que es una lista de cadenas de texto.
La lista COLORS contiene los nombres de los colores del código estándar de resistencias en orden: negro, marrón, rojo, naranja, amarillo, verde, azul, violeta, gris, blanco.
return: Esta palabra clave indica que la función debe devolver un valor.
COLORS.indexOf(colors[0]): Se busca la posición (índice) del primer color en la lista COLORS usando el método indexOf. El índice representa la posición del color en el código estándar (comenzando en 0).
* 10: Se multiplica el índice del primer color por 10. Esto aplica un peso posicional al primer color. Los colores más arriba en la lista (hacia el blanco) tienen un valor mayor.
+ COLORS.indexOf(colors[1]): Se busca la posición del segundo color en la lista COLORS usando indexOf nuevamente. Se suma este índice al índice del primer color multiplicado por 10.
La expresión completa devuelve la suma de los índices ponderados de los dos colores.

Resitor color trio
export function decodedResistorValue(col : string[]): string | undefined {
    let [col1,col2,col3]=col
    let num3 = COLORS.indexOf(col3);
    let num4 = Number(String(COLORS.indexOf(col1)) + String(COLORS.indexOf(col2)))*(10**num3)
    let num5=num4; let count = 0;
    String(num5).split("").map((num) => {
      if (num === "0") {count++;}
    });
    if(count<3){
      return `${num5} ohms`;
    }else if(count>=3&&count<6){
      return `${num5/1000} kiloohms`
    }else if(count>=6&&count<9){
      return `${num5 / 1000000} megaohms`;
    }else if(count==9){
      return `${num5 / 1000000000} gigaohms`;
    }else{return undefined}}
  const COLORS=["black","brown","red","orange","yellow","green","blue","violet","grey","white"]
  
  function decodedResistorValue(col: string[]): string | undefined {: Se define una función llamada decodedResistorValue que recibe un argumento llamado col el cual es una lista de cadenas de texto (strings) y devuelve un valor que puede ser una cadena de texto (string) representando la resistencia en ohmios o kilohmios, megaohms o gigaohms, o undefined si el formato del código de color es inválido.
Se utiliza la desestructuración de arreglos para extraer los tres primeros elementos de la lista col y asignarlos a las variables col1, col2 y col3. Estas variables representan los tres colores del código de la resistencia.
Se busca la posición (índice) del tercer color (col3) en la lista COLORS usando el método indexOf. El índice representa la posición del color en el código estándar (comenzando en 0) y se almacena en la variable num3.
Se busca la posición del primer color (col1) y del segundo color (col2) en la lista COLORS usando indexOf y se convierten a cadenas de texto con String.
Se concatenan esas cadenas de texto para formar una cadena única que represente un número de dos dígitos (cada dígito corresponde a la posición de un color en el código estándar).
Se convierte la cadena concatenada a un número real usando Number.
Se eleva 10 a la potencia del valor almacenado en num3 (correspondiente a la posición del tercer color) y se multiplica por el número de dos dígitos obtenido anteriormente. El resultado se almacena en la variable num4.
Básicamente, esto calcula el valor numérico de la resistencia basado en las posiciones de los tres colores en el código estándar.
Se convierte num5 a una cadena de texto.
Se divide la cadena en un arreglo de caracteres individuales usando split("").
Se utiliza map para iterar sobre cada caracter (dígito) en el arreglo.
Dentro del callback de map, se verifica si el caracter actual (num) es igual a "0" (cero). Si lo es, se incrementa el valor de la variable count en 1.
Se utilizan bloques if y else if anidados para determinar la unidad de medida apropiada para la resistencia representada por num5 basado en la cantidad de ceros contados anteriormente (count).
Si count es menor a 3 (no hay o hay menos de 3 ceros), significa que el valor está en ohmios y se devuelve una cadena con el valor de num5 seguido de la unidad "ohms".