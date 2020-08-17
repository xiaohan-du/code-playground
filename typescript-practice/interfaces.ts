interface Member {
    isMember: boolean,
    name: string,
    age: number,
    height: number,
    sex?: string
};

let Tom: Member = {
    isMember: true,
    name: 'Tom',
    age: 3,
    height: 180,
    sex: 'male',
}

console.log(Tom);