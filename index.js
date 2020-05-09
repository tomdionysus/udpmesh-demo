#!/usr/bin/node

const Logger = require('./lib/Logger')
const Server = require('./lib/Server')

function main() {
	// ENV and defaults

	// Logger
	var logger = new Logger()

	// Boot Message
	logger.log('udpmesh-demo (Tom Cully)','----')
	logger.log('v1.0.0','----')
	logger.log('','----')
	logger.log('Logging Level %s','----', Logger.logLevelToString(logger.logLevel))

	// Main Downloader
	var svr = new Server({
		logger: logger,
		env: process.env.ENV || 'prod'
	})

	var handle = ()=>{
		logger.debug("SIGINT - Stopping")
		svr.stop()
		logger.info("SIGINT - Stopped")
		process.exit()
	}

	process.on('SIGTERM', handle)
	process.on('SIGINT', handle)

	// Downloader Start
	svr.start()

}

main()
