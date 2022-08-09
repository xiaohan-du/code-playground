interface IModal {
  quotePrice: number;
  quoteNumber: number;
  setIsOpen(isOpen: boolean): void;
  discount: number;
  isDiscountApplied: boolean;
  handleDiscountCode(discountCode: string): void
}

export default IModal;