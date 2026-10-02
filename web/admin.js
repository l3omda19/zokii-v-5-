const ADMIN_PASSWORD="imeddeddiner";
const login=document.getElementById("login"), panel=document.getElementById("panel"), error=document.getElementById("error");
document.getElementById("loginBtn").onclick=()=>{
  if(document.getElementById("password").value===ADMIN_PASSWORD){
    login.classList.add("hidden"); panel.classList.remove("hidden"); render();
  }else error.textContent="Invalid password.";
};
function makeCode(){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let c="ZK-"; for(let i=0;i<12;i++) c+=chars[Math.floor(Math.random()*chars.length)];
  const now=new Date(), exp=new Date(now.getTime()+3*86400000);
  return {code:c,created:now.toISOString(),expires:exp.toISOString()};
}
function getAll(){try{return JSON.parse(localStorage.getItem("zokii_codes")||"[]")}catch{return[]}}
function save(x){const a=getAll();a.unshift(x);localStorage.setItem("zokii_codes",JSON.stringify(a));}
function render(){
  const list=document.getElementById("list"), a=getAll();
  list.innerHTML=a.length?a.map(x=>`<div class="license"><code>${x.code}</code><div class="small">Created: ${new Date(x.created).toLocaleString()}<br>Expires: ${new Date(x.expires).toLocaleString()}</div></div>`).join(""):"<div class='small'>No codes created on this browser.</div>";
}
document.getElementById("generate").onclick=()=>{
  const x=makeCode(); save(x);
  const box=document.getElementById("code");
  box.innerHTML=`<strong>${x.code}</strong>Expires: ${new Date(x.expires).toLocaleString()}<br><br><button onclick="navigator.clipboard.writeText('${x.code}')">COPY</button>`;
  box.classList.remove("hidden"); render();
};