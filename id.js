 class Instrument {
        constructor(name, type, size, key, difficulty) {
        this.name = name
        this.type = type
        this.size = size
        this.key = key
        //difficulty 1-10
        this.difficulty = difficulty
        //mastery = 0 default; increased by practice (0-10)
        this.mastery = 0
    }
    about() {
        console.log(`${this.name}:\nThis is a ${this.type} instrument, it is ${this.size}. It's natural key is ${this.key}.`)
        if (this.difficulty >= 6) {
            console.log(`The ${this.name} is a difficult instrument to learn`)
        } else {
            console.log(`The ${this.name} is not incredibly difficult to learn`)
        }
    }
    section() {
        if (this.type === 'percussion') {
            console.log(`${this.name} belongs in the percussion section`)
        } else if (this.size === 'small') {
            console.log(`${this.name} performs in the alto section`)
        } else if (this.size === 'medium') {
            console.log(`${this.name} performs in the tenor section`)
        } else if (this.size === 'large') {
            console.log(`${this.name} performs in the bass section`)
        } else {
            console.log("This instrument does not meet size criteria")
        }
    }
    practice(hrsAWeek) {
        if (hrsAWeek === 0) {
            this.mastery =+ 0
            console.log(`Practice more! your mastery of this instrument is ${this.mastery}`)
        } else if (hrsAWeek < 10) {
            this.mastery.push(plusOne(this.mastery, this.name))
            return `Keep going! You have improved by 1 this week!`
        } else if (hrsAWeek >= 10) {
            this.mastery = plusTwo(this.mastery, this.name)
            console.log(`Awesome job! You have improved your mastery of this instrument by 2 this week!`)
        } else {
            console.log('no input')
        }
    }
}
// simple math functions
function plusOne(mOne, name) {
    if (mOne < 9) {
       mOne =+ 1
       return mOne
    } else if (mOne >= 9) {
        mOne =+ 1
        mOne = 'mastered'
        return `congratulations, you have mastered the ${name}!`
    } else { }
}
function plusTwo(mTwo, name) {
    if (mTwo < 8) {
       mTwo =+ 2
       return mTwo
    } else if (mTwo >= 8) {
        mTwo =+ 2
        mTwo = 'mastered'
        return `congratulations, you have mastered the ${name}!`
    } else { }
    }
//instrument sub classes

    class Woodwinds extends Instrument {
        constructor(name, size, key, difficulty, reeds) {
            super(name, 'woodwinds', size, key, difficulty)
            this.reeds = reeds
        }
        static doubleReeded(name, size, key) {
            return new Woodwinds(name, size, key, 8, 2)
        }
        static singleReeded(name, size, key) {
            return new Woodwinds(name, size, key, 5, 1)
        }
    }
    
    class Percussion extends Instrument {
        constructor(name, size, key, difficulty, mallets, keyboard) {
            super(name, 'percussion', size, key, difficulty)
            this.mallets = mallets
            this.keyboard = keyboard
        }
        static tunedKeys(name, size, key) {
            return new Percussion(name, size, key, 10, false, true)
        }
        static noKeys(name, size, key) {
            return new Percussion(name, size, key, 3, true, false)
        }
        static strikedKeys(name, size, key) {
            return new Percussion(name, size, key, 6, true, true)
        }
    }
    //percussion
    const piano = Percussion.tunedKeys('piano', 'large', 'C')
    const timpani = Percussion.noKeys('timpani', 'large', 'N/A')
    const xylaphone = Percussion.strikedKeys('xylaphone', 'medium', 'C')
    //woodwinds
   
    const bassoon = new Woodwinds('bassoon', 'medium', 'b flat', 8, 2)
    const flute = Woodwinds.singleReeded('flute', 'small', 'C')
    const clarinet = Woodwinds.singleReeded('clarinet','medium', 'b flat')
    const contrabassoon = Woodwinds.doubleReeded('contrabassoon', 'large', 'b flat')
    
   // console logs
    console.log(bassoon.section())
    console.log(bassoon.about())
    console.log(flute.about())
    console.log(flute.section())
    console.log(bassoon.practice(8))
    console.log(bassoon.mastery)
    console.log(clarinet.about())
    console.log(contrabassoon.about())
    console.log(piano.about())
    console.log(piano.section())
    console.log(timpani.about())
    console.log(timpani.section())
    console.log(xylaphone.about())