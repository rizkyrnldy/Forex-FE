import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react'
export default class Loading extends Component {
  render() {
    return (
		<Grid centered columns={4} verticalAlign="middle" className="height-full">
			<Grid.Column>
				<Loader active inline='centered' >
					Loading
				</Loader>
			</Grid.Column>
		</Grid>
    );
  }
}

