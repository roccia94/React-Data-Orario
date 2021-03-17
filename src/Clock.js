import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);

       this.state = {
            date: new Date(),
            timezone : 1
        };
        
    }

   render(){
    const tempo =  this.state.date.getTime()  + this.props.timezone  * 3600 * 1000 ;
    const data = new Date(tempo);

    return <h2> In { this.props.country }  is   {data.toLocaleTimeString() }</h2>
   }

   tick = () => {

   this.setState({
       date: new Date()
   }); 
};

   componentDidMount(){
       console.log('Component did update')
      this.interval =  setInterval(this.tick, this.props.secs*1000);
   }
   componentWillUnmount(){
       clearInterval(this.interval);
   }
}

export default Clock;