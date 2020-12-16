(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1264:function(e,t,o){"use strict";o.r(t);var n=o(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getresponse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getresponse"}},[e._v("#")]),e._v(" GetResponse")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.getresponse.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GetResponse"),n("OutboundLink")],1),e._v(" is an online platform that offers email marketing software, landing page creator, webinar hosting, and much more.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/GetResponse/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Contact")]),e._v(" "),n("ul",[n("li",[e._v("Create a new contact")]),e._v(" "),n("li",[e._v("Delete a contact")]),e._v(" "),n("li",[e._v("Get a contact")]),e._v(" "),n("li",[e._v("Get all contacts")]),e._v(" "),n("li",[e._v("Update contact properties")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to get all the contacts from GetResponse and check if they belong to a specific campaign. If they don't belong to the specified campaign, the workflow updates the campaign ID of the contacts using the GetResponse node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/778",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("GetResponse")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(682),alt:"A workflow with the GetResponse node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-getresponse-node-getall-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-getresponse-node-getall-contact"}},[e._v("#")]),e._v(" 2. GetResponse node (getAll: contact)")]),e._v(" "),n("p",[e._v("This node will retrieve all the contacts from GetResponse.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the GetResponse node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/GetResponse/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'GetAll' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Return All")])]),e._v(" to true.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node retrieves all the contacts from GetResponse.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(683),alt:"Using the GetResponse node to retrieve all the contacts"}})]),e._v(" "),n("h3",{attrs:{id:"_3-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("This node will check if a contact belongs to the "),n("code",[e._v("n8n")]),e._v(" campaign or not. If a contact does not belong to the "),n("code",[e._v("n8n")]),e._v(" campaign, it will return true otherwise false. Create a campaign in GetResponse if you don't already have one.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'String'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > GetResponse > Output Data > JSON > campaign > name. You can also add the following expression: "),n("code",[e._v('{{$node["GetResponse"].json["campaign"]["name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Not Equal' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" field. If you have a campaign with a different name, use that name instead.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns all the contacts that do not belong to the "),n("code",[e._v("n8n")]),e._v(" campaign.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(684),alt:"Using the IF node to check if a contact belongs to the n8n campaign or not"}})]),e._v(" "),n("h3",{attrs:{id:"_4-getresponse1-node-update-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-getresponse1-node-update-contact"}},[e._v("#")]),e._v(" 4. GetResponse1 node (update: contact)")]),e._v(" "),n("p",[e._v("This node will update the campaign ID of all the contacts that we get from the true branch of the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Create a GetResponse node connected to the 'true' output of the IF node.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous GetResponse node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Contact ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > IF > Output Data > JSON > contactId. You can also add the following expression: "),n("code",[e._v('{{$node["IF"].json["contactId"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Campaign ID' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select "),n("code",[e._v("n8n")]),e._v(" from the "),n("em",[n("strong",[e._v("Campaign ID")])]),e._v(" dropdown list. If you have a campaign with a different name, select that instead.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you notice that the node updates the campaign ID of all the contacts that do not belong to the "),n("code",[e._v("n8n")]),e._v(" campaign.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(685),alt:"Using the GetResponse node to update the campaign of the contacts"}})]),e._v(" "),n("h3",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(686),alt:"Using the NoOp node"}})])])}),[],!1,null,null,null);t.default=a.exports},682:function(e,t,o){e.exports=o.p+"assets/img/workflow.ee869ba1.png"},683:function(e,t,o){e.exports=o.p+"assets/img/GetResponse_node.1a1bc49a.png"},684:function(e,t,o){e.exports=o.p+"assets/img/IF_node.6cd73497.png"},685:function(e,t,o){e.exports=o.p+"assets/img/GetResponse1_node.62163d3f.png"},686:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.90544b30.png"}}]);