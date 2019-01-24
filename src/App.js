import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import getData from './Api/Get/Data';
import { Loading, List } from './components';
import { Dropdown, Button, Icon, Grid, Card, Header} from 'semantic-ui-react'

class App extends Component {
    constructor(props) {
        super(props);
        document.title = "Shopee test";
        this.state = {
            USD_Rates: '10.0000',
            CodeDefault: ['IDR', 'EUR', 'GBP', 'SGD'],
            DataDefault: [],
            AllData: [],
            AddMore: false,
            Loading: true,
            LoadingBtn: false,
            val: '',
        };
    };

    componentDidMount(){
        getData.DataDefault().then((res) => {
            this.setState({
                DataDefault: this.SortDynamic(res),
                AllData: Object.entries(res.rates).map((res_, i) =>{
                    return ({
                        key: res_[0], 
                        value: res_[0], 
                        text: res_[0] + ' - ' + getData.country(res_[0])
                    });
                }),
                // val: Object.entries(res.rates)[0][0],
                Loading: false,
            });
        });
    }

    SortDynamic(res){
        let items = Object.entries(res.rates);
        let result = [];
        this.state.CodeDefault.forEach(function (key) {
            var found = false;
            items = items.filter(function (resApi) {
                if (!found && resApi[0] === key) {
                    let NewArrau = {
                        Code: resApi[0],
                        Country: getData.country(resApi[0]),
                        Rates: resApi[1]
                    };
                    result.push(NewArrau);
                    found = true;
                    return false;
                } else
                    return true;
            })
        });
        return result;
    }

    AddCurrency(){
        if (this.state.val !== '') {
            this.setState({ LoadingBtn: true })
            getData.Add(this.state.val).then((res) => {
                this.setState(state => {
                    let NewData = {
                        Code: state.val,
                        Country: getData.country(state.val),
                        Rates: res.rates[state.val]
                    };
                    const DataDefault = [...state.DataDefault, NewData];
                    return {
                        DataDefault,
                        LoadingBtn: false
                    }
                })
            });
        }else{
            alert('Form cannot be null or empty');
        }
    }

    RemoveCurrency(i){
        this.setState(state => {
            const DataDefault = state.DataDefault.filter((item, j) => i !== j);
            return {
                DataDefault,
            };
        });
    }

    
  render() {
    if (this.state.Loading) {
        return <Loading />;
    }
    const { USD_Rates, AddMore, AllData} = this.state;
    return (
        <Grid centered columns={4} verticalAlign="middle" className="height-full">
            <Grid.Column>
                <Card.Group itemsPerRow={1}>
                    <Card>
                        <Card.Content>
                            <Card.Meta>USD-United States Dollars</Card.Meta>
                            <Grid.Column floated='left' width={5}>
                                <Header as='h3'>USD</Header>
                            </Grid.Column>
                            <Grid.Column floated='right' width={5}>
                                <Header as='h3'>
                                    {USD_Rates} <Icon link circular inverted color='green' name='pencil' size="mini" className="ic-edit" onClick={() => this.setState({ USD_Rates: '5.0000' })} />
                                </Header>
                            </Grid.Column>
                        </Card.Content>

                        <Card.Content extra>
                            <List data={this.state} RemoveCurrency={(i) => this.RemoveCurrency(i)} type="option">
                                <Card>
                                    {!AddMore ?
                                        <Card.Content onClick={() => this.setState({ AddMore: !AddMore })} className="pointer">
                                            <Header as="h5">(+) Add More Currencies</Header>
                                        </Card.Content>
                                        :
                                        <div>
                                            <Dropdown placeholder='Select Code Currency' fluid selection options={AllData} onChange={(e, { value }) => this.setState({ 'val': value })} />
                                            <Button LoadingBtn color="primary" type="submit" onClick={() => this.AddCurrency()} className="btn-submit">
                                                Submit
                                            </Button>
                                        </div>
                                    }
                                </Card>
                            </List>
                        </Card.Content>

                    </Card>
                </Card.Group>
            </Grid.Column>
        </Grid>
    );
  }
}

export default App;
