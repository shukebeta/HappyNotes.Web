interface ApiService {
    user: {
        getProfile: () => Promise<any>;
    };
    note: {
        latest: (pageSize: number, pageNumber: number) => Promise<any>;
    };
    // Add more interfaces as needed
}
