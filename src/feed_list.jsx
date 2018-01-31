import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from 'axios';
import { Post } from './post';

export class FeedList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedList: []
		}
	}

	formatDateTime(timeStr) {
		var inpDate = new Date(timeStr);
		var date = inpDate.getDate().toString();
		if (date.length < 2) date = '0' + date;

		var month = (inpDate.getMonth() + 1).toString();
		if (month.length < 2) month = '0' + month;

		var hrs = inpDate.getHours().toString();
		if (hrs.length < 2) hrs = '0' + hrs;

		var mins = inpDate.getMinutes().toString();
		if (mins.length < 2) mins = '0' + mins;


		return date + '/' + month + '/' + inpDate.getFullYear() + ' ' + hrs + ':' + mins;
	}
	getRecentPosts() {
		axios.get(this.props.feedURL).then((res) => {
			var n = this.props.postsNumber;
			var lastN = res.data.slice(0, n);
			console.log(res.data);
			console.log(lastN);
			this.setState({ feedList: lastN }, () => console.log(this.state));
		});
	}

	componentDidMount() {
		this.getRecentPosts();
		var interval = setInterval(() => {
			this.getRecentPosts();
		}, this.props.updateIntervalSeconds * 1000);
	}

	render() {
		return (
			<ul>
				{
					this.state.feedList.map((po) => {
						return <Post key={po.id} orderDate={this.formatDateTime(po.created_at)} authorName={po.user.name} messageBody={po.text} />
					})
				}
			</ul>
		);
	}
}