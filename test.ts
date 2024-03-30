import { promises as fs } from 'node:fs'

const pathDataJsonLocal = './data/data.json'

let skillsArray: string[] = ['DoP', 'Cameraman', 'Juny Dev']

let infoData: {
    officeId: number
    isOpened: boolean
    contacts: {
        phone: string
        email: string
        address: { city: string }
    }
} = {
    officeId: 45,
    isOpened: true,
    contacts: {
        phone: '+3232342342',
        email: 'hgf@jmdfjdlk.com',
        address: {
            city: 'Kyiv',
        },
    },
}

// fs.readFile(pathDataJsonLocal, 'utf-8')
//     .then((data) => JSON.parse(data))
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err))

for (let skill of skillsArray) {
    console.log(`Is yuor skills ${skill}`)
}

let newSkillsArray: string = skillsArray
    .filter((skill: string) => skill !== 'DoP')
    .map((skill) => skill + ` shit `)
    .reduce((a, b) => a + b)

const newbeSkilldepends: readonly [number, string, string, string] = [
    123,
    'DoP',
    'Cameraman',
    'Fron-End Develeper ',
]

const id = newbeSkilldepends[0]
const cinemaSkills = newbeSkilldepends.filter(
    (skill) => typeof skill !== 'number'
)
// console.log(cinemaSkills)

enum StatusCode {
    SUCCESS = 1,
    FAILED = 'Sun',
    IN_PROCESS = 'Night',
}
const respFromBank = {
    message: 'Все добре',
    statusCode: StatusCode.SUCCESS,
}

console.log(respFromBank)
