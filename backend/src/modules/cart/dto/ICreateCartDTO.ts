interface ICreateCartDTO {
  product_id: string;
  user_id: string;
  subTotal: number;
  amount: number;
}

export { ICreateCartDTO }