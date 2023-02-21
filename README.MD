# Mocha + Chai + Selenium + NodeJS
> By: Christian Ansel B. Fernandez

## Pre-requisites
* Node
* VScode 


### Installation

```
npm install 

npm install -g mocha
```


### Running test locally
```
npm run test
```

### Running test in CI/CD with Reports and API
```
To run all test please run with Reports
npm run test


To run specific test please run
mocha src/ --no-timeouts --reporter mochawesome -g Test-2
```

### Adding .sh file?

* Please execute 

```
git update-index --chmod=+x file.sh
```