export interface BookH2 {
    id: number | null;
    title: string;
    publicationDate: Date;
    author: {
        id: number;
    };
    genre?: string;
    price?: number;
    AgeInYears?: number;
}