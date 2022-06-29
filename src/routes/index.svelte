<!-- /src/routes/index.svelte -->
 <script context="module">
  export async function load({fetch}) {
    const posts = await fetch("/api").then((r) => r.json())
    return {
        props: {posts}
    }
  }
</script>

<script>
  import PostCard from "/src/components/post-card.svelte";
  export let posts;
</script> 
<style>
    main {
      padding: 4vw;
    }
  </style>
<main>
  <h1>Posts</h1>
  <p>Here we will place all the different blog posts</p>
  {#each posts as post}
    <PostCard {...post}/>
  {/each}
</main>

