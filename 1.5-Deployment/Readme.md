Character
Define una clase DnDCharacter para representar un personaje en Dungeons & Dragons (DnD).
define seis propiedades públicas para representar los atributos del personaje: 
strength: Fuerza
dexterity: Destreza
constitution: Constitución
intelligence: Inteligencia
wisdom: Sabiduría
charisma: Carisma
Una propiedad pública adicional, hitpoints (puntos de golpe), se calcula en el constructor.
El constructor se ejecuta cuando se crea una nueva instancia de la clase (new DnDCharacter()). 
Para cada atributo del personaje, se llama al método estático generateAbilityScore para generar un valor aleatorio entre 1 y 20 (considerando cuatro tiradas de un dado de seis caras y descartando la menor).
El constructor también calcula los puntos de golpe (hitpoints) del personaje. Se suman 10 a un modificador basado en la Constitución (constitutionModifier), que se obtiene llamando al método estático getModifierFor.
Este método estático genera un valor aleatorio para un atributo del personaje. 
Se simula la tirada de cuatro dados de seis caras utilizando Math.random y Math.floor.
Los valores generados se almacenan en un array (rolls).
El array se ordena de menor a mayor (sort).
Se descarta el valor menor (shift).
Se suman los tres valores restantes (reduce) para obtener el valor final del atributo.
El método retorna el valor del atributo.
Este método estático calcula el modificador de un atributo basado en su valor. 
La fórmula del modificador es piso((valor del atributo - 10) / 2).
El método recibe el valor del atributo (abilityValue) como parámetro.
Calcula el modificador y lo retorna.


Space
La función age calcula la edad en años de un planeta ficticio en base a un número de segundos vividos y el planeta especificado.
Define la cantidad de segundos en un año terrestre (31.557.600 segundos).
Un objeto que funciona como un diccionario. Las claves son nombres de planetas (con la primera letra en mayúscula y el resto en minúsculas) y los valores son los periodos orbitales relativos a la Tierra.
La función convierte el nombre del planeta ingresado (planet) a un formato consistente.
charAt(0).toUpperCase(): Obtiene el primer caracter y lo convierte a mayúscula. slice(1).toLowerCase(): Obtiene el resto de la cadena a partir del segundo caracter y la convierte a minúsculas. 
El resultado se almacena en formattedPlanet.
Se verifica si el nombre del planeta formateado (formattedPlanet) existe como una clave en el diccionario orbitalPeriods. Si no existe, se lanza una excepción (throw new Error('Planeta no válido.')) indicando que el planeta ingresado no es válido.
seconds / EARTH_YEAR_SECONDS: Se divide la cantidad de segundos vividos (seconds) entre los segundos por año terrestre para obtener la edad en años terrestres. 
orbitalPeriods[formattedPlanet]: Se obtiene el periodo orbital relativo a la Tierra del planeta especificado (formattedPlanet) del diccionario. 
ageInPlanetYears: Se divide la edad en años terrestres por el periodo orbital relativo para obtener la edad en años del planeta. 
Math.round(ageInPlanetYears * 100) / 100: Se redondea el resultado a dos decimales para una mejor presentación.
