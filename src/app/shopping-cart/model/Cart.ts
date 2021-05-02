export interface CartData{
    productId:number,
    name: string,
    cartons: number,
    units: number,
    cartonPrice: number,
    unitPrice:number,
    totalPrice: number
}

export interface CartResponse{
    status: string,
    data: CartData[]
}

export interface AddCartRequest{
    productId: number,
    cartons: number,
    units: number
}

export interface CartStatus{
    status: string,
    data: boolean
}