export interface Passanger{
    name: string;
    children?: string[];
}

const p1 : Passanger = {
    name: "Fernando"
}

const p2 : Passanger = {
    name: "Melissa",
    children: ['Sara', 'Lucia']
}

const printChildren = (pass:Passanger) => {
    const howManyChildren = pass.children?.length || 0;
    console.log(pass.name, howManyChildren);
}

printChildren(p2);