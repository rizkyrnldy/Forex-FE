import React, { Component } from 'react';
import { Grid, Loader, Card, Segment, Dimmer, Image } from 'semantic-ui-react'
export default class Loading extends Component {
	render() {
		const { type, LoadingPost} = this.props;
		if (type === 'Page') {
			return this.LoadingPage();	
		}
		return this.LoadingPost(LoadingPost);
	}
	LoadingPage() {
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
	
	LoadingPost(LoadingPost) {
		if (LoadingPost){
			return (
				<Card>
					<Segment>
						<Dimmer active inverted>
							<Loader inverted>Loading</Loader>
						</Dimmer>

						<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</Segment>
				</Card>
			);
		}
		return null
	}

}
