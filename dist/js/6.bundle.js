(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1178:function(e,t,a){"use strict";t.__esModule=!0,t.default={"analysis-icu":"ICU Analysis","analysis-kuromoji":"Japanese (kuromoji) Analysis","analysis-phonetic":"Phonetic Analysis","analysis-smartcn":"Smart Chinese Analysis","analysis-ukrainian":"Ukrainian Analysis","analysis-stempel":"Stempel Polish Analysis","ingest-attachment":"Ingest Attachment Processor","ingest-user-agent":"Ingest User Agent Processor","ingest-geoip":"Ingest Geoip Processor","mapper-size":"Mapper Size","mapper-murmur3":"Mapper Murmur3","x-pack":"X-Pack"}},1189:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1),r=s(n),l=s(a(1188)),o=s(a(1186));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));c.call(n);var r=JSON.parse(JSON.stringify(a.marks)),l=0;return Object.keys(r).forEach(function(e,t){0===t&&(l=e),r[e].style=Object.assign(r[e]||{},{marginTop:"15px",fontSize:"14px",color:"#232E44"})}),n.state={marks:r,active:l,value:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state,t=e.marks,a=e.active,s=e.value,i=t[a]||{};return r.default.createElement(n.Fragment,null,r.default.createElement("div",{className:"col grow",style:{padding:"55px 70px 0 55px"}},r.default.createElement(o.default,{marks:t,onChange:this.onChange,onAfterChange:this.onAfterChange,value:s})),r.default.createElement("div",{className:"col grey",style:{width:300}},r.default.createElement("div",{className:"cluster-info"},r.default.createElement("div",{className:"cluster-info__item"},r.default.createElement("div",null,r.default.createElement(l.default,{value:i.storage,duration:100,stepPrecision:0})," GB"),r.default.createElement("div",null,"Storage (SSD)")),r.default.createElement("div",{className:"cluster-info__item"},r.default.createElement("div",null,r.default.createElement(l.default,{value:i.memory,duration:100,stepPrecision:0})," GB"),r.default.createElement("div",null,"Memory")),r.default.createElement("div",{className:"cluster-info__item"},r.default.createElement("div",null,r.default.createElement(l.default,{value:i.nodes,duration:100,stepPrecision:0})," Nodes"),r.default.createElement("div",null,"HA"))),r.default.createElement("div",{className:"cluster-info"},r.default.createElement("div",null,r.default.createElement("div",{className:"price"},r.default.createElement("span",null,"$"),r.default.createElement(l.default,{value:i.cost,duration:100,stepPrecision:0})," /mo"),r.default.createElement("h3",null,"Estimated Cost")))))},t}(n.Component),c=function(){var e=this;this.onChange=function(t){var a=e.state.marks,n=Object.keys(a).map(function(e){return Number(e)}),r=void 0,l=void 0,o=void 0;if(n.forEach(function(e,a){e<=t&&(r=a)}),(l=r+1<n.length?r+1:-1)&&-1!==l){var s=(n[l]+n[r])/2;o=t<=s?r:l}else o=r;e.setState({active:n[o],value:t})},this.onAfterChange=function(){e.setState({value:e.state.active}),e.props.onChange(e.props.marks[e.state.active])}};t.default=i},321:function(e,t,a){"use strict";t.__esModule=!0,t.machineMarks=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),l=d(r),o=a(42),s=d(a(1189)),i=a(730),c=d(a(1178)),u=d(a(735));function d(e){return e&&e.__esModule?e:{default:e}}var f="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCVqOPpNuX53J+uIpP0KssFRZToMV2Zy/peG3wYHvWZkDvlxLFqGTikH8MQagt01Slmn+mNfHpg6dm5NiKfmMObm5LbcJ62Nk9AtHF3BPP42WyQ3QiGZCjJOX0fVsyv3w3eB+Eq+F+9aH/uajdI+wWRviYB+ljhprZbNZyockc6V33WLeY+EeRQW0Cp9xHGQUKwJa7Ch8/lRkNi9QE6n5W/T6nRuOvu2+ThhjiDFdu2suq3V4GMlEBBS6zByT9Ct5ryJgkVJh6d/pbocVWw99mYyVm9MNp2RD9w8R2qytRO8cWvTO/KvsAZPXj6nJtB9LaUtHDzxe9o4AVXxzeuMTzx siddharth@appbase.io",m=["6.3.0","6.2.4","6.1.4","6.0.1","5.6.10","5.5.3","5.4.3","5.3.3","5.2.1"],p=t.machineMarks={0:{label:"Sandbox",storage:30,memory:4,nodes:1,cost:59,machine:"Standard_B2s"},25:{label:"Hobby",storage:60,memory:4,nodes:2,cost:119,machine:"Standard_B2s"},50:{label:"Production I",storage:120,memory:4,nodes:3,cost:199,machine:"Standard_B2s"},75:{label:"Production II",storage:240,memory:8,nodes:3,cost:399,machine:"Standard_B2ms"},100:{label:"Production III",storage:480,memory:16,nodes:3,cost:799,machine:"Standard_B4ms"}},g=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));r.setConfig=function(e,t){var a;r.setState(((a={})[e]=t,a))},r.setPricing=function(e){r.setState({vm_size:e.machine,pricing_plan:e.label})},r.toggleConfig=function(e){r.setState(function(t){var a;return n({},t,((a={})[e]=!t[e],a))})},r.validateClusterName=function(){var e=r.state.clusterName;return/^[a-zA-Z0-9]+([-]+[a-zA-Z0-9]*)*[a-zA-Z0-9]+$/.test(e)},r.hideErrorModal=function(){r.setState({showError:!1,deploymentError:""})},r.createCluster=function(){if(!r.validateClusterName())return r.setState({error:'Please use a valid cluster name. It can only contain alpha-numerics and "-" in between.'}),void document.getElementById("cluster-name").focus();var e=Object.values(p).find(function(e){return e.machine===r.state.vm_size}),t={elasticsearch:{nodes:e.nodes,version:r.state.clusterVersion,volume_size:e.storage/e.nodes,plugins:Object.keys(c.default).filter(function(e){return r.state[e]})},cluster:{name:r.state.clusterName,location:r.state.region,vm_size:r.state.vm_size,pricing_plan:r.state.pricing_plan,ssh_public_key:f}};r.state.kibana&&(t.kibana={create_node:!1,version:r.state.clusterVersion}),r.state.logstash&&(t.logstash={create_node:!1,version:r.state.clusterVersion}),r.state.dejavu&&(t.addons=t.addons||[],t.addons=[].concat(t.addons,[{name:"dejavu",image:"appbaseio/dejavu:2.0.0",exposed_port:1358}])),r.state.mirage&&(t.addons=t.addons||[],t.addons=[].concat(t.addons,[{name:"mirage",image:"appbaseio/mirage:0.8.0",exposed_port:3030}])),r.state.elasticsearchHQ&&(t.addons=t.addons||[],t.addons=[].concat(t.addons,[{name:"elasticsearch-hq",image:"elastichq/elasticsearch-hq:release-v3.4.1",exposed_port:5e3}])),(0,i.deployCluster)(t).then(function(){o.browserHistory.push("/clusters")}).catch(function(e){r.setState({deploymentError:e,showError:!0})})},r.renderPlugins=function(){return l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"col light"},l.default.createElement("h3",null,"Edit Cluster Plugins"),l.default.createElement("p",null,"Add or remove cluster plugins")),l.default.createElement("div",{className:"col grow"},Object.keys(c.default).map(function(e){return l.default.createElement("div",{key:e,className:"settings-item grow"},l.default.createElement("h4",null,c.default[e]),l.default.createElement("div",{className:"form-check"},l.default.createElement("label",{htmlFor:"yes"},l.default.createElement("input",{type:"radio",name:e,defaultChecked:r.state[e],id:e+"-yes",onChange:function(){return r.setConfig(e,!0)}}),"Yes"),l.default.createElement("label",{htmlFor:"no"},l.default.createElement("input",{type:"radio",name:e,defaultChecked:!r.state[e],id:e+"-no",onChange:function(){return r.setConfig(e,!1)}}),"No")))})))};var s={};return Object.keys(c.default).forEach(function(e){s[e]="x-pack"!==e}),r.state=n({clusterName:"",clusterVersion:m[0],pricing_plan:p[0].label,vm_size:p[0].machine,region:"eastus",kibana:!1,logstash:!1,dejavu:!0,elasticsearchHQ:!0,mirage:!1,error:"",deploymentError:"",showError:!1},s),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this;return l.default.createElement("section",{className:"cluster-container container"},l.default.createElement(u.default,{show:this.state.showError,message:this.state.deploymentError,onClose:this.hideErrorModal}),l.default.createElement("article",null,l.default.createElement("h2",null,"Create a new cluster"),l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"col light"},l.default.createElement("h3",null,"Pick the pricing plan"),l.default.createElement("p",null,"Scale as you go")),l.default.createElement(s.default,{marks:p,onChange:this.setPricing})),l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"col light"},l.default.createElement("h3",null,"Pick a region"),l.default.createElement("p",null,"All around the globe")),l.default.createElement("div",{className:"col grow region-container"},l.default.createElement("ul",{className:"region-list"},l.default.createElement("li",{onClick:function(){return e.setConfig("region","eastus")},className:"eastus"===this.state.region?"active":""},l.default.createElement("img",{src:"/assets/images/flags/united-states.png",alt:"US"}),l.default.createElement("span",null,"East US")),l.default.createElement("li",{onClick:function(){return e.setConfig("region","centralus")},className:"centralus"===this.state.region?"active":""},l.default.createElement("img",{src:"/assets/images/flags/united-states.png",alt:"US"}),l.default.createElement("span",null,"Central US")),l.default.createElement("li",{onClick:function(){return e.setConfig("region","westeurope")},className:"westeurope"===this.state.region?"active":""},l.default.createElement("img",{src:"/assets/images/flags/europe.png",alt:"EU"}),l.default.createElement("span",null,"West Europe"))),l.default.createElement("ul",{className:"region-list"},l.default.createElement("li",{onClick:function(){return e.setConfig("region","canadacentral")},className:"canadacentral"===this.state.region?"active":""},l.default.createElement("img",{src:"/assets/images/flags/canada.png",alt:"CA"}),l.default.createElement("span",null,"Canada Central")),l.default.createElement("li",{onClick:function(){return e.setConfig("region","canadaeast")},className:"canadaeast"===this.state.region?"active":""},l.default.createElement("img",{src:"/assets/images/flags/canada.png",alt:"CA"}),l.default.createElement("span",null,"Canada East"))))),l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"col light"},l.default.createElement("h3",null,"Pick a cluster name"),l.default.createElement("p",null,"Name this bad boy")),l.default.createElement("div",{className:"col grow vcenter"},l.default.createElement("input",{id:"cluster-name",type:"name",className:"form-control",placeholder:"Enter your cluster name",value:this.state.clusterName,onChange:function(t){return e.setConfig("clusterName",t.target.value)}}))),l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"col light"},l.default.createElement("h3",null,"Additional Settings"),l.default.createElement("p",null,"Customise as per your needs")),l.default.createElement("div",{className:"col grow"},l.default.createElement("div",{className:"settings-item"},l.default.createElement("h4",null,"Select a version"),l.default.createElement("select",{className:"form-control",onChange:function(t){return e.setConfig("clusterVersion",t.target.value)}},m.map(function(t){return l.default.createElement("option",{key:t,value:t,defaultChecked:e.state.clusterVersion===t},t)}))),l.default.createElement("div",{className:"settings-item"},l.default.createElement("h4",null,"Kibana"),l.default.createElement("div",{className:"form-check"},l.default.createElement("label",{htmlFor:"yes"},l.default.createElement("input",{type:"radio",name:"kibana",defaultChecked:this.state.kibana,id:"yes",onChange:function(){return e.setConfig("kibana",!0)}}),"Yes"),l.default.createElement("label",{htmlFor:"no"},l.default.createElement("input",{type:"radio",name:"kibana",defaultChecked:!this.state.kibana,id:"no",onChange:function(){return e.setConfig("kibana",!1)}}),"No"))),l.default.createElement("div",{className:"settings-item"},l.default.createElement("h4",null,"Logstash"),l.default.createElement("div",{className:"form-check"},l.default.createElement("label",{htmlFor:"yes2"},l.default.createElement("input",{type:"radio",name:"logstash",defaultChecked:this.state.logstash,id:"yes2",onChange:function(){return e.setConfig("logstash",!0)}}),"Yes"),l.default.createElement("label",{htmlFor:"no2"},l.default.createElement("input",{type:"radio",name:"logstash",defaultChecked:!this.state.logstash,id:"no2",onChange:function(){return e.setConfig("logstash",!1)}}),"No"))),l.default.createElement("div",{className:"settings-item"},l.default.createElement("h4",null,"Add-ons"),l.default.createElement("div",{className:"form-check"},l.default.createElement("label",{htmlFor:"dejavu"},l.default.createElement("input",{type:"checkbox",defaultChecked:this.state.dejavu,id:"dejavu",onChange:function(){return e.toggleConfig("dejavu")}}),"Dejavu"),l.default.createElement("label",{htmlFor:"elasticsearch"},l.default.createElement("input",{type:"checkbox",defaultChecked:this.state.elasticsearchHQ,id:"elasticsearch",onChange:function(){return e.toggleConfig("elasticsearchHQ")}}),"Elasticsearch-HQ"),l.default.createElement("label",{htmlFor:"mirage"},l.default.createElement("input",{type:"checkbox",defaultChecked:this.state.mirage,id:"mirage",onChange:function(){return e.toggleConfig("mirage")}}),"Mirage"))))),this.renderPlugins(),l.default.createElement("div",{style:{textAlign:"right",marginBottom:40}},this.state.error?l.default.createElement("p",{style:{color:"tomato",margin:"20px 0"}},this.state.error):null,l.default.createElement("button",{className:"ad-theme-btn primary",onClick:this.createCluster},"Create Cluster    ",l.default.createElement("i",{className:"fas fa-arrow-right"})))))},t}(r.Component);t.default=g},435:function(e,t,a){"use strict";t.__esModule=!0,t.ErrorLogger=t.Input=t.deleteBtn=t.Button=t.Footer=t.subItem=t.item=t.dropdown=t.title=t.row=t.heading=t.Header=t.HeaderWrapper=t.card=void 0;var n=a(370),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.card=(0,n.css)("width:100%;max-width:980px;margin:25px auto;background-color:#fff;border-radius:3px;box-shadow:0 3px 5px 0 rgba(0,0,0,0.05);box-sizing:border-box;i{margin:3px 3px 0px 8px;}"),t.HeaderWrapper=(0,r.default)("div",{target:"e1tvtz600"})("display:flex;flex-direction:column;align-items:flex-start;justify-content:center;p{font-size:13px;margin:6px 0 0;color:#999;}"),t.Header=(0,r.default)("header",{target:"e1tvtz601"})("display:flex;flex-direction:row;justify-content:space-between;font-weight:600;padding-top:20px;.col{min-width:150px;display:inline-flex;margin:0 0 0 12px;text-align:center;&:first-child{margin:0;}&.col--grow{flex-grow:1;}}"),t.heading=(0,n.css)("font-size:16px;letter-spacing:0.015rem;font-weight:600;margin:0;padding:0;"),t.row=(0,n.css)("box-sizing:border-box;background-color:rgba(0,0,0,0.02);padding:15px 0 15px 15px;margin:15px 0;border:1px solid rgba(0,0,0,0.05);"),t.title=(0,n.css)("font-size:15px;letter-spacing:0.015rem;font-weight:600;margin:0 0 12px 0;padding:0;"),t.dropdown=(0,n.css)("width:auto;min-width:150px;height:34px;border:1px solid #f8f8f8;box-shadow:0 3px 5px 0 rgba(0,0,0,0.05);background-color:#fff;border-radius:2px;outline-color:#c7f4ff;margin-left:12px;padding:6px 15px 6px 6px;text-transform:capitalize;"),t.item=(0,n.css)("display:flex;flex-direction:row;justify-content:space-between;padding:10px;margin-bottom:2px;align-items:center;background-color:rgba(255,255,255,0.8);"),t.subItem=(0,n.css)("display:flex;flex-direction:row;align-items:center;"),t.Footer=(0,r.default)("footer",{target:"e1tvtz602"})("position:sticky;bottom:0;width:100%;height:66px;box-shadow:0 -3px 5px 0 rgba(0,0,0,0.02);background-color:#fff;transition:all 0.3s ease;border-bottom-left-radius:3px;border-bottom-right-radius:3px;padding:0 20px;display:flex;flex-direction:row-reverse;align-items:center;"),t.Button=(0,r.default)("a",{target:"e1tvtz603"})("display:inline-flex;height:42px;padding:0 20px;justify-content:center;align-items:center;color:#53683b;font-weight:600;background-color:",function(e){return e.ghost?"#efefef":"#b6ef7e"},";text-transform:uppercase;box-shadow:0 3px 3px 0 rgba(0,0,0,0.1);cursor:pointer;margin-left:12px;&:hover,&:focus{background-color:",function(e){return e.ghost?"#fafafa":"#c3f295"},";box-shadow:0 5px 5px 0 rgba(0,0,0,0.1);text-decoration:none;}"),t.deleteBtn=(0,n.css)("display:flex;flex-grow:1;alignitems:center;flex-direction:row;cursor:pointer;span{max-width:calc(100% - 40px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}a{display:none;cursor:pointer;color:#444;margin-left:15px;transition:all 0.3s ease;}&:hover a,&:focus a{display:inline;&:hover,&:focus{color:#222;}}"),t.Input=(0,r.default)("input",{target:"e1tvtz604"})("diplay:flex;flex-grow:1;min-width:150px;height:34px;border:1px solid #f8f8f8;box-shadow:0 3px 5px 0 rgba(0,0,0,0.05);background-color:#fff;border-radius:2px;outline-color:#c7f4ff;padding:5px;"),t.ErrorLogger=(0,r.default)("pre",{target:"e1tvtz605"})("height:auto;max-height:200px;overflow-y:scroll;width:100%;background-color:#eee;padding:10px;font-family:monospace;font-size:14px;")},608:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(756));t.default=n.default},730:function(e,t,a){"use strict";t.__esModule=!0,t.getClusters=function(){return new Promise(function(e,t){fetch(n.ACC_API+"/v1/clusters",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e(t.clusters)}).catch(function(e){t(e)})})},t.getClusterData=function(e){return new Promise(function(t,a){var r=!1;fetch(n.ACC_API+"/v1/_status/"+e,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.status>300&&(r=!0),e.json()}).then(function(e){r&&a(e.status.message),t(e)}).catch(function(e){a(e)})})},t.deployCluster=function(e,t){var a=JSON.stringify(e);return new Promise(function(e,r){var l=!1;fetch(n.ACC_API+"/v1/_deploy"+(t?"/"+t:""),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:a}).then(function(e){return e.status>300&&(l=!0),e.json()}).then(function(t){l&&r(t.status.message),t.error&&r(t.error),t.body&&t.body.response_info.failures.length&&r(t.body.response_info.failures),e()}).catch(function(e){r(e)})})},t.deleteCluster=function(e){return new Promise(function(t,a){fetch(n.ACC_API+"/v1/_delete/"+e,{method:"DELETE",credentials:"include"}).then(function(e){return e.json()}).then(function(e){e.error&&a(e.error),t()}).catch(function(e){a(e)})})};var n=a(95)},735:function(e,t,a){"use strict";t.__esModule=!0;var n=o(a(1)),r=o(a(608)),l=a(435);function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return n.default.createElement(r.default,{show:e.show,onClose:e.onClose},n.default.createElement("h3",null,e.errorLength?e.errorLength+" records failed to index":"An error occured"),e.message?n.default.createElement("p",null,e.message):n.default.createElement("p",null,"To prevent data loss, we have restored your original mappings. You can fix"," ",e.errorLength?"these":"this"," and retry."),e.error?n.default.createElement(l.ErrorLogger,null,e.error):null,n.default.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",margin:"10px 0"}},n.default.createElement(l.Button,{ghost:!0,onClick:e.onClose},"Close")))};s.displayName="ErrorModal",t.default=s},755:function(e,t,a){"use strict";t.__esModule=!0,t.Overlay=t.Wrapper=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(370));t.Wrapper=(0,n.default)("div",{target:"ef1aeaw0"})("display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;.modal-wrapper{width:100%;max-width:800px;height:auto;background-color:#fff;border-radius:3px;padding:25px 30px;position:relative;z-index:1;h3{font-size:20px;font-weight:600;margin:12px 0 20px;}}"),t.Overlay=(0,n.default)("div",{target:"ef1aeaw1"})("position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);")},756:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(1)),r=a(755);t.default=function(e){return e.show?n.default.createElement(r.Wrapper,null,n.default.createElement(r.Overlay,{onClick:e.onClose}),n.default.createElement("div",{className:"modal-wrapper"},e.children)):null}}}]);