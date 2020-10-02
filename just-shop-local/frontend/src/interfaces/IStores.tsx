interface IStores {
    id: number;
    imgPath: string;
    title: string;
    address: string;
    products?: string;
    postcode: string;
    messageA: string;
    messageB?: string;
    btnText: string;
    terms: string;
}

export default IStores;