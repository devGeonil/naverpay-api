(function(){
  `usestric`

const api_btn = document.querySelector("#api_button");
api_btn.addEventListener("click" ,(e)=>{

const api_main_content = document.querySelector("#main-content");

call_api()
.then(text => input_doc(api_main_content, text) );
})


const call_api = async () =>{
  return await fetch("http://localhost:4000/api/open")
  .then(res => res.text())
  .catch(error => console.log(error));
}

const input_doc = (pDoc, cDoc) => {
  pDoc.innerHTML = cDoc
}

})();
