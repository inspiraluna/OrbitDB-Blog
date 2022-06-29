// src/routes/index.json.js
import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown"

export function get() {
    let postFiles = importMarkdowns("src/posts/")
    console.log("postFiles",postFiles)
    let o_posts = postFiles.map((file) => convertToPostPreview(file))

    console.log('o_posts',o_posts)
    let body = JSON.stringify(o_posts);

    return {body}
}