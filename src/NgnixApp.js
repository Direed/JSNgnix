import React, {Component} from 'react';
import './App.css';
import TableFull from './TableProxy';


class Ngnix extends Component{
    state ={
        location: '',
        proxy_pass: '',
        flagstat: false,
        newproxy: {
            l:'',
            p:''
        },
        i: 0,
        chbox: 0,
        masproxy: []
      }
      constructor(props) {
        super(props);

        this.getLocation = this.getLocation.bind(this);
        this.getProxyPass = this.getProxyPass.bind(this);
        this.addBlock = this.addBlock.bind(this);
        this.convert = this.convert.bind(this);
      }
        async componentDidMount()
    {
        const masproxy=this.state.masproxy;
        this.setState({
          masproxy
        })
    }
    getLocation(event)
    {
        this.setState({value: event.target.value});
        this.state.location=event.target.value;
    }
    getProxyPass(event)
    {
        this.setState({value: event.target.value});
        this.state.proxy_pass=event.target.value;
    }
    addBlock(event)
    {
        this.setState((prevState) => {return {masproxy: prevState.masproxy}});
        this.state.newproxy.l=this.state.location;
        this.state.newproxy.p=this.state.proxy_pass;
        /*this.state.masproxy[this.state.i] = new Object();
        this.state.masproxy[this.state.i]['l:'] = this.state.location;
        this.state.masproxy[this.state.i]['p:'] = this.state.proxy_pass;*/
        
        //this.state.masproxy.push(this.state.newproxy);
        this.state.chbox=document.getElementById('one');
        if(this.state.chbox.checked)
        {
        this.state.masproxy.push({
            l: this.state.location,
            p: this.state.proxy_pass,
            psh: 'Accept-Encoding ""'
            });
        }
        else
        {
        this.state.masproxy.push({
            l: this.state.location,
            p: this.state.proxy_pass
            });
        }

        //this.state.i=this.state.i+1;
        event.preventDefault();
    }
    convert(event)
    { 
        var div=document.getElementById("div").style.display;
        var link=document.getElementById("link").innerHTML;
        if(div=="")div="block";
        if(div=="none")
        {
            div="block";
            link="Not Convert block";
        }
        else
        {
            div="none";
            link="Convert block";
        }
        document.getElementById("div").style.display=div;
        document.getElementById("link").innerHTML=link;
        event.preventDefault();
    }



      render(){
        return(
            <div>
                <div>
                    <lable>Location:</lable>
                    <input type='location' value={this.state.location} onChange={this.getLocation}></input>
                    <label>Proxy_Pass:</label>
                    <input type='proxy_pass' value={this.state.proxy_pass} onChange={this.getProxyPass}></input>
                    <label>Accept-Encoding "" - </label>
                    <input type="checkbox" id='one'></input>
                    <button onClick={this.addBlock} >Add block</button>
                </div>

                <div>
                    <button id='link' onClick={this.convert} >Convert block</button>
                    <div className='submenu'id='div'>                
                    {/* <ConverNgnix locat={this.state.location} proxy={this.state.proxy_pass} /> */}
                    <TableFull data={this.state.masproxy}/>
                    </div>
                </div>

                <div>
                </div>

            </div>
        );
      }
} export default Ngnix;