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
  quote: number;
  calculateTotalPrice(price: number): void;
  calculateTotalQuotes(quote: number): void;
}

export default ICard;