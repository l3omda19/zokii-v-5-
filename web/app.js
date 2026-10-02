const result=document.getElementById("result");
document.getElementById("create").onclick=()=>{
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code="ZK-";
  for(let i=0;i<12;i++) code+=chars[Math.floor(Math.random()*chars.length)];
  const now=new Date(), exp=new Date(now.getTime()+3*24*60*60*1000);
  result.innerHTML=`<strong>${code}</strong>Created: ${now.toLocaleString()}<br>Expires: ${exp.toLocaleString()}<br><br><button onclick="navigator.clipboard.writeText('${code}')">COPY</button>`;
  result.classList.remove("hidden");
};