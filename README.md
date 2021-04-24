# Stars Wars API

## Species & Planets

## Requisitos

* [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)
* [NodeJS](https://nodejs.org/es/download/)
* [AWS CLI](https://aws.amazon.com/es/cli/)

## Comandos

### Instalación
```bash
make install
```
o
```bash
npm install
```

### Desplegar API
```bash
make deploy
```
o
```bash
serverless deploy
```

### Eliminar API
```bash
make remove
```
o
```bash
serverless remove
```

### Endpoints

* GET - https://{API_GATEWAY_URL}/dev/species
* POST - https://{API_GATEWAY_URL}/dev/species
* GET - https://{API_GATEWAY_URL}/dev/planets/{id}
  
### Resumen de la API

* ./public/api/spec.yml

_Copiar contenido de spec.yml en [https://editor.swagger.io](https://editor.swagger.io)._

## Ejecutar pruebas E2E
```bash
make test-e2e
```
o
```bash
serverless invoke local -f speciesCreate --path ./test/e2e/data.json
serverless invoke local -f speciesList
serverless invoke local -f planetFind --data '{ "pathParameters": {"id":22}}'
```

## Ejecutar pruebas unitarias
```bash
make test-unit
```
o
```bash
npm test
```


