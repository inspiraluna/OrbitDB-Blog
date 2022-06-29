<script context="module">
// src/routes/posts/[url].svelte
export const load = async ({ fetch, params, url }) => {
      const post = await fetch(`/posts/${params.url}.json`).then((r) => r.json())
      return {props: {post}}
    }
</script>
<svelte:head>
    <title>{post.attributes.title}</title>
</svelte:head>
<style>
    :global(article) {
        padding: 4vw;
    }
</style>

<script>
    export let post;
</script>

<article>
    <h1 class="section-header">{post.attributes.title}</h1>
    {@html post.html}
</article>