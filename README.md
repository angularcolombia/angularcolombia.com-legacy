# Angular Colombia

Sitio web de la comunidad [https://www.meetup.com/Angular-Colombia/](1). Desplegado en https://angularcolombia.com

## Roadmap

O las características que debería tener el el futuro:

- [X] Autenticación con Firebase
- [X] Integración con API de Meetup
- [X] Sección mostrando resumen del siguiente evento
- [X] Registro para eventos
- [ ] Encuestas
- [ ] Integración con Bitpay
- [ ] Propuesta de temas para charlas
- [ ] Propuesta para speakers
- [ ] Integración continua
- [ ] ?


## Desarrollo

- Si quieres saber cómo iniciar el proyecto para aportar código, dale una leida al archivo [`ANGULAR-CLI-README.md`.](./ANGULAR-CLI-README.md)

- Para instrucciones acerca de cómo aportar al proyecto puedes leer el archivo [`CONTRIBUTING.md`](./CONTRIBUTING.md)

Para iniciar el servidor de meetup de pruebas ejecuta en una termial/cmd `node dev-server/meetup.js`. Esto iniciará una API sencilla para pruebas en el puerto 8090.

Posterior a esto ya puedes correr `ng serve` para ver la app andando en el puerto `4200`.

Por ahora es necesario que crees una llave personal de Google Static Maps `https://developers.google.com/maps/documentation/static-maps/` para poner en `environments/environment.ts` como valor en la propiedad `staticMapsKey` reemplazando el actual.



[1]: https://www.meetup.com/Angular-Colombia/
