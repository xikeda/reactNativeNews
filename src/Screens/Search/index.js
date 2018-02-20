import React, {Component} from 'react'
import { Image } from 'react-native'
import { Container, Header, Input, Icon, Button, Text, Content, List, Item, Body, Left, Thumbnail, CardItem, Card } from 'native-base'
import moment from 'moment'
import {getSearchNews} from '../../API'

class Search extends Component{
    state= {
        data: [],
        text: " "
    }

    handleSubmit= () => {
        const { text } = this.state
        getSearchNews(text).then(res => this.setState({data: res.articles}))
    }
    render() {
        const { data } = this.state
        return (
            <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input onChangeText={text => this.setState({text})} placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
              <Button transparent onPress={this.handleSubmit}>
                <Text>Search</Text>
              </Button>
            </Header>
            <Content>
            <List dataArray={data}
                    renderRow={(item) =>
                        <Card style={{flex: 0}}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={{uri: item.urlToImage}} />
                            <Body>
                              <Text>{item.author}</Text>
                              <Text note>{moment(item.publishedAt).format("LL")}</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Image source={{uri: item.urlToImage }} style={{height: 200, width: '100%', flex: 1}}/>
                            <Text>
                              {item.description}
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem>
                          <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="happy" />
                              <Text>1,926 stars</Text>
                            </Button>
                          </Left>
                        </CardItem>
                      </Card>
                    }>
                </List>
            </Content>
          </Container>
        )
    }
}

export default Search
