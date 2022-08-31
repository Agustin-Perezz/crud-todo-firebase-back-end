
# Crud Notes-App

La API nos proporciona un crud  completo, este se conecta a la base de datos proporcionada por firebase-admin para realizar las modificaciones en la misma.

Link Deploy (Heroku): https://shrouded-caverns-76126.herokuapp.com/

## Instalación

1. Clonar el proyecto.
2. Instalar las dependencias ejecutando el comando `npm install`.
3. Para proseguir deven configurar firebase-admin en su proyecto, les dejo el [link](https://firebase.google.com/docs/admin/setup): 
3. Crear una archivo `.env` con las siguientes variables: 
 - `GOOGLE_APPLICATION_CREDENTIALS=<yout-path-archive-google-credentials.json>`
 - `PORT=<your_port>`
6. Levantar la API con `npm start`.

## Endpoints

#### Get all notes.

```http
  POST /api/notes/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uid` | `string` | **Required** |

#### Find note.

```http
  POST /api/notes/find/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uid` | `string` | **Required** |
| `id` | `string` | **Required** |

#### Add note.

```http
  POST /api/notes/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `note` | `[]string` | **Required** |
| `uid` | `string` | **Required** |

#### Update note.

```http
  POST /api/notes/update/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `[]string` | **Required** |
| `uid` | `string` | **Required** |
| `id` | `string` | **Required** |

#### Delet note.

```http
  POST /api/notes/delet/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required** |
| `uid` | `string` | **Required** |

## Autor

Agustin Nicolas Perez - [Linkedin](https://www.linkedin.com/in/agustinperez-front-end-developer/).
