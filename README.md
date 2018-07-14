# Solver Test
Lo importante está en ```routes/index.js```, existe una variable model donde se configura lo que uno desea optimizar.

A continuación se muestra el modelo utilizado para hacer una dieta que tenga 3000 calorias y que minimo tenga 20g de proteina, 50g de carbos y maximo 10g de grasa.

El modelo de prueba es el siguiente:
```
let  model = {
  "optimize": "cal",
  "opType": {"equal": 3000},
  "constraints": {
    "protein": {"min": 20},
    "carbs": {"min": 50},
    "fat": {"max": 10}
  },
  "variables": {
    "egg": {
      "cal": 60,
      "protein": 6,
      "carbs": 1,
      "fat": 4
    },
    "meat": {
      "cal": 364,
      "protein": 75,
      "carbs": 0,
      "fat": 7
    }
  },
};
```
```optimize``` define que es lo que vamos a optimizar.

```opType``` define si vamos a maximizar, minimizar o igualar.

```constraints``` define los limites de los elementos de las variables.

```variables``` define las variables y el valor de los elementos que las componen.
