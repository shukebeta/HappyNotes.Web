export interface User {
    id: number;
    username: string;
    email: string;
    gravatar: string;
    createdAt: number;
}

export interface Note {
    id: number;
    userId: number;
    content: string;
    tags: string | null;
    favoriteCount: number;
    isLong: boolean;
    isMarkdown: boolean;
    isPrivate: boolean;
    createdAt: number;
    updatedAt: number;
    user: User;
}

export interface NoteResponse {
    data: {
        pageIndex: number;
        pageSize: number;
        pageCount: number;
        totalCount: number;
        dataList: Note[];
        data: null;
    };
    successful: boolean;
    errorCode: number;
    message: string;
}

export interface PageData<T> {
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    dataList: T[];
}

export interface ApiResponse<T> {
    data: T;
    successful: boolean;
    errorCode: number;
    message: string;
}
