interface IModal {
  quotePrice: number;
  setIsOpen(isOpen: boolean): void;
  discount: number;
  isDiscountApplied: boolean;
  handleDiscountCode(discountCode: string): void
}

export default IModal;