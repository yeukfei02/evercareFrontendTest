# evercareFrontendTest

<p align="center">
  <img width="90%" height="90%" src="https://github.com/yeukfei02/evercareFrontendTest/blob/master/screenshot1.png" alt="">
</p>

evercareFrontendTest

## Requirement:

- install yarn
- install node (v12+)

## Testing and run:

```
$ yarn

// development
$ yarn run dev

// production
$ yarn run production

// run type check
$ yarn run type-check

// use eslint and prettier to format code
$ yarn run lint
```

open localhost:5000

## Docker:

```
// build images and start container in one line
docker-compose up -d --build

// go inside container
docker exec -it <containerId> /bin/bash

// check container logs
docker logs <containerId>

// remove and stop container
docker-compose down
```

open localhost:5000
