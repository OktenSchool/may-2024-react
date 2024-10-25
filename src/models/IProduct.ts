export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    images: string[];
    thumbnail: string;
}

interface IDimensions {
    width: number;
    height: number;
    depth: number;
}

interface IReviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface IMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}
