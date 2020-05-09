const { MeshNode } = require('udpmesh')

const Logger = require('./Logger')
const ScopedLogger = require('./ScopedLogger')

class Server {
	constructor(options = {}) {
		this.logger = new ScopedLogger('Server', options.logger || new Logger())

		this._node = new MeshNode({ logger: options.logger }) 
	}

	start() {
		this._node.start()
	}

	stop() {
		this._node.stop()
	}
}

module.exports = Server