/* ---------------- NORMAL DOCUMENTS (Finance Page) ---------------- */

function addDocument(){

let container = document.getElementById("docContainer");

let div = document.createElement("div");

div.innerHTML = `
<select>
<option>Bank Statement</option>
<option>Utility Bill</option>
<option>Rent Receipt</option>
<option>Invoice</option>
<option>UPI Transaction History</option>
<option>Other</option>
</select>

<input type="file" accept=".pdf,.jpg,.png,.doc,.docx">
<br><br>
`;

container.appendChild(div);

}


/* ---------------- COLLATERAL DOCUMENTS ---------------- */

function addCollateral(){

let container = document.getElementById("docContainer");

let div = document.createElement("div");

div.innerHTML = `
<select>
<option>Land Papers</option>
<option>House Property Papers</option>
<option>Farm Land Records (7/12 Extract)</option>
<option>Machinery Ownership Proof</option>
<option>Agricultural Equipment</option>
<option>Cattle Ownership Proof</option>
<option>Tractor / Vehicle Ownership</option>
<option>Job / Employment Proof</option>
<option>Gold / Jewellery Proof</option>
<option>Village Panchayat Certificate</option>
<option>Self Help Group Proof</option>
<option>Other Collateral</option>
</select>

<input type="file" accept=".pdf,.jpg,.png,.doc,.docx">
<br><br>
`;

container.appendChild(div);

}
