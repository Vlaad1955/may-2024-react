export interface PostModel {
    id: number,
    title: string,
    body: string,
    tags: [],
    reactions: {
        "likes": number,
        "dislikes": number
    },
    views: number,
    userId: number
}