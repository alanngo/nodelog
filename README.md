# Logit673

A logging tool for nodejs, which prints to stdout and ``debug.log``

## Install
```bash
$ npm install logit673
```

## Usage

```javascript
import log from 'logit673'

log.debug('debug')
log.info('info')
log.warn('warning')
log.err('error')
log.fatal('fatal')
```


## Output

### debug.log
<img src="./logfile.png">

### stdout
<img src="./stdout.png">