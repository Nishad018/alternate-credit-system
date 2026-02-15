function addDocument(){

let container=document.getElementById("docContainer");

let div=document.createElement("div");

div.innerHTML=`
<select>
<option>Bank Statement</option>
<option>Utility Bill</option>
<option>Rent Receipt</option>
<option>Invoice</option>
<option>Other</option>
</select>

<input type="file">
`;

container.appendChild(div);

}
