<template>
	<v-container>
		<v-card>
			<v-card-title class="title">
				Formatting Guide
			</v-card-title>

			<v-card-text>
				<p> Iota uses a simple system of symbols called Markdown to display notes.
				Below is a list of elements that you can use to format your notes. </p>

				<v-data-table class="elevation-1" hide-actions :headers="headers" :items="items">
					<template slot="headers">
						<tr>
							<th> Syntax </th>
							<th> Usage </th>
							<th> Examples </th>
						</tr>
					</template>

					<template slot="items" slot-scope="{ item: { syntax, usage } }">
						<tr>
							<td>{{ syntax }}</td>
							<td><code>{{ usage }}</code></td>
							<td>
								<vue-markdown :source="usage"/>
							</td>
						</tr>
					</template>
				</v-data-table>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';

const headers = [
	{ text: 'Syntax', value: 'syntax', sortable: false },
	{ text: 'Usage', value: 'usage', sortable: false },
	{ text: 'Example', value: 'examples', sortable: false },
];

const items = [
	{ syntax: 'Headers', usage: '# Title \n ## Subtitle' },
	{ syntax: 'Bold', usage: '**Bold**' },
	{ syntax: 'Italicize', usage: '*Italicize*' },
	{ syntax: 'Blockquote', usage: 'Quote: \n >"This is some quote."' },
	{ syntax: 'Numbered List', usage: '1. First item \n 2. Second item \n 1. Will work even if numbering is off.' },
	{ syntax: 'Unordered List', usage: '- Item \n - Item' },
	{ syntax: 'Horizontal Line', usage: 'A paragraph. \n\n --- \n\n Another paragraph.' },
	{ syntax: 'Link', usage: '[Google it.](https://www.google.com)' },
	{ syntax: 'Footnote', usage: 'This was taken from a source.[^1] \n\n [^1]:The source.' },
	{ syntax: 'Definitions', usage: 'Term \n : Definition' },
	{ syntax: 'Strikethrough', usage: '~~Oops.~~' },
	{ syntax: 'Tasklist', usage: '- [x] Finish app. \n - [ ] Release to internet.' },
];

export default {
	name: 'Markdown',
	components: {
		VueMarkdown,
	},

	data() {
		return {
			headers,
			items,
		};
	},
};
</script>
