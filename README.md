# WDIO example

## Steps to run

### Start selenium server

For the sake of simplicity, I've added *selenium-server-standalone-2.53.0.jar* to the repository.

```sh
$ cd lib
$ java -jar selenium-server-standalone-2.53.0.jar
```

### Run Jasmin based tests (On Windows)

```sh
$ node_modules\.bin\wdio wdio.conf.js
```