# Serverless Typescript Docker VSCode Debug

Run and Debug your serverless functions code as you if be runinng on AWS.

### Features
```
Docker
Docker Compose
Local Stack
Cache of global vars
VS Code Debugger
Reload on change
```

### Requirements

```
docker
docker-compose
```

<br /><br />

### Running Project
```
npm i

```
docker-compose up
```

```
docker-compose up -d
```
in this case, you must `docker-compose logs -f` to check logs

<br /><br />

### Calling lambda

open http://0.0.0.0:3000/dev/hello


<br /><br />

### Watching
```
change any .ts file to reload
```

<br /><br />


### Debugging
