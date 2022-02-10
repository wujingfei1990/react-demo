import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';

export default class List extends Component {
    render() {
        const { list } = this.props;
        return (
                list.length > 0 ? <Row gutter={[{ xs: 8, sm: 8, md: 16, lg: 24 }, { xs: 8, sm: 8, md: 16, lg: 24 }]}>
                    {list.map((item, index) => {
                        return (
                            <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6}>
                                <div className='list-box'>
                                    <div className='title'>
                                        <img alt='' src={item.icon} width={48} height={48}></img>
                                        <h3>{item.title}</h3>
                                        <span>{item.category}</span>
                                    </div>
                                    <div className='clear'></div>
                                    <div className='description'>
                                        <span>{item.description}</span>
                                    </div>
                                    <ul className='share'>
                                        {item.share.map((shareItem, i) => {
                                            return (<li key={index + '_' + i}><img alt='' src={shareItem.icon} width={24} height={24}></img></li>)
                                        })}
                                    </ul>
                                    <div className='clear'></div>
                                </div>
                            </Col>
                        )
                    })}
                </Row> : 'No Data!'
        )
    }
}
