import NetworkMonitor from "./alert-scripts/network.js"


class Alert {
    constructor () {
       this.network = new NetworkMonitor ()
       
    }
}