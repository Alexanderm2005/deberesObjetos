Darts
Calculamos la distancia entre el punto (x, y) y el centro del objetivo (0, 0) utilizando la fórmula de la distancia euclidiana: Math.sqrt(x*x + y*y).
Determinación de los puntos:

Utilizamos if-else para verificar en qué rango de distancia cae el dardo:
Si la distancia es mayor que 10, el dardo cae fuera del objetivo y se devuelven 0 puntos.
Si la distancia es mayor que 5 pero menor o igual que 10, el dardo cae en el círculo exterior y se devuelven 1 punto.
Si la distancia es mayor que 1 pero menor o igual que 5, el dardo cae en el círculo medio y se devuelven 5 puntos.
Si la distancia es menor o igual a 1, el dardo cae en el círculo interior y se devuelven 10 puntos.
Retorno:

Devuelve la cantidad de puntos calculada en función de la distancia del dardo al centro del objetivo.

Pangram
Esta es la función que recibe una oración (sentence) como entrada y devuelve true si la oración es un pangrama (contiene todas las letras del alfabeto inglés) o false de lo contrario.
Inicialización de lettersSet:

Crea un conjunto (Set) para almacenar las letras del alfabeto inglés que aparecen en la oración.
Conversión a minúsculas:

Convierte la oración (sentence) a minúsculas para realizar una comparación insensible a mayúsculas y minúsculas.
Iteración a través de los caracteres de la oración:

Itera a través de cada carácter en lowerSentence.
Si el carácter es una letra (entre 'a' y 'z'), se añade al conjunto lettersSet.
Verificación de la cantidad de letras:

Al final, verifica si lettersSet contiene 26 letras (todas las letras del alfabeto inglés).
Devuelve true si el conjunto tiene 26 letras y false de lo contrario.