interface ICard {
  id: number;
  imgPath?: string;
  title: string;
  content: string;
  icon1: string;
  icon2: string;
  price: number;
  calculateTotalPrice(price: number): void;
}

export default ICard;