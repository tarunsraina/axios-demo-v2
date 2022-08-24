

function getTodos() {
    //console.log('GET Request');
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
  }
  
  // POST REQUEST
  function addTodo() {
    
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    // moved to putData()
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(axios.spread((todos,posts)=>showOutput(posts)))
    .catch(err=>console.error(err))
    
  }

  function deletePost(){
    let todoNum = document.getElementById("delTextfield").value;
    let url = 'https://jsonplaceholder.typicode.com/todos/'+todoNum;
    axios.delete(url)
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
    document.getElementById("delSuccess").innerText="Deleted successfully!,scroll above to 'Data'"
  }

  function putData(){
    let text = document.getElementById("customField1").value;
  
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
      title : text,
      completed : true
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))

    document.getElementById("putSuccess").innerText="Updated successfully";
  }


  function postTitle(){

     let title = document.getElementById("postTextfield").value;
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title : title,
      completed : false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))

    document.getElementById("postSuccess").innerText="Posted successfully!,scroll above to 'data' "

  }

  

  

  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  