import React, { Component } from 'react';
import { Grid, Card, Header, Icon, Button } from 'semantic-ui-react'
export default class List extends Component {
  render() {
	  const { DataDefault, USD_Rates} = this.props.data;
	return(
		<Card.Group itemsPerRow={1}>
			{DataDefault.map((data, i) => {
				const Rate = data.Rates * parseInt(USD_Rates);
				const Rate2 = Rate / 10;
				return(
					<Card key={i}>
						<Card.Content>
							<Grid className="pr-30">
								<Grid.Column floated='left' width={4}>
									<Header as='h4'>{data.Code}</Header>
								</Grid.Column>
								<Grid.Column floated='right' width={8} textAlign="right">
									<Header as='h4'>{Rate.toFixed(4)}</Header>
								</Grid.Column>
							</Grid>
							<Card.Meta>{data.Code + ' - ' + data.Country}</Card.Meta>
							<Card.Meta className="italic">1 USD = {data.Code + ' ' + Rate2.toFixed(3)}</Card.Meta>
							
							<Button color="red" type="submit" onClick={() => this.props.RemoveCurrency(i)} className="btn-remove">
								<Icon link name='trash' size="small" className="no-margin"/>
							</Button>
						</Card.Content>
						
					</Card>
				);
			})}
			{this.props.children}
		</Card.Group>
	)
  }
}

