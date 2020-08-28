interface Member {
    isMember: boolean,
    numberOfMember: number,
    nameOfMember: string,
    sex?: string
}

let Tom: Member = {
    isMember: true,
    numberOfMember: 4,
    nameOfMember: 'Tom',
    sex: 'male'
}

console.log(Tom);