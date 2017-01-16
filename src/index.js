import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import Util from './util';
import Pagination from "react-js-pagination";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      heroes: [ ],
      total: 0,
      activePage: 0,
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);

    this.fillTable();
  }

  handleTermChange = (term) => {
    // const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=dc8fa3ea15fe76a9ad7ed3dd649f19b7`;

    console.log('term ', term);


    let ts = Util.timestamp();
    let privkey = '89ce3ff39e3b32e7016e638a1b577873b1cec9a1';
    let pubkey =  'dc8fa3ea15fe76a9ad7ed3dd649f19b7';
    let hash = Util.createHash(ts, privkey, pubkey);

    console.log('hash',hash);

    const url = 'https://gateway.marvel.com/v1/public/characters?name='+term+'&apikey='+pubkey+'&hash='+hash+'&ts='+ts;
    request.get(url, (err, res) => {
      console.log('res ', res.body);

      this.setState({heroes: res.body.data.results});

    });
  };

  fillTable = () => {
    // const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=dc8fa3ea15fe76a9ad7ed3dd649f19b7`;


    let ts = Util.timestamp();
    let privkey = '89ce3ff39e3b32e7016e638a1b577873b1cec9a1';
    let pubkey =  'dc8fa3ea15fe76a9ad7ed3dd649f19b7';
    let hash = Util.createHash(ts, privkey, pubkey);
    let limit = 10;
    let offset = 0;

    console.log('hash',hash);

    const url = 'https://gateway.marvel.com/v1/public/characters?limit='+limit+'&offset='+offset+'&apikey='+pubkey+'&hash='+hash+'&ts='+ts;
    request.get(url, (err, res) => {
      console.log('res ', res.body.data.total);

      this.setState({heroes: res.body.data.results, total: parseInt(res.body.data.total, 10), activePage: 0});
    });
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);

    let ts = Util.timestamp();
    let privkey = '89ce3ff39e3b32e7016e638a1b577873b1cec9a1';
    let pubkey =  'dc8fa3ea15fe76a9ad7ed3dd649f19b7';
    let hash = Util.createHash(ts, privkey, pubkey);
    let limit = 10;
    let offset = (pageNumber * limit) || 0;

    console.log('hash', offset);

    const url = 'https://gateway.marvel.com/v1/public/characters?limit='+limit+'&offset='+offset+'&apikey='+pubkey+'&hash='+hash+'&ts='+ts;
    request.get(url, (err, res) => {
      console.log('res ', res.body);

      this.setState({heroes: res.body.data.results, total: parseInt(res.body.data.total, 10), activePage: pageNumber});
    });
  }

  render(){
    return (
      <div className="greeting">
        <SearchBar onTermChange={this.handleTermChange}/>
        <HeroList heroes={this.state.heroes} />
        <div className="text-center">
          <Pagination className="row"
                      activePage={this.state.activePage}
                      itemsCountPerPage={10}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);