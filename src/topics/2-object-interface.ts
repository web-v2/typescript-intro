const skill:string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skill: string[];
    hometown?: string;
}

const strider:Character = {
    name: 'Healing',
    hp: 100,
    skill: ['Healing', 'Counter']
}

strider.hometown = 'Rivendell';


console.table(strider);






export {}