import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
import '../App.css';

const style = {
  titulo: {
    fontFamily: "Amaranth",
    fontSize: "2.6rem",
    paddingLeft: 20,
    color: "#b4f2e1",
    letterSpacing: 1
  },
  logo: {
    color: "#b4f2e1",
    fontSize: "4rem"
  },
  btnHelp: {
    backgroundColor: "#b4f2e1",
    fontFamily: "Amaranth",
    fontWeight: 600,
    letterSpacing: 1,
    marginRight: 20
  },
  link : {
    letterSpacing: 1,
    fontFamily: 'Baloo 2'
  }
};

class NavBar extends Component {

  linkHelp = () => {
    window.open('https://unisyscorp.sharepoint.com/sites/MSC_Site/MSC%20LAC/MSC%20LAC%20RIONEGRO/Grupo%20Exito/SitePages/Home.aspx', '_blank');
  }

  link = () => {
    const result = document.getElementById("result");
    result.style.display = "none";
    const res = document.getElementById('resultado');
    res.innerHTML = "";
    let template = document.createElement('div');
    template.innerHTML = `
    <div class="marco">
      <a href="http://accessvia/accessviaweb/web_dsignshop/" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Accesvia POP
      </a>
      <a href="http://296acw01/asnetapp/AudiSoftNet.aspx" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Autocontrol
      </a>
      <a href="http://java560:7777/planSepare" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Plan Separe
      </a>
      <a href="http://10.2.160.110/live/AXDashboard/index_html" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Axiros
      </a>
      <a href="http://296web01/ServiciosExito/Web_Logon/logon.aspx?ReturnUrl=%2fServiciosExito%2fdefault.aspx" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Weblink - Portal de Servicios
      </a> 
      <a href="https://www.transnetwork.com/TPS-PAYER/" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Remesas - Transnetwork
      </a> 
      <a href="https://viajesexito.kontroltravel.com/login.aspx?encryption=S&usr=&pwd=" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Viajes Exito
      </a> 
      <a href="http://java560:7710/NotasCambio/loginServlet" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Notas Cambio
      </a> 
      <a href="https://n30.meraki.com/login/dashboard_login?go=%2Fo%2FhMl2SaE%2Fmanage%2Forganization%2Foverview&sh=30#t=networkindex_html" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Meraki
      </a> 
      <a href="https://picking.grupo-exito.com/BackEnd.Core.picking/Index" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Picking
      </a> 
      <a href="https://296web03.grupo-exito.com/Clifre" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Clifre
      </a> 
      <a href="https://atendido.exito.com/" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Exito Atendido
      </a> 
      <a href="https://vhaexeepci.saphec.grupo-exito.com:44300/sap/bc/gui/sap/its/webgui/?%7Etransaction=migo&sap-client=400&sap-language=ES" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        SAP MIGO
      </a> 
      <a href="http://infra.grupo-exito.com:7780/sso/jsp/login.jsp?site2pstoretoken=v1.4~23DED9CE~6D3269E06B0CD5B602D34CF54AC49319B266D0DEB3BEA0E3D80468CA5A9A414EC0F95920974817C4377D168DC363714C06A9720FDFC97990038B00B30E14176E4B8E5BD482A45C8A38B9849C57EAA3E9167CC84E61EA8D1F4D0D834DDAC64EEE4833E1B049185D1CDD69B5552CC1EA9C382048F3617A9217D2673A5F6D9C9768AFEEBA03A9EBCF1F6CDA6C8A569D86414CD3E4138DA7E6130A086F4EBAAE55FE1002764812C4329078B105ECC666F06CDBC91630CBF7AD07239263ACA10E3DB0215CE468DC6F28975E0660C25C99937CB21601F9F06EA467338DBDD1EBCB93F52DCD44BF2EA1587B54B21FB1D57E4A3297FDEE6A39E205C1D8D911F79A98F45093D20C3441113EEA173D5D4D794908BDEB15C4C1890435DAF4A355CA1DCEB73CFCD13C21AE2E28A8A41F41C8233F147EE77F47E69A9FC700179B87E9108C6B7E318DD27CBF3BC5D0C2988FA3BD844408F87CC60C7A9992F18473A1651796F4DA23138BB56C8704B2BE9F78D4F7B571868720436BC607F90B5EB24AF5AD54F9FF575779ED3E93C172F7A879AA402949F0CC73C934BE4517629D3B52F775B4DDB5A8580D88F2364453CAF37A426F64D566581129F688E4F69F54CAC1C25966DA26B915CFBC5D24EF2477E80B968EDFD80D&p_error_code=&p_submit_url=http%3A%2F%2Finfra.grupo-exito.com%3A7780%2Fsso%2Fauth&p_cancel_url=http%3A%2F%2Fmiddle.grupo-exito.com%2Fportal%2Fpls%2Fportal%2FPORTAL.home&ssousername=" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Infox
      </a>
      <a href="https://wmsappprd3.grupo-exito.com/scprd/sce/sceapp.ctrl?S|G|loginRequest=30176" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        WMS SCE
      </a> 
      <a href="http://clic.grupo-exito.com/" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Clic Usuario
      </a> 
      <a href="http://296unp05/infopos/#" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        InfoPOS Tirilla
      </a> 
      <a href="http://296dcw01/DocuWare/Platform/WebClient/ClientAccount/LogIn?returnUrl=%2FDocuWare%2FPlatform%2FWebClient%2F" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Docuware
      </a>
      <a href="https://296smg07:8443/EXITO/ess.do" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        CAU Dependencias
      </a> 
      <a href="http://rub/corabastos/?locale=es_CO" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        RUB
      </a> 
      <a href="http://java560:7740/cedicuadre/Login.do" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Cirec Web
      </a> 
      <a href="https://portalnegocios.grupo-exito.com/interaction/" 
        class="link badge text-info pl-3 pr-3 pt-2 pb-2 rounded-pill" target="_blank">
        Portal de Negocios
      </a> 
    </div>
    `;

    res.append(template);
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark d-flex shadow">
          <div className="navbar-brand d-flex align-items-center flex-grow-1 p-2">
            <IconButton>
              <i className="material-icons" style={style.logo}>contact_phone</i>
            </IconButton> 
            <span className="" style={style.titulo}>
              Dependencias
            </span>
          </div>
          <Button variant="contained" style={style.btnHelp} onClick={this.linkHelp}>Help file</Button>
          <Button variant="contained" style={style.btnHelp} onClick={this.link}>Páginas Exito</Button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
