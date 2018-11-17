/**
 * 
 */
const net = require('net');

class LqmServer {
  
  /**
   * @constructor
   * @param host:String Listen host
   * @param port:Number Listrn port
   */
  constructor(host,port) {
    this.host = host || '';
    this.port = port || 0;

    this.server = net.createServer(this._handleCreateServer);
  }

  listen() {
    this.server.listen(this.port, this.hos);
  }

  /** Private */

  /**
   * 
   * @param {net.sock} sock 
   */
  _handleCreateServer(sock) {
    console.log('Client connected!');

    sock.on("data", (data) => {
      const buf = Int8Array.from(data)
      buf.forEach(char => {
        let b = 1;
        const a = Array(8);

        let i = 0;
        for(;i<8;i++){
          console.log( char& (b << i))
          a[7-i] = ((char & (b << i)) >> i);
        } 

        console.log(a)
      })
    })
  }
  
}

module.exports = LqmServer;