export interface BookH2 {
    id: number;
    title: string;
    publicationDate: Date;
    author: {
        id: number;
    };
    genre?: string;
    price?: number;
    AgeInYears?: number;
}