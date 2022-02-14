function include_html(node_name, part_url, options){
  //ini
  const params = options || {};
  const part_id = params.part_id || null;
  const js = params.js || null; 
  let elements;
  let els;
  //get elements
  if(node_name.slice(0,1)=='#'){
    elements = [document.getElementById(node_name.replace('#',''))];
  }else if(node_name.slice(0,1)=='.'){
    elements = document.getElementsByClassName(node_name.replace('.',''));
  }else{
    elements = document.getElementsByTagName(node_name);
  }
  //xhr
  const xhr = new XMLHttpRequest();
  xhr.open('GET', part_url, true);
  xhr.onload = () =>{
    if(xhr.status==200){
      if(part_id==null){
        els = xhr.response.body.children;
      }else{
        els = [xhr.response.getElementById(part_id)];
      }
      if(js!=null){
        const promise = new Promise(include_els).then(getscript(js));
      }else{
        include_els();
      }
    }else{
      write_html('ファイルの取得に失敗しました。');
    }
  }
  xhr.onerror = () =>{
    write_html('ファイルの取得に失敗しました。');
  }
  xhr.responseType = 'document';
  xhr.send();

  function include_els(){
    [...elements].forEach(element=>{
      element.textContent = '';
      [...els].forEach(el=>{
        element.appendChild(el.cloneNode(true));
      });
    });
  }
  function write_html(str){
    [...elements].forEach(element=>{
      element.textContent = str;
    });
  }
}

function getscript(url){
  const xhr = new XMLHttpRequest();
  xhr.onload = () =>{
    if(xhr.status==200){
      const script = document.createElement('script');
      script.textContent = xhr.responseText;
      document.body.appendChild(script);
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}
