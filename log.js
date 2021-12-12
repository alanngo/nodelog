
import fs from 'fs'

// fatal 
const BG_RED = '\x1b[41m'
const BLACK = '\x1b[30m'

// error
const RED = '\x1b[31m'

// warning
const YELLOW = '\x1b[33m'

// info
const BLUE = '\x1b[34m'

// debug
const GREEN = '\x1b[32m'

// other
const WHITE = '\x1b[37m'
const BG_BLACK = '\x1b[40m'

// DO NOT EXPORT
const LOG = (arg, color, type) => {
    const PREFIX = type + ' ' + new Date().toLocaleString()
    fs.appendFile('debug.log', PREFIX + arg + '\n', (err) => {
        if (err) throw err
        console.log(BG_BLACK + color + PREFIX + WHITE + ':' + color, arg, BG_BLACK + WHITE)
    })
}

const debug = (arg) => LOG(arg, GREEN, 'DEBUG')
const info = (arg) => LOG(arg, BLUE, 'INFO')
const warn = (arg) => LOG(arg, YELLOW, 'WARNING')
const err = (arg) => LOG(arg, RED, 'ERROR')
const fatal = (arg) => LOG(arg, BG_RED + BLACK, 'FATAL')


export default { debug, info, warn, err, fatal }

