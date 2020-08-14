const data={
    locations:[],
    get location(){

    },
    set location(value){
        this._location=value
        this.locations.push(this._location)
    }
}

data.location='India'
data.location='Pak'

console.log(data)