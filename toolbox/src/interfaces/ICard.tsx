interface ICard {
  id: number;
  isPanel: boolean;
  imgPath?: string;
  title: string;
  content: string;
  icon1: string;
  icon2: string;
  icon3: string;
  price: number;
  calculateTotalPrice(price: number): void;
}

export default ICard;