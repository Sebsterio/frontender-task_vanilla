import { Avatar, Heading, Comment } from "./comment.js";
import Comments from "../comments";

export default class {
	constructor(data) {
		this.data = data;
		this.createFactories();
		this.render();
	}

	createFactories() {
		this.avatar = new Avatar();
		this.heading = new Heading(this.data.name, this.data.donation);
		this.comment = new Comment(this.data.comment);
		this.children = this.data.children.length
			? new Comments(this.data.children)
			: null;
	}

	// prettier-ignore
	render() {
		return `
			<div class="comment-container">
				<div class="comment">
					${this.avatar.render()}
					${this.heading.render()}
					${this.comment.render()}
				</div>
			</div>
			${this.children	? `
				<div class='comment__children'>
					${this.children.render()}
				</div>
			`	: ""}
		`;
	}
}
