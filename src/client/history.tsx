import createBrowserHistory from 'history/createBrowserHistory';
import { History } from 'history';

// Abstracts away the differences in various environments and provides
// a minimal API that lets you manage the history stack
const history: History = process.env.BROWSER && createBrowserHistory();

export default history;
