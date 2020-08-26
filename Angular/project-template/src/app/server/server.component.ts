import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .online{
            color:white
        }
    `]
})
export class ServerComponent{
    allowServer=false
    serverId:number=10
    serverStatus:string='offle'
    server='Server is off'
    serverName=''
    userName=''
    constructor(){
        setTimeout(()=>{
            this.allowServer=true
        },2000)
        this.serverStatus=Math.random()>0.5?'online':'offline'
    }
    getServerStatus(){
        return this.serverStatus
    }
    onCreateServer(){
        this.server='Server is on '+this.serverName
    }
    onUpdate(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }
    getColor(){
        return this.serverStatus==='online'?'green':'false'
    }
}