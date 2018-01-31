import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FeedList } from './feed_list';
import * as axios from 'axios';

var n = 10;
var t = 15;

axios.get('../appconfig.json').then((res) => {
    console.log(res);
    ReactDOM.render(<FeedList postsNumber={n} updateIntervalSeconds={t} feedURL='http://api.massrelevance.com/MassRelDemo/kindle.json' />, document.getElementById("container"));
});