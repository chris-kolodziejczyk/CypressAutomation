const log4js = require('log4js')


log4js.configure({
    appenders: {
        main: {
            type: 'fileSync',
            filename: './log.log',
            maxLogSize: 10 * 1024 * 1024,
            backups: 3,
            layout: {
                type: 'pattern',
                pattern: 'Date: %d{dd/MM/yyyy} %d{Time: hh:mm:ss} [Log level: %p] [Appender: %c]%nLog: %m%n'
            },
        },
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[Date: %d{dd/MM/yyyy} %d{Time: hh:mm:ss} [Log level: %p] [Appender: %c]: %m%n%]'
            }
        }
    },
    categories: {
        all: {
            appenders: ['console', 'main'],
            level: ['all']
        },
        debug: {
            appenders: ['console'],
            level: 'debug'
        },
        default: {
            appenders: ['console', 'main'],
            level: 'trace'
        }
    }
})

const logAll = log4js.getLogger('everything')
const debug = log4js.getLogger('debug')
const base = log4js.getLogger('default')

module.exports.logAll = logAll
module.exports.debug = debug
module.exports.base = base