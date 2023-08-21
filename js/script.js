//Reescrevendo o fetch apresentando os posts em formato de tabela.
async function loadPosts(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    return req.json();
}

function changeToLoadingState(){
    document.getElementById("posts").innerHTML = "Carregando....";
}

function renderPostAsRow(post) {
    return `
      <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>
    `;
  }
  
  function renderPostsAsTable(posts) {
    const rows = posts.map((post) => renderPostAsRow(post)).join("");
    return `
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

async function fetchPostsAndRender(){
    changeToLoadingState();
    const posts = await loadPosts();
    document.getElementById("posts").innerHTML = renderPostsAsTable(posts);
}