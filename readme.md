# Docker-back-front-end

Modelo de aplicação conteinerizada separada em backend e frontend

```sh
$ docker-compose build
```

```sh
$ docker-compose up -d backend
```

<img  src="https://image.ibb.co/gAA2zS/Screen_Shot_2018_05_06_at_19_20_41.png">

```sh
$ docker-compose up -d frontend
```
<img  src="https://image.ibb.co/gdXt67/Screen_Shot_2018_05_06_at_19_21_15.png">

<img  src="https://image.ibb.co/kBuUeS/Screen_Shot_2018_05_06_at_19_26_15.png">

```sh
$ cd frontend && npm install && npm run start:dev
```

<img  src="https://image.ibb.co/kA8Btn/Screen_Shot_2018_05_06_at_19_25_55.png">


## Conteúdo

- Backend
	- PHP 7.1.9
	- Nginx latest 1.13
- Frontend 
	- Node 8.11.1
	- Weppack 4.7.0

**OBS:** *Este modelo ainda não está funcional*