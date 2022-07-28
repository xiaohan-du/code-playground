interface IHeader {
  quoteNumber: number;
  totalPrice: number;
  handlePayment: () => React.ReactNode;
}

export default IHeader;