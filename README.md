# proyecto-pensamiento-computacional-s5

Examen pensamiento computacional de Fiorella Miranda, sección 5.

## Link de web pública (github pages)

<[https://link.com](https://ellanyx.github.io/proyecto-pensamiento-computacional-s5/)>

## Título del proyecto

Owltimate tamagotchi

### Referencia de origen / bibliografía

Can your pet? 2009, por Heeman Seao o su alias, Scaryama.

Tamagotchi, 1996, por Aki Maita y la compañía Bandai.

Pou, Paul Salamah, 2012.

### Imagen de referencia de proyecto

Deja acá una imagen de la "portada" de tu proyecto. Como si fuera un afiche. Puede ser un fotograma de toda la interacción.

### Integrantes

Fiorella Miranda Suárez [ellanyx]([https://github.com/usuarioGithub](https://github.com/ellanyx))

### Enlace de p5.js 

<[https://editor.p5js.org](https://github.com/ellanyx)>

### Relato inicial

Tienes una lechuza de campanario de mascota que debes cuidar. El jugador debe alimentarla, bañarla y mantenerla feliz. Tras cuidar de ella siguiendo todos los pasos, la lechuza evolucionará de forma inquietante hasta convertirse en un monstruo que escapa del mundo virtual y acaba con el jugador.

### Storyboard

Imágenes del storyboard, las que deben verse acá y estar subidas en el mismo repositorio

### Estados

#### Estado 1
Estado default, en este estado la lechuza está esperando que el jugador interactúe con ella.

```js
case E.NORMAL:
  image(ogowl,300,200,250,250);
  break;
```

#### Estado 2
Si el jugador hace clic en el botón FOOD, cambia al estado FEEDING.
La lechuza es alimentada.

```js
case E.FEEDING:
  image(feeding,300,200,250,250);
  break;
```

#### Estado 3
Si el jugador hace clic en el botón BATH, cambia al estado BUBBLES.
Bañas a la lechuza.

```js
case E.BATHING:
  image(bubbles,300,200,250,250);
  break;
```

#### Estado 4
Si el jugador hace clic en el botón PETTING, cambia el estado a CUTE.
EVOLVE reproduce frames que dan paso a la animación que acaba con el jugador.
Bañas a la lechuza.

```js
case E.PETTING:
  image(cute,300,200,250,250);
  break;
```

#### Estado 5
El jugador desbloquea un estado secreto al realizar todas las acciones anteriores, llamado EVOLVE.
EVOLVE reproduce frames que dan paso a la animación que acaba con el jugador.

```js
case E.EVOLVING:

  image(evil[frameEvil],300,200,250,250);

  if(frameCount % 5 == 0){
    frameEvil++;
  }

  if(frameEvil >= 13){
    estado = E.DEAD;
  }

  break;
```

#### Estado 6
Cuando termina la animación aparece la pantalla de GAME OVER.
El jugador puede reiniciar el juego presionando la tecla R.

```js
case E.DEAD:

  background(0);

  fill(255);

  textAlign(CENTER,CENTER);

  textSize(45);
  text("GAME OVER",width/2,height/2);

  textSize(18);
  text("Presiona R para volver",width/2,height/2+50);

  return;
```
