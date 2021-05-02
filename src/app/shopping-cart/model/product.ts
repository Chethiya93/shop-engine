export interface Product{
    id: number,
    name: string,
    cartonPrice: number
    description: string
}

export interface productResponse{
    status: string,
    data: Product[]
}

export interface PriceList{
    id: number,
    name: string,
    cartons: number,
    units: number,
    price: number
}
export interface priceResponse{
    status: string,
    data: PriceList[]
}