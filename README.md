# WDIO example

## Steps to run

### Start selenium server

For the sake of simplicity, I've added *selenium-server-standalone-2.53.0.jar* to the repository.

```sh
$ cd lib
$ java -jar selenium-server-standalone-2.53.0.jar
```

If you got the following error message: *ERROR: Cannot find firefox binary in PATH*, configure the slave node service so that it knows where the firefox is. 

```sh
$ java -jar selenium-server-standalone-2.53.0.jar -Dwebdriver.firefox.bin="<Path to your installed firefox>\firefox.exe"
```

### Run Jasmin based tests (On Windows)

```sh
$ npm install
$ node_modules\.bin\wdio wdio.conf.js
```