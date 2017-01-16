/**
 * Created by Wilfredo on 09/01/2017.
 */
import React from 'react';
import ReactModal from 'react-modal';
import request from 'superagent';
import Util from '../util';

class ModalExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      comic: {},
      comImg: ''
    };

    console.log('modal props ', props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.addMe = this.addMe.bind(this);
  }



  componentDidMount() {
      let ts = Util.timestamp();
      let privkey = '89ce3ff39e3b32e7016e638a1b577873b1cec9a1';
      let pubkey =  'dc8fa3ea15fe76a9ad7ed3dd649f19b7';
      let hash = Util.createHash(ts, privkey, pubkey);
      const url = this.props.data.resourceURI+'?apikey='+pubkey+'&hash='+hash+'&ts='+ts;
      request.get(url, (err, res) => {

        let path = res.body.data.results[0].images[0].path;
        if (path)
          this.setState({comic: res.body.data.results[0], comImg: res.body.data.results[0].images[0].path});

      });
    };

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {

    this.setState({ showModal: false });
  }

  addMe (){
    console.log('added ',this.state);
    localStorage.setItem('testObject', JSON.stringify(this.state));
  }

  render () {
    return (
      <div>
        <a onClick={this.handleOpenModal} >{this.props.data.name}</a>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <h3>{this.state.comic.title}</h3>
          <p>{this.state.comic.description}</p>
          <img src={this.state.comImg + '/portrait_incredible.jpg'} alt={this.props.data.name}/>
          <button onClick={this.handleCloseModal}>Close Modal</button>

          <button onClick={this.addMe}>Add me</button>
        </ReactModal>
      </div>
    );
  }
}

export default ModalExample;