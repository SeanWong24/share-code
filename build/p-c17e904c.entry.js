import{r as o,h as t,H as e}from"./p-cd08f63e.js";const n=class{constructor(t){o(this,t)}render(){return t(e,null,t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-title",null,"Share Code"),t("ion-buttons",{slot:"end"},t("ion-button",{onClick:()=>prompt("Showing URL",`${document.URL.split("#")[0]}#/${btoa(this.textareaElement.value)}`)},"Get URL")))),t("ion-content",{scrollY:!1},t("textarea",{ref:o=>this.textareaElement=o,style:{height:"100%",width:"100%"},value:atob(this.data||"")})))}};n.style=":host{display:block}";export{n as app_home}