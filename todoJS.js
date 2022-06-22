function add_items() 
{
	let items= document.getElementById("box");
	let list_items= document.getElementById("list_items");
	if (items.value != "") 
	{
		let make_list= document.createElement("li");
		make_list.appendChild(document.createTextNode(items.value));
		list_items.appendChild(make_list);
		items.value=""

		make_list.onclick= function(){
			this.parentNode.removeChild(this);
		}

	} 
	else
	{
		alert("Please add a value to item");
	}
}