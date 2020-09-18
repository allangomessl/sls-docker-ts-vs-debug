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
---
```
docker
docker-compose
```

<br /><br />

### Running Project
---
```
npm i
docker-compose up
```
or
```
npm i
docker-compose up -d
docker-compose logs -f    <-- show logs
```

![](https://github.com/allangomessl/sls-docker-ts-vs-debug/blob/master/assets/running.gif?raw=true)

<br /><br />

### Calling lambda

open http://0.0.0.0:3000/dev/hello

<br /><br />

### Watching
```
change any .ts file to reload
```

![](https://github.com/allangomessl/sls-docker-ts-vs-debug/blob/master/assets/change.gif?raw=true)

<br /><br />


### Debugging

![](https://github.com/allangomessl/sls-docker-ts-vs-debug/blob/master/assets/debug.gif?raw=true)
