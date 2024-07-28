export interface Products {
    status:  boolean;
    message: string;
    data:    Data;
}

export interface Data {
    rows:     Row[];
    metadata: Metadata;
}

export interface Metadata {
    itemsPerPage: number;
    totalPages:   number;
    totalItems:   number;
    currentPage:  number;
    nextPage:     null;
    searchTerm:   string;
}

export interface Row {
    tenantId:           number;
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    stock:              number;
    hidden:             boolean;
    comingSoon:         boolean;
    views:              number;
    hideWhenOutOfStock: boolean;
    media:              Media;
    createdAt:          string;
    deletedAt:          null;
    categories:         Category[];
}

export interface Category {
    tenantId: number;
    id:       number;
    name:     string;
}

export interface Media {
    images: Image[];
}

export interface Image {
    key:  string;
    date: string;
    url:  string;
}
