import React from 'react';
import model from '../model/ContactListModel';
import {
  Input,
  Button,
  Panel,
  Glyphicon
} from 'react-bootstrap';
import { Link } from 'react-router';


class ContactView extends React.Component {

  constructor() {
    super();
    this.state = model.getState();
  }

  componentDidMount() {
    let _this = this;
    this.unsubscribe = model.subscribe(this.setState.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let contact = model.getContact(this.props.params.contactId) || this.state.currentContact;

    if (!contact) {
      return <div>Carregando</div>;
    }
    //{"name":"Alberi de Mellos","address":"Rua Venâncio Aires nº 263","city":"Crissiumal","state":"RS","zipCode":"98640000","anotations":"reweillon","company":"Danúbio Azul","location":"","site":"www.bandadanubioazul.com.br","cpf":"","_id":"55ca9a16c2554d6f433f9135","__v":0,"labels":["Clube","Radio","Contato"],"phones":[{"label":"Comercial","number":"5535241621","_id":"55ca9a16c2554d6f433f913c"},{"label":"Celular","number":"5591186776","_id":"55ca9a16c2554d6f433f913b"},{"label":"Fax","number":"5535241621","_id":"55ca9a16c2554d6f433f913a"},{"label":"Residencial","number":"5535241621","_id":"55ca9a16c2554d6f433f9139"}],"emails":[{"label":"Email 1","address":"mello@bandadanubioazul.com.br","_id":"55ca9a16c2554d6f433f9138"},{"label":"Email 2","address":"mellodanubio@brturbo.com.br","_id":"55ca9a16c2554d6f433f9137"},{"label":"Email 3","address":"mellodanubio@hotmail.com.br","_id":"55ca9a16c2554d6f433f9136"}]};

    const phoneIcon = <Glyphicon glyph="earphone" />;

    let phones = contact.phones.map(p => {
      let callButton = <a href={"tel:" + parseInt(p.number)}><Button>{phoneIcon}</Button></a>;
      return <Input type="text" buttonAfter={callButton} value={p.number} label={p.label} />
    });

    return (
      <Panel>
        <form>
          <Link to="/">
            <Button bsStyle="link">Voltar</Button>
          </Link>

          <Input type="text" label="Nome" placeholder="Enter text" value={contact.name} enabled="false"/>
          { phones }
          <Input type="text" label="Empresa" placeholder="Enter text" value={contact.company} enabled="false"/>
          <Input type="text" label="Cidade" placeholder="Enter text" value={contact.city} enabled="false"/>
          <Input type="text" label="Estado" placeholder="Enter text" value={contact.state} enabled="false"/>
          <Input type="textarea" label="Endereço" placeholder="Enter text" value={contact.address} enabled="false"/>
        </form>
      </Panel>
    );
  }


}

module.exports = ContactView
