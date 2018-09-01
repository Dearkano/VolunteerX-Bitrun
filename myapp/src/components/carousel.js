import { Carousel, WingBlank ,Card,WhiteSpace} from 'antd-mobile';
import * as React from 'react';

export default class extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [{id:3,content:"用区块链铸就信任"},{id:2,content:"志愿服务，爱心世界"},{id:1,content:"公益捐献，贡献价值"}],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
       <Carousel className="space-carousel"
       
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map(val => (
              <div>
            <Card>
                <Card.Body>
              <img
                src={`/images/c${val.id}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              </Card.Body>
              <Card.Footer content={val.content} />
               
            </Card>
            <WhiteSpace />
            </div>
          ))}
   
        </Carousel>
      </WingBlank>
    );
  }
}
