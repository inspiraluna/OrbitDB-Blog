// src/routes/index.json.js
import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown"

let postFiles = importMarkdowns("src/posts/")

export function get(request) {
    let posts = postFiles.map((file) => convertToPostPreview(file));
    let body = JSON.stringify(posts);
    return {body}
}