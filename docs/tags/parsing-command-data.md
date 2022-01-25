## Parsing Command Data

Command data, which basically means the data you send to discord while registering a command.
Can be parsed using our `parseData` method

## Example Usage
:::: code-group
::: code-group-item JavaScript
```js
const { TagParser } = require('@spectera/tag-parser');

const tagparser = new TagParser();
tagparser.parseData({
	name: 'ping',
	description: 'Ping Pong the user!',
	options: '{{nameA|descriptionA|string}} {{nameB|descriptionB|string|true}}',
	response: 'This will not be parsed for now'
}) 
/* returns: 
	{
	data: {
		name: 'ping',
		description: 'Ping Pong the user!',
		options: [
			{
				description: 'nameA',
				name: 'descriptionA',
				type: 'string'
			},
			{
				description: 'nameB',
				name: 'descriptionB',
				type: 'string',
				required: true	
			}
		]
		},
		response: 'This will not be parsed for now' 
	}
*/

```
:::
::: code-group-item ESM
```js
import { TagParser } from '@spectera/tag-parser';

const tagparser = new TagParser();
tagparser.parseData({
	name: 'ping',
	description: 'Ping Pong the user!',
	options: '{{nameA|descriptionA|string}} {{nameB|descriptionB|string|true}}',
	response: 'This will not be parsed for now'
}) 
/* returns: 
	{
	data: {
		name: 'ping',
		description: 'Ping Pong the user!',
		options: [
			{
				description: 'nameA',
				name: 'descriptionA',
				type: 'string'
			},
			{
				description: 'nameB',
				name: 'descriptionB',
				type: 'string',
				required: true	
			}
		]
		},
		response: 'This will not be parsed for now' 
	}
*/

```
:::
::: code-group-item TypeScript
```ts
import { TagParser } from '@spectera/tag-parser';

const tagparser = new TagParser();
tagparser.parseData({
	name: 'ping',
	description: 'Ping Pong the user!',
	options: '{{nameA|descriptionA|string}} {{nameB|descriptionB|string|true}}',
	response: 'This will not be parsed for now'
}) 
/* returns: 
	{
	data: {
		name: 'ping',
		description: 'Ping Pong the user!',
		options: [
			{
				description: 'nameA',
				name: 'descriptionA',
				type: 'string'
			},
			{
				description: 'nameB',
				name: 'descriptionB',
				type: 'string',
				required: true	
			}
		]
		},
		response: 'This will not be parsed for now' 
	}
*/

```
:::
::::
