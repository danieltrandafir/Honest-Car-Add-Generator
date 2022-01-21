function genRandNum(num){
    return Math.floor(Math.random() * num)
}

const carAdd = {
    saleIntro: ['For sale a slow', 'For sale a unhurried', 'For sale a steady', 'For sale a dull', 'For sale a boring', 'For sale a sluggish'],
    carMake: ['BMW X3', 'Mercedes CLS', 'Skoda Octavia', 'Ford Mondeo', 'Range Rover', 'Honda Civic'],
    descr1: ['has a hilarious gearbox 🤪', 'with a tricky clutch 🙃', 'with a cheerful engine 😄', 'with a gloomy interior 😧', 'with an unhappy suspension 😒', 'it has thoughtful seats 🤗'],
    descr2: ['and comical looks', 'and cavernous boot', 'and massive ego', 'and huge bills', 'and demanding fuel costs', 'and complicated feelings'],
     myCarAdd: function(){
        return `${this.saleIntro[genRandNum(this.saleIntro.length)]} ${this.carMake[genRandNum(this.carMake.length)]}, ${this.descr1[genRandNum(this.descr1.length)] } ${this.descr2[genRandNum(this.descr2.length)]}!`
    }
}

console.log("DT Honest Car Sales:" + "\n" + carAdd.myCarAdd())