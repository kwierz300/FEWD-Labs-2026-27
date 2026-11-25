function addNewParagraph(){
 const first=document.querySelector("p");
 const paragraph=document.createElement("p");
 paragraph.textContent=document.getElementById("textarea1").value;
 first.parentNode.insertBefore(paragraph,first);
}
function alterCell(){document.getElementById("table1").rows[0].cells[1].innerHTML='<span id="redcell">This table cell has been altered</span>';}
function domView(){
 let output="";
 for(const [tag,title] of [["p","Paragraphs"],["input","Inputs"],["td","Table cells"]]){
  const nodes=document.getElementsByTagName(tag);
  output+=title+"("+nodes.length+"):<br>";
  for(const node of nodes) output+=(node.id||"(no id)")+"<br>";
 }
 const view=document.getElementById("domview");view.innerHTML=output;view.style.visibility="visible";
}
function domHide(){document.getElementById("domview").style.visibility="hidden";}
window.onload=()=>{document.getElementById("listdom").onclick=domView;document.getElementById("hidedom").onclick=domHide;document.getElementById("addpara").onclick=addNewParagraph;document.getElementById("altercell").onclick=alterCell;};
