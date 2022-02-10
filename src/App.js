import './App.css';
import React, { Component } from 'react'
import { Layout, Menu, BackTop, Spin } from 'antd';
import List from './components/List'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    loading: false,
    collapsed: false,
    category: 'All',
    list: [
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Wallet',
        category: 'Wallet',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Wallet',
        category: 'Wallet',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Wallet',
        category: 'Wallet',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Wallet',
        category: 'Wallet',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Wallet',
        category: 'Wallet',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Wallet',
        category: 'Wallet',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Explorer',
        category: 'Explorer',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Explorer',
        category: 'Explorer',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Explorer',
        category: 'Explorer',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora Explorer',
        category: 'Explorer',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora DeFi',
        category: 'DeFi',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora DeFi',
        category: 'DeFi',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora DeFi',
        category: 'DeFi',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora DeFi',
        category: 'DeFi',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
      {
        icon: '/images/WechatIMG406.png',
        title: 'Findora DeFi',
        category: 'DeFi',
        description: 'The Findora wallet enables you to send and receive FRA tokens and even create your own custom assets.',
        share: [
          {
            icon: '/images/Vector.png',
            link: '#'
          },
          {
            icon: '/images/Vector-1.png',
            link: '#'
          },
          {
            icon: '/images/Vector-2.png',
            link: '#'
          },
          {
            icon: '/images/Vector-3.png',
            link: '#'
          },
          {
            icon: '/images/Group10.png',
            link: '#'
          }
        ]
      },
    ]
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  change = (category) => {
    return () => {
      // console.log(category);
      this.setState({ category });
      if (document.body.clientWidth <= 992) {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    }
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed, category, list } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} breakpoint="lg" collapsedWidth="0" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <img alt='' src='/images/logo.png' />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.change('All')}>
              All
            </Menu.Item>
            <Menu.Item key="2" onClick={this.change('Wallet')}>
              Wallet
            </Menu.Item>
            <Menu.Item key="3" onClick={this.change('Explorer')}>
              Explorer
            </Menu.Item>
            <Menu.Item key="4" onClick={this.change('DeFi')}>
              DeFi
            </Menu.Item>
            <Menu.Item key="5" onClick={this.change('NFT')}>
              NFT
            </Menu.Item>
            <Menu.Item key="6" onClick={this.change('GameFi')}>
              GameFi
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background iocnMenu" style={{ padding: 0 }}>
            <img className='lg-logo' alt='' src='/images/logo.png' style={{ height: '100%', display: 'none' }} />
            {React.createElement(this.state.collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Spin spinning={this.state.loading}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <List category={category} list={category === 'All' ? list : list.filter((item) => { return item.category === category })} />
              </div>
            </Spin>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
        <BackTop />
      </Layout>

    );
  }
}

export default App;
