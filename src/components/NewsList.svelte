<script>
  export let articles = [];
</script>

<ul>
  {#each articles as article}
    <li>
      <h2>{article.title}</h2>
      <p>Date: {article.date}</p>
      <p>Author: {article.author}</p>
      <div>{article.content}</div>
    </li>
  {/each}
</ul>
