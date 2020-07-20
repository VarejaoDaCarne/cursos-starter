function experiencia(anos) {
    switch(anos) {
        case 0 :
        case 1 :
            console.log('Inciante')
            break
        case 2 :
        case 3 :
            console.log('Intermediário')
            break
        case 4 :
        case 5 :
        case 6 :
            console.log('Avançado')
            break
        case 7 :
        default : 
            console.log('Jedi Master')
            break
    }
}

const anosEstudo = 7
experiencia(anosEstudo)