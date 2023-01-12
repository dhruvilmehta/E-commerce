function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  
export function backEndRegisterlookup(data,callback){
    let jsonData;
    if(data){
      jsonData=JSON.stringify(data)
    }
    // console.log(data,"JSON")
    const xhr=new XMLHttpRequest()
    // const url = window.location.hostname==='localhost' ? 'http://127.0.0.1:8000/api/books/users' : `${window.location.hostname}/api/books/users`

    // `https://bookecomm.herokuapp.com/api/books/users`

    const url = `https://${window.location.host}/api/books/users`
    console.log(url,"URL")


      // const url = 'http://127.0.0.1:8000/api/books/users'
      // const url=`https://projectxweb1.herokuapp.com/api/books/users`
      xhr.responseType="json"
      const csrftoken=getCookie('csrftoken');
      // console.log("csrf",csrftoken)
      let method="POST"
      xhr.open(method,url)
      xhr.setRequestHeader("Content-Type","application/json")
      if(csrftoken){
        xhr.setRequestHeader("X-Requested-With","XMLHttpRequest")
        xhr.setRequestHeader('X-CSRFToken',csrftoken)   // We can use JWT Token  ...Not used here
      }
      xhr.onload=function(){
        // console.log("xhr response",xhr.response,xhr.status)
        if(xhr.status===403){
          const detail=xhr.response.detail
          console.log(detail)
          // if(detail==="Authentication credentials were not provided."){
          //   if(window.location.href.indexOf("login")===-1){
          //     window.location.href="/login?showLoginRequired=true"
          //   }
          // }
        }
        // console.log("RESPONSE",xhr.response,xhr.status)
        callback(xhr.response,xhr.status)
      }
      
      xhr.onerror=function(e){
        console.log("error",e)
        callback({"message":"The request was an error"},400)
      }
    xhr.send(jsonData)
  }
  
  
  
